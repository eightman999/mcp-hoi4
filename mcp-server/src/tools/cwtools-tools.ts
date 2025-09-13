import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { validateWithCwtools, parseWithCwtools, getCwtoolsVersion, checkCwtoolsAvailability } from "../utils/cwtools-wrapper.js";

export async function registerCwtoolsTools(server: McpServer) {
  // CWTools Validate Tool
  server.registerTool("hoi4_cwtools_validate", {
    title: "CWTools Advanced Validation",
    description: "Performs comprehensive validation of HOI4 mod files using the CWTools F# library",
    inputSchema: {
      target: z.string().optional().describe("Directory path to validate (defaults to current directory)")
    }
  }, async ({ target }) => {
    try {
      const isAvailable = await checkCwtoolsAvailability();
      if (!isAvailable) {
        return {
          content: [{
            type: "text",
            text: "⚠️ CWTools is not available. Please ensure .NET 6.0+ runtime is installed for full functionality."
          }]
        };
      }

      const results = await validateWithCwtools(target || ".");
      
      if (results.errors.length === 0) {
        return {
          content: [{
            type: "text",
            text: `✅ CWTools validation completed successfully!\n📁 Validated ${results.fileCount} files.\n🎯 No errors found.\n\n📊 Statistics:\n${results.statistics}`
          }]
        };
      } else {
        const errorSummary = results.errors.map(error => 
          `📁 ${error.file}\n  ❌ ${error.type}: ${error.message}`
        ).join('\n');
        
        return {
          content: [{
            type: "text",
            text: `⚠️ CWTools found ${results.errors.length} validation issues:\n\n${errorSummary}\n\n📊 Statistics:\n${results.statistics}`
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ CWTools validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });

  // CWTools Parse Tool
  server.registerTool("hoi4_cwtools_parse", {
    title: "CWTools Parse File",
    description: "Parses a specific HOI4 script file using CWTools for detailed analysis",
    inputSchema: {
      filePath: z.string().describe("Path to the script file to parse")
    }
  }, async ({ filePath }) => {
    try {
      const isAvailable = await checkCwtoolsAvailability();
      if (!isAvailable) {
        return {
          content: [{
            type: "text",
            text: "⚠️ CWTools is not available. Please ensure .NET 6.0+ runtime is installed."
          }]
        };
      }

      const result = await parseWithCwtools(filePath);
      
      return {
        content: [{
          type: "text",
          text: `📄 CWTools parse results for ${filePath}:\n\n${result.analysis}\n\n📊 File Statistics:\n${result.statistics}`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ CWTools parsing failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });

  // CWTools Version Tool
  server.registerTool("hoi4_cwtools_version", {
    title: "Get CWTools Version",
    description: "Returns the version information of the integrated CWTools library",
    inputSchema: {}
  }, async () => {
    try {
      const version = await getCwtoolsVersion();
      return {
        content: [{
          type: "text",
          text: `🔧 CWTools Version Information:\n${version.info}\n\n📦 Integration Status: ${version.status}`
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ Failed to get CWTools version: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });

  // CWTools Status Check Tool
  server.registerTool("hoi4_cwtools_check", {
    title: "Check CWTools Availability",
    description: "Checks if CWTools is properly installed and available for use",
    inputSchema: {}
  }, async () => {
    try {
      const isAvailable = await checkCwtoolsAvailability();
      
      if (isAvailable) {
        const version = await getCwtoolsVersion();
        return {
          content: [{
            type: "text",
            text: `✅ CWTools is available and ready to use!\n\n${version.info}`
          }]
        };
      } else {
        return {
          content: [{
            type: "text",
            text: `⚠️ CWTools is not available.\n\nTo enable full functionality, please install .NET 6.0+ Runtime:\n\n📋 Installation commands:\n- macOS: brew install --cask dotnet-runtime\n- Windows: Download from https://dotnet.microsoft.com/download\n- Linux: Follow instructions at https://docs.microsoft.com/dotnet/core/install/linux`
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ CWTools check failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });
}