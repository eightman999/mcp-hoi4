# Claude Code Integration Setup

## Quick Setup

1. **Build the MCP Server**
   ```bash
   cd mcp-hoi4/mcp-server
   npm install
   npm run build
   ```

2. **Configure Claude Code**
   
   Add the following to your Claude Code MCP configuration file:

   ```json
   {
     "mcpServers": {
       "hoi4": {
         "command": "node",
         "args": ["/absolute/path/to/mcp-hoi4/mcp-server/dist/index.js"],
         "env": {}
       }
     }
   }
   ```

   **Important**: Replace `/absolute/path/to/` with your actual path.

3. **Restart Claude Code**

## Configuration File Locations

### macOS
```
~/.config/claude-desktop/mcp_settings.json
```

### Windows
```
%APPDATA%\Claude\mcp_settings.json
```

### Linux
```
~/.config/claude-desktop/mcp_settings.json
```

## Example Configuration

```json
{
  "mcpServers": {
    "hoi4": {
      "command": "node",
      "args": ["/Users/username/projects/mcp-hoi4/mcp-server/dist/index.js"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

## Verification

After setup, you should be able to:

1. Ask Claude: "What HOI4 tools are available?"
2. Create a mod: "Create a new HOI4 mod called 'Test Mod'"
3. Get references: "Show me the HOI4 triggers reference"
4. Validate files: "Lint my HOI4 mod files"

## Troubleshooting

### Server Not Starting
- Check Node.js version (18+ required)
- Verify the path to `dist/index.js` is correct
- Check file permissions

### Tools Not Available
- Restart Claude Code after configuration changes
- Check MCP server logs for errors
- Verify JSON configuration syntax

### CWTools Not Working
- Install .NET 6.0+ runtime
- Run `hoi4_cwtools_check` to verify availability

## Advanced Usage

### Custom Working Directory
The server tools will operate in the directory where Claude Code is running. Navigate to your HOI4 mod directory before using the tools.

### Batch Operations
You can combine multiple operations:
1. "Create a mod, then lint it and check for missing localization keys"
2. "Find unused GFX images and convert them to DDS format"

### Resource Access
- `hoi4://triggers` - HOI4 triggers reference
- `hoi4://effects` - HOI4 effects reference  
- `hoi4://template/basic` - Basic mod template
- `hoi4://template/focus_tree` - Focus tree template
- `hoi4://template/country` - New country template
- `hoi4://best_practices` - Modding best practices