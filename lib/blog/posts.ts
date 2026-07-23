import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { getCategory } from "./categories";
import type { Post, PostFrontmatter, PostMeta, TocItem } from "./types";

// 記事は public/blog/<slug>/index.md として配置する。
// public 配下に置くことで assets 画像が /blog/<slug>/assets/... としてそのまま配信される。
const BLOG_DIR = path.join(process.cwd(), "public", "blog");

const DEFAULT_AUTHOR = "PolarisX 編集部";
// 日本語想定の読了速度（文字/分）
const CHARS_PER_MINUTE = 500;

function isPostDir(name: string): boolean {
  // "_template" などアンダースコア始まりは雛形扱いで除外
  if (name.startsWith("_") || name.startsWith(".")) return false;
  const full = path.join(BLOG_DIR, name);
  return (
    fs.statSync(full).isDirectory() &&
    fs.existsSync(path.join(full, "index.md"))
  );
}

function listSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter(isPostDir);
}

/** Markdown の装飾を落として素のテキストにする（読了時間・目次表示・slug 用） */
function stripInline(md: string): string {
  return md
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/~~(.*?)~~/g, "$1")
    // マーカー記法（remark-mark と同じ「内側の端が空白でない」場合のみ）
    .replace(/==(\S(?:[^=]*\S)?)==/g, "$1")
    .trim();
}

function computeReadingMinutes(content: string): number {
  const text = content
    .replace(/```[\s\S]*?```/g, "") // コードブロック除去
    .replace(/[#>*_`~\-|=]/g, "")
    .replace(/\s+/g, "");
  return Math.max(1, Math.round(text.length / CHARS_PER_MINUTE));
}

/** 見出し(##, ###)から目次を生成。rehype-slug と同じ github-slugger で id を一致させる */
function buildToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;
  for (const raw of content.split("\n")) {
    const line = raw.trimEnd();
    if (/^```/.test(line.trim())) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const level = m[1].length as 2 | 3;
    const text = stripInline(m[2]);
    items.push({ id: slugger.slug(text), text, level });
  }
  return items;
}

/** frontmatter の cover を配信 URL に解決する */
function resolveCover(
  cover: string | undefined,
  basePath: string,
): string | undefined {
  if (!cover) return undefined;
  if (/^https?:\/\//.test(cover) || cover.startsWith("/")) return cover;
  return `${basePath}/${cover.replace(/^\.\//, "")}`;
}

function readPost(slug: string): Post {
  const file = path.join(BLOG_DIR, slug, "index.md");
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const fm = data as PostFrontmatter;

  // --- バリデーション（どのフォルダが原因か分かるメッセージで停止） ---
  const where = `public/blog/${slug}/index.md`;
  for (const key of ["title", "description", "category", "publishedAt"] as const) {
    if (!fm[key]) throw new Error(`[blog] ${where}: frontmatter "${key}" は必須です`);
  }
  const category = getCategory(fm.category);
  if (!category) {
    throw new Error(
      `[blog] ${where}: 未定義のカテゴリ "${fm.category}"。lib/blog/categories.ts の key を使用してください`,
    );
  }

  const basePath = `/blog/${slug}`;
  return {
    slug,
    title: fm.title,
    description: fm.description,
    category,
    author: fm.author?.trim() || DEFAULT_AUTHOR,
    publishedAt: fm.publishedAt,
    updatedAt: fm.updatedAt,
    cover: resolveCover(fm.cover, basePath),
    tags: Array.isArray(fm.tags) ? fm.tags : [],
    featured: fm.featured === true,
    readingMinutes: computeReadingMinutes(content),
    basePath,
    content,
    toc: buildToc(content),
  };
}

function toMeta(post: Post): PostMeta {
  const { content: _c, toc: _t, basePath: _b, ...meta } = post;
  void _c;
  void _t;
  void _b;
  return meta;
}

/** 全記事メタを公開日の新しい順で返す */
export function getAllPosts(): PostMeta[] {
  return listSlugs()
    .map((slug) => toMeta(readPost(slug)))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

/** 単一記事（本文込み）。存在しなければ null */
export function getPostBySlug(slug: string): Post | null {
  try {
    if (!isPostDir(slug)) return null;
  } catch {
    return null;
  }
  return readPost(slug);
}

/** 静的生成用の全 slug */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

/** 注目記事（featured 優先、無ければ最新） */
export function getFeaturedPost(posts: PostMeta[]): PostMeta | undefined {
  return posts.find((p) => p.featured) ?? posts[0];
}

/** 同一カテゴリ優先で関連記事を返す */
export function getRelatedPosts(
  current: PostMeta,
  posts: PostMeta[],
  limit = 3,
): PostMeta[] {
  const others = posts.filter((p) => p.slug !== current.slug);
  const sameCat = others.filter((p) => p.category.key === current.category.key);
  const rest = others.filter((p) => p.category.key !== current.category.key);
  return [...sameCat, ...rest].slice(0, limit);
}
