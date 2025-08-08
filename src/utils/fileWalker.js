// src/utils/fileWalker.js
import fs from 'node:fs/promises';
import path from 'node:path';

export async function* walk(dir) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const res = path.resolve(dir, entry.name);
        if (entry.isDirectory()) yield* walk(res);
        else if (res.endsWith('.txt')) yield res;
    }
}
