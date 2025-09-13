# Codebase Structure

## Root Directory
```
mcp-hoi4/
├── src/           # Main source code
├── tools/         # Development utilities
├── types/         # TypeScript definitions
├── data/          # Configuration JSON files
├── cwtools/       # CWTools F# library integration
├── test/          # Test files and sample mods
├── package.json   # Node.js configuration
├── README.md      # Documentation
└── .gitignore     # Git ignore rules
```

## Source Code (`src/`)
```
src/
├── index.js           # CLI entry point, command dispatcher
├── commands/          # Individual CLI command implementations
│   ├── create-mod.js     # Mod template creation
│   ├── lint.js           # DSL syntax checking
│   ├── unused_key.js     # Unused localization detection
│   ├── missing_key.js    # Missing localization detection
│   ├── gfx.js           # GFX file operations
│   ├── cwtools.js       # CWTools integration commands
│   ├── get-font-info.js # Font information extraction
│   └── showEquation.js  # Mathematical equation processing
└── utils/             # Core functionality modules
    ├── fileWalker.js        # File system traversal
    ├── lintCore.js          # Core linting logic
    ├── unusedKeyScanner.js  # Unused key detection logic
    ├── missingKeyScanner.js # Missing key detection logic
    ├── gfx-parser.js        # GFX file parsing
    └── equationGenerator.js # Equation readability processing
```

## Key Components

### CLI Framework
- **Entry Point**: `src/index.js` uses Commander.js for CLI parsing
- **Command Pattern**: Each command is a separate module in `src/commands/`
- **Utility Pattern**: Shared logic extracted to `src/utils/`

### CWTools Integration
- **Location**: `cwtools/` directory contains F# binaries
- **Requirements**: .NET 6.0+ runtime for full functionality
- **Fallback**: Simplified mode available without .NET

### Configuration Data
- **triggers.json**: HoI4 trigger definitions
- **effects.json**: HoI4 effect definitions
- **hoi4.d.ts**: TypeScript type definitions

### Testing
- **Location**: `test/` directory
- **Content**: Contains sample mod structures for testing
- **Note**: No automated test framework currently implemented