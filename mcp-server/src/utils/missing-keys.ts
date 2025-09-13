import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';

export interface MissingKey {
  key: string;
  file: string;
  line: number;
}

export async function findMissingKeys(target: string): Promise<MissingKey[]> {
  const targetPath = path.resolve(target);
  
  // Find all localization YAML files
  const locFiles = await glob('**/localisation/**/*.yml', {
    cwd: targetPath,
    absolute: true,
    ignore: ['**/node_modules/**', '**/.git/**']
  });
  
  // Find all script files that might reference keys
  const scriptFiles = await glob('**/*.{txt,gui}', {
    cwd: targetPath,
    absolute: true,
    ignore: ['**/node_modules/**', '**/.git/**', '**/localisation/**']
  });
  
  // Extract all defined localization keys
  const definedKeys = new Set<string>();
  
  for (const locFile of locFiles) {
    try {
      const content = await fs.readFile(locFile, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach((line) => {
        // Match YAML key definitions (key: value or key:value)
        const match = line.match(/^\\s*([a-zA-Z_][a-zA-Z0-9_.]*)\\s*:/);
        if (match && !line.trim().startsWith('#')) {
          const key = match[1];
          if (key !== 'l_english' && key !== 'l_german' && key !== 'l_french' && key !== 'l_spanish') {
            definedKeys.add(key);
          }
        }
      });
    } catch (error) {
      console.error(`Error reading ${locFile}: ${error}`);
    }
  }
  
  // Find all referenced keys in script files
  const missingKeys: MissingKey[] = [];
  
  for (const scriptFile of scriptFiles) {
    try {
      const content = await fs.readFile(scriptFile, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach((line, idx) => {
        // Common patterns for localization key references in HOI4
        const patterns = [
          /name\\s*=\\s*\"?([a-zA-Z_][a-zA-Z0-9_.]*)/g,  // name = key
          /desc\\s*=\\s*\"?([a-zA-Z_][a-zA-Z0-9_.]*)/g,  // desc = key
          /text\\s*=\\s*\"?([a-zA-Z_][a-zA-Z0-9_.]*)/g,  // text = key
          /title\\s*=\\s*\"?([a-zA-Z_][a-zA-Z0-9_.]*)/g, // title = key
        ];
        
        for (const pattern of patterns) {
          let match;
          while ((match = pattern.exec(line)) !== null) {
            const key = match[1];
            // Check if it looks like a localization key (not a file path, etc.)
            if (key.includes('_') && !definedKeys.has(key)) {
              missingKeys.push({
                key,
                file: path.relative(targetPath, scriptFile),
                line: idx + 1
              });
            }
          }
        }
      });
    } catch (error) {
      console.error(`Error reading ${scriptFile}: ${error}`);
    }
  }
  
  // Remove duplicates and sort
  const uniqueMissingKeys = Array.from(
    new Map(missingKeys.map(mk => [`${mk.key}-${mk.file}-${mk.line}`, mk])).values()
  );
  
  return uniqueMissingKeys.sort((a, b) => a.key.localeCompare(b.key));
}