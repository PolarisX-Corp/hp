# 分析コンサルティング サービスページ — 設計

日付: 2026-06-13
対象: PolarisX コーポレートサイト (Next.js 16.2.7 / App Router / React 19)

## 目的

`servicepage/`(Claude Design ハンドオフ)の「分析コンサルティング」ランディングページを、
本番コードとして忠実(ピクセルレベル)に再現する。これを **サイトのトップ(`/`)** に置き、
これまでトップにあった会社紹介ページ(案D ボールド・モノクロ)を **`/company`** に移設する。

スコープは **この1ページのみ**(残り2サービスの詳細ページは今回作らない)。

## ルーティング構成

| パス | 内容 | デザイン |
|------|------|----------|
| `/` | 分析コンサルティング サービスページ(新規) | 新DS(青/インディゴ・ライト&エアリー) |
| `/company` | 既存の会社紹介ページ(移設) | 案D(ボールド・モノクロ) |
| `/api/contact` | 既存。会社ページのフォームが使用(変更なし) | — |
| `/api/service-contact` | 新規。サービスページのフォーム用 | — |

## デザインシステムの共存(最重要)

トップと `/company` はほぼ正反対の世界観で、どちらも素の `body` / `h1–h6` / `a` / `::selection` を
スタイルする。Next.js は Suspense 連携の都合上、クライアント遷移時に前のルートの
スタイルシートを取り除かないため、素朴に両方をグローバル読み込みすると衝突しうる。

衝突の実態を分析した結果:
- **トークン名は衝突しない**(新DS=`--blue-*`/`--indigo-*`/`--neutral-*` ほか、案D=`--ink`/`--paper`/`--line`)。→ `:root` トークンはグローバルのままで安全。
- **クラス名も衝突しない**(新DS=`.mk-*`/`.px-*`/`.sv-*`、案D=`.btn`/`.hero`/`.sec`/`.serv-*` ほか)。
- **唯一衝突するのは素の要素セレクタ**(`body`, `h1–h6`, `a`, `*`, `::selection`)。

### 方針: テーマをラッパークラスにスコープ + ルートごとのレイアウト

- 各ページの最上位を `.theme-service`(トップ) / `.theme-company`(`/company`)でラップする。
- 各デザインの **素の要素ルール(背景・本文タイポ・見出し・リンク・selection)を
  ラッパークラス配下にスコープ**する。背景色も `body` ではなくラッパーに乗せる。
  これにより、たとえスタイルシートが遷移後も残っても、カスケードが他ルートに漏れない。
- `:root` のトークン定義はグローバルのまま(名前が一意なので安全)。
- ルートごとにレイアウトを分け、各ルートが自分のフォントとCSSを読み込む。
- 2ページ間のリンクは素の `<a href>`(ハードナビゲーション)にして、スタイルシートを確実にリセットする。

## ファイル構成(変更後)

```
app/
  layout.tsx                 # ルート: <html lang="ja"><body>{children}</body> のみ。グローバルCSS/フォントは持たない。metadata の既定(template)だけ持つ
  page.tsx                   # 新トップ = サービスページ本体(.theme-service ラッパー)。metadata で <title> 上書き
  service.css                # 新DSトークン+base+components+marketing+service を統合。素の要素ルールは .theme-service にスコープ
  fonts.ts                   # next/font/google のインスタンス(Space Grotesk / Noto Sans JP / JetBrains Mono / Hanken / Zen)を集約
  components/
    ContactForm.tsx          # 既存。会社ページが使用(変更なし)
    ServiceContactForm.tsx   # 新規。.px-/.sv-form スタイルのクライアントコンポーネント。/api/service-contact に POST。成功状態を useState で再現
  company/
    page.tsx                 # 既存トップの内容を丸ごと移設(.theme-company ラッパー)。metadata で会社ページ用 <title>
    company.css              # 旧 globals.css。素の要素ルールを .theme-company にスコープ
  api/
    contact/route.ts         # 既存(変更なし)
    service-contact/route.ts # 新規。company/name/email/role/message を受け取り Resend 送信
public/assets/
  PolarisX_mark.svg          # servicepage/project/assets からコピー
  PolarisX_mark_white.svg    # 同上
  (既存の polarisx-*.png はそのまま)
```

注: 既存 `app/globals.css` はルート読み込みをやめ、`app/company/company.css` として
`/company` レイアウト/ページからのみ読み込む。`servicepage/` 配下のプロトタイプ一式は
実装の参照元として残し、本番ビルドには含めない(`app/` の外なので影響なし)。

## フォント

`next/font/google` で自己ホスト(外部 `@import` は使わない。既存プロジェクトの流儀に合わせる)。
`app/fonts.ts` に集約し、各テーマのラッパー className に変数を付与する。

- トップ(.theme-service):
  - Space Grotesk → `--font-space`、Noto Sans JP → `--font-noto`、JetBrains Mono → `--font-jbmono`
  - service.css 側で `.theme-service { --font-display / --font-sans: var(--font-space), var(--font-noto), system-ui; --font-mono: var(--font-jbmono), ui-monospace, monospace; }` のように DSトークンを上書き
- `/company`(.theme-company):
  - 既存の Hanken Grotesk(`--font-hanken`)/ Zen Kaku Gothic New(`--font-zen`)をそのまま使用

## サービスページのセクション(`servicepage/project/分析コンサルティング.html` に忠実)

1. **Header**(sticky): ロゴ(`PolarisX_mark.svg` + "PolarisX")/ nav(課題・提起・ソリューション・メリット・導入の流れ)/ CTA(資料請求=ghost, 無料で相談する=primary)。**会社情報リンク(→ `/company`、素の `<a>`)を追加**。
2. **Hero**: eyebrow(分析コンサルティング)/ h1「意思決定に、再現性を。」/ lead / CTA(無料で相談する→`#contact` / 進め方を見る→`#solution`)/ note。右に「意思決定ログ(再現スコア 0.92)」デモカード。
3. **Trust strip**: ラベル + 経営企画/事業開発/マーケティング/サプライチェーン/経営層。
4. **Problem**: 3カード(属人化 / 毎回ゼロから / 根拠が残らない)。
5. **Provocation**(ダーク `--indigo-950`): 「コンテキストレイヤーが無いんじゃない?」+ Data→Missing→Decision のギャップ図。
6. **Solution**: レイヤースタック図(Decision / Context Layer / Data)+ 3本柱(可視化 / 基盤 / 定着)。
7. **Benefits**(sunken背景): 3つの feature row + 各デモ(意思決定ログ一覧 / ask→根拠付き回答 / 文脈の蓄積カウンタ)。
8. **Process**: 4ステップ(ヒアリング&診断 / コンテキスト設計 / 実装&検証 / 定着&内製化)。
9. **Contact**: 左=見出し+保証リスト、右=`ServiceContactForm`。
10. **Footer**: ロゴ+説明 / サービス / 会社情報(私たちについて等、**「会社情報」を `/company` へ**) / リソース / コピーライト。

ボタンは原則 `<a href="#...">` にボタン用クラスを付与(スクロールは既存の `scroll-behavior:smooth` に委ねる)。`data-screen-label` 等のデザインツール専用属性は移植しない。

## アイコン

`lucide-react` を新規依存に追加。プロトタイプの `<i data-lucide="x">` を対応する
React コンポーネントに置換する(例: `line-chart`→`<LineChart/>`, `arrow-right`→`<ArrowRight/>`,
`check`→`<Check/>`, `file-check-2`→`<FileCheck2/>`, `trending-up`, `package`, `history`, `user`,
`calendar`, `alert-triangle`, `user-x`, `rotate-ccw`, `file-x`, `help-circle`, `layers`, `search`,
`database`, `users`, `check-circle-2`, `repeat`, `zap`, `unlock`, `sparkles`, `chevron-up`, `route`,
`mail`, `plus-circle`, `git-commit`)。サイズ/色は既存CSS(`width/height`, `color`)で制御されるため、
`<svg>` に流れる className を当てるか、各 `lucide` アイコンに `size`/`className` を指定して一致させる。

## 問い合わせフォーム(新規 API)

- `ServiceContactForm`(client component): フィールド = 会社名(必須)/ お名前(必須)/
  メールアドレス(必須)/ 役職(任意・select)/ ご相談内容(必須)。送信成功で `.sv-form.is-sent`
  相当の完了表示(useState でトグル)。送信中は無効化、エラー時はメッセージ表示。
- `POST /api/service-contact`: `{ company, name, email, role?, message }` を受ける。
  既存 `/api/contact` を雛形に、Resend 送信。バリデーション(必須・メール形式・長さ上限)を踏襲。
  メール件名・本文に会社名/役職を含める。`RESEND_API_KEY` 未設定時は 503。
  環境変数は既存の `RESEND_API_KEY` / `CONTACT_TO` / `CONTACT_FROM` を再利用。

## メタデータ

- ルート `layout.tsx`: `title.template`(例 `%s | PolarisX`)と既定 description。
- トップ `page.tsx`: title「分析コンサルティング — 意思決定に、再現性を。」+ 専用 description。
- `/company` `page.tsx`: 会社紹介向け title/description(既存のコピーを流用)。

## 検証

- `npm run dev` で起動し、preview ツールで `/` と `/company` を確認。
- 確認項目: 両ページの見た目が崩れない / 相互リンクで遷移してもスタイルが混ざらない /
  レスポンシブ(≤900px グリッド崩し)/ フォーム送信フロー(成功・失敗・必須バリデーション)/
  コンソール・ネットワークエラーなし / `npm run build` が通る。

## 非対象 (YAGNI)

- 残り2サービス(データ基盤 / AIエージェント)の詳細ページ。
- 資料請求の実体(ボタンは設置するが `#contact` へ誘導するのみ)。
- 案D 会社ページのデザイン変更(移設のみ・見た目は据え置き)。
- アニメーション付き reveal の作り込み(プロトタイプ同様 `.sv-reveal` は静的表示)。
