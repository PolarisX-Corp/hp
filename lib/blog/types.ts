import type { Category } from "./categories";

/** 記事 index.md の frontmatter（投稿者が記述する生データ） */
export interface PostFrontmatter {
  title: string;
  description: string;
  /** categories.ts の key */
  category: string;
  author?: string;
  /** YYYY-MM-DD */
  publishedAt: string;
  /** YYYY-MM-DD（任意） */
  updatedAt?: string;
  /** assets 相対パス（例: assets/cover.png）または絶対 URL（任意） */
  cover?: string;
  tags?: string[];
  /** 一覧の「注目の記事」に出すか */
  featured?: boolean;
}

/** 目次 1 項目 */
export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/** 一覧表示などに使う、本文を含まない記事メタ情報 */
export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  category: Category;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  /** 解決済みカバー画像 URL。未指定なら undefined（自動生成アートにフォールバック） */
  cover?: string;
  tags: string[];
  featured: boolean;
  /** 本文から算出した読了目安（分） */
  readingMinutes: number;
}

/** 本文・目次まで含む単一記事 */
export interface Post extends PostMeta {
  /** 画像 URL を解決するためのベースパス（/blog/<slug>） */
  basePath: string;
  /** Markdown 本文 */
  content: string;
  toc: TocItem[];
}
