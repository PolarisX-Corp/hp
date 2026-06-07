# PolarisX 株式会社 — コーポレートサイト

Claude Design の「案D：ボールド・モノクロ」を Next.js（App Router / TypeScript）で実装したコーポレートサイトです。

## 技術スタック

- [Next.js 16](https://nextjs.org/)（App Router）
- TypeScript
- `next/font`（Hanken Grotesk / Zen Kaku Gothic New）
- お問い合わせフォーム送信に [Resend](https://resend.com)
- ホスティング: Vercel

## 開発

```bash
npm install
npm run dev
```

http://localhost:3000 を開きます。

## お問い合わせフォームの設定

フォーム送信（`/api/contact`）はメール送信に Resend を利用します。`.env.example` を `.env.local` にコピーし、値を設定してください。

| 変数 | 説明 |
|---|---|
| `RESEND_API_KEY` | Resend の API キー（必須） |
| `CONTACT_TO` | 送信先（未設定時 `contact@polarisx.ltd`） |
| `CONTACT_FROM` | 送信元（検証済みドメイン推奨。未設定時 `onboarding@resend.dev`） |

本番では Vercel のプロジェクト設定 → Environment Variables に同じ値を登録します。
`RESEND_API_KEY` が未設定でもサイトは表示され、フォーム送信時のみエラーを返します。

## ビルド

```bash
npm run build
npm start
```

## デザインについて

`案D：ボールド・モノクロ` … 白（`#f6f5f2`）× 黒（`#0c0c0d`）の大胆なタイポグラフィ。
セクション: Hero / Mission / Core Values / Members / Company / Contact。
