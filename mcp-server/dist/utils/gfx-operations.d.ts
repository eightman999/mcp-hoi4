export interface ConversionResult {
    converted: Array<{
        from: string;
        to: string;
    }>;
    errors: string[];
}
export interface MissingGfxReference {
    gfxName: string;
    imagePath: string;
    gfxFile: string;
}
export declare function findUnusedGfx(target: string): Promise<string[]>;
export declare function convertImages(target: string, format: string): Promise<ConversionResult>;
export declare function checkMissingGfx(target: string): Promise<MissingGfxReference[]>;
//# sourceMappingURL=gfx-operations.d.ts.map