/**
 * 記事本文の章と章の間に、CTA描画用の安全な aside ノードを1つ挿入する。
 *
 * 挿入位置:
 * - H2 が2つ以上: H2章数の中央にあたる章の直前
 *   （8章・9章なら第5章の直前）
 * - H2 が1つ以下: ルート要素の中央。可能なら後ろに本文を1要素残す
 *
 * Markdownを文字列分割しないため、参照リンク、脚注、重複見出しのslugを壊さない。
 */

export const ARTICLE_CTA_SLOT_CLASS = "bl-article-cta-slot";

type MdNode = {
  type: string;
  depth?: number;
  value?: string;
  children?: MdNode[];
  data?: {
    hName?: string;
    hProperties?: Record<string, unknown>;
  };
};

export function remarkArticleCta() {
  return (tree: unknown): void => {
    const root = tree as MdNode;
    if (!root.children || root.children.length === 0) return;

    const h2Indexes = root.children.flatMap((node, index) =>
      node.type === "heading" && node.depth === 2 ? [index] : [],
    );

    let insertAt: number;
    if (h2Indexes.length >= 2) {
      insertAt = h2Indexes[Math.floor(h2Indexes.length / 2)];
    } else if (root.children.length === 1) {
      insertAt = 1;
    } else {
      insertAt = Math.min(
        root.children.length - 1,
        Math.max(1, Math.ceil(root.children.length / 2)),
      );
    }

    root.children.splice(insertAt, 0, {
      type: "paragraph",
      data: {
        hName: "aside",
        hProperties: { className: [ARTICLE_CTA_SLOT_CLASS] },
      },
      children: [{ type: "text", value: "" }],
    });
  };
}
