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
export declare function runLint(target: string): Promise<LintResult>;
//# sourceMappingURL=linter.d.ts.map