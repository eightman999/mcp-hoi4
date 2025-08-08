// src/utils/fileWalker.js
import fs from 'node:fs/promises';
import path from 'node:path';

export async function* walk(dir, extension = null) {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const res = path.resolve(dir, entry.name);
        if (entry.isDirectory()) {
            yield* walk(res, extension);
        } else if (!extension || res.endsWith(extension)) {
            yield res;
        }
    }
}
