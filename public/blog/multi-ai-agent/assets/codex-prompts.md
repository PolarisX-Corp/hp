# multi-ai-agent — 図解の実装記録（5:4・R3-full 全面生成 適用）

2026-07-23、issue #23（SEO本文図の5:4化・全面AI生成の第一ルート化）の運用第2号記事。基調スタイル: **flat**（ライト）＋強調 **illust**（fig1・fig2・fig5 は全面R3-full）。ダーク不可。

## 採用ルート・結果

| 図 | 型ID | ルート | 試行回数 | 結果 |
|---|---|---|---|---|
| cover | – | R1（1200×630・不変） | 1 | 採用 |
| fig1-hierarchy-orchestrator-team | hierarchy | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文5ラベル誤字なし） |
| fig2-steps-orchestration-flow | steps | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文5ラベル誤字なし） |
| fig3-heatmap-merit-flipside | heatmap | R1（1280×1024・3行×2列） | 1 | 採用（メリット/課題の対応語は精密表現が必要なためHTML） |
| fig4-table-usecase-roles | table | R1（1280×1024・4行×2列） | 1 | 採用 |
| fig5-signal-scale-readiness | signal | **R3-full**（全面生成→5:4クロップ） | 1 | 採用（和文3ラベル誤字なし・信号機メタファー） |

## R3-full 実採用プロンプト

### fig1-hierarchy-orchestrator-team.png
```
Generate an image and save it to ./multi-agent-fig1-hierarchy.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing an organizational hierarchy: at the top center, one larger friendly robot wearing a small headset/leader badge (the orchestrator); below it, three smaller robots side by side, each with a distinct small icon in front of them (a magnifying glass for research, a pencil for writing, a checkmark shield for checking); thin lines connect the top robot down to each of the three worker robots; at the very bottom, a wide horizontal platform/shelf holding a glowing shared book-and-database icon that all three worker robots have a thin dotted line connecting down to, representing a shared knowledge base beneath the whole team.
Text rule: include ONLY these Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/18 of image height): 「司令塔」(above the top robot), 「調査」「作成」「チェック」(one under each of the three worker robots), 「共有ナレッジ」(on the bottom platform). STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```

### fig2-steps-orchestration-flow.png
```
Generate an image and save it to ./multi-agent-fig2-steps.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing a left-to-right 5-stage process: stage 1, a small human silhouette handing a document to a leader robot; stage 2, the leader robot splitting a document into three smaller pieces with dashed lines; stage 3, three small worker robots working in parallel on their own pieces side by side; stage 4, thin arrows merging the three pieces back into the leader robot who assembles one glowing document; stage 5, a human silhouette reviewing the final document with a checkmark. Small thin arrows connect each stage left to right in a single row.
Text rule: include ONLY these Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/18 of image height), placed above their matching stage: 「依頼」「分解」「実行」「統合」「確認」. STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF, deep navy #00063D, soft light blue #EAF0FF, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```

### fig5-signal-scale-readiness.png
```
Generate an image and save it to ./multi-agent-fig5-signal.png. $imagegen.
Subject: a clean FLAT-DESIGN VECTOR infographic illustration for a corporate SaaS blog, showing a vertical traffic-light-style readiness gauge with three rounded horizontal bands stacked top to bottom: the top band is royal blue and glowing, with a small icon of several robots working smoothly together in sync; the middle band is a muted amber/orange color, with a small icon of a robot next to a clipboard with a pending checklist; the bottom band is a muted red color, with a small icon of a single robot next to a stop-hand or pause icon. A thin vertical line connects the three bands like a stacked signal light.
Text rule: include ONLY these three Japanese labels in a clean modern sans-serif font, LARGE and highly legible (each label at least 1/16 of image height), placed inside or beside their matching band: 「進めてよい」(top band), 「条件つき」(middle band), 「まだ早い」(bottom band). STRICTLY NO other text, NO English words, NO numbers, NO watermarks.
Style: modern flat vector, soft light shadows, professional, bright, generous top/bottom margins — keep ALL content within the central 5:4 area because the image will be center-cropped from 3:2 to 5:4.
Color palette STRICTLY: royal blue #366EFF for the top band, muted amber #E8A13D for the middle band, muted red #E0405E for the bottom band, deep navy #00063D for icons/outlines, white, light gray #E2E5EE. Background very light #F7F8FB.
Size: landscape 1536x1024. Output PNG only.
```
※ fig5 は3状態のうち「まだ早い」が明確な否定的判定（マルチ化はまだ早い＝待つべき状態）のため、ブランド規則の「否定/失敗の強調のみ赤」に合致すると判断し赤を使用（multimodal-rag fig5 の「不要」＝良い状態とは意味が異なる点に注意）。

## R1（HTML）に留めた理由

- **fig3（heatmap）・fig4（table）**: メリット⇄課題の対応語（「効率化」⇄「コスト膨張」等）や4類型の分担フローなど、一字一句の対応関係が重要な情報密度の高い図のため、「文字が主役の図」としてR1を継続使用。

## レンダリング環境メモ（Windows）

`scripts/render-html.sh` は Windows Chrome を認識するよう改修済み（[ai-helpdesk/assets/codex-prompts.md](../../ai-helpdesk/assets/codex-prompts.md) 参照）。
