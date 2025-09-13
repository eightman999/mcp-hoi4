# mcp-hoi4

HOI4 Modding Claude MCP (JS版)

Hearts of Iron IV の Mod 制作を支援する CLI ツールです。

## 概要

このツールは、以下の機能を提供します。

- HoI4 Mod の雛形作成
- DSL の構文チェック
- 未使用のローカライゼーションキーの検出
- **CWTools F#ライブラリを使用した高度な検証・解析**
- GFX ファイルのチェックと画像変換
- フォント情報の抽出
- 数式の可読化

## 新機能: CWTools 統合

**CWTools** (F# 製の Paradox Interactive ゲーム用解析ライブラリ) と統合し、より高度な MOD 検証・解析機能を提供します。

### CWTools の特徴
- Paradox Interactive の全ゲーム対応 (HOI4, EU4, Stellaris, CK2/CK3, VIC2)
- 高精度な構文解析とバリデーション
- ローカライゼーション管理
- ルールベースの検証システム

## インストール

### 1. Node.js の依存関係をインストール

```bash
npm install -g .
```

### 2. .NET 6.0 Runtime のインストール（推奨）

CWTools の全機能を使用するには .NET 6.0 Runtime が必要です。

**macOS (Homebrew):**
```bash
brew install --cask dotnet-runtime
```

**macOS (公式インストーラー):**
```bash
# ARM64 (Apple Silicon) の場合
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --runtime dotnet --version 6.0.33 --architecture arm64

# x64 (Intel) の場合  
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --runtime dotnet --version 6.0.33 --architecture x64
```

**Windows:**
```powershell
# PowerShell で実行
Invoke-WebRequest -Uri "https://dot.net/v1/dotnet-install.ps1" -OutFile "dotnet-install.ps1"
.\dotnet-install.ps1 -Runtime dotnet -Version 6.0.33
```

**Linux (Ubuntu/Debian):**
```bash
# Microsoft パッケージリポジトリを追加
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb

# .NET 6.0 Runtime をインストール
sudo apt-get update
sudo apt-get install -y dotnet-runtime-6.0
```

**注意:** .NET 6.0 がインストールされていない場合でも、mcp-hoi4 は簡易モードで動作します。

### 3. インストール確認

```bash
# Node.js の確認
node --version

# .NET Runtime の確認
dotnet --version

# mcp-hoi4 の動作確認
mcp-hoi4 cwtools check
```

**期待される出力:**
- ✅ CWTools is available and ready to use (.NET 6.0 インストール済み)
- ⚠️ CWTools is available in simplified mode (.NET 6.0 未インストール)

## 使い方

インストール後、`mcp-hoi4` コマンドが使用できます。

```bash
mcp-hoi4 --help
```

## コマンド一覧

### 基本コマンド

### `create-mod`

新しい HoI4 Mod の雛形を作成します。

```bash
mcp-hoi4 create-mod <MOD名> [オプション]
```

**引数**

- `<MOD名>`: 作成する Mod の名前を指定します。（例: "My Awesome Mod"）

**オプション**

- `-d, --dir <path>`: Mod を作成するベースディレクトリを指定します。デフォルトでは、HoI4 のユーザーModディレクトリが自動的に設定されます。

### `lint`

DSL の構文をチェックします。

```bash
mcp-hoi4 lint [path]
```

**引数**

- `[path]`: チェック対象のファイルまたはディレクトリを指定します。デフォルトはカレントディレクトリです。

### `unused-key`

ローカライゼーションファイル (`localisation/**/*.yml`) で定義されているものの、スクリプトファイル (`.txt`, `.gui`) のどこからも参照されていないキーを検出して警告します。

```bash
mcp-hoi4 unused-key [path]
```

**引数**

- `[path]`: チェック対象のファイルまたはディレクトリを指定します。デフォルトはカレントディレクトリです。

### `missing-key`

スクリプトファイルで参照されているものの、ローカライゼーションファイルで定義されていないキーを検出します。

```bash
mcp-hoi4 missing-key [path]
```

### `show-equation`

HoI4 コードから読みやすい数式に書き起こします。

```bash
mcp-hoi4 show-equation <file> <variable>
```

### `get-font-info`

フォントファイル (.fnt) からフォント名とサイズを抽出します。

```bash
mcp-hoi4 get-font-info [path]
```

### `gfx`

GFX ファイルのチェックと画像変換機能を提供します。

```bash
mcp-hoi4 gfx find-unused [path]    # 未使用PNG画像の検出
mcp-hoi4 gfx convert [path]        # PNG→DDS変換
mcp-hoi4 gfx check-missing [path]  # 参照されている存在しない画像の検出
```

## CWTools コマンド

### `cwtools validate`

CWTools ライブラリを使用した MOD ファイルの詳細検証を実行します。

```bash
mcp-hoi4 cwtools validate [path]
```

**機能:**
- 構文エラーの検出
- ブレース ({ }) の整合性チェック
- UTF-8 BOM の検出
- ファイル統計の表示

**例:**
```bash
mcp-hoi4 cwtools validate ./my_mod
```

### `cwtools parse`

指定したスクリプトファイルの詳細解析を実行します。

```bash
mcp-hoi4 cwtools parse <file>
```

**機能:**
- ファイル構造の解析
- 基本的な構文チェック
- ファイル統計の表示

**例:**
```bash
mcp-hoi4 cwtools parse ./common/national_focus/my_focus.txt
```

### `cwtools version`

統合されている CWTools のバージョン情報を表示します。

```bash
mcp-hoi4 cwtools version
```

### `cwtools check`

CWTools の動作確認を実行します。

```bash
mcp-hoi4 cwtools check
```

## 要件

- Node.js 18+
- .NET 6.0+ (CWTools フル機能使用時、簡易モードは .NET 9.0+ でも動作)

## CWTools について

このプロジェクトには、**CWTools** (MIT License) が統合されています。CWTools は Thomas Boby 氏による Paradox Interactive ゲーム用の解析ライブラリです。

- **Repository:** https://github.com/tboby/cwtools
- **License:** MIT License (詳細は `LICENSES.md` を参照)
- **Version:** 0.0.16-alpha2

## MCP Server (Claude Code 統合)

このプロジェクトには、Claude Code と統合するための MCP (Model Context Protocol) サーバーも含まれています。

### セットアップ

```bash
cd mcp-server
npm install
npm run build
```

### Claude Code への追加

#### 方法1: Claude MCP Add コマンド（推奨）

```bash
# 将来的に npm 公開後
claude mcp add hoi4-mcp
```

または、ローカル開発版を使用する場合：

```bash
# ローカルからインストール
npm install -g /path/to/mcp-hoi4/mcp-server
claude mcp add hoi4-mcp
```

#### 方法2: 手動セットアップ

##### 1. MCP サーバーをインストール
```bash
# プロジェクトのクローンとセットアップ
git clone <repository-url>
cd mcp-hoi4/mcp-server
npm install
npm run build
```

##### 2. Claude Code にサーバーを追加

**macOS/Linux:**
```bash
# Claude Code の MCP 設定ファイルを編集
code ~/.config/claude-desktop/mcp_settings.json
```

**Windows:**
```bash
# Claude Code の MCP 設定ファイルを編集
code %APPDATA%\Claude\mcp_settings.json
```

**設定内容:**
```json
{
  "mcpServers": {
    "hoi4": {
      "command": "npx",
      "args": ["mcp-hoi4-server"],
      "env": {}
    }
  }
}
```

または、絶対パス指定：
```json
{
  "mcpServers": {
    "hoi4": {
      "command": "node",
      "args": ["/absolute/path/to/mcp-hoi4/mcp-server/dist/index.js"],
      "env": {}
    }
  }
}
```

##### 3. Claude Code を再起動

設定完了後、Claude Code を再起動すると HOI4 ツールが利用可能になります。

詳細な設定方法は `mcp-server/claude-code-setup.md` を参照してください。

### 利用可能な機能

- **ツール**: MOD作成、バリデーション、キー検出、GFX操作、CWTools統合
- **リソース**: HOI4リファレンス、テンプレート、ベストプラクティス

### 使用例

Claude Code で以下のような自然言語コマンドが使用できます：

```
"新しいHOI4 MOD「My Great Mod」を作成して"
"現在のディレクトリのHOI4スクリプトをリントして"  
"未使用のローカライゼーションキーを見つけて"
"HOI4のトリガー一覧を表示して"
"国家追加のテンプレートを見せて"
"GFXファイルの参照エラーをチェックして"
"CWToolsでファイルを詳細検証して"
```

## 開発

### CLI開発
```bash
# 開発モードで実行
npm run dev

# リント実行
npm run lint

# 型定義生成
npm run gen:types
```

### MCP サーバー開発
```bash
cd mcp-server

# 開発モード（watch）
npm run dev

# ビルド
npm run build

# サーバー起動テスト
npm start
```

### NPM 公開

```bash
cd mcp-server

# バージョン更新
npm version patch  # or minor, major

# 公開
npm publish
```

公開後は以下のコマンドで簡単にインストール可能になります：
```bash
claude mcp add mcp-hoi4-server
```
