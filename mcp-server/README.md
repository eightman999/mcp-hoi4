# MCP HOI4 Server

An MCP (Model Context Protocol) server for Hearts of Iron IV mod development tools, designed to work with Claude Code and other MCP-compatible clients.

## Features

### Tools
- **hoi4_create_mod**: Creates new HOI4 mod templates with proper directory structure
- **hoi4_lint**: Validates HOI4 script files for syntax errors and issues
- **hoi4_find_unused_keys**: Finds unused localization keys in YAML files
- **hoi4_find_missing_keys**: Finds missing localization keys referenced in scripts
- **hoi4_find_unused_gfx**: Finds PNG images not referenced in GFX files
- **hoi4_convert_images**: Converts images between formats (PNG/DDS)
- **hoi4_check_missing_gfx**: Checks for missing image files referenced in GFX
- **hoi4_cwtools_validate**: Advanced validation using CWTools F# library
- **hoi4_cwtools_parse**: Parse specific script files with CWTools
- **hoi4_cwtools_version**: Get CWTools version information
- **hoi4_cwtools_check**: Check CWTools availability

### Resources
- **hoi4://triggers**: Complete HOI4 triggers reference
- **hoi4://effects**: Complete HOI4 effects reference
- **hoi4://template/{type}**: Mod templates (basic, focus_tree, country)
- **hoi4://best_practices**: HOI4 modding best practices guide

## Installation

```bash
cd mcp-server
npm install
npm run build
```

## Usage with Claude Code

Add this server to your Claude Code MCP configuration:

```json
{
  "mcpServers": {
    "hoi4": {
      "command": "node",
      "args": ["/path/to/mcp-hoi4/mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

## Requirements

- Node.js 18+
- .NET 6.0+ (optional, for CWTools full functionality)

## Development

```bash
npm run dev    # Watch mode
npm run build  # Build TypeScript
npm start      # Run the server
```

## Example Usage

Once integrated with Claude Code, you can use natural language commands like:

- "Create a new HOI4 mod called 'My Great Mod'"
- "Lint the current directory for HOI4 script errors"
- "Find unused localization keys in my mod"
- "Check for missing GFX images"
- "Show me the HOI4 triggers reference"
- "Get a template for creating a new country"

## Architecture

The server exposes HOI4 modding functionality through:

- **Tools**: Interactive functions that perform actions (create, validate, check)
- **Resources**: Static reference materials and templates

All tools are designed to work with HOI4 mod directory structures and follow Hearts of Iron IV modding conventions.