import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerModTools } from "./mod-tools.js";
import { registerValidationTools } from "./validation-tools.js";
import { registerGfxTools } from "./gfx-tools.js";
import { registerCwtoolsTools } from "./cwtools-tools.js";

export async function registerHoi4Tools(server: McpServer) {
  await registerModTools(server);
  await registerValidationTools(server);
  await registerGfxTools(server);
  await registerCwtoolsTools(server);
}