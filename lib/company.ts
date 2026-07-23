// Confirmed public facts only. Keep this module aligned with the company profile source of truth.
export const COMPANY_PROFILE = {
  name: "PolarisX株式会社",
  representative: "折本 聖也（Seiya Orimoto）／ 代表取締役 CEO",
  establishedOn: "2026年7月16日",
  capital: "1,000,000円",
  industry: "情報通信業",
  businesses: [
    "法人向けAIエージェントの開発",
    "AIコンサルティングサービス",
  ],
  address: "東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C",
  contactEmail: "contact@polarisx.ltd",
  officialX: {
    label: "@polarisx_inc",
    url: "https://x.com/polarisx_inc",
  },
} as const;

export const COMPANY_BRAND = {
  catchphrase: "そろそろ、AI社員を採用しませんか。",
  description: "PolarisXは、AI社員を通じて、御社の業務に新しい戦力を届ける会社です。",
  mission: "AIを会社のOSにする。",
  values: [
    {
      name: "AIファースト",
      description: "自分たちが一番AIを信じて使い込む",
    },
    {
      name: "創造する",
      description: "新しい価値を創造することに注力する",
    },
    {
      name: "目的思考",
      description: "何のためかを考え行動する",
    },
  ],
} as const;
