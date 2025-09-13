export interface ModCreationResult {
    modPath: string;
    files: string[];
}
export declare function createMod(modName: string, baseDir: string): Promise<ModCreationResult>;
//# sourceMappingURL=mod-creator.d.ts.map