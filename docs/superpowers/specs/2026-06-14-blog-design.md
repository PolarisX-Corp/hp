# PolarisX ブログ機能 設計ドキュメント

- 日付: 2026-06-14
- 対象: `/blogs` 配下のブログサイト構築
- 投稿フロー: GitHub 上で PR を作成し、markdown 記事と画像を追加する形で投稿する

## 1. 目的・要件

- `/blogs` にブログ一覧、`/blogs/[slug]` に記事詳細ページを構築する。
- 記事投稿は **GitHub の PR** で行う。1 記事 = 1 フォルダ。markdown 形式の記事と、画像を入れる assets ディレクトリを同梱する。
- デザインは `blogpage/project/blog/`（`index.html` / `article.html` / `blog.css`）をピクセル基準に再現する。
- 既存サイトの実装規約（ページごとに自己完結したスコープ付き CSS、`next/font`、`lucide-react`、`public/assets/`）に従う。

## 2. 確定した方針（ブレスト結果）

- **カバー画像**: 投稿者が assets に画像を入れて frontmatter で指定。未指定ならカテゴリ別の抽象 SVG アートを自動フォールバック。
- **絞り込み/検索**: カテゴリチップ絞り込み と 記事検索（タイトル/概要/タグ/カテゴリ対象のクライアント全文検索）の両方を実装。
- **カテゴリ**: コード側で定義した固定セット（key / ラベル / lucide アイコン / カラー）。frontmatter の `category` はその key を参照。

## 3. 技術選定

- **コンテンツ配置（A 案採用）**: 1 記事 = 1 フォルダを `public/blog/<slug>/` に配置。
  - `index.md`（frontmatter + 本文）と `assets/`（画像）を同梱。
  - ビルド時に `fs` で markdown を読み込み、画像は `/blog/<slug>/assets/xxx.png` としてそのまま配信。追加のビルド処理は不要。
  - トレードオフ: 生 markdown も URL で参照可能（ブログ本文は公開情報のため実害なし）。
- **Markdown レンダリング**:
  - `gray-matter`（frontmatter 解析）
  - `react-markdown` + `remark-gfm`（表・チェックリスト等）+ `rehype-slug`（見出し ID = 目次/スクロールスパイ用）
  - **生 HTML は許可しない**（外部 PR 投稿の XSS 対策）。MDX は不採用。
- ルーティングは App Router。`/blog`（public 配信パス）と `/blogs`（ページパス）は別物のため衝突しない。

## 4. ルーティングとページ構成

- `/blogs`（一覧, server component）
  - ヒーロー / カテゴリチップ（client フィルタ）/ 注目記事（featured）/ 最新グリッド / クロージング CTA / 会社概要 / フッター
  - 検索・絞り込みは client component に全記事メタを渡してクライアント側で処理
- `/blogs/[slug]`（記事詳細, server component）
  - パンくず / 記事ヘッダー（カテゴリ・タイトル・リード・著者・日付・読了時間・シェア）/ カバー / 本文（`.bl-prose`）/ サイドバー（目次・サイド CTA・人気記事）/ 関連記事 / 会社概要 / フッター
  - `generateStaticParams` で全 slug を静的生成、`generateMetadata` で SEO メタ（OG 含む）
  - 読書プログレスバー・目次スクロールスパイ・シェアボタンは小さな client component
- デザインの「記事量産用テンプレート集」セクションは markdown 投稿では不要のため記事ページからは外し、投稿手順書に集約する（YAGNI）。

## 5. データ層

- `lib/blog/categories.ts`: 固定カテゴリ定義（`key`, `label`, `icon`(lucide 名), `accent`(色)）。
- `lib/blog/posts.ts`（server 専用）:
  - `getAllPosts()`: `public/blog/*/index.md` を走査し、frontmatter + 本文 + 算出メタ（`readingMinutes`, `slug`, 解決済み `cover`/カテゴリ）を返す。`publishedAt` 降順。
  - `getPostBySlug(slug)`: 単一記事を返す（本文 markdown 込み）。
  - `getFeaturedPost()` / 関連記事の取得ヘルパ。
  - `_` で始まるフォルダ（例: `_template`）と `README.md` は除外。
- frontmatter スキーマ（`lib/blog/types.ts`）:
  - `title: string`（必須）
  - `description: string`（必須, 一覧の excerpt / meta description 兼用）
  - `category: string`（必須, categories の key）
  - `author: string`（任意, 既定 "PolarisX 編集部"）
  - `publishedAt: string (YYYY-MM-DD)`（必須）
  - `updatedAt: string (YYYY-MM-DD)`（任意）
  - `cover: string`（任意, assets 相対パスまたは絶対 URL）
  - `tags: string[]`（任意）
  - `featured: boolean`（任意, 一覧の注目記事）
- 読了時間: 本文の文字数 / 約 500 文字/分（日本語想定）で算出、最小 1 分。
- バリデーション: 必須項目欠落・未定義カテゴリはビルド時に明示エラー（どのフォルダか分かるメッセージ）。

## 6. スタイル

- `app/blogs/blog.css` を作成し、`.theme-blog` スコープにトークン + `px-*` プリミティブ + `bl-*` コンポーネントをインライン（`service.css` / `company.css` と同方式）。
- デザインの `blog.css` と DS `styles.css` から必要分を取り込み、`lucide` UMD 依存を `lucide-react` に置換。
- フォントは `app/fonts.ts` の `spaceGrotesk` / `notoSansJP` / `jetbrainsMono` をラッパー div の variable クラスで適用。

## 7. 投稿フロー（PR ワークフロー）整備

- `public/blog/_template/`: コピー元テンプレート（`index.md` 雛形 + `assets/` + サンプル画像 or `.gitkeep`）。
- `public/blog/README.md`: 日本語の投稿手順書（フォルダ作成 → frontmatter 記入 → 画像配置 → PR 作成、カテゴリ key 一覧、カバー画像の扱い、利用可能な markdown 記法）。
- `.github/PULL_REQUEST_TEMPLATE.md`（または blog 用テンプレート）: 投稿 PR 用チェックリスト。
- 実例ポスト 1 本: デザインの「データドリブン経営とは？…7 つのステップ」を移植し `public/blog/data-driven-management/` として投入（一覧・記事ページの動作確認も兼ねる）。

## 8. 依存追加

- `react-markdown`, `remark-gfm`, `rehype-slug`, `gray-matter` を `dependencies` に追加。

## 9. スコープ外（今回やらないこと）

- 記事のページネーション、タグ別アーカイブページ、RSS、コメント機能。
- CMS 連携。投稿はあくまで PR ベース。
- 記事内の特殊ブロック（要点カード/インライン CTA/stat strip 等）の専用 markdown 記法 — v1 は標準 markdown を `.bl-prose` で描画。必要なら将来拡張。

## 10. 検証

- `next build` が成功し、実例ポストが静的生成されること。
- 一覧でカテゴリ絞り込み・検索が動作すること。
- 記事ページで目次スクロールスパイ・プログレスバー・シェアが動作し、画像が表示されること。
- プレビューでデザイン再現を確認。
