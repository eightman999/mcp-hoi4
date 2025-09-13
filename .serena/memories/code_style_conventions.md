# Code Style and Conventions

## JavaScript/ES Module Standards
- **Module System**: ES modules (`import`/`export`)
- **Package Type**: `"type": "module"` in package.json
- **File Extensions**: `.js` for all JavaScript files

## Code Style
- **Async/Await**: Prefer async/await over promises where applicable
- **Console Output**: 
  - Use `chalk` for colored console output
  - Use emoji markers for status (✅ ❌ ⚠️ 🎉)
  - Use `ora` for loading spinners
- **Error Handling**: Set `process.exitCode = 1` for errors
- **Path Handling**: Use `path.resolve()` and `path.relative()` for cross-platform compatibility

## Naming Conventions
- **Functions**: camelCase (`runLint`, `lintDirectory`)
- **Constants**: UPPER_SNAKE_CASE (`DEFAULT_MOD_DIR`)
- **Files**: kebab-case for commands (`create-mod.js`), camelCase for utilities (`unusedKeyScanner.js`)

## Project Structure Patterns
- **Commands**: Each CLI command has its own file in `src/commands/`
- **Utilities**: Shared logic in `src/utils/`
- **Export Pattern**: Named exports for functions (`export async function runLint`)

## Linting
- **Tool**: ESLint with auto-fix enabled
- **Command**: `npm run lint`
- **Scope**: `"src/**/*.js"`

## Dependencies Management
- **Production Dependencies**: Minimal, focused on CLI functionality
- **No Dev Dependencies**: Current project uses only production dependencies
- **Version Pinning**: Uses caret ranges (^) for flexibility