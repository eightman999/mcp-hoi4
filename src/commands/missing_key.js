import chalk from 'chalk';
import path from 'node:path';
import { scanForMissingKeys } from '../utils/missingKeyScanner.js';

export async function runMissingKeyScan(target = '.') {
    const baseDir = path.resolve(process.cwd(), target);
    const missingKeys = await scanForMissingKeys(baseDir);

    if (missingKeys.length === 0) {
        console.log(chalk.green('✅ No missing localization keys found!'));
    } else {
        console.log(chalk.yellow('▲ Found missing localization keys:'));
        missingKeys.forEach(key => {
            console.log(`  - ${key}`);
        });
        console.log(chalk.red(`\n✖ ${missingKeys.length} missing key(s) found.`));
        process.exitCode = 1;
    }
}
