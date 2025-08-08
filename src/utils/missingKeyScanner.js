import fs from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';
import yaml from 'js-yaml';

const USED_KEY_REGEX = /= "?([a-zA-Z0-9_.:]+)"?/g;

export async function scanForMissingKeys(baseDir) {
    const usedKeys = new Set();
    const definedKeys = new Set();

    // 1. Find all used keys in .txt files
    const txtFiles = await glob('**/*.txt', { cwd: baseDir, ignore: 'node_modules/**' });
    for (const file of txtFiles) {
        const content = await fs.readFile(path.join(baseDir, file), 'utf-8');
        for (const match of content.matchAll(USED_KEY_REGEX)) {
            usedKeys.add(match[1]);
        }
    }

    // 2. Find all defined keys in .yml files
    const ymlFiles = await glob('localisation/**/*.yml', { cwd: baseDir, ignore: 'node_modules/**' });
    for (const file of ymlFiles) {
        const content = await fs.readFile(path.join(baseDir, file), 'utf-8');
        try {
            const data = yaml.load(content);
            if (data) {
                // Assuming the structure is `l_english: { key: value }`
                const langData = data.l_english || data.l_simp_chinese || {}; // Add other languages as needed
                Object.keys(langData).forEach(key => definedKeys.add(key));
            }
        } catch (e) {
            console.error(`Error parsing YAML file ${file}:`, e);
        }
    }

    // 3. Find the difference
    const missingKeys = [];
    for (const key of usedKeys) {
        if (!definedKeys.has(key)) {
            missingKeys.push(key);
        }
    }

    return missingKeys;
}
