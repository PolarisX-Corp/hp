<!--
ブログ記事の投稿 PR の場合は、以下のチェックリストを使ってください。
それ以外の変更では削除してかまいません。投稿ガイド: public/blog/README.md
-->

## 概要

<!-- 変更内容を1〜2行で -->

## ブログ記事投稿の場合

- [ ] `public/blog/<slug>/index.md` を追加した（slug は英小文字・数字・ハイフン）
- [ ] frontmatter の必須項目を記入した（`title` / `description` / `category` / `publishedAt`）
- [ ] `category` は `lib/blog/categories.ts` の key を使用した
- [ ] 画像は `public/blog/<slug>/assets/` に置き、相対パスで参照した
- [ ] `npm run build` がローカルで成功した（記事が静的生成されることを確認）
- [ ] `/blogs` 一覧と記事ページで表示崩れがないことを確認した
