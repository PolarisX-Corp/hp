# 分析コンサルティング サービスページ Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `servicepage/` のデザインを忠実に再現した「分析コンサルティング」ランディングページをトップ(`/`)に置き、既存の会社紹介ページ(案D)を `/company` に移設する。

**Architecture:** 2つの正反対のデザインを共存させるため、トークン名・クラス名は元々衝突しないことを利用し、唯一衝突する素の要素ルール(`body`/`h1–h6`/`a`/`::selection`/`*` のmargin reset)だけを `.theme-service` / `.theme-company` のラッパークラス配下にスコープする。ルートレイアウトはグローバルCSS・フォントを持たず、各ルートが自分のCSS(スコープ済み)とフォント(`next/font` 変数をラッパーに付与)を読み込む。2ページ間は素の `<a href>`(ハードナビ)でリンクし、スタイルシートを確実にリセットする。

**Tech Stack:** Next.js 16.2.7 (App Router) / React 19 / `next/font/google` / `lucide-react` / Resend (既存)

**Verification model:** テストランナー未導入のため、各タスクの検証は `npm run build`(型/コンパイル/lint)と `preview_*` ツール(視覚スナップショット・コンソール・ネットワーク)で行う。

**Source of truth(ピクセル値):**
- `servicepage/project/分析コンサルティング.html`(構造・コピー・アイコン)
- `servicepage/project/marketing.css`, `servicepage/project/service.css`(レイアウト・装飾)
- `servicepage/project/_ds/polarisx-new-design-system-f3626354-a98f-4efa-9078-d50693fa075d/` 配下の `tokens/*.css` と `components/components.css`(トークン・基底・コンポーネント)

---

## File Structure(変更後)

```
app/
  layout.tsx                 # 変更: ルートを最小化。globals.css import 削除、html からフォント削除、metadata.template のみ
  page.tsx                   # 変更: 新トップ = サービスページ本体
  service.css                # 新規: 新DS tokens+base+components+marketing+service を統合。素の要素ルールは .theme-service にスコープ
  fonts.ts                   # 新規: next/font/google インスタンス集約(全5フォント)
  globals.css                # 削除(company.css へ移行)
  components/
    ContactForm.tsx          # 変更なし(会社ページが使用)
    ServiceContactForm.tsx   # 新規: .px-/.sv-form スタイルのクライアントフォーム
  company/
    page.tsx                 # 新規: 旧 app/page.tsx の内容を移設(.theme-company ラッパー)
    company.css              # 新規: 旧 globals.css を .theme-company にスコープ
  api/
    contact/route.ts         # 変更なし
    service-contact/route.ts # 新規: company/name/email/role/message を Resend 送信
public/assets/
  PolarisX_mark.svg          # 新規(servicepage/project/assets からコピー)
  PolarisX_mark_white.svg    # 新規(同上)
```

---

## Task 1: 依存パッケージ・アセット・フォントモジュール

**Files:**
- Modify: `package.json`(lucide-react 追加 / `npm install` が行う)
- Create: `public/assets/PolarisX_mark.svg`, `public/assets/PolarisX_mark_white.svg`
- Create: `app/fonts.ts`

- [ ] **Step 1: lucide-react を導入**

Run:
```bash
npm install lucide-react
```
Expected: `package.json` の dependencies に `lucide-react` が追加され、`node_modules` に展開される。

- [ ] **Step 2: ロゴSVGを public へコピー**

Run:
```bash
cp servicepage/project/assets/PolarisX_mark.svg public/assets/PolarisX_mark.svg
cp servicepage/project/assets/PolarisX_mark_white.svg public/assets/PolarisX_mark_white.svg
```
Expected: 2ファイルが `public/assets/` に存在(`ls public/assets/` で確認)。

- [ ] **Step 3: フォントモジュールを作成**

Create `app/fonts.ts`:
```ts
import {
  Hanken_Grotesk,
  Zen_Kaku_Gothic_New,
  Space_Grotesk,
  Noto_Sans_JP,
  JetBrains_Mono,
} from "next/font/google";

// 案D(/company)
export const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

// 新DS(/ サービスページ)
export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});
```

- [ ] **Step 4: ビルド確認**

Run: `npm run build`
Expected: 成功(`app/fonts.ts` は未使用 export だがモジュールなのでエラーにならない。lucide-react は型解決される)。

- [ ] **Step 5: コミット**

```bash
git add package.json package-lock.json public/assets/PolarisX_mark.svg public/assets/PolarisX_mark_white.svg app/fonts.ts
git commit -m "chore: add lucide-react, brand SVGs, and next/font module"
```

---

## Task 2: 会社ページを /company へ移設し、ルートを最小化

このタスク完了時点で `/company` が案Dデザインで表示され、`/` は一時的に `/company` へリダイレクトする(各コミットがビルド可能)。

**Files:**
- Create: `app/company/company.css`(旧 `app/globals.css` をスコープ化)
- Create: `app/company/page.tsx`(旧 `app/page.tsx` の内容を移設)
- Modify: `app/layout.tsx`(最小化)
- Modify: `app/page.tsx`(一時リダイレクト)
- Delete: `app/globals.css`

- [ ] **Step 1: company.css を作成(スコープ化)**

`app/globals.css` の全内容を `app/company/company.css` にコピーし、**素の要素ルールのみ** を `.theme-company` 配下へ変換する。具体的な変換:

1. `:root { ... }` ブロック → **そのまま**(変数名 `--paper`/`--ink` 等は一意)。
2. `* { box-sizing: border-box; margin: 0; padding: 0; }` → 2行に分割:
   ```css
   *, *::before, *::after { box-sizing: border-box; }
   .theme-company * { margin: 0; padding: 0; }
   ```
3. `html { scroll-behavior: smooth; }` → **そのまま**(グローバル)。
4. `body { ... }` の中身を `.theme-company { ... }` に移し、さらに `min-height: 100vh;` を追加:
   ```css
   .theme-company {
     font-family: var(--font-zen), system-ui, sans-serif;
     background: var(--paper);
     color: var(--ink);
     line-height: 1.7;
     -webkit-font-smoothing: antialiased;
     overflow-x: hidden;
     min-height: 100vh;
   }
   ```
5. `a { color: inherit; text-decoration: none; }` → `.theme-company a { color: inherit; text-decoration: none; }`
6. `h1, h2, h3 { ... }` → `.theme-company h1, .theme-company h2, .theme-company h3 { ... }`
7. それ以外(`.wrap`, `.en`, `.btn*`, `header`/`.nav*`, `.hero*`, `.marquee*`, `.sec*`, `.mission*`, `.values*`, `.serv*`, `.members*`, `.table*`, `.contact*`, `.cform*`, `footer`, `.foot*`, `@keyframes scroll`, `@media`)は **すべてそのまま**(クラスベースで衝突しない)。

注意: `header` と `footer` はタグセレクタだが案D専用ルール。これらは `.theme-company` で囲った中だけに存在するため実害はないが、サービスページにも `<header>/<footer>` がある。**衝突回避のため `header { ... }` → `.theme-company header { ... }`、`footer { ... }` → `.theme-company footer { ... }` に変換する。**(`.nav`, `.foot` 等の子セレクタはクラスなので変換不要。)

- [ ] **Step 2: company/page.tsx を作成**

現在の `app/page.tsx` の内容をベースに作成。差分:
- 先頭の import の相対パスを更新: `./components/ContactForm` → `../components/ContactForm`。画像 import の `@/public/assets/...` はそのまま。
- `import "./company.css";` を追加。
- フォントを import: `import { hanken, zenKaku } from "../fonts";`
- `metadata` を export。
- 返却JSX全体を `<div className="theme-company ...">` でラップ(既存の `<>...</>` の中身を保持)。

`app/company/page.tsx`:
```tsx
import Image from "next/image";
import { Fragment } from "react";
import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import { hanken, zenKaku } from "../fonts";
import "./company.css";
import logoBlack from "@/public/assets/polarisx-logo-black.png";
import symbolBlack from "@/public/assets/polarisx-symbol-black.png";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "PolarisX株式会社の会社情報。AI×データ活用で、意思決定に再現性を。MISSION・VALUES・SERVICES・MEMBERS・会社概要。",
};

const MARQUEE_ITEMS = [
  "意思決定に、再現性を",
  "AI×データ活用",
  "良い判断を、仕組みに",
  "誰もが・何度でも",
  "再現可能な意思決定",
];

function MarqueeRow() {
  return (
    <span>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          {item}
          <span className="sep">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Company() {
  return (
    <div className={`theme-company ${hanken.variable} ${zenKaku.variable}`}>
      {/* ↓↓↓ 現在の app/page.tsx の <header> 〜 </footer> をそのまま貼り付け ↓↓↓ */}
      {/* （<>...</> のフラグメント内中身を、このdiv直下に移す。内容は一切変更しない） */}
    </div>
  );
}
```
実装メモ: 現 `app/page.tsx` の `<header>...</header>` から `<footer>...</footer>` までのJSXを、上記 `theme-company` div の中へ丸ごと移植する。`#mission` 等のアンカーリンクはページ内なのでそのまま機能する。

- [ ] **Step 3: ルートレイアウトを最小化**

`app/layout.tsx` を以下に置換:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PolarisX株式会社",
    template: "%s | PolarisX",
  },
  description:
    "AI×データ活用で、意思決定に再現性を。勘と経験に頼ってきた「良い判断」を、誰もが・何度でも再現できる仕組みへ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
```
注意: `globals.css` の import を削除した。フォント変数は各ページのラッパーで付与する。

- [ ] **Step 4: ルート page を一時リダイレクトに**

`app/page.tsx` を一時的に置換(Task 5 で本実装に差し替える):
```tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/company");
}
```

- [ ] **Step 5: 旧 globals.css を削除**

Run:
```bash
git rm app/globals.css
```

- [ ] **Step 6: ビルド & プレビュー確認**

Run: `npm run build`
Expected: 成功。

`preview_start` → `/company` を開く:
- `preview_snapshot` で案Dの会社ページ(MISSION〜CONTACT〜footer)が従来通り表示される。
- `preview_console_logs` でエラーなし。
- `/`(ルート)にアクセスすると `/company` にリダイレクトされる。

- [ ] **Step 7: コミット**

```bash
git add app/layout.tsx app/page.tsx app/company/company.css app/company/page.tsx
git commit -m "refactor: move 案D corporate page to /company, minimize root layout"
```

---

## Task 3: サービスページCSS(service.css)を作成

**Files:**
- Create: `app/service.css`

新DSの `tokens/*.css` + `components/components.css` + `marketing.css` + `service.css` を **この順序** で1ファイルに統合する。`@import` は使わず内容を直書きする(`tokens/fonts.css` の Google Fonts `@import` URL は **含めない** — フォントは next/font で供給)。

- [ ] **Step 1: トークン群を貼り付け**

`app/service.css` の先頭に、以下を **この順で** 連結(各ファイルの `:root { ... }` 中身):
1. `tokens/colors.css` の `:root { ... }` 全体(`--indigo-*`, `--blue-*`, `--neutral-*`, セマンティックエイリアス含む)→ そのまま。
2. `tokens/typography.css` の `:root { ... }` → そのまま貼り付けた上で、**フォントファミリ定義はラッパーで上書きする**(Step 3 参照)。
3. `tokens/spacing.css`, `tokens/radii.css`, `tokens/shadows.css`, `tokens/motion.css` の `:root { ... }` → そのまま。

(これらの変数は一意名なのでグローバル `:root` のままで安全。)

- [ ] **Step 2: base.css をスコープ化して貼り付け**

`tokens/base.css` の内容を以下のように変換して追記:
- `*, *::before, *::after { box-sizing: border-box; }` → **そのまま**。
- `html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }` → **そのまま**。
- `body { ... }` → `.theme-service { ... }` に変換し、`min-height: 100vh;` を追加。背景は marketing.css に合わせ `var(--surface-card)`(白)にする:
  ```css
  .theme-service {
    font-family: var(--font-sans);
    font-weight: var(--fw-regular);
    font-size: var(--text-md);
    line-height: var(--leading-normal);
    color: var(--text-primary);
    background: var(--surface-card);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    min-height: 100vh;
  }
  ```
- `h1..h6 { ... }` → `.theme-service h1, .theme-service h2, ... .theme-service h6 { ... }`
- `p { margin: 0; }` → `.theme-service p { margin: 0; }`
- `a { ... }` と `a:hover { ... }` → `.theme-service a { ... }` / `.theme-service a:hover { ... }`
- `code, kbd, samp, pre { ... }` → `.theme-service :is(code,kbd,samp,pre) { ... }`
- `button, input, select, textarea { font: inherit; color: inherit; }` → `.theme-service :is(button,input,select,textarea) { ... }`
- `img, svg { display: block; max-width: 100%; }` → `.theme-service :is(img, svg) { display: block; max-width: 100%; }`
- `:focus-visible { ... }` → `.theme-service :focus-visible { ... }`
- `::selection { ... }` → `.theme-service ::selection { ... }`
- `.tabular-nums { ... }` → そのまま(クラス)。
- `@media (prefers-reduced-motion: reduce) { * { ... } }` → そのまま(グローバルだが無害)。

- [ ] **Step 3: フォントトークンをラッパーで上書き**

`app/service.css` に追記(next/font 変数へマップ):
```css
.theme-service {
  --font-display: var(--font-space), var(--font-noto), system-ui, sans-serif;
  --font-sans: var(--font-space), var(--font-noto), system-ui, sans-serif;
  --font-jp: var(--font-noto), var(--font-space), system-ui, sans-serif;
  --font-mono: var(--font-jbmono), ui-monospace, "SFMono-Regular", monospace;
}
```

- [ ] **Step 4: components.css を貼り付け**

`components/components.css` の内容を **すべてそのまま** 追記(`.px-*` クラスのみ。衝突なし)。

- [ ] **Step 5: marketing.css を貼り付け(要素セレクタのみスコープ化)**

`marketing.css` の内容を追記。変換:
- `* { box-sizing: border-box; }` → **削除**(Step 2 で定義済み・重複回避)。
- `body { margin: 0; background: var(--surface-card); color: var(--text-primary); font-family: var(--font-sans); }` → **削除**(`.theme-service` で定義済み)。
- `a { color: inherit; }` → **削除**(base で定義済み)。
- それ以外の `.mk-*` クラスはすべてそのまま。
- **アイコンセレクタの `i` を `svg` に変換**(lucide-react は `<svg>` を描画):
  - `.mk-eyebrow i` → `.mk-eyebrow svg`
  - `.mk-preview__insight i` → `.mk-preview__insight svg`
  - `.mk-fcard__icon i` → `.mk-fcard__icon svg`
  - `.mk-checklist i` → `.mk-checklist svg`

- [ ] **Step 6: service.css(プロトタイプ)を貼り付け(アイコン `i`→`svg`、ただし bar は除外)**

`servicepage/project/service.css` の内容を追記。`.sv-*` クラスはそのまま。**アイコン用 `i` セレクタを `svg` に変換**:
- `.sv-rec__title i` → `svg`
- `.sv-ground i` → `svg`
- `.sv-rec__meta i` → `svg`
- `.sv-pcard__icon i` → `svg`
- `.sv-prov__eyebrow i` → `svg`
- `.sv-gap__arrow i` → `svg`
- `.sv-layer--ctx .sv-layer__title i` → `svg`
- `.sv-stack__rail i` → `svg`
- `.sv-ask__bar i` → `svg`
- `.sv-answer__mark i` → `svg`
- `.sv-ctx__row i` → `svg`
- `.sv-assure i` → `svg`
- `.sv-form__done .ic i` → `svg`
- **`.sv-logitem__bar > i` は変換しない**(これはアイコンではなくバー塗りの実 `<i>` 要素)。
- `@keyframes sv-blink`, `@media (prefers-reduced-motion)`, `@media (max-width: 900px)` はそのまま。

- [ ] **Step 7: ビルド確認**

Run: `npm run build`
Expected: 成功(`service.css` は未 import だがCSSファイル単体ではビルドに影響しない。lint で未使用と言われない)。

- [ ] **Step 8: コミット**

```bash
git add app/service.css
git commit -m "feat: add scoped service-page stylesheet (new design system)"
```

---

## Task 4: 問い合わせフォーム(コンポーネント + 新API)

**Files:**
- Create: `app/api/service-contact/route.ts`
- Create: `app/components/ServiceContactForm.tsx`

- [ ] **Step 1: 新APIルートを作成**

`app/api/service-contact/route.ts`(既存 `app/api/contact/route.ts` を雛形に company/role を追加):
```ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: {
    company?: string;
    name?: string;
    email?: string;
    role?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const company = (body.company ?? "").trim();
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const role = (body.role ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!company || !name || !email || !message) {
    return NextResponse.json(
      { error: "必須項目を入力してください。" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }
  if (company.length > 200 || name.length > 200 || role.length > 200) {
    return NextResponse.json({ error: "入力が長すぎます。" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "ご相談内容が長すぎます。" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "contact@polarisx.ltd";
  const from = process.env.CONTACT_FROM ?? "PolarisX <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信が未設定です。RESEND_API_KEY を設定してください。" },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `【分析コンサル相談】${company} / ${name} 様`,
      html: `
        <h2>分析コンサルティング ページからのご相談</h2>
        <p><strong>会社名:</strong> ${escapeHtml(company)}</p>
        <p><strong>お名前:</strong> ${escapeHtml(name)}</p>
        <p><strong>メール:</strong> ${escapeHtml(email)}</p>
        <p><strong>役職:</strong> ${escapeHtml(role || "（未入力）")}</p>
        <p><strong>ご相談内容:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error:", res.status, detail);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: ServiceContactForm を作成**

`app/components/ServiceContactForm.tsx`。プロトタイプの `<form class="sv-form">`(`分析コンサルティング.html` の Contact セクション)を React 化し、成功状態を `useState` でトグルする。
```tsx
"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ServiceContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: String(data.get("company") ?? "").trim(),
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/service-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(
          json?.error ?? "送信に失敗しました。時間をおいて再度お試しください。"
        );
      }
    } catch {
      setStatus("error");
      setError(
        "送信に失敗しました。通信環境をご確認のうえ再度お試しください。"
      );
    }
  }

  return (
    <form
      className={`sv-form sv-reveal${status === "sent" ? " is-sent" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="sv-form__body">
        <div className="sv-form__row">
          <div className="px-field">
            <label className="px-label" htmlFor="f-company">
              会社名<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-company"
              name="company"
              placeholder="株式会社PolarisX"
              required
            />
          </div>
          <div className="px-field">
            <label className="px-label" htmlFor="f-name">
              お名前<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-name"
              name="name"
              placeholder="山田 太郎"
              required
            />
          </div>
        </div>
        <div className="sv-form__row">
          <div className="px-field">
            <label className="px-label" htmlFor="f-email">
              メールアドレス<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="px-field">
            <label className="px-label" htmlFor="f-role">
              役職
            </label>
            <select className="px-select" id="f-role" name="role" defaultValue="">
              <option value="">選択してください</option>
              <option>経営層・役員</option>
              <option>事業部長・マネージャー</option>
              <option>データ／DX 推進</option>
              <option>その他</option>
            </select>
          </div>
        </div>
        <div className="px-field">
          <label className="px-label" htmlFor="f-msg">
            ご相談内容<span className="px-label__req">*</span>
          </label>
          <textarea
            className="px-textarea"
            id="f-msg"
            name="message"
            rows={4}
            placeholder="現状の意思決定の課題や、実現したいことをお書きください。"
            required
          />
        </div>
        <div className="sv-form__actions">
          <button
            type="submit"
            className="px-btn px-btn--primary px-btn--lg px-btn--block"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "送信中…" : "無料で相談する"}
            <ArrowRight className="px-btn__icon" />
          </button>
        </div>
        {status === "error" && (
          <p className="sv-form__note" role="status" style={{ color: "var(--danger)" }}>
            {error}
          </p>
        )}
        <p className="sv-form__note">
          送信いただいた内容は、ご相談対応の目的にのみ利用します。プライバシーポリシーに同意のうえ送信してください。
        </p>
      </div>
      <div className="sv-form__done">
        <div className="ic">
          <Check />
        </div>
        <h3>送信しました</h3>
        <p>ありがとうございます。営業日 2 日以内にご返信します。</p>
      </div>
    </form>
  );
}
```

- [ ] **Step 3: ビルド確認**

Run: `npm run build`
Expected: 成功(コンポーネントは未 import だが型チェックは通る。lint の未使用 import なし)。

- [ ] **Step 4: コミット**

```bash
git add app/api/service-contact/route.ts app/components/ServiceContactForm.tsx
git commit -m "feat: add service contact form and /api/service-contact route"
```

---

## Task 5: サービスページ本体(app/page.tsx)

`分析コンサルティング.html` の `<header>` 〜 `<footer>` を JSX 化し、`app/page.tsx` のリダイレクトを置き換える。

**Files:**
- Modify: `app/page.tsx`(リダイレクト → 本実装)

**ポート規則(全セクション共通):**
1. ルート要素を `<div className={\`theme-service ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}\`}>` でラップし、`import "./service.css";` する。
2. `class=` → `className=`、`for=` → `htmlFor=`、自己終了タグ化。
3. `<i data-lucide="x">` → 対応する lucide-react コンポーネント。インラインの `style="width:..;height:..;color:.."` が付くアイコンは `<Icon style={{...}} />` で再現(例: hero note の check)。`<i data-lucide="check" style="width:15px;height:15px;color:var(--success)">` → `<Check style={{ width: 15, height: 15, color: "var(--success)" }} />`。
4. `.sv-logitem__bar` の中の `<i style="width:92%">` は **lucide ではなく実 `<i>`** のまま: `<i style={{ width: "92%" }} />`。
5. ボタンの `onclick="...scrollIntoView..."` → `<a>` にボタンクラスを付与してアンカーへ: 例 `<button class="px-btn px-btn--primary px-btn--lg" onclick="...#contact...">` → `<a className="px-btn px-btn--primary px-btn--lg" href="#contact">`。`<button class="px-btn px-btn--secondary px-btn--lg" onclick="...#solution...">` → `<a href="#solution">`。ヘッダーの 資料請求/無料で相談する も `<a href="#contact">`。
6. `data-screen-label` 属性は **すべて削除**。
7. ロゴ画像 `assets/PolarisX_mark.svg` → `/assets/PolarisX_mark.svg`(`<img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} />`。`next/image` でなく素の `<img>` で可。base.css の `svg/img` スコープ規則と干渉しないよう width/height 明示)。
8. ロゴテキスト `Polaris<span style="color:var(--blue-500)">X</span>` はそのまま JSX 化。
9. Contact セクションの `<form ...>` 全体を `<ServiceContactForm />` に置換。
10. `lucide.createIcons()` の `<script>` は **削除**(React がアイコンを描画)。

**アイコン import(使用する全コンポーネント):**
```tsx
import {
  LineChart, ArrowRight, Check, FileCheck2, TrendingUp, Package, History,
  User, Calendar, AlertTriangle, UserX, RotateCcw, FileX, HelpCircle, Layers,
  Search, Database, Users, CheckCircle2, Repeat, Zap, Unlock, Sparkles,
  ChevronUp, Route, Mail, PlusCircle, GitCommit,
} from "lucide-react";
```
`data-lucide` → コンポーネント対応(kebab → PascalCase): `line-chart`→`LineChart`, `arrow-right`→`ArrowRight`, `check`→`Check`, `file-check-2`→`FileCheck2`, `trending-up`→`TrendingUp`, `package`→`Package`, `history`→`History`, `user`→`User`, `calendar`→`Calendar`, `alert-triangle`→`AlertTriangle`, `user-x`→`UserX`, `rotate-ccw`→`RotateCcw`, `file-x`→`FileX`, `help-circle`→`HelpCircle`, `layers`→`Layers`, `search`→`Search`, `database`→`Database`, `users`→`Users`, `check-circle-2`→`CheckCircle2`, `repeat`→`Repeat`, `zap`→`Zap`, `unlock`→`Unlock`, `sparkles`→`Sparkles`, `chevron-up`→`ChevronUp`, `route`→`Route`, `mail`→`Mail`, `plus-circle`→`PlusCircle`, `git-commit`→`GitCommit`。

**クロスリンク(会社ページへの導線):**
- フッターの「会社情報」列の最初のリンク `<a href="#">私たちについて</a>` → `<a href="/company">会社情報</a>`(ハードナビ)。
- ヘッダー `.mk-header__cta` の前(nav 末尾)に会社情報リンクを1つ追加: `<a href="/company">会社情報</a>`(nav 内、他のリンクと同じスタイル)。

- [ ] **Step 1: page.tsx を本実装に置換**

`app/page.tsx`:
```tsx
import type { Metadata } from "next";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "./fonts";
import ServiceContactForm from "./components/ServiceContactForm";
import "./service.css";
import {
  LineChart, ArrowRight, Check, FileCheck2, TrendingUp, Package, History,
  User, Calendar, AlertTriangle, UserX, RotateCcw, FileX, HelpCircle, Layers,
  Search, Database, Users, CheckCircle2, Repeat, Zap, Unlock, Sparkles,
  ChevronUp, Route, Mail, PlusCircle, GitCommit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "分析コンサルティング — 意思決定に、再現性を。",
  description:
    "勘と経験に頼ってきた「良い判断」を、データとAIで誰もが・何度でも再現できる仕組みへ。PolarisXの分析コンサルティングが、意思決定に“文脈”を実装します。",
};

export default function Home() {
  return (
    <div
      className={`theme-service ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* ↓ 分析コンサルティング.html の <header> 〜 <footer> をポート規則に従って移植 ↓ */}
    </div>
  );
}
```
実装メモ: 上記コメント位置に、`分析コンサルティング.html`(14行目 `<header>` 〜 410行目 `</footer>`)を **ポート規則1〜10** に従って移植する。各セクション(HEADER / HERO / TRUST / PROBLEM / PROVOCATION / SOLUTION / BENEFITS / PROCESS / CONTACT / FOOTER)を順に変換。Contact セクションの `<form>` は `<ServiceContactForm />` に置換する。`.mk-stars` のインライン style(`width/height/top/right/opacity/background` 等)は `style={{ ... }}` に変換(数値はpx文字列、例 `top: "-90px"`)。

- [ ] **Step 2: ビルド確認**

Run: `npm run build`
Expected: 成功。型エラー・未閉じタグ・未使用 import なし。

- [ ] **Step 3: プレビュー確認(視覚)**

`preview_start`(無ければ)→ `/` を開く:
- `preview_snapshot`: HEADER/HERO(意思決定ログカード)/TRUST/PROBLEM(3カード)/PROVOCATION(ダーク+ギャップ図)/SOLUTION(レイヤースタック+3本柱)/BENEFITS(3 feature row+デモ)/PROCESS(4ステップ)/CONTACT(フォーム)/FOOTER が表示される。
- `preview_console_logs`: エラーなし(特に lucide / hydration 警告)。
- `preview_screenshot`: ヒーローとソリューションのレイヤースタックが青/インディゴで描画されているか目視。
- アイコンが表示されている(`<svg>`)こと、サイズ・色がCSS通りであることを確認。

- [ ] **Step 4: コミット**

```bash
git add app/page.tsx
git commit -m "feat: build 分析コンサルティング service page as homepage"
```

---

## Task 6: 検証・レスポンシブ・フォーム動作・最終確認

**Files:** (修正が必要なら該当ファイル)

- [ ] **Step 1: レスポンシブ確認**

`preview_resize` で幅 390px(モバイル)に変更し `/` を `preview_snapshot`:
- `.sv-problems`/`.sv-steps`/`.mk-cards`/`.mk-frow`/`.sv-contact__grid`/`.mk-footer__grid` が1カラムに崩れる。
- `.sv-gap` が縦並び・矢印が90度回転。
- ヘッダー nav が崩れない(`.mk-nav` は900px以下で非表示にする指定が **ない** ため、必要なら確認のみ。プロトタイプ準拠で可)。
`/company` も 390px で確認し、案Dの従来レスポンシブ(`.values`/`.members`/`.serv-*` 等)が維持されていること。

- [ ] **Step 2: クロスナビゲーション確認(スタイル混在しないこと)**

`/` で `preview_click` によりフッター「会社情報」リンク(`/company`)をクリック → `/company` に遷移。
- `preview_snapshot`: 案Dデザインが正しく表示され、青/インディゴのスタイルが混ざっていない。
- ブラウザ戻る or `/` 直アクセスで、サービスページに青系スタイルが正しく適用されている。
(素の `<a>` によるハードナビでスタイルシートがリセットされることの確認。)

- [ ] **Step 3: フォーム動作確認**

`/` の Contact フォームで:
- 必須未入力で送信 → ブラウザ必須バリデーション(`required`)が働く。
- `preview_fill` で会社名/お名前/メール/相談内容を入力し送信。`RESEND_API_KEY` 未設定環境では `/api/service-contact` が 503 を返す想定。
  - `preview_network` で `/api/service-contact` への POST と応答ステータスを確認。
  - 503/エラー時に `.sv-form__note`(danger色)でエラーメッセージが表示される。
- 成功レスポンス(200)時は `.sv-form.is-sent` により完了表示(送信しました)に切り替わることをロジック上確認(`RESEND_API_KEY` がある環境なら実際に確認)。

- [ ] **Step 4: 本番ビルド最終確認**

Run: `npm run build`
Expected: 成功。警告(画像最適化等)があれば内容を確認。

Run: `npm run lint`
Expected: エラーなし。

- [ ] **Step 5: 不要物確認**

- `servicepage/` ディレクトリは参照用に残す(本番ビルド対象外。`.gitignore` 状況に応じてコミットするかは利用者判断)。
- `app/globals.css` が削除済みで、どこからも import されていないこと(`grep -r "globals.css" app` で 0 件)。

- [ ] **Step 6: 最終コミット(修正があれば)**

```bash
git add -A
git commit -m "fix: responsive and form verification adjustments for service page"
```
(修正が無ければスキップ。)

---

## Self-Review チェック結果

- **Spec coverage:** ルーティング(Task 2,5)/ テーマ共存スコープ(Task 2,3)/ フォント(Task 1,2,5)/ アイコン lucide-react(Task 1,5)/ 新フォーム+新API(Task 4,5)/ クロスリンク(Task 5,6)/ メタデータ(Task 2,5)/ 検証(Task 6)— 全項目に対応タスクあり。
- **Placeholder scan:** 大容量の CSS/HTML は本文を再掲せず、in-repo の確定ソースファイル + 列挙された変換規則で指定(プレースホルダではない)。新規・非自明ファイル(fonts.ts, layout.tsx, route.ts, ServiceContactForm.tsx, page.tsx 骨格)は完全コードを記載。
- **Type/命名整合:** `theme-service`/`theme-company` クラス、`--font-space/--font-noto/--font-jbmono/--font-hanken/--font-zen` 変数、`/api/service-contact` パス、フォームの `company/name/email/role/message` フィールドが全タスクで一致。
