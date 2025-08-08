# mcp-hoi4

HOI4 Modding Claude MCP (JS版)

Hearts of Iron IV の Mod 制作を支援する CLI ツールです。

## 概要

このツールは、以下の機能を提供します。

- HoI4 Mod の雛形作成
- DSL の構文チェック
- 未使用のローカライゼーションキーの検出

## インストール

```bash
npm install -g .
```

## 使い方

インストール後、`mcp-hoi4` コマンドが使用できます。

```bash
mcp-hoi4 --help
```

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
