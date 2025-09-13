export interface MissingKey {
    key: string;
    file: string;
    line: number;
}
export declare function findMissingKeys(target: string): Promise<MissingKey[]>;
//# sourceMappingURL=missing-keys.d.ts.map