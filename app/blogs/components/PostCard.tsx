import Link from "next/link";
import type { PostMeta } from "@/lib/blog/types";
import { formatDot } from "@/lib/blog/format";
import { CoverArt } from "./CoverArt";
import { Icon } from "./Icon";

/** 一覧グリッド・関連記事で使う標準カード（サーバー/クライアント双方で利用可） */
export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link className="bl-card" href={`/blogs/${post.slug}`}>
      <CoverArt
        category={post.category}
        cover={post.cover}
        alt={post.title}
        wrapperClassName="bl-card__media"
        overlay={
          <div className="bl-cover__tag">
            <span className="bl-cat bl-cat--ghost">
              <Icon name={post.category.icon} size={13} />
              {post.category.label}
            </span>
          </div>
        }
      />
      <div className="bl-card__body">
        <h3 className="bl-card__title">{post.title}</h3>
        <p className="bl-card__excerpt">{post.description}</p>
        <div className="bl-card__meta">
          {formatDot(post.publishedAt)}
          <span className="dot" />
          読了 {post.readingMinutes}分
        </div>
      </div>
    </Link>
  );
}
