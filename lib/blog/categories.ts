// ブログのカテゴリは「コードで定義した固定セット」。
// 記事の frontmatter `category` はここで定義した `key` を参照する。
// 追加・変更はこのファイルだけで完結する。

/** 自動生成カバーアートのグラデーション系統 */
export type CoverVariant = "a" | "b" | "c";
/** 自動生成カバーアートの図形 */
export type CoverShape = "bars" | "donut" | "line" | "network" | "rows";

export interface Category {
  /** frontmatter `category` で指定する識別子 */
  key: string;
  /** 表示名 */
  label: string;
  /** lucide-react のアイコン名（components/Icon.tsx の registry に対応） */
  icon: string;
  /** カバー画像未指定時の自動生成アートの系統 */
  coverVariant: CoverVariant;
  /** カバー画像未指定時の自動生成アートの図形 */
  coverShape: CoverShape;
}

export const CATEGORIES: Category[] = [
  // ---- V2キー（2026-07-21〜）: 新規記事はこちらのみ使用 ----
  {
    key: "ai-agent",
    label: "AIエージェント・AI社員",
    icon: "sparkles",
    coverVariant: "c",
    coverShape: "network",
  },
  {
    key: "knowledge-base",
    label: "社内ナレッジ・RAG",
    icon: "database",
    coverVariant: "b",
    coverShape: "rows",
  },
  {
    key: "ai-helpdesk",
    label: "問い合わせ自動化",
    icon: "message-square-text",
    coverVariant: "a",
    coverShape: "donut",
  },
  {
    key: "ai-adoption",
    label: "法人AI導入",
    icon: "compass",
    coverVariant: "a",
    coverShape: "line",
  },
  {
    key: "ai-workflow",
    label: "業務効率化・AI活用術",
    icon: "clock",
    coverVariant: "b",
    coverShape: "bars",
  },
  {
    key: "ai-tools",
    label: "AIツールガイド",
    icon: "lightbulb",
    coverVariant: "a",
    coverShape: "bars",
  },
  {
    key: "case-study",
    label: "導入事例・実践レポート",
    icon: "file-text",
    coverVariant: "b",
    coverShape: "line",
  },
  // ---- 旧キー（deprecated）: 既存公開記事の互換用。新規記事での使用禁止 ----
  {
    key: "data-driven-management",
    label: "データドリブン経営",
    icon: "bar-chart-3",
    coverVariant: "a",
    coverShape: "bars",
  },
  {
    key: "bi",
    label: "BI導入",
    icon: "check-circle-2",
    coverVariant: "a",
    coverShape: "bars",
  },
  {
    key: "kpi",
    label: "KPI設計",
    icon: "target",
    coverVariant: "b",
    coverShape: "donut",
  },
  {
    key: "repro-score",
    label: "再現スコア",
    icon: "sparkles",
    coverVariant: "c",
    coverShape: "line",
  },
  {
    key: "data-integration",
    label: "データ統合",
    icon: "database",
    coverVariant: "b",
    coverShape: "network",
  },
  {
    key: "dx-org",
    label: "DX・組織",
    icon: "users",
    coverVariant: "a",
    coverShape: "bars",
  },
  {
    key: "product",
    label: "プロダクト活用",
    icon: "compass",
    coverVariant: "c",
    coverShape: "rows",
  },
];

const CATEGORY_BY_KEY = new Map(CATEGORIES.map((c) => [c.key, c]));

export function getCategory(key: string): Category | undefined {
  return CATEGORY_BY_KEY.get(key);
}

export function isCategoryKey(key: string): boolean {
  return CATEGORY_BY_KEY.has(key);
}
