import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import { getAllPosts, getFeaturedPost } from "@/lib/blog/posts";
import { BlogHeader, BlogCompany, BlogFooter } from "./components/BlogChrome";
import { BlogIndexClient } from "./components/BlogIndexClient";
import { Icon } from "./components/Icon";
import "./blog.css";

export const metadata: Metadata = {
  title: "PolarisX Blog — 意思決定とデータ活用の知見",
  description:
    "データドリブン経営・BI導入・KPI設計・意思決定の仕組み化に関する実務知見をお届けする PolarisX 公式ブログ。",
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
          <h1>意思決定とデータ活用の、再現可能な知見を。</h1>
          <p>
            データドリブン経営・BI導入・KPI設計・意思決定の仕組み化。勘と経験に頼らない「良い判断」をつくるための実務ノウハウをお届けします。
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
            <h3>意思決定を、属人化から解放する。</h3>
            <p>
              データドリブン経営・BI活用について、まずは15分の無料相談から。専任担当が貴社の課題に合わせてご案内します。
            </p>
            <div className="bl-ctablock__btns">
              <Link className="px-btn px-btn--lg bl-btn-white" href="/#contact">
                <Icon name="message-square-text" size={18} className="px-btn__icon" />
                無料で相談する
              </Link>
              <Link className="px-btn px-btn--lg bl-btn-ghost-w" href="/#contact">
                <Icon name="file-text" size={18} className="px-btn__icon" />
                資料を見る
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
