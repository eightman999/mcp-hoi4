// src/utils/equationGenerator.js
import fs from 'node:fs/promises';

/**
 * Parses a Hoi4 script file and generates a readable equation for a specific variable.
 * @param {string} filePath
 * @param {string} varName
 * @returns {Promise<string>}
 */
export async function generateEquation(filePath, varName) {
    const src = await fs.readFile(filePath, 'utf-8');
    const lines = src.split(/\r?\n/);
    const operations = [];

    const opMap = {
        'set_variable': '=',
        'add_to_variable': '+',
        'subtract_from_variable': '-',
        'multiply_variable': '*',
        'divide_variable': '/',
        'modulo_variable': '%',
    };

    // This regex captures: 1:operator, 2:variable, 3:value from a simple `op = { var = val }` structure.
    const simpleRegex = /^\s*(\w+)\s*=\s*{\s*(\w+)\s*=\s*([\w.-]+)\s*}/;

    for (const line of lines) {
        const match = line.trim().match(simpleRegex);
        if (match) {
            const [, op, key, value] = match;
            if (key === varName && opMap[op]) {
                operations.push({ symbol: opMap[op], value });
            }
        }
    }

    if (operations.length === 0) {
        return `No simple one-line operations found for variable "${varName}".`;
    }

    let rhs = '?'; // Right-hand side of the equation

    const firstOp = operations.shift();
    if (firstOp.symbol === '=') {
        rhs = firstOp.value;
    } else {
        // If the first operation is not a set, the initial value is the variable itself.
        rhs = `${varName}_initial ${firstOp.symbol} ${firstOp.value}`;
    }

    for (const op of operations) {
        rhs = `(${rhs}) ${op.symbol} ${op.value}`;
    }

    return `${varName} = ${rhs}`;
}
