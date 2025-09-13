# Task Completion Checklist

## Code Quality Checks
1. **Run Linting**: `npm run lint`
   - Ensures code follows ESLint rules
   - Automatically fixes common issues
   - Must pass with no errors

2. **Type Generation**: `npm run gen:types` (if TypeScript definitions were modified)
   - Updates `types/hoi4.d.ts`
   - Ensures type safety for external consumers

## Functional Testing
3. **Manual Testing**: Test the modified functionality
   - Run `npm run dev` for development testing
   - Test CLI commands: `mcp-hoi4 <command>`
   - Verify CWTools integration: `mcp-hoi4 cwtools check`

4. **Cross-Platform Compatibility**
   - Ensure path handling works on macOS/Linux/Windows
   - Test .NET runtime detection for CWTools features

## Installation Verification
5. **Global Installation Test**: `npm install -g .`
   - Verify CLI tool works globally
   - Test all main commands work correctly

## Documentation Updates
6. **Update README.md** (if needed)
   - Document new features/commands
   - Update installation instructions
   - Update command examples

7. **Update Command Help** (if needed)
   - Ensure `mcp-hoi4 --help` is current
   - Verify subcommand help text

## Git Operations
8. **Commit Changes**
   - Use descriptive commit messages
   - Follow existing commit message patterns
   - Include relevant emoji if following project conventions

## Notes
- No automated test suite currently exists
- Manual testing is critical
- .NET 6.0+ integration requires special attention to cross-platform compatibility