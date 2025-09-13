import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { createMod } from "../utils/mod-creator.js";

export async function registerModTools(server: McpServer) {
  // Create Mod Tool
  server.registerTool("hoi4_create_mod", {
    title: "Create HOI4 Mod",
    description: "Creates a new Hearts of Iron IV mod template with the specified name and directory structure",
    inputSchema: {
      modName: z.string().describe("The name of the new mod"),
      baseDir: z.string().optional().describe("The base directory where the mod will be created (defaults to current directory)")
    }
  }, async ({ modName, baseDir }) => {
    try {
      const result = await createMod(modName, baseDir || process.cwd());
      return {
        content: [{
          type: "text",
          text: `✅ Successfully created mod "${modName}" at ${result.modPath}\n\nFiles created:\n${result.files.map(f => `- ${f}`).join('\n')}`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text", 
          text: `❌ Failed to create mod: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });
}