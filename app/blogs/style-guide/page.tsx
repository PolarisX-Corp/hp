import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../../fonts";
import { BlogHeader, BlogFooter } from "../components/BlogChrome";
import { Prose } from "../components/Prose";
import "../blog.css";

/**
 * 記事フォーマットの確認用ページ（開発時のみ）。
 *
 * sample.md を実際の記事と同じ <Prose> / .bl-prose で描画するため、見出し・リスト・
 * 引用・表などのスタイル変更をここ 1 ページで目視確認できる。
 * 本番ビルドでは 404（記事一覧・サイトマップにも出さない）。
 */
const IS_DEV = process.env.NODE_ENV !== "production";

export const metadata: Metadata = {
  title: "記事フォーマット確認用（開発時のみ）",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  if (!IS_DEV) notFound();

  const sample = fs.readFileSync(
    path.join(process.cwd(), "app", "blogs", "style-guide", "sample.md"),
    "utf8",
  );

  return (
    <div
      className={`theme-blog ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <BlogHeader />

      <main className="bl-wrap">
        {/* 記事ページと同じ H1 の見え方を確認するため .bl-article-head を流用 */}
        <div className="bl-article-head">
          <span className="bl-cat">記事フォーマット</span>
          <h1>記事フォーマット見本（H1 は記事タイトル）</h1>
          <p className="lede">
            本文で使える Markdown の全記法を、実際の記事と同じスタイルで並べたページです。開発時のみ表示され、本番ビルドでは 404 になります。
          </p>
        </div>

        <div className="bl-section">
          <article className="bl-body">
            <Prose content={sample} basePath="/blog/_style-guide" />
          </article>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}
