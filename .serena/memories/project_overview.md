# mcp-hoi4 Project Overview

## Purpose
mcp-hoi4 is a CLI tool for Hearts of Iron IV (HoI4) mod development. It provides comprehensive mod creation and validation capabilities for the popular Paradox Interactive strategy game.

## Key Features
- HoI4 mod scaffolding/template creation
- DSL syntax checking and linting
- Unused localization key detection
- **CWTools F# library integration** for advanced validation and analysis
- GFX file checking and image conversion
- Font information extraction
- Mathematical equation readability improvements

## Tech Stack
- **Runtime**: Node.js 18+ (ES modules)
- **Package Manager**: npm
- **CLI Framework**: Commander.js
- **External Integration**: CWTools F# library (.NET 6.0+)
- **Key Dependencies**:
  - chalk (console styling)
  - commander (CLI framework)
  - glob (file pattern matching)
  - js-yaml (YAML parsing)
  - ora (loading spinners)

## Architecture
- **Entry Point**: `src/index.js` (CLI command dispatcher)
- **Commands**: `src/commands/` (individual command implementations)
- **Utilities**: `src/utils/` (core functionality modules)
- **Data**: `data/` (JSON configuration files for triggers/effects)
- **Types**: `types/` (TypeScript definitions)
- **Tools**: `tools/` (development utilities)
- **CWTools**: `cwtools/` (integrated F# analysis library)

## Target Audience
Hearts of Iron IV mod developers who need comprehensive tooling for mod validation, creation, and maintenance.