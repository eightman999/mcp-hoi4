import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';
export async function findUnusedGfx(target) {
    const targetPath = path.resolve(target);
    // Find all PNG images
    const imageFiles = await glob('**/*.png', {
        cwd: targetPath,
        absolute: true,
        ignore: ['**/node_modules/**', '**/.git/**']
    });
    // Find all GFX definition files
    const gfxFiles = await glob('**/interface/**/*.gfx', {
        cwd: targetPath,
        absolute: true,
        ignore: ['**/node_modules/**', '**/.git/**']
    });
    // Extract referenced images from GFX files
    const referencedImages = new Set();
    for (const gfxFile of gfxFiles) {
        try {
            const content = await fs.readFile(gfxFile, 'utf-8');
            // Match texturefile definitions
            const matches = content.match(/texturefile\\s*=\\s*\"([^\"]+)\"/g);
            if (matches) {
                for (const match of matches) {
                    const pathMatch = match.match(/texturefile\\s*=\\s*\"([^\"]+)\"/);
                    if (pathMatch) {
                        const imagePath = pathMatch[1];
                        // Normalize path
                        const normalizedPath = path.normalize(imagePath.replace(/\\\\/g, '/'));
                        referencedImages.add(normalizedPath);
                    }
                }
            }
        }
        catch (error) {
            console.error(`Error reading ${gfxFile}: ${error}`);
        }
    }
    // Find unused images
    const unusedImages = [];
    for (const imageFile of imageFiles) {
        const relativePath = path.relative(targetPath, imageFile);
        const normalizedPath = relativePath.replace(/\\\\/g, '/');
        if (!referencedImages.has(normalizedPath) && !referencedImages.has(`gfx/${normalizedPath}`)) {
            unusedImages.push(relativePath);
        }
    }
    return unusedImages.sort();
}
export async function convertImages(target, format) {
    const targetPath = path.resolve(target);
    const result = {
        converted: [],
        errors: []
    };
    if (format === 'dds') {
        // Convert PNG to DDS (requires ImageMagick or similar)
        const pngFiles = await glob('**/*.png', {
            cwd: targetPath,
            absolute: true,
            ignore: ['**/node_modules/**', '**/.git/**']
        });
        for (const pngFile of pngFiles) {
            const ddsFile = pngFile.replace(/\\.png$/i, '.dds');
            try {
                // This is a placeholder - actual conversion would require ImageMagick
                // or a dedicated image conversion library
                result.errors.push(`Image conversion not implemented - would convert ${path.relative(targetPath, pngFile)} to DDS`);
            }
            catch (error) {
                result.errors.push(`Failed to convert ${path.relative(targetPath, pngFile)}: ${error}`);
            }
        }
    }
    return result;
}
export async function checkMissingGfx(target) {
    const targetPath = path.resolve(target);
    const missingReferences = [];
    // Find all GFX definition files
    const gfxFiles = await glob('**/interface/**/*.gfx', {
        cwd: targetPath,
        absolute: true,
        ignore: ['**/node_modules/**', '**/.git/**']
    });
    for (const gfxFile of gfxFiles) {
        try {
            const content = await fs.readFile(gfxFile, 'utf-8');
            // Parse GFX definitions
            const spriteTypeMatches = content.match(/spriteType\\s*=\\s*\\{[^}]*name\\s*=\\s*\"([^\"]+)\"[^}]*texturefile\\s*=\\s*\"([^\"]+)\"[^}]*\\}/g);
            if (spriteTypeMatches) {
                for (const match of spriteTypeMatches) {
                    const nameMatch = match.match(/name\\s*=\\s*\"([^\"]+)\"/);
                    const textureMatch = match.match(/texturefile\\s*=\\s*\"([^\"]+)\"/);
                    if (nameMatch && textureMatch) {
                        const gfxName = nameMatch[1];
                        const imagePath = textureMatch[1];
                        // Check if the referenced image file exists
                        const fullImagePath = path.resolve(targetPath, imagePath);
                        try {
                            await fs.access(fullImagePath);
                        }
                        catch {
                            missingReferences.push({
                                gfxName,
                                imagePath,
                                gfxFile: path.relative(targetPath, gfxFile)
                            });
                        }
                    }
                }
            }
        }
        catch (error) {
            console.error(`Error reading ${gfxFile}: ${error}`);
        }
    }
    return missingReferences.sort((a, b) => a.gfxName.localeCompare(b.gfxName));
}
//# sourceMappingURL=gfx-operations.js.map