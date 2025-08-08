// src/commands/showEquation.js
import chalk from 'chalk';
import { generateEquation } from '../utils/equationGenerator.js';

export async function showEquation(file, varName) {
    try {
        const equation = await generateEquation(file, varName);
        console.log(chalk.green('Found equation:'));
        console.log(equation);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(chalk.red(`Error: File not found at ${file}`));
        } else {
            console.error(chalk.red('An unexpected error occurred:'), error);
        }
        process.exitCode = 1;
    }
}
