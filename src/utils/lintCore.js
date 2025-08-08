// src/utils/lintCore.js
import fs from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { walk } from './fileWalker.js';

// JSON files are read synchronously to avoid issues with import assertions syntax.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const triggers = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/triggers.json'), 'utf-8'));
const effects = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/effects.json'), 'utf-8'));

// Create a map for quick lookup of commands and their valid arguments
const commandArgMap = new Map();
triggers.forEach(t => commandArgMap.set(t.name, new Set(Object.keys(t.args))));
effects.forEach(e => commandArgMap.set(e.name, new Set(Object.keys(e.args))));

const STRUCTURAL_KEYWORDS = new Set(['if', 'else', 'else_if', 'limit', 'effect']);
const VALID_KEYS = new Set([...triggers.map(t => t.name), ...effects.map(e => e.name), ...STRUCTURAL_KEYWORDS]);

const TRIGGER_CONTEXT_KEYWORDS = new Set([
    'limit', 'is_triggered_only', 'available', 'visible', 'abort_if', 'bypass_if',
    'while_loop_effect', 'any_of', 'all_of', 'any_of_scopes', 'all_of_scopes',
    'AND', 'OR', 'NOT', 'hidden_trigger', 'custom_trigger_tooltip'
]);

const VAR_MODIFY_EFFECTS = new Set([
    'set_variable', 'add_to_variable', 'subtract_from_variable', 'multiply_variable',
    'divide_variable', 'modulo_variable', 'clamp_variable', 'round_variable',
    'set_variable_to_random', 'clear_variable',
]);

const VAR_CHECK_TRIGGERS = new Set([
    'check_variable', 'has_variable',
]);

const REFERENCE_CHECKS = [
    {
        key: 'add_ideas',
        definitionType: 'ideaNames',
        regex: /^\s*add_ideas\s*=\s*([a-zA-Z0-9_]+)/,
    },
];

/**
 * ディレクトリ以下の .txt を全部チェック
 * @returns {Promise<{file:string, issues:Array<{line:number, msg:string, level:'warn'|'error'}>}[]>}
 */
export async function lintDirectory(baseDir) {
    const lintingContext = {
        definitions: {
            countryTags: new Map(),
            stateIds: new Map(),
            equipmentNames: new Map(),
            ideaNames: new Map(),
        },
    };

    const allFilePaths = [];
    for await (const file of walk(baseDir)) {
        allFilePaths.push(file);
    }

    // Pass 1: Gather all definitions for referential integrity checks.
    // This pass ignores duplicates, simply gathering the first one found.
    for (const filePath of allFilePaths) {
        const relativePath = path.relative(baseDir, filePath);
        const fileType = getFileType(relativePath);
        if (!fileType) continue;

        const defMap = lintingContext.definitions[fileType.mapTo];
        if (!defMap) continue;

        const txt = await fs.readFile(filePath, 'utf-8');
        const lines = txt.split(/\r?\n/);
        lines.forEach((lineText, idx) => {
            const def = extractDefinition(lineText, fileType.regex);
            if (def && !defMap.has(def)) {
                defMap.set(def, { file: filePath, line: idx + 1 });
            }
        });
    }

    // Pass 2: Lint files and check for duplicate definitions.
    const out = [];
    const duplicateCheckContext = {
        definitions: {
            countryTags: new Map(),
            stateIds: new Map(),
            equipmentNames: new Map(),
            ideaNames: new Map(),
        },
    };

    for (const filePath of allFilePaths) {
        const txt = await fs.readFile(filePath, 'utf-8');
        // `lintText` is now only responsible for content-based linting, using the pre-filled context.
        const issues = lintText(txt, filePath, baseDir, lintingContext);

        // Perform duplicate definition check for the current file.
        const relativePath = path.relative(baseDir, filePath);
        const fileType = getFileType(relativePath);
        if (fileType) {
            const defMap = duplicateCheckContext.definitions[fileType.mapTo];
            if (defMap) {
                const lines = txt.split(/\r?\n/);
                lines.forEach((lineText, idx) => {
                    const lineNo = idx + 1;
                    const def = extractDefinition(lineText, fileType.regex);
                    if (def) {
                        if (defMap.has(def)) {
                            const original = defMap.get(def);
                            issues.push({
                                line: lineNo,
                                msg: `Duplicate ${fileType.name} definition: "${def}". Originally defined in ${path.relative(baseDir, original.file)} on line ${original.line}.`,
                                level: 'error',
                            });
                        } else {
                            defMap.set(def, { file: filePath, line: lineNo });
                        }
                    }
                });
            }
        }
        out.push({ file: filePath, issues });
    }

    return out;
}


/**
 * 1ファイル分の lint
 * @param {string} src
 * @param {string} filePath
 * @param {string} baseDir
 * @param {object} context
 * @returns {Array<{line:number, msg:string, level:'warn'|'error'}>}
 */
export function lintText(src, filePath, baseDir, context) {
    const issues = [];
    // The stack now holds frames with the key and its valid arguments
    const stack = []; // { line: number, key: string | null, validArgs: Set<string> | null }
    const lines = src.split(/\r?\n/);

    const isInTriggerContext = () => {
        return stack.some(frame => frame.key && TRIGGER_CONTEXT_KEYWORDS.has(frame.key));
    };

    lines.forEach((lineText, idx) => {
        const lineNo = idx + 1;
        const trimmedLine = lineText.trim();
        const keyMatch = trimmedLine.match(/^([a-zA-Z0-9_]+)\s*=/);
        const keyOnLine = keyMatch ? keyMatch[1] : null;

        // Argument validation
        const currentFrame = stack.length > 0 ? stack[stack.length - 1] : null;
        if (keyOnLine && currentFrame && currentFrame.validArgs) {
            if (!currentFrame.validArgs.has(keyOnLine)) {
                issues.push({
                    line: lineNo,
                    msg: `Invalid argument "${keyOnLine}" for command "${currentFrame.key}".`,
                    level: 'error',
                });
            }
        }

        // Brace balancing and stack management
        if (trimmedLine.includes('{')) {
            const validArgs = keyOnLine ? commandArgMap.get(keyOnLine) || null : null;
            stack.push({ line: lineNo, key: keyOnLine, validArgs });
        }
        if (trimmedLine.includes('}')) {
            if (stack.length === 0) {
                issues.push({ line: lineNo, msg: 'Unmatched "}"', level: 'error' });
            } else {
                stack.pop();
            }
        }

        // Unknown keyword validation (only for keys that open blocks or are on their own)
        if (keyOnLine) {
            if (!VALID_KEYS.has(keyOnLine) && !currentFrame?.validArgs) {
                 issues.push({
                    line: lineNo,
                    msg: `Unknown key "${keyOnLine}"`,
                    level: 'warn',
                });
            }
        }

        // Referential integrity check
        for (const check of REFERENCE_CHECKS) {
            const match = trimmedLine.match(check.regex);
            if (match) {
                const value = match[1];
                const definitionMap = context.definitions[check.definitionType];
                if (definitionMap && !definitionMap.has(value)) {
                    issues.push({
                        line: lineNo,
                        msg: `Reference to undefined ${check.definitionType.slice(0, -5)}: "${value}".`,
                        level: 'error',
                    });
                }
            }
        }

        // c) Variable usage validation
        if (keyOnLine) {
            const inTrigger = isInTriggerContext();
            if (inTrigger && VAR_MODIFY_EFFECTS.has(keyOnLine)) {
                issues.push({
                    line: lineNo,
                    msg: `Effect "${keyOnLine}" cannot be used in a trigger context.`,
                    level: 'error',
                });
            }
            if (!inTrigger && VAR_CHECK_TRIGGERS.has(keyOnLine)) {
                issues.push({
                    line: lineNo,
                    msg: `Trigger "${keyOnLine}" should not be used directly in an effect context. Wrap it in a 'limit' or 'if' block.`,
                    level: 'error',
                });
            }
        }
    });

    stack.forEach(({ line, key }) =>
        issues.push({
            line,
            msg: `Unclosed "{" opened by "${key || 'unknown'}"`,
            level: 'error',
        })
    );

    // Duplicate definition check has been moved to lintDirectory's second pass.
    return issues;
}

const DEFINITION_TYPES = [
    {
        name: 'Country Tag',
        path: /common\/country_tags\//,
        regex: /^([A-Z]{3})\s*=\s*".*"$/,
        mapTo: 'countryTags',
    },
    {
        name: 'State ID',
        path: /history\/states\//,
        regex: /id\s*=\s*(\d+)/,
        mapTo: 'stateIds',
    },
    {
        name: 'Equipment Name',
        path: /common\/units\/equipment\//,
        regex: /^\s*([a-zA-Z0-9_]+)\s*=\s*\{/,
        mapTo: 'equipmentNames',
    },
    {
        name: 'Idea',
        path: /common\/ideas\//,
        regex: /^\s*([a-zA-Z0-9_]+)\s*=\s*\{/,
        mapTo: 'ideaNames',
    },
];

function getFileType(relativePath) {
    const normalizedPath = relativePath.replace(/\\/g, '/');
    return DEFINITION_TYPES.find(type => type.path.test(normalizedPath));
}

function extractDefinition(line, regex) {
    const match = line.match(regex);
    return match ? match[1] : null;
}
