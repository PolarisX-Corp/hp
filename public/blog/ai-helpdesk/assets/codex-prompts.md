# ai-helpdesk — 図解の実装記録（5:4・R3-full 全面生成 第一ルート適用）

2026-07-23、issue #23（SEO本文図の5:4化・全面AI生成の第一ルート化）の運用第1号記事として、[図解パターンライブラリ](/knowledge/cmo/seo/figure-patterns.md) の新基準で6図＋coverを実制作した記録。基調スタイル: **flat**（ライト）＋強調 **illust**（fig1・fig2 は全面R3-full、fig3はR3-composeヘッダー）。ダーク不可。

## 採用ルート・結果

| 図 | 型ID | ルート | 試行回数 | 結果 |
|---|---|---|---|---|
| cover | – | R1（1200×630・不変） | 1 | 採用 |
| fig1-steps-rag-flow | steps | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文4ラベル誤字なし） |
| fig2-venn-chatbot-boundary | venn | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文2ラベル誤字なし） |
| fig3-bignumber-effect | bignumber | R3-compose（ヘッダー下絵+HTML数値） | 下絵1／HTML2 | 採用（数値は出典と一致必須のためHTML） |
| fig4-gauge-pricing | gauge | R1（1280×1024・縦積みバー） | 1 | 採用（価格レンジは出典と一致必須） |
| fig5-signal-pitfalls | signal | R1（1280×1024・3×3チップ） | 1 | 採用 |
| fig6-table-fit-check | table | R1（1280×1024・縦積み比較行） | 2（余白調整で再レンダー） | 採用 |

## R3-full 実採用プロンプト（fig1・fig2）

### fig1-steps-rag-flow.png
```
Generate an image and save it to ./ai-helpdesk-fig1-steps.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing a left-to-right process flow: on the far left, three small silhouette office workers each raising a speech-bubble question; a friendly robot at a desk in the center-left receiving the bubbles; next to it a glowing stack of folders and documents (a knowledge base) that the robot is searching; then the robot producing one single glowing checkmark speech bubble; a thin arrow passing that bubble to a small human icon on the far right who receives it. Small arrows connect each stage left to right.
Text rule: include ONLY these Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/16 of image height), placed near their matching stage: 「受付」(above the workers), 「検索」(above the document stack), 「生成」(above the checkmark bubble), 「引き継ぎ」(above the human icon on the right). STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```
中央クロップ 1536×1024 → 1280×1024（左右128pxずつカット）。

### fig2-venn-chatbot-boundary.png
```
Generate an image and save it to ./ai-helpdesk-fig2-venn.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing an inclusion / Venn-style diagram: one large outer circle containing a friendly robot at a help desk, a small document/FAQ icon, a small human-handoff icon, and a small refresh/update-cycle icon arranged around the inside edge of the circle; nested inside that large circle, a smaller distinct circle (visually contained, slightly offset, with a thin dashed border) containing a single chat-bubble icon, representing that the chat bubble is just one small part of the larger whole.
Text rule: include ONLY these two Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/14 of image height): 「AIヘルプデスク」 (curved along the top inside the large outer circle), 「チャットボット」 (inside the small nested circle, under the chat bubble icon). STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```
中央クロップ 1536×1024 → 1280×1024。

### fig3-illus-calls.png（R3-composeヘッダー下絵・文字なし）
```
Subject: a clean FLAT-DESIGN VECTOR illustration for a corporate SaaS infographic — on the left, a crowded old-style telephone support desk with many tangled phone cords and tall stacks of paper suggesting overload; on the right, a calm modern desk with a single friendly robot and a moon-and-sun motif above it suggesting round-the-clock availability; a simple arrow between the two halves.
Style: modern flat vector, soft light shadows, professional, bright, wide horizontal composition (landscape 3:2), subjects small and vertically centered with generous margins so the image crops well into a short banner strip.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
STRICTLY NO TEXT, NO LETTERS, NO NUMBERS, NO clock digits, NO UI captions anywhere. Output PNG only.
```
HTML側 `.illus { background-size:cover }` でクロップ済み（元画像1536×1024のまま配置）。

## R1（HTML）に留めた理由

- **fig3（bignumber）・fig4（gauge）**: fact-checker 申し送りにある一次情報の数値（72,000件／36,000件、料金レンジ）を寸分違わず表示する必要があり、AI生成では誤字リスクを排除できないため。
- **fig5（signal）・fig6（table）**: ラベル数が図中テキスト規律の上限（6個・60字）を超える情報密度（3観点×3状態、5条件×2状態）のため、「文字が主役の図」としてR1を継続使用。

## レンダリング環境メモ（Windows）

このマシンでは `scripts/render-html.sh` が Windows の Chrome (`/c/Program Files/Google/Chrome/Application/chrome.exe`) を認識するよう改修済み（file:// URL を cygpath でドライブレター形式に変換 — Git Bash の `/c/...` 形式のままだと Chrome がエラーページを撮ってしまう不具合があった）。
