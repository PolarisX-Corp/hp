# multimodal-rag — 図解の実装記録（5:4・R3-full 全面生成 適用）

2026-07-23、issue #23（SEO本文図の5:4化・全面AI生成の第一ルート化）の運用第3号記事。基調スタイル: **flat**（ライト）＋強調 **illust**（fig1・fig2 は全面R3-full）。ダーク不可。

## 採用ルート・結果

| 図 | 型ID | ルート | 試行回数 | 結果 |
|---|---|---|---|---|
| cover | – | R1（1200×630・不変） | 1 | 採用 |
| fig1-venn-rag-boundary | venn | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文3ラベル・英字RAG誤字なし） |
| fig2-steps-retrieval-flow | steps | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文4ラベル誤字なし） |
| fig3-table-usecases | table | R1（1280×1024・4行×3列） | 1 | 採用 |
| fig4-gauge-cost-range | gauge | R1（1280×1024・縦積みバー） | 2（余白調整で再レンダー） | 採用（費用レンジは出典と一致必須） |
| fig5-signal-adoption-check | signal | R1（1280×1024・3カード） | 1 | 採用（3状態のうち「不要」は良い状態のため赤を使わず灰色に変更） |

## R3-full 実採用プロンプト

### fig1-venn-rag-boundary.png
```
Generate an image and save it to ./mmrag-fig1-venn.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing two large overlapping circles (a Venn diagram). The left circle contains a friendly robot head with small icons around it representing different senses — an eye icon, a small speaker/sound-wave icon, and a small image-frame icon — representing a model that can understand images and audio. The right circle contains a magnifying glass over a stack of documents, representing search over company files. The overlapping middle area (a lens shape where the two circles intersect) is highlighted with a glowing accent color and contains a small icon combining a document and an image side by side with a checkmark, representing the combined capability.
Text rule: include ONLY these three Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/16 of image height): 「マルチモーダルAI」 (inside the left circle, below the robot head), 「RAG」 (inside the right circle, below the documents), 「マルチモーダルRAG」 (inside the glowing overlapping middle area). STRICTLY NO other text, NO English words other than "RAG", NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```

### fig2-steps-retrieval-flow.png
```
Generate an image and save it to ./mmrag-fig2-steps.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing a left-to-right 4-stage process: stage 1, a stack of mixed documents and photographs being pulled by a glowing arrow into a database cylinder icon; stage 2, a speech-bubble question mark being transformed with sparkle marks into a small vector/arrow icon; stage 3, a large magnifying glass sweeping across a row of small mixed icons (a document icon and a photo icon side by side); stage 4, a friendly robot presenting a glowing speech bubble with a small checkmark and a small citation/quote mark, representing a sourced answer. Thin arrows connect each stage left to right in a single row.
Text rule: include ONLY these Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/16 of image height), placed above their matching stage: 「取り込み」「変換」「検索」「生成」. STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```

## R1（HTML）に留めた理由

- **fig3（table）**: 4場面×3列（眠っている資料／AIに聞けること）の一覧比較で、対応関係を精密に示す必要があるため。
- **fig4（gauge）**: 費用レンジ（SaaS型・小規模・大規模の金額）が一次情報照合対象の数値のため、AI生成での誤字リスクを排除。
- **fig5（signal）**: 3段階判定の条件・次の一手が長めの説明文のため、精密配置が必要な「文字が主役の図」として継続。**色の学び**: 3状態のうち「マルチモーダルRAGはまだ不要」は失敗ではなく健全な判定結果のため、ブランド規則「否定/失敗の強調のみ赤」に反しないよう赤ではなく灰色（`--muted #6B7388` 系）に変更した（multi-ai-agent fig5 の「まだ早い」は待つべき状態＝赤の使用が妥当で対比になる）。

## レンダリング環境メモ（Windows）

`scripts/render-html.sh` は Windows Chrome を認識するよう改修済み（[ai-helpdesk/assets/codex-prompts.md](../../ai-helpdesk/assets/codex-prompts.md) 参照）。
