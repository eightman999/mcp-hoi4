// src/utils/lintCore.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { walk } from './fileWalker.js';
import triggers from '../../data/triggers.json' assert { type: 'json' };
import effects from '../../data/effects.json' assert { type: 'json' };

const VALID_KEYS = new Set([...triggers, ...effects]);

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
    const stack = [];                    // {line,char}
    const lines = src.split(/\r?\n/);

    // 1. 括弧バランスと未知キーを同時走査
    lines.forEach((lineText, idx) => {
        const lineNo = idx + 1;

        // a) { と } のバランス
        for (const ch of lineText) {
            if (ch === '{') stack.push({ line: lineNo });
            if (ch === '}') {
                if (!stack.length) {
                    issues.push({ line: lineNo, msg: 'Unmatched "}"', level: 'error' });
                } else stack.pop();
            }
        }

        // b) unknown keyword
        const match = lineText.match(/^\s*([A-Za-z0-9_]+)\s*=/);
        if (match) {
            const key = match[1];
            if (!VALID_KEYS.has(key)) {
                issues.push({
                    line: lineNo,
                    msg: `Unknown key "${key}"`,
                    level: 'warn'
                });
            }
        }
    });

    // ファイル末尾で { が余っていないか
    stack.forEach(({ line }) =>
        issues.push({ line, msg: 'Unclosed "{"', level: 'error' })
    );

    return issues;
}
