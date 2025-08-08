// src/utils/gfx-parser.js

const TEXTURE_FILE_REGEX = /texturefile\s*=\s*"([^"]+)"/i;

/**
 * Parses the content of a .gfx file and extracts all texture file paths.
 * @param {string} content The content of the .gfx file.
 * @returns {string[]} An array of texture file paths.
 */
export function parseGfx(content) {
    const lines = content.split(/\r?\n/);
    const textureFiles = [];

    for (const line of lines) {
        const match = line.match(TEXTURE_FILE_REGEX);
        if (match && match[1]) {
            // Normalize path separators to forward slashes
            const normalizedPath = match[1].replace(/\\/g, '/');
            textureFiles.push(normalizedPath);
        }
    }

    return textureFiles;
}
