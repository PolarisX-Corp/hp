# ブログ記事の投稿ガイド

PolarisX ブログ（`/blogs`）の記事は、**この `public/blog/` 配下に Markdown を追加し、GitHub で PR を作成する**ことで投稿します。CMS は使いません。マージされると自動的にサイトに公開されます。

## 1. 記事フォルダを作る

1 記事 = 1 フォルダです。`_template/` をコピーして、フォルダ名を記事の **slug**（URL に使う英小文字・ハイフン）にリネームします。

```
public/blog/
  your-article-slug/      ← このフォルダ名がURL: /blogs/your-article-slug
    index.md              ← 記事本体（必須）
    assets/               ← 画像置き場
      cover.png
      figure-1.png
```

> フォルダ名（slug）は半角英小文字・数字・ハイフンのみ。`_` 始まりは雛形扱いで公開されません。

## 2. frontmatter を記入する

`index.md` の先頭（`---` で囲まれた部分）に記事情報を書きます。

| キー | 必須 | 説明 |
| --- | --- | --- |
| `title` | ✅ | 記事タイトル |
| `description` | ✅ | 概要（一覧の抜粋・meta description。120字程度） |
| `category` | ✅ | 下記のカテゴリ key から1つ |
| `publishedAt` | ✅ | 公開日 `YYYY-MM-DD` |
| `author` | | 著者名（省略時は「PolarisX 編集部」） |
| `updatedAt` | | 更新日 `YYYY-MM-DD` |
| `cover` | | カバー画像（`assets/xxx.png`）。省略時はカテゴリ別の自動生成アート |
| `tags` | | タグの配列 |
| `featured` | | 一覧トップの「注目の記事」に出すなら `true` |

### カテゴリ key 一覧

`lib/blog/categories.ts` で定義された固定セットです。ここにある key を `category` に指定します。

| key | 表示名 |
| --- | --- |
| `data-driven-management` | データドリブン経営 |
| `bi` | BI導入 |
| `kpi` | KPI設計 |
| `repro-score` | 再現スコア |
| `data-integration` | データ統合 |
| `dx-org` | DX・組織 |
| `product` | プロダクト活用 |

新しいカテゴリを増やしたい場合は `lib/blog/categories.ts` に追加してください（アイコン・カラーもそこで定義）。

## 3. 本文を書く

frontmatter の下に Markdown で本文を書きます。

- 見出し `## ` `### ` は**自動で目次**に並びます（記事ページ右の目次）。
- 使える記法: 見出し / 段落 / **太字** / _斜体_ / マーカー `==` / 箇条書き / 番号付きリスト / 引用 `>` / 表 / コード / リンク / 画像。
- **生の HTML は使えません**（安全のため無効化しています）。
- 読了時間は本文の文字数から自動計算されます。

### 重要箇所のマーカー

結論やキーワードなど、流し読みでも拾ってほしい箇所は `==` で囲むとマーカー付きで表示されます。

```markdown
成果を出す企業は、==データの一元化==から始めています。
```

使い方のルール:

- **使用目安は 1 段落に 1 箇所、1 セクション（`##`）に 2〜3 箇所まで。** 増えるほど 1 箇所あたりの効果は薄れます。
- マーカーを外しても文章の意味が通るように書きます（音声読み上げでは通常の本文として読まれます）。
- 対象は**結論・数値・キーワード**などの短いフレーズ。文全体を塗るのは避けます。
- `==` の内側の端に空白を入れると変換されません（`== こう ==` は不可、`==こう==` と書く）。
- `==**太字入り**==` のように内側で他の記法も使えます。コード内の `==` は変換されません。

### 画像の入れ方

画像は記事フォルダの `assets/` に置き、**相対パス**で参照します。

```markdown
![図1の説明](assets/figure-1.png)
```

カバー画像を使う場合は frontmatter に `cover: assets/cover.png` を指定します。指定しなければカテゴリ別の抽象アートが自動で表示されます。

## 4. PR を作る

```bash
git checkout -b blog/your-article-slug
git add public/blog/your-article-slug
git commit -m "blog: <記事タイトル>"
git push -u origin blog/your-article-slug
```

GitHub で PR を作成してください。レビュー後マージされると公開されます。ローカルで確認するには `npm run dev` で `/blogs` を開きます。
