import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { findUnusedGfx, convertImages, checkMissingGfx } from "../utils/gfx-operations.js";

export async function registerGfxTools(server: McpServer) {
  // Find Unused GFX Tool
  server.registerTool("hoi4_find_unused_gfx", {
    title: "Find Unused GFX Images",
    description: "Finds PNG images that are not referenced in any GFX definition files",
    inputSchema: {
      target: z.string().optional().describe("Directory path to scan (defaults to current directory)")
    }
  }, async ({ target }) => {
    try {
      const unusedImages = await findUnusedGfx(target || ".");
      
      if (unusedImages.length === 0) {
        return {
          content: [{
            type: "text",
            text: "✅ No unused GFX images found!"
          }]
        };
      } else {
        const imagesList = unusedImages.map(img => `- ${img}`).join('\n');
        return {
          content: [{
            type: "text",
            text: `🖼️ Found ${unusedImages.length} unused image files:\n\n${imagesList}`
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ GFX scan failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });

  // Convert Images Tool
  server.registerTool("hoi4_convert_images", {
    title: "Convert Images to DDS",
    description: "Converts PNG images to DDS format for HOI4 compatibility",
    inputSchema: {
      target: z.string().optional().describe("Directory path containing images to convert"),
      format: z.enum(["dds", "png"]).optional().describe("Target format (defaults to dds)")
    }
  }, async ({ target, format }) => {
    try {
      const results = await convertImages(target || ".", format || "dds");
      
      if (results.converted.length === 0) {
        return {
          content: [{
            type: "text",
            text: "ℹ️ No images found to convert."
          }]
        };
      } else {
        const convertedList = results.converted.map(img => `✅ ${img.from} → ${img.to}`).join('\n');
        const errorList = results.errors.length > 0 ? 
          `\n\nErrors:\n${results.errors.map(err => `❌ ${err}`).join('\n')}` : '';
        
        return {
          content: [{
            type: "text",
            text: `🔄 Converted ${results.converted.length} images:\n\n${convertedList}${errorList}`
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ Image conversion failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });

  // Check Missing GFX Tool
  server.registerTool("hoi4_check_missing_gfx", {
    title: "Check Missing GFX Images",
    description: "Finds GFX definitions that reference non-existent image files",
    inputSchema: {
      target: z.string().optional().describe("Directory path to scan (defaults to current directory)")
    }
  }, async ({ target }) => {
    try {
      const missingImages = await checkMissingGfx(target || ".");
      
      if (missingImages.length === 0) {
        return {
          content: [{
            type: "text",
            text: "✅ All GFX references point to existing image files!"
          }]
        };
      } else {
        const missingList = missingImages.map(img => `- ${img.gfxName}: ${img.imagePath} (defined in ${img.gfxFile})`).join('\n');
        return {
          content: [{
            type: "text",
            text: `⚠️ Found ${missingImages.length} missing image references:\n\n${missingList}`
          }]
        };
      }
    } catch (error) {
      return {
        content: [{
          type: "text",
          text: `❌ Missing GFX check failed: ${error instanceof Error ? error.message : 'Unknown error'}`
        }]
      };
    }
  });
}