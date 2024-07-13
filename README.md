# React 入門 ハンズオン

このプロジェクトは、[React 入門 ハンズオン](https://alluring-sternum-0fe.notion.site/React-defef1f533974500b9c820534ce793ea)に基づいて作成されました。

## プロジェクトの概要

このプロジェクトは、React と Vite を使用して構築されたシンプルなアプリケーションです。以下の主要な機能が含まれています：

- React コンポーネントの作成と使用
- 状態管理（Jotai を使用）
- フォームのハンドリング（react-hook-form を使用）
- API との通信（@tanstack/react-query を使用）

## セットアップ

### 必要なツール

- Node.js (バージョン 14 以上)
- npm または yarn

### インストール

プロジェクトの依存関係をインストールします：

```zsh
npm install
```

### 開発サーバーの起動

開発サーバーを起動します：

```zsh
npm run dev
```

## スクリプト

以下のスクリプトが利用可能です：

- `npm run dev`：開発サーバーを起動します。
- `npm run build`：プロジェクトをビルドします。
- `npm run lint`：ESLint を使用してコードをリントします。
- `npm run preview`：ビルドされたプロジェクトをプレビューします。
- `npm run test-ct`：Playwright を使用してコンポーネントテストを実行します。

## ディレクトリ構成

- `src/`：ソースコード
  - `components/`：React コンポーネント
  - `pages/`：ページコンポーネント
  - `api/`：API 呼び出し
  - `state/`：状態管理
- `public/`：静的ファイル
- `tests/`：テストコード

## 使用技術

- React
- Vite
- Jotai
- react-hook-form
- @tanstack/react-query
- Tailwind CSS
- DaisyUI
