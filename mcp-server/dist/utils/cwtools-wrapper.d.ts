export interface CwtoolsValidationError {
    file: string;
    type: string;
    message: string;
}
export interface CwtoolsValidationResult {
    errors: CwtoolsValidationError[];
    fileCount: number;
    statistics: string;
}
export interface CwtoolsParseResult {
    analysis: string;
    statistics: string;
}
export interface CwtoolsVersionInfo {
    info: string;
    status: string;
}
export declare function checkCwtoolsAvailability(): Promise<boolean>;
export declare function getCwtoolsVersion(): Promise<CwtoolsVersionInfo>;
export declare function validateWithCwtools(target: string): Promise<CwtoolsValidationResult>;
export declare function parseWithCwtools(filePath: string): Promise<CwtoolsParseResult>;
//# sourceMappingURL=cwtools-wrapper.d.ts.map