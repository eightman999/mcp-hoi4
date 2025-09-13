# Essential Development Commands

## Development & Testing
```bash
# Run in development mode
npm run dev

# Run linting (ESLint with auto-fix)
npm run lint

# Generate TypeScript definitions
npm run gen:types

# Build check (returns success message for JS project)
npm run build
```

## Installation & Setup
```bash
# Install globally for CLI usage
npm install -g .

# Verify installation
mcp-hoi4 --help
mcp-hoi4 cwtools check

# Check .NET runtime (required for full CWTools functionality)
dotnet --version
```

## Core Application Commands
```bash
# Create new mod template
mcp-hoi4 create-mod <MOD_NAME> [-d <directory>]

# Lint/validate mod files
mcp-hoi4 lint [path]

# Check for unused localization keys
mcp-hoi4 unused-key [path]

# Check for missing localization keys
mcp-hoi4 missing-key [path]

# GFX operations
mcp-hoi4 gfx find-unused [path]
mcp-hoi4 gfx convert [path]
mcp-hoi4 gfx check-missing [path]

# CWTools integration (advanced validation)
mcp-hoi4 cwtools validate [path]
mcp-hoi4 cwtools parse <file>
mcp-hoi4 cwtools version
mcp-hoi4 cwtools check
```

## System Utilities (macOS)
```bash
# File operations
ls -la          # List files with details
find . -name    # Find files by name pattern
grep -r         # Search text in files
cd              # Change directory

# Git operations
git status
git add
git commit
git push
```