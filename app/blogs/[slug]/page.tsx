import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../../fonts";
import {
  getAllPosts,
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog/posts";
import { formatDot } from "@/lib/blog/format";
import { COMPANY_BRAND } from "@/lib/company";
import { BlogHeader, BlogCompany, BlogFooter } from "../components/BlogChrome";
import { CoverArt } from "../components/CoverArt";
import { PostCard } from "../components/PostCard";
import { Prose } from "../components/Prose";
import { Icon } from "../components/Icon";
import { ReadingProgress, TocNav } from "../components/ArticleClient";
import "../blog.css";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.cover ? [post.cover] : undefined,
    },
  };
}

function avatarInitials(author: string): string {
  if (author.startsWith("PolarisX")) return "PX";
  return author.replace(/\s/g, "").slice(0, 2);
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = getRelatedPosts(post, allPosts);
  const popular = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div
      className={`theme-blog ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <ReadingProgress />
      <BlogHeader />

      <main className="bl-wrap">
        {/* breadcrumb */}
        <nav className="bl-breadcrumb" aria-label="パンくず">
          <Link href="/">ホーム</Link>
          <Icon name="chevron-right" size={13} />
          <Link href="/blogs">ブログ</Link>
          <Icon name="chevron-right" size={13} />
          <Link href="/blogs">{post.category.label}</Link>
          <Icon name="chevron-right" size={13} />
          <span aria-current="page">{post.title}</span>
        </nav>

        {/* article head */}
        <div className="bl-article-head">
          <span className="bl-cat">
            <Icon name={post.category.icon} size={13} />
            {post.category.label}
          </span>
          <h1>{post.title}</h1>
          <p className="lede">{post.description}</p>

          <div className="bl-meta">
            <div className="bl-byline">
              <div className="bl-byline__av">{avatarInitials(post.author)}</div>
              <div>
                <div className="bl-byline__name">{post.author}</div>
                <div className="bl-byline__role">AI活用の実務者チーム</div>
              </div>
            </div>
            <div className="bl-meta__dates">
              <span>
                公開 <b>{formatDot(post.publishedAt)}</b>
              </span>
              {post.updatedAt && (
                <span>
                  更新 <b>{formatDot(post.updatedAt)}</b>
                </span>
              )}
            </div>
            <span className="bl-meta__read">
              <Icon name="clock" size={14} />
              読了 約{post.readingMinutes}分
            </span>
          </div>
        </div>

        {/* hero cover */}
        <CoverArt
          category={post.category}
          cover={post.cover}
          alt={post.title}
          wrapperClassName="bl-hero-cover"
          glowStyle={{ width: 380, height: 380, top: -120, right: -40 }}
        />

        {/* layout: body + sidebar */}
        <div className="bl-layout">
          <article className="bl-body">
            <Prose
              content={post.content}
              basePath={post.basePath}
              category={post.category}
            />

            {post.tags.length > 0 && (
              <div className="bl-tags">
                {post.tags.map((tag) => (
                  <Link key={tag} href="/blogs" className="bl-tag">
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            {/* author block */}
            <div className="bl-author">
              <div className="bl-author__av">{avatarInitials(post.author)}</div>
              <div>
                <div className="bl-author__name">{post.author}</div>
                <div className="bl-author__role">AI活用の実務者チーム</div>
                <p className="bl-author__bio">
                  {COMPANY_BRAND.mission}
                  法人向けAIエージェントの開発、社内ナレッジベースの構築、AI導入・運用に関する実務知見を発信しています。
                </p>
                <div className="bl-author__links">
                  <Link href="/company">
                    <Icon name="globe" size={14} />
                    会社情報
                  </Link>
                  <Link href="/#contact">
                    <Icon name="mail" size={14} />
                    お問い合わせ
                  </Link>
                </div>
              </div>
            </div>

            {/* large CTA */}
            <div className="bl-ctablock">
              <div className="bl-stars">
                <div className="bl-star" style={{ width: 260, height: 260, top: -60, right: "6%" }} />
                <div className="bl-star" style={{ width: 180, height: 180, bottom: -70, left: "10%", opacity: 0.6 }} />
              </div>
              <h3>{COMPANY_BRAND.catchphrase}</h3>
              <p>
                法人向けAIエージェントの開発から社内ナレッジベースの構築、導入・運用まで、PolarisXが一気通貫で支援します。
              </p>
              <div className="bl-ctablock__btns">
                <Link className="px-btn px-btn--lg bl-btn-white" href="/#contact">
                  <Icon name="message-square-text" size={18} className="px-btn__icon" />
                  無料で相談する
                </Link>
              </div>
            </div>
          </article>

          {/* sidebar */}
          <aside className="bl-side">
            <div className="bl-side__card bl-side__card--toc">
              <TocNav toc={post.toc} />
            </div>

            <div className="bl-side-cta">
              <div className="bl-stars">
                <div className="bl-star" style={{ width: 160, height: 160, top: -50, right: -30 }} />
              </div>
              <h4>資料・導入のご相談</h4>
              <p>AIエージェントや社内ナレッジベースの導入について、課題に合わせてご案内します。</p>
              <Link className="px-btn px-btn--block bl-btn-white" href="/#contact">
                <Icon name="message-square-text" size={18} className="px-btn__icon" />
                お問い合わせ
              </Link>
            </div>

            {popular.length > 0 && (
              <div className="bl-side__card bl-side__card--popular">
                <div className="bl-side__h">
                  <Icon name="flame" size={14} />
                  人気の記事
                </div>
                <ul className="bl-pop">
                  {popular.map((p, i) => (
                    <li key={p.slug}>
                      <Link href={`/blogs/${p.slug}`}>
                        <span className="bl-pop__rank">{i + 1}</span>
                        <span>
                          <span className="bl-pop__t">{p.title}</span>
                          <span className="bl-pop__m">{formatDot(p.publishedAt)}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* related */}
      {related.length > 0 && (
        <section className="bl-related">
          <div className="bl-wrap">
            <div className="bl-section__head">
              <h2>おすすめの記事</h2>
              <Link href="/blogs">
                記事一覧を見る
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
            <div className="bl-grid">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <BlogCompany />
      <BlogFooter />
    </div>
  );
}
