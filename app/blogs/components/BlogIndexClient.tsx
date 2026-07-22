"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/blog/categories";
import type { PostMeta } from "@/lib/blog/types";
import { formatDot } from "@/lib/blog/format";
import { CoverArt } from "./CoverArt";
import { PostCard } from "./PostCard";
import { Icon } from "./Icon";

function matches(post: PostMeta, q: string): boolean {
  const hay = [
    post.title,
    post.description,
    post.category.label,
    ...post.tags,
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(q);
}

export function BlogIndexClient({
  posts,
  featuredSlug,
}: {
  posts: PostMeta[];
  featuredSlug?: string;
}) {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [query, setQuery] = useState("");

  const visibleCategories = useMemo(() => {
    const publishedCategoryKeys = new Set(posts.map((post) => post.category.key));
    return CATEGORIES.filter((category) => publishedCategoryKeys.has(category.key));
  }, [posts]);

  const q = query.trim().toLowerCase();
  const isFiltering = activeCat !== "all" || q.length > 0;

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      if (activeCat !== "all" && p.category.key !== activeCat) return false;
      if (q && !matches(p, q)) return false;
      return true;
    });
  }, [posts, activeCat, q]);

  const featured = featuredSlug
    ? posts.find((p) => p.slug === featuredSlug)
    : posts[0];
  const latest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      {/* filters + search */}
      <div className="bl-filterbar" id="blog-search">
        <div className="bl-filters">
          <button
            className={`bl-chip${activeCat === "all" ? " is-active" : ""}`}
            onClick={() => setActiveCat("all")}
          >
            すべて
          </button>
          {visibleCategories.map((c) => (
            <button
              key={c.key}
              className={`bl-chip${activeCat === c.key ? " is-active" : ""}`}
              onClick={() => setActiveCat(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="bl-searchbox">
          <Icon name="search" size={16} />
          <input
            type="search"
            placeholder="記事を検索"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="記事を検索"
          />
        </div>
      </div>

      {isFiltering ? (
        // --- 絞り込み/検索中: 結果グリッド ---
        <section className="bl-section">
          <div className="bl-section__head">
            <h2>検索結果（{filtered.length}件）</h2>
          </div>
          {filtered.length > 0 ? (
            <div className="bl-grid">
              {filtered.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          ) : (
            <p className="bl-empty">
              条件に一致する記事が見つかりませんでした。キーワードやカテゴリを変えてお試しください。
            </p>
          )}
        </section>
      ) : (
        // --- 既定表示: 注目 + 最新 ---
        <>
          {featured && (
            <section className="bl-section">
              <div className="bl-section__head">
                <h2>注目の記事</h2>
              </div>
              <Link className="bl-feature" href={`/blogs/${featured.slug}`}>
                <CoverArt
                  category={featured.category}
                  cover={featured.cover}
                  alt={featured.title}
                  wrapperClassName="bl-feature__media"
                  glowStyle={{ width: 300, height: 300, top: -80, right: -40 }}
                  overlay={
                    <div className="bl-cover__tag">
                      <span className="bl-cat">
                        <Icon name={featured.category.icon} size={13} />
                        {featured.category.label}
                      </span>
                    </div>
                  }
                />
                <div className="bl-feature__body">
                  <h3>{featured.title}</h3>
                  <p>{featured.description}</p>
                  <div className="bl-card__meta" style={{ marginTop: 0 }}>
                    {featured.author}
                    <span className="dot" />
                    {formatDot(featured.publishedAt)}
                    <span className="dot" />
                    読了 {featured.readingMinutes}分
                  </div>
                </div>
              </Link>
            </section>
          )}

          {latest.length > 0 && (
            <section className="bl-section">
              <div className="bl-section__head">
                <h2>最新の記事</h2>
              </div>
              <div className="bl-grid">
                {latest.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}
