import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import { getAllPosts, getFeaturedPost } from "@/lib/blog/posts";
import { COMPANY_BRAND } from "@/lib/company";
import { BlogHeader, BlogCompany, BlogFooter } from "./components/BlogChrome";
import { BlogIndexClient } from "./components/BlogIndexClient";
import { Icon } from "./components/Icon";
import "./blog.css";

export const metadata: Metadata = {
  title: "PolarisX Blog — AI活用の実務知見",
  description:
    "AIエージェント・AI社員、社内ナレッジ・RAG、法人AI導入に関する実務知見をお届けするPolarisX公式ブログ。",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost(posts);

  return (
    <div
      className={`theme-blog ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <BlogHeader />

      {/* HERO */}
      <section className="bl-index-hero">
        <div className="bl-stars">
          <div className="bl-star" style={{ width: 360, height: 360, top: -120, right: "4%" }} />
          <div className="bl-star" style={{ width: 220, height: 220, bottom: -100, left: "8%", opacity: 0.6 }} />
        </div>
        <div className="bl-wrap bl-index-hero__in">
          <span className="bl-eyebrow">
            <Icon name="sparkles" size={15} />
            PolarisX Blog
          </span>
          <h1>AIを、会社の戦力にする実務知見を。</h1>
          <p>
            AIエージェント・AI社員、社内ナレッジ・RAG、法人AI導入。現場でAIを使い続けるための実務ノウハウをお届けします。
          </p>
        </div>
      </section>

      <main className="bl-wrap">
        <BlogIndexClient posts={posts} featuredSlug={featured?.slug} />

        {/* closing CTA band */}
        <section className="bl-section">
          <div className="bl-ctablock" style={{ margin: 0 }}>
            <div className="bl-stars">
              <div className="bl-star" style={{ width: 260, height: 260, top: -60, right: "6%" }} />
              <div className="bl-star" style={{ width: 180, height: 180, bottom: -70, left: "10%", opacity: 0.6 }} />
            </div>
            <h3>{COMPANY_BRAND.catchphrase}</h3>
            <p>
              法人向けAIエージェントの開発や社内ナレッジベースの構築について、貴社の課題に合わせてご案内します。
            </p>
            <div className="bl-ctablock__btns">
              <Link className="px-btn px-btn--lg bl-btn-white" href="/#contact">
                <Icon name="message-square-text" size={18} className="px-btn__icon" />
                無料で相談する
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BlogCompany />
      <BlogFooter />
    </div>
  );
}
