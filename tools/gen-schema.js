const fs = require('node:fs');
const generateSchema = require('generate-schema');

// Generate schema for triggers.json
const triggersJson = JSON.parse(fs.readFileSync('data/triggers.json', 'utf8'));
const triggersSchema = generateSchema.json('Hoi4Triggers', triggersJson);

// Generate schema for effects.json
const effectsJson = JSON.parse(fs.readFileSync('data/effects.json', 'utf8'));
const effectsSchema = generateSchema.json('Hoi4Effects', effectsJson);

// Create schemas directory if it doesn't exist
if (!fs.existsSync('schemas')) {
  fs.mkdirSync('schemas', { recursive: true });
}

// Write both schemas
fs.writeFileSync('schemas/triggers.schema.json', JSON.stringify(triggersSchema, null, 2));
fs.writeFileSync('schemas/effects.schema.json', JSON.stringify(effectsSchema, null, 2));

console.log('✅ triggers schema generated');
console.log('✅ effects schema generated');
