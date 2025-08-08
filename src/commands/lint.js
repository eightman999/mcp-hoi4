// src/commands/lint.js
import chalk from 'chalk';
import path from 'node:path';
import { lintDirectory } from '../utils/lintCore.js';

export async function runLint(target = '.') {
    const baseDir = path.resolve(process.cwd(), target);
    const results = await lintDirectory(baseDir);

    let errorCnt = 0;
    for (const { file, issues } of results) {
        if (!issues.length) continue;
        console.log(chalk.cyan(`\n▶ ${path.relative(baseDir, file)}`));
        issues.forEach(({ line, msg, level }) => {
            const mark = level === 'error' ? chalk.red('✖') : chalk.yellow('▲');
            if (level === 'error') errorCnt++;
            console.log(`  ${mark}  L${line}: ${msg}`);
        });
    }

    if (!errorCnt) {
        console.log(chalk.green('\n✅ No critical errors found!'));
    } else {
        console.log(chalk.red(`\n✖ ${errorCnt} critical error(s) found.`));
        process.exitCode = 1;
    }
}
