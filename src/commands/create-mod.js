import fs from 'node:fs/promises';
import path from 'node:path';
import ora from 'ora';
import chalk from 'chalk';
import { fileURLToPath } from 'node:url';

/**
 * MOD 雛形を作成する
 * @param {string} modName  MOD 名
 * @param {string} baseDir  ベースディレクトリ (mods フォルダ)
 */
export async function createMod(modName, baseDir) {
    const spinner = ora(`Creating mod “${modName}” under ${baseDir}`).start();
    try {
        // “mods/YourMod” という一段深いフォルダ構成を期待
        const modDir = path.resolve(baseDir, modName);
        await fs.mkdir(modDir, { recursive: true });

        // descriptor.mod 内の path は HoI4 が見る相対パス (mod/YourMod)
        const relativePath = `mod/${modName}`;
        const descriptor = [
            `name="${modName}"`,
            'version="0.0.1"',
            `path="${relativePath}"`,
            ''
        ].join('\n');

        await fs.writeFile(path.join(modDir, 'descriptor.mod'), descriptor);
        spinner.succeed(chalk.green(`Done!  → ${modDir}`));
    } catch (err) {
        spinner.fail(chalk.red(err.message));
    }
}
