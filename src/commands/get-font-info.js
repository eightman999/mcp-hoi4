import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';

/**
 * @param {string} target
 */
export async function getFontInfo(target = '.') {
    const baseDir = path.resolve(process.cwd(), target);
    try {
        const files = await fs.readdir(baseDir);
        const fntFiles = files.filter((file) => file.endsWith('.fnt'));

        if (fntFiles.length === 0) {
            console.log(chalk.yellow('No .fnt files found in the specified directory.'));
            return;
        }

        for (const file of fntFiles) {
            const filePath = path.join(baseDir, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const lines = content.split('\n');
            const infoLine = lines.find((line) => line.startsWith('info face='));

            if (infoLine) {
                const faceMatch = infoLine.match(/face="([^"]+)"/);
                const sizeMatch = infoLine.match(/size=(-?\d+)/);

                const fontName = faceMatch ? faceMatch[1] : 'N/A';
                const fontSize = sizeMatch ? sizeMatch[1] : 'N/A';

                console.log(`${chalk.cyan(file)}:`);
                console.log(`  Font Name: ${chalk.green(fontName)}`);
                console.log(`  Font Size: ${chalk.green(fontSize)}`);
            } else {
                console.log(`${chalk.cyan(file)}:`);
                console.log(chalk.red('  "info" line not found.'));
            }
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(chalk.red(`Error: The directory "${baseDir}" does not exist.`));
        } else {
            console.error(chalk.red(`An error occurred: ${error.message}`));
        }
        process.exitCode = 1;
    }
}
