#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerHoi4Tools } from "./tools/index.js";
import { registerHoi4Resources } from "./resources/index.js";
// Create the MCP server
const server = new McpServer({
    name: "mcp-hoi4-server",
    version: "1.0.0"
});
// Register all tools and resources
await registerHoi4Tools(server);
await registerHoi4Resources(server);
// Start the server using stdio transport
const transport = new StdioServerTransport();
await server.connect(transport);
// Log to stderr (not stdout to avoid corrupting JSON-RPC)
console.error("MCP HOI4 Server started successfully");
//# sourceMappingURL=index.js.map