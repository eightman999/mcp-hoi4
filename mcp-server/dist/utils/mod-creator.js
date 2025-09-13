import { promises as fs } from 'fs';
import path from 'path';
export async function createMod(modName, baseDir) {
    const modDir = path.resolve(baseDir, modName);
    // Create mod directory
    await fs.mkdir(modDir, { recursive: true });
    // Create descriptor.mod file
    const relativePath = `mod/${modName}`;
    const descriptor = [
        `name="${modName}"`,
        'version="0.0.1"',
        `path="${relativePath}"`,
        ''
    ].join('\n');
    const descriptorPath = path.join(modDir, 'descriptor.mod');
    await fs.writeFile(descriptorPath, descriptor);
    // Create basic mod structure
    const directories = [
        'common',
        'common/national_focus',
        'common/ideas',
        'common/country_tags',
        'events',
        'history',
        'history/countries',
        'localisation',
        'localisation/english',
        'gfx',
        'gfx/interface',
        'interface'
    ];
    const createdFiles = ['descriptor.mod'];
    for (const dir of directories) {
        const dirPath = path.join(modDir, dir);
        await fs.mkdir(dirPath, { recursive: true });
    }
    // Create a basic localisation file
    const locContent = `l_english:\n # Add your localisation keys here\n`;
    const locPath = path.join(modDir, 'localisation', 'english', `${modName.toLowerCase().replace(/\s+/g, '_')}_l_english.yml`);
    await fs.writeFile(locPath, locContent);
    createdFiles.push(path.relative(modDir, locPath));
    // Create a basic readme
    const readmeContent = `# ${modName}\n\nA Hearts of Iron IV mod.\n\n## Description\n\nAdd your mod description here.\n`;
    const readmePath = path.join(modDir, 'README.md');
    await fs.writeFile(readmePath, readmeContent);
    createdFiles.push('README.md');
    return {
        modPath: modDir,
        files: createdFiles
    };
}
//# sourceMappingURL=mod-creator.js.map