// src/utils/lintCore.js
import fs from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { walk } from './fileWalker.js';

// JSON files are read synchronously to avoid issues with import assertions syntax.
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const triggers = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/triggers.json'), 'utf-8'));
const effects = JSON.parse(readFileSync(path.resolve(__dirname, '../../data/effects.json'), 'utf-8'));

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
    const stack = []; // { line: number, key: string | null }
    const lines = src.split(/\r?\n/);

    const isInTriggerContext = () => {
        // If any block in the stack is a trigger context keyword, we are in a trigger context.
        // This is a heuristic, but it's effective for this linter's simplicity.
        return stack.some(frame => frame.key && TRIGGER_CONTEXT_KEYWORDS.has(frame.key));
    };

    // 1. 括弧バランスと未知キーを同時走査
    lines.forEach((lineText, idx) => {
        const lineNo = idx + 1;

        const keyMatch = lineText.match(/^\s*([A-Za-z0-9_]+)\s*=/);
        const keyOnLine = keyMatch ? keyMatch[1] : null;

        // a) { と } のバランス
        // This is a simplified approach. It assumes the keyword and its corresponding '{' are on the same line.
        for (const ch of lineText) {
            if (ch === '{') {
                stack.push({ line: lineNo, key: keyOnLine });
            }
            if (ch === '}') {
                if (!stack.length) {
                    issues.push({ line: lineNo, msg: 'Unmatched "}"', level: 'error' });
                } else {
                    stack.pop();
                }
            }
        }

        // b) unknown keyword
        if (keyOnLine) {
            if (!VALID_KEYS.has(keyOnLine)) {
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
            // Note: `if = { limit = { ... } }` is a common pattern. `check_variable` inside `limit` is correct.
            // `isInTriggerContext` correctly identifies this. A check outside a trigger block is an error.
            if (!inTrigger && VAR_CHECK_TRIGGERS.has(keyOnLine)) {
                issues.push({
                    line: lineNo,
                    msg: `Trigger "${keyOnLine}" should not be used directly in an effect context. Wrap it in a 'limit' or 'if' block.`,
                    level: 'error',
                });
            }
        }
    });

    // ファイル末尾で { が余っていないか
    stack.forEach(({ line, key }) =>
        issues.push({
            line,
            msg: `Unclosed "{" opened by "${key || 'unknown'}"`,
            level: 'error',
        })
    );

    return issues;
}
