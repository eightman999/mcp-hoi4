// src/commands/gfx.js
import path from 'node:path';
import chalk from 'chalk';
import fs from 'node:fs/promises';
import { walk } from '../utils/fileWalker.js';
import { parseGfx } from '../utils/gfx-parser.js';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import ora from 'ora';

const execAsync = promisify(exec);

export async function runGfx(subcommand, target = '.') {
    const baseDir = path.resolve(process.cwd(), target);

    switch (subcommand) {
        case 'find-unused':
            await findUnused(baseDir);
            break;
        case 'convert':
            await convertUsed(baseDir);
            break;
        default:
            console.error(chalk.red(`Unknown subcommand: ${subcommand}`));
            process.exit(1);
    }
}

async function findUnused(baseDir) {
    console.log(chalk.green('Searching for unused PNG assets...'));

    // 1. Find all GFX files and parse them to get used texture paths
    const usedTexturePaths = await getUsedTexturePaths(baseDir);
    console.log(chalk.blue(`Found ${usedTexturePaths.size} unique texture references in .gfx files.`));

    // 2. Find all PNG files
    const pngFiles = [];
    for await (const file of walk(baseDir, '.png')) {
        pngFiles.push(file);
    }

    // 3. Compare and find unused files
    const unusedPngFiles = [];
    for (const pngFile of pngFiles) {
        let relativePath = path.relative(baseDir, pngFile);
        let normalizedPath = relativePath.toLowerCase().replace(/\\/g, '/');
        if (normalizedPath.startsWith('gfx/')) {
            normalizedPath = normalizedPath.substring(4);
        }
        normalizedPath = normalizedPath.replace(/\.png$/, '');
        if (!usedTexturePaths.has(normalizedPath)) {
            unusedPngFiles.push(relativePath);
        }
    }

    // 4. Report the results
    if (unusedPngFiles.length > 0) {
        console.log(chalk.yellow(`\nFound ${unusedPngFiles.length} unused PNG files:`));
        unusedPngFiles.forEach(file => console.log(`- ${file}`));
    } else {
        console.log(chalk.green('\nNo unused PNG files found.'));
    }
}

async function convertUsed(baseDir) {
    console.log(chalk.green('Converting used PNGs to DDS...'));

    const usedTexturePaths = await getUsedTexturePaths(baseDir);
    console.log(chalk.blue(`Found ${usedTexturePaths.size} unique texture references in .gfx files.`));

    // Find all PNG files that correspond to a used texture
    const pngsToConvert = [];
    for await (const pngFile of walk(baseDir, '.png')) {
        const relativePath = path.relative(baseDir, pngFile);
        let normalizedPath = relativePath.toLowerCase().replace(/\\/g, '/');
        if (normalizedPath.startsWith('gfx/')) {
            normalizedPath = normalizedPath.substring(4);
        }
        normalizedPath = normalizedPath.replace(/\.png$/, '');
        if (usedTexturePaths.has(normalizedPath)) {
            pngsToConvert.push(pngFile);
        }
    }

    if (pngsToConvert.length === 0) {
        console.log(chalk.green('No PNG files to convert.'));
        return;
    }

    console.log(chalk.blue(`Found ${pngsToConvert.length} PNG files to convert.`));

    const spinner = ora('Converting files...').start();
    let successCount = 0;
    let failCount = 0;

    for (const pngFile of pngsToConvert) {
        const ddsFile = pngFile.replace(/\.png$/, '.dds');
        const command = `texconv -f BC3_UNORM -srgb -y -o "${path.dirname(ddsFile)}" "${pngFile}"`;
        spinner.text = `Converting ${path.basename(pngFile)}`;
        try {
            await execAsync(command);
            successCount++;
        } catch (error) {
            failCount++;
            spinner.stop();
            console.error(chalk.red(`\nFailed to convert ${path.basename(pngFile)}:`));
            console.error(error.stderr || error.stdout || error.message);
            if (error.message.includes('not found')) {
                console.log(chalk.yellow('Texconv not found. Please make sure it is installed and in your PATH.'));
                console.log(chalk.yellow('Download it from: https://github.com/Microsoft/DirectXTex/releases'));
                return;
            }
            spinner.start();
        }
    }

    spinner.stop();
    console.log(chalk.green(`\nConversion complete!`));
    console.log(`- ${successCount} files converted successfully.`);
    if (failCount > 0) {
        console.log(`- ${failCount} files failed to convert.`);
    }
}

async function getUsedTexturePaths(baseDir) {
    const usedTexturePaths = new Set();
    for await (const file of walk(baseDir, '.gfx')) {
        const content = await fs.readFile(file, 'utf-8');
        const textureFiles = parseGfx(content);
        textureFiles.forEach(p => {
            let normalizedPath = p.toLowerCase().replace(/\\/g, '/');
            if (normalizedPath.startsWith('gfx/')) {
                normalizedPath = normalizedPath.substring(4);
            }
            normalizedPath = normalizedPath.replace(/\.dds$/, '').replace(/\.tga$/, '');
            usedTexturePaths.add(normalizedPath);
        });
    }
    return usedTexturePaths;
}
