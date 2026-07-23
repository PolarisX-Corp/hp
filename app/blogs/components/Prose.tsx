import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

/**
 * 記事本文の Markdown を `.bl-prose` スタイルで描画する（サーバーレンダリング）。
 * - remark-gfm: 表・チェックリスト等
 * - rehype-slug: 見出しに id を付与（目次/スクロールスパイと一致）
 * - 生 HTML は許可しない（rehype-raw を入れない＝外部 PR 投稿の XSS 対策）
 * - skipHtml: rehype-raw なしだと生 HTML・コメントが本文にテキスト表示されるため、描画から完全に除外する
 * - assets 相対パスの画像/リンクを /blog/<slug>/ 起点に解決
 */
export function Prose({ content, basePath }: { content: string; basePath: string }) {
  const urlTransform = (url: string): string => {
    if (!url) return url;
    const lower = url.trim().toLowerCase();
    if (lower.startsWith("javascript:") || lower.startsWith("data:")) return "";
    // 絶対 URL / ルート相対 / アンカーはそのまま
    if (/^[a-z]+:/.test(lower) || url.startsWith("/") || url.startsWith("#")) return url;
    // 相対パス（assets/... や ./assets/...）を配信パスに解決
    return `${basePath}/${url.replace(/^\.\//, "")}`;
  };

  return (
    <div className="bl-prose">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        urlTransform={urlTransform}
        skipHtml
      >
        {content}
      </Markdown>
    </div>
  );
}
