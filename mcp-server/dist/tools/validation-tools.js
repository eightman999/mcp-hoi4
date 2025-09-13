import { z } from "zod";
import { runLint } from "../utils/linter.js";
import { findUnusedKeys } from "../utils/unused-keys.js";
import { findMissingKeys } from "../utils/missing-keys.js";
export async function registerValidationTools(server) {
    // Lint Tool
    server.registerTool("hoi4_lint", {
        title: "Lint HOI4 Scripts",
        description: "Validates Hearts of Iron IV script files for syntax errors and issues",
        inputSchema: {
            target: z.string().optional().describe("File or directory path to lint (defaults to current directory)")
        }
    }, async ({ target }) => {
        try {
            const results = await runLint(target || ".");
            if (results.errorCount === 0) {
                return {
                    content: [{
                            type: "text",
                            text: `✅ Linting completed successfully!\n🔍 Scanned ${results.fileCount} files.\n✨ No critical errors found.`
                        }]
                };
            }
            else {
                const errorSummary = results.issues.map(issue => `📁 ${issue.file}\n${issue.problems.map(p => `  ❌ L${p.line}: ${p.message}`).join('\n')}`).join('\n\n');
                return {
                    content: [{
                            type: "text",
                            text: `⚠️ Linting found ${results.errorCount} error(s) in ${results.fileCount} files:\n\n${errorSummary}`
                        }]
                };
            }
        }
        catch (error) {
            return {
                content: [{
                        type: "text",
                        text: `❌ Linting failed: ${error instanceof Error ? error.message : 'Unknown error'}`
                    }]
            };
        }
    });
    // Unused Keys Tool
    server.registerTool("hoi4_find_unused_keys", {
        title: "Find Unused Localization Keys",
        description: "Finds localization keys defined in YAML files but not used in any script files",
        inputSchema: {
            target: z.string().optional().describe("Directory path to scan (defaults to current directory)")
        }
    }, async ({ target }) => {
        try {
            const unusedKeys = await findUnusedKeys(target || ".");
            if (unusedKeys.length === 0) {
                return {
                    content: [{
                            type: "text",
                            text: "✅ No unused localization keys found!"
                        }]
                };
            }
            else {
                const keysList = unusedKeys.map(key => `- ${key.key} (${key.file}:${key.line})`).join('\n');
                return {
                    content: [{
                            type: "text",
                            text: `⚠️ Found ${unusedKeys.length} unused localization keys:\n\n${keysList}`
                        }]
                };
            }
        }
        catch (error) {
            return {
                content: [{
                        type: "text",
                        text: `❌ Unused key scan failed: ${error instanceof Error ? error.message : 'Unknown error'}`
                    }]
            };
        }
    });
    // Missing Keys Tool  
    server.registerTool("hoi4_find_missing_keys", {
        title: "Find Missing Localization Keys",
        description: "Finds localization keys referenced in script files but not defined in YAML files",
        inputSchema: {
            target: z.string().optional().describe("Directory path to scan (defaults to current directory)")
        }
    }, async ({ target }) => {
        try {
            const missingKeys = await findMissingKeys(target || ".");
            if (missingKeys.length === 0) {
                return {
                    content: [{
                            type: "text",
                            text: "✅ No missing localization keys found!"
                        }]
                };
            }
            else {
                const keysList = missingKeys.map(key => `- ${key.key} (referenced in ${key.file}:${key.line})`).join('\n');
                return {
                    content: [{
                            type: "text",
                            text: `⚠️ Found ${missingKeys.length} missing localization keys:\n\n${keysList}`
                        }]
                };
            }
        }
        catch (error) {
            return {
                content: [{
                        type: "text",
                        text: `❌ Missing key scan failed: ${error instanceof Error ? error.message : 'Unknown error'}`
                    }]
            };
        }
    });
}
//# sourceMappingURL=validation-tools.js.map