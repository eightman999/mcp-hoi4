export interface UnusedKey {
    key: string;
    file: string;
    line: number;
}
export declare function findUnusedKeys(target: string): Promise<UnusedKey[]>;
//# sourceMappingURL=unused-keys.d.ts.map