import fs from 'node:fs/promises';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const effectsJsonPath = path.resolve(__dirname, '../data/effects.json');
const triggersJsonPath = path.resolve(__dirname, '../data/triggers.json');
const outputDir = path.resolve(__dirname, '../types');
const outputPath = path.resolve(outputDir, 'hoi4.d.ts');

const effects = JSON.parse(readFileSync(effectsJsonPath, 'utf-8'));
const triggers = JSON.parse(readFileSync(triggersJsonPath, 'utf-8'));

/**
 * Maps a Hoi4 type string to a TypeScript type.
 * @param {string} hoi4Type
 * @returns {string}
 */
function mapTypeToTs(hoi4Type) {
    switch (hoi4Type) {
        case 'int':
        case 'float':
        case 'integer':
            return 'number';
        case 'bool':
        case 'boolean':
            return 'boolean';
        default:
            return 'string';
    }
}

/**
 * Generates a JSDoc comment block.
 * @param {object} item - The effect or trigger object.
 * @returns {string}
 */
function createJsDoc(item) {
    const { name, desc, since, scope } = item;
    let doc = '/**\n';
    doc += ` * ${name}\n`;
    if (desc) doc += ` * @description ${desc}\n`;
    if (since) doc += ` * @since ${since}\n`;
    if (scope) doc += ` * @scope {${scope.join(' | ')}}\n`;
    doc += ' */\n';
    return doc;
}

/**
 * Generates a TypeScript interface for a single effect or trigger.
 * @param {object} item - The effect or trigger object.
 * @param {string} baseName - The base name for the interface (e.g., 'Effect' or 'Trigger').
 * @returns {{interfaceName: string, interfaceString: string}}
 */
function generateInterface(item, baseName) {
    const interfaceName = `${baseName}${item.name.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}`;

    let interfaceString = createJsDoc(item);
    interfaceString += `export interface ${interfaceName} {\n`;
    interfaceString += `  name: "${item.name}";\n`;

    if (item.args && Object.keys(item.args).length > 0) {
        interfaceString += '  args: {\n';
        for (const [argName, argType] of Object.entries(item.args)) {
            interfaceString += `    ${argName}?: ${mapTypeToTs(argType)};\n`;
        }
        interfaceString += '  };\n';
    } else {
        interfaceString += '  args?: {};\n';
    }

    interfaceString += '}\n';

    return { interfaceName, interfaceString };
}

async function main() {
    let allInterfaces = [];
    let allInterfaceNames = [];

    // Process Effects
    for (const effect of effects) {
        const { interfaceName, interfaceString } = generateInterface(effect, 'Effect');
        allInterfaces.push(interfaceString);
        allInterfaceNames.push(interfaceName);
    }

    // Process Triggers
    for (const trigger of triggers) {
        const { interfaceName, interfaceString } = generateInterface(trigger, 'Trigger');
        allInterfaces.push(interfaceString);
        allInterfaceNames.push(interfaceName);
    }

    // Create a union type
    const unionType = `export type Hoi4Command = ${allInterfaceNames.join(' | ')};\n`;

    const fileContent = allInterfaces.join('\n') + '\n' + unionType;

    // Write to file
    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
    }
    await fs.writeFile(outputPath, fileContent);

    console.log(`✅ TypeScript definitions generated at ${outputPath}`);
}

main().catch(err => {
    console.error('Failed to generate TypeScript definitions:', err);
    process.exit(1);
});
