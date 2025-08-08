import fs from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';
import yaml from 'js-yaml';

// This regex is a heuristic to find potential localization keys.
// It looks for strings with underscores or dots, which are common in key names.
// e.g., `MY_MOD_KEY`, `my_mod.event.1.t`
const POTENTIAL_KEY_REGEX = /\b([a-zA-Z0-9_]*[._][a-zA-Z0-9_]+)\b/g;

export async function scanForUnusedKeys(baseDir) {
    const usedKeys = new Set();
    const definedKeys = new Map(); // Store key and its file path

    // 1. Find all used keys in .txt and .gui files
    const filesToScan = await glob('**/*.{txt,gui}', { cwd: baseDir, ignore: ['node_modules/**', 'localisation/**'] });
    for (const file of filesToScan) {
        const content = await fs.readFile(path.join(baseDir, file), 'utf-8');
        for (const match of content.matchAll(POTENTIAL_KEY_REGEX)) {
            usedKeys.add(match[1]);
        }
    }

    // 2. Find all defined keys in .yml files
    const ymlFiles = await glob('localisation/**/*.yml', { cwd: baseDir, ignore: 'node_modules/**' });
    for (const file of ymlFiles) {
        // Read file, removing UTF-8 BOM if present
        const content = (await fs.readFile(path.join(baseDir, file), 'utf-8')).replace(/^\uFEFF/, '');
        try {
            const data = yaml.load(content);
            if (data) {
                const langKey = Object.keys(data)[0]; // e.g., l_english
                if (!langKey) continue;

                const langData = data[langKey];
                Object.keys(langData).forEach(key => {
                    if (!definedKeys.has(key)) {
                        definedKeys.set(key, file);
                    }
                });
            }
        } catch (e) {
            console.error(`Error parsing YAML file ${file}:`, e);
        }
    }

    // 3. Find the difference
    const unusedKeys = [];
    for (const [key, file] of definedKeys.entries()) {
        if (!usedKeys.has(key)) {
            unusedKeys.push({ key, file });
        }
    }

    return unusedKeys;
}
