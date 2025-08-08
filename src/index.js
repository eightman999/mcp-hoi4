#!/usr/bin/env node
import { Command } from 'commander';
import { createMod } from './commands/create-mod.js';
import { runLint } from './commands/lint.js';

const DEFAULT_MOD_DIR =
  process.platform === 'win32'
    ? `${process.env.USERPROFILE}\\Documents\\Paradox Interactive\\Hearts of Iron IV\\mod`
    : `${process.env.HOME}/Documents/Paradox Interactive/Hearts of Iron IV/mod`;

const program = new Command();
program
    .name('mcp-hoi4')
    .description('HOI4 Modding Claude MCP (JS版)')
    .version('0.0.1');

program
    .command('create-mod')
    .description('新規 HoI4 Mod 雛形を作成')
    .argument('<name>', 'MOD 名')
    .option(
        '-d, --dir <path>',
        'mods ベースディレクトリ（デフォルト: HoI4 の mod フォルダ）',
        DEFAULT_MOD_DIR
    )
    .action((name, opts) => createMod(name, opts.dir));

program
    .command('lint')
    .description('DSL 構文チェック')
    .argument('[path]', '対象フォルダ', '.')
    .action(runLint);

program.parse();
