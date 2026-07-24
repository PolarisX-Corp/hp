import Link from "next/link";
import type { Category } from "@/lib/blog/categories";
import { Icon } from "./Icon";

const ARTICLE_CTA_HREF = "/#contact";

type CtaCopy = {
  title: string;
  description: string;
};

const COPY_BY_CATEGORY: Record<string, CtaCopy> = {
  "ai-agent": {
    title: "AIエージェントを、自社の仕事にどう活かすか整理しませんか？",
    description:
      "記事の内容をもとに、任せやすい業務と無理のない導入ステップを一緒に整理します。",
  },
  "knowledge-base": {
    title: "社内ナレッジを、AIが使える資産に変えませんか？",
    description:
      "いまある文書の状態を伺い、整備すべき情報とAIへつなぐ順番を一緒に整理します。",
  },
  "ai-helpdesk": {
    title: "問い合わせ対応の自動化、どこから始めるか相談しませんか？",
    description:
      "問い合わせの種類と社内ナレッジを確認し、自動化しやすい範囲から整理します。",
  },
  "ai-adoption": {
    title: "自社に合うAI導入の進め方を、整理しませんか？",
    description:
      "課題や体制を伺い、小さく試せる業務と導入までの道筋を一緒に整理します。",
  },
  "ai-workflow": {
    title: "AIで効率化できる業務を、一緒に見つけませんか？",
    description:
      "日々の業務を伺い、効果を確かめやすい作業と進め方を具体化します。",
  },
  "ai-tools": {
    title: "ツールを選ぶ前に、自社に必要なAIを整理しませんか？",
    description:
      "用途や運用体制を伺い、過不足のない選定軸と次の一歩を一緒に整理します。",
  },
  "case-study": {
    title: "自社でも再現できるAI活用を、一緒に設計しませんか？",
    description:
      "記事の事例を手がかりに、自社で試すならどの業務からかを具体化します。",
  },
};

function getCopy(category: Category): CtaCopy {
  return (
    COPY_BY_CATEGORY[category.key] ?? {
      title: `${category.label}を、自社でどう活かすか整理しませんか？`,
      description:
        "記事の内容と現在の課題を照らし合わせ、無理のない次の一歩を一緒に整理します。",
    }
  );
}

/**
 * 記事本文の中央に自動挿入する、主目的を「無料相談」に絞ったCTA。
 * 計測基盤の導入時に同じ識別子を使えるよう、リンクには安定した data 属性を付ける。
 */
export function ArticleCta({ category }: { category: Category }) {
  const copy = getCopy(category);

  return (
    <aside className="bl-inline-cta" aria-label="無料相談のご案内">
      <div className="bl-inline-cta__copy">
        <p className="bl-inline-cta__eyebrow">
          <Icon name="sparkles" size={15} />
          記事の内容を、自社の次の一歩へ
        </p>
        <p className="bl-inline-cta__title">{copy.title}</p>
        <p className="bl-inline-cta__description">{copy.description}</p>
      </div>
      <div className="bl-inline-cta__actions">
        <Link
          className="px-btn px-btn--primary px-btn--lg bl-inline-cta__button"
          href={ARTICLE_CTA_HREF}
          data-cta-id="blog-article-inline"
          data-cta-category={category.key}
        >
          無料で相談する
          <Icon name="arrow-right" size={17} className="px-btn__icon" />
        </Link>
        <span className="bl-inline-cta__note">初回30分・オンライン</span>
      </div>
    </aside>
  );
}
