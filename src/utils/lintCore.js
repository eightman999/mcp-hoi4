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

/**
 * ディレクトリ以下の .txt を全部チェック
 * @returns {Promise<{file:string, issues:Array}>[]}
 */
export async function lintDirectory(baseDir) {
    const out = [];
    for await (const file of walk(baseDir)) {
        const txt = await fs.readFile(file, 'utf-8');
        const issues = lintText(txt);
        out.push({ file, issues });
    }
    return out;
}

/**
 * 1ファイル分の lint
 * @param {string} src
 * @returns {Array<{line:number, msg:string, level:'warn'|'error'}>}
 */
export function lintText(src) {
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

    return issues;
}
