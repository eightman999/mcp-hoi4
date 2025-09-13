#!/usr/bin/env node
import { Command } from 'commander';
import { createMod } from './commands/create-mod.js';
import { runLint } from './commands/lint.js';
import { runMissingKeyScan } from './commands/missing_key.js';
import { runUnusedKeyScan } from './commands/unused_key.js';
import { showEquation } from './commands/showEquation.js';

import { getFontInfo } from './commands/get-font-info.js';

import { runGfx } from './commands/gfx.js';
import { runCWToolsValidation, runCWToolsParse, getCWToolsVersion, checkCWToolsAvailability } from './commands/cwtools.js';


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

program
    .command('missing-key')
    .description('未定義キーを一覧化')
    .argument('[path]', '対象フォルダ', '.')
    .action(runMissingKeyScan);

program
    .command('unused-key')
    .description('どこからも参照されていない定義済みキーを一覧化')
    .argument('[path]', '対象フォルダ', '.')
    .action(runUnusedKeyScan);

program
    .command('show-equation')
    .description('Hoi4コードから読みやすい数式に書き起こす')
    .argument('<file>', '対象ファイル')
    .argument('<variable>', '対象の変数名')
    .action(showEquation);


program
    .command('get-font-info')
    .description('フォントファイル (.fnt) からフォント名とサイズを抽出')
    .argument('[path]', '対象フォルダ', '.')
    .action(getFontInfo);

const gfxCommand = program.command('gfx')
    .description('GFX ファイルのチェックと画像変換');

gfxCommand
    .command('find-unused')
    .description('GFX定義ファイルから参照されていないPNG画像をリストアップ')
    .argument('[path]', '対象フォルダ', '.')
    .action((path) => runGfx('find-unused', path));

gfxCommand
    .command('convert')
    .description('使用中のPNGをDDSに変換')
    .argument('[path]', '対象フォルダ', '.')
    .action((path) => runGfx('convert', path));

gfxCommand
    .command('check-missing')
    .description('GFX定義ファイルで参照されている存在しない画像をリストアップ')
    .argument('[path]', '対象フォルダ', '.')
    .action((path) => runGfx('check-missing', path));

// CWTools commands
const cwtoolsCommand = program.command('cwtools')
    .description('CWTools F#ライブラリを使用した高度な検証・解析');

cwtoolsCommand
    .command('validate')
    .description('MODファイルの詳細検証 (CWTools使用)')
    .argument('[path]', '対象フォルダ', '.')
    .action(runCWToolsValidation);

cwtoolsCommand
    .command('parse')
    .description('スクリプトファイルのパース (CWTools使用)')
    .argument('<file>', '対象ファイル')
    .action(runCWToolsParse);

cwtoolsCommand
    .command('version')
    .description('CWToolsのバージョン情報を表示')
    .action(async () => {
        const version = await getCWToolsVersion();
        console.log(`CWTools Version: ${version}`);
    });

cwtoolsCommand
    .command('check')
    .description('CWToolsの動作確認')
    .action(async () => {
        const available = await checkCWToolsAvailability();
        if (available === true) {
            console.log('✅ CWTools is available and ready to use');
        } else if (available === 'fallback') {
            console.log('⚠️  CWTools is available in simplified mode');
        } else {
            console.log('❌ CWTools is not available');
        }
    });


program.parse();
