import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';

export interface LintIssue {
  line: number;
  message: string;
  level: 'error' | 'warning';
}

export interface LintFileResult {
  file: string;
  problems: LintIssue[];
}

export interface LintResult {
  fileCount: number;
  errorCount: number;
  issues: LintFileResult[];
}

// File type patterns for HOI4 scripts
const FILE_PATTERNS = {
  '**/*.txt': 'script',
  '**/common/**/*.txt': 'common',
  '**/events/**/*.txt': 'event',
  '**/history/**/*.txt': 'history',
  '**/*.gui': 'gui'
};

// Basic linting rules
const LINT_RULES = [
  {
    name: 'mismatched_braces',
    pattern: /[{}]/g,
    check: (content: string, filePath: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const lines = content.split('\n');
      let braceStack = 0;
      
      lines.forEach((line, idx) => {
        const openBraces = (line.match(/{/g) || []).length;
        const closeBraces = (line.match(/}/g) || []).length;
        braceStack += openBraces - closeBraces;
        
        if (braceStack < 0) {
          issues.push({
            line: idx + 1,
            message: 'Unmatched closing brace',
            level: 'error'
          });
          braceStack = 0; // Reset to prevent cascade errors
        }
      });
      
      if (braceStack > 0) {
        issues.push({
          line: lines.length,
          message: `${braceStack} unclosed brace(s) at end of file`,
          level: 'error'
        });
      }
      
      return issues;
    }
  },
  {
    name: 'utf8_bom',
    pattern: /^\uFEFF/,
    check: (content: string, filePath: string): LintIssue[] => {
      if (content.startsWith('\uFEFF')) {
        return [{
          line: 1,
          message: 'File contains UTF-8 BOM (Byte Order Mark)',
          level: 'warning'
        }];
      }
      return [];
    }
  },
  {
    name: 'trailing_whitespace',
    pattern: /\s+$/gm,
    check: (content: string, filePath: string): LintIssue[] => {
      const issues: LintIssue[] = [];
      const lines = content.split('\n');
      
      lines.forEach((line, idx) => {
        if (line.endsWith(' ') || line.endsWith('\t')) {
          issues.push({
            line: idx + 1,
            message: 'Line has trailing whitespace',
            level: 'warning'
          });
        }
      });
      
      return issues;
    }
  }
];

export async function runLint(target: string): Promise<LintResult> {
  const targetPath = path.resolve(target);
  
  // Find all relevant files
  const patterns = Object.keys(FILE_PATTERNS);
  const allFiles: string[] = [];
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      cwd: targetPath,
      absolute: true,
      ignore: ['**/node_modules/**', '**/.git/**']
    });
    allFiles.push(...files);
  }
  
  // Remove duplicates
  const uniqueFiles = [...new Set(allFiles)];
  
  const results: LintFileResult[] = [];
  let totalErrors = 0;
  
  for (const filePath of uniqueFiles) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const issues: LintIssue[] = [];
      
      // Run all lint rules
      for (const rule of LINT_RULES) {
        const ruleIssues = rule.check(content, filePath);
        issues.push(...ruleIssues);
      }
      
      if (issues.length > 0) {
        results.push({
          file: path.relative(targetPath, filePath),
          problems: issues
        });
        totalErrors += issues.filter(i => i.level === 'error').length;
      }
    } catch (error) {
      results.push({
        file: path.relative(targetPath, filePath),
        problems: [{
          line: 1,
          message: `Failed to read file: ${error instanceof Error ? error.message : 'Unknown error'}`,
          level: 'error'
        }]
      });
      totalErrors++;
    }
  }
  
  return {
    fileCount: uniqueFiles.length,
    errorCount: totalErrors,
    issues: results
  };
}