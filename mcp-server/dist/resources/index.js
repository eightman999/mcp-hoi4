import { ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { promises as fs } from 'fs';
import path from 'path';
export async function registerHoi4Resources(server) {
    // HOI4 Game Data Resources
    server.registerResource("hoi4_triggers", new ResourceTemplate("hoi4://triggers", { list: undefined }), {
        title: "HOI4 Triggers Reference",
        description: "Complete list of Hearts of Iron IV triggers and their syntax"
    }, async (uri) => {
        try {
            const triggersPath = path.resolve(process.cwd(), '../data/triggers.json');
            const triggers = JSON.parse(await fs.readFile(triggersPath, 'utf-8'));
            const content = Object.entries(triggers)
                .map(([name, info]) => `## ${name}\n${info.description || 'No description available'}\n`).join('\n');
            return {
                contents: [{
                        uri: uri.href,
                        text: `# HOI4 Triggers Reference\n\n${content}`,
                        mimeType: "text/markdown"
                    }]
            };
        }
        catch (error) {
            return {
                contents: [{
                        uri: uri.href,
                        text: `Error loading triggers data: ${error instanceof Error ? error.message : 'Unknown error'}`,
                        mimeType: "text/plain"
                    }]
            };
        }
    });
    // HOI4 Effects Reference
    server.registerResource("hoi4_effects", new ResourceTemplate("hoi4://effects", { list: undefined }), {
        title: "HOI4 Effects Reference",
        description: "Complete list of Hearts of Iron IV effects and their syntax"
    }, async (uri) => {
        try {
            const effectsPath = path.resolve(process.cwd(), '../data/effects.json');
            const effects = JSON.parse(await fs.readFile(effectsPath, 'utf-8'));
            const content = Object.entries(effects)
                .map(([name, info]) => `## ${name}\n${info.description || 'No description available'}\n`).join('\n');
            return {
                contents: [{
                        uri: uri.href,
                        text: `# HOI4 Effects Reference\n\n${content}`,
                        mimeType: "text/markdown"
                    }]
            };
        }
        catch (error) {
            return {
                contents: [{
                        uri: uri.href,
                        text: `Error loading effects data: ${error instanceof Error ? error.message : 'Unknown error'}`,
                        mimeType: "text/plain"
                    }]
            };
        }
    });
    // Mod Template Resource
    server.registerResource("hoi4_mod_template", new ResourceTemplate("hoi4://template/{type}", { list: undefined }), {
        title: "HOI4 Mod Templates",
        description: "Pre-built templates for different types of HOI4 mods"
    }, async (uri, { type }) => {
        const templates = {
            basic: {
                title: "Basic Mod Template",
                content: `# Basic HOI4 Mod Template

## Structure
\`\`\`
mod_name/
├── descriptor.mod
├── common/
│   ├── national_focus/
│   ├── ideas/
│   └── country_tags/
├── events/
├── history/
├── localisation/
│   └── english/
├── gfx/
│   └── interface/
└── interface/
\`\`\`

## Getting Started
1. Use the create_mod tool to generate the basic structure
2. Add your content to the appropriate directories
3. Update localisation files with your text
4. Test using the validation tools`
            },
            focus_tree: {
                title: "National Focus Tree Template",
                content: `# National Focus Tree Template

## Example Focus Tree Structure
\`\`\`
focus_tree = {
    id = my_focus_tree
    country = {
        factor = 0
        modifier = {
            add = 10
            tag = TAG
        }
    }
    
    focus = {
        id = my_first_focus
        icon = GFX_goal_generic_political_pressure
        cost = 10
        x = 5
        y = 0
        
        completion_reward = {
            add_political_power = 150
        }
    }
}
\`\`\`

## Best Practices
- Use descriptive focus IDs
- Keep costs balanced (usually 5-15)
- Always include completion rewards
- Test focus tree progression`
            },
            country: {
                title: "New Country Template",
                content: `# New Country Template

## Required Files
1. **Country Tag Definition** (common/country_tags/01_countries.txt)
2. **Country History** (history/countries/TAG - Country.txt)  
3. **Localisation** (localisation/english/countries_l_english.yml)
4. **Flag Graphics** (gfx/flags/)

## Example Country Tag
\`\`\`
TAG = {
    color = rgb { 100 150 200 }
    color_ui = rgb { 130 180 230 }
}
\`\`\`

## Example History File
\`\`\`
capital = 1
oob = "TAG_1936"
set_technology = {
    infantry_weapons = 1
}
set_politics = {
    ruling_party = democratic
    last_election = "1936.1.1"
    election_frequency = 48
    elections_allowed = yes
}
\`\`\``
            }
        };
        const template = templates[type];
        if (!template) {
            return {
                contents: [{
                        uri: uri.href,
                        text: `Unknown template type: ${type}`,
                        mimeType: "text/plain"
                    }]
            };
        }
        return {
            contents: [{
                    uri: uri.href,
                    text: template.content,
                    mimeType: "text/markdown"
                }]
        };
    });
    // HOI4 Best Practices Resource
    server.registerResource("hoi4_best_practices", new ResourceTemplate("hoi4://best_practices", { list: undefined }), {
        title: "HOI4 Modding Best Practices",
        description: "Guidelines and best practices for Hearts of Iron IV mod development"
    }, async (uri) => {
        const bestPractices = `# HOI4 Modding Best Practices

## File Organization
- Keep files organized by category (common/, events/, history/, etc.)
- Use descriptive file names
- Group related content together
- Follow vanilla file naming conventions

## Scripting Guidelines
- Always validate syntax with linting tools
- Use consistent indentation (tabs or spaces, but be consistent)
- Comment complex logic
- Test frequently during development

## Localization
- Keep all text in localization files
- Use descriptive key names
- Check for unused and missing keys regularly
- Support multiple languages when possible

## Performance
- Avoid complex daily/monthly triggers when possible
- Use targeted scope changes
- Test performance impact of new features
- Keep save game compatibility in mind

## Graphics
- Use appropriate image formats (DDS for game graphics)
- Optimize image sizes
- Follow naming conventions for GFX files
- Test graphics in-game

## Version Control
- Use git for version control
- Commit frequently with descriptive messages
- Tag releases
- Keep sensitive data out of repositories

## Testing
- Test with different save games
- Check for errors in the error log
- Test multiplayer compatibility
- Validate with CWTools when available`;
        return {
            contents: [{
                    uri: uri.href,
                    text: bestPractices,
                    mimeType: "text/markdown"
                }]
        };
    });
}
//# sourceMappingURL=index.js.map