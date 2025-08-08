import chalk from 'chalk';
import path from 'node:path';
import { scanForUnusedKeys } from '../utils/unusedKeyScanner.js';

export async function runUnusedKeyScan(target = '.') {
    const baseDir = path.resolve(process.cwd(), target);
    const unusedKeys = await scanForUnusedKeys(baseDir);

    if (unusedKeys.length === 0) {
        console.log(chalk.green('✅ No unused localization keys found!'));
    } else {
        console.log(chalk.yellow('▲ Found unused localization keys:'));
        unusedKeys.forEach(({ key, file }) => {
            const relativePath = path.relative(baseDir, file);
            console.log(`  - ${chalk.cyan(key)} in ${chalk.gray(relativePath)}`);
        });
        console.log(chalk.yellow(`\n- ${unusedKeys.length} unused key(s) found.`));
        // This is a warning, not an error, so we don't set process.exitCode = 1
    }
}
