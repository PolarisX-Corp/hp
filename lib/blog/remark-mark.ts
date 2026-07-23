/**
 * `==テキスト==` を `<mark>`（マーカー強調）に変換する remark プラグイン。
 *
 * 記事描画は生 HTML を許可していない（外部 PR 投稿の XSS 対策）ため、
 * 執筆者が使えるマーカー記法を Markdown の変換段階で安全に用意する。
 * - 変換対象は text ノードのみ。コードブロック・インラインコード内の `==` は変換しない
 * - 区切りは半角 `=` ちょうど2連続。`===` 以上はそのまま本文として残す
 * - 開始 `==` の直後・終了 `==` の直前が空白の場合は変換しない（`a == b` 等の誤検出防止）
 * - `==**太字**==` のように、区切りの間に他のインライン要素を挟める
 * - 対応が取れない `==` はそのまま本文として残る
 */

const DELIMITER = "==";

type MdNode = {
  type: string;
  value?: string;
  children?: MdNode[];
  data?: { hName?: string };
};

/** 子ノード列を分解した中間表現。open はマーカー開始候補のプレースホルダ */
type Token =
  | { kind: "node"; node: MdNode }
  | { kind: "text"; value: string }
  | { kind: "delim" }
  | { kind: "open" };

export function remarkMark() {
  return (tree: unknown): void => {
    transform(tree as MdNode);
  };
}

function transform(node: MdNode): void {
  if (!node.children) return;
  for (const child of node.children) transform(child);
  const hasDelimiter = node.children.some(
    (c) => c.type === "text" && c.value?.includes(DELIMITER),
  );
  if (hasDelimiter) node.children = applyMarks(node.children);
}

function applyMarks(children: MdNode[]): MdNode[] {
  const tokens = tokenize(children);
  const out: Token[] = [];
  // 未対応の開始記号が out 上で占める位置（スタック）
  const openers: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.kind !== "delim") {
      out.push(token);
      continue;
    }
    if (openers.length > 0 && touchesContent(tokens[i - 1], "before")) {
      // 終了記号：直近の開始記号からここまでを mark ノードに畳む
      const inner = out.splice(openers.pop()!);
      inner.shift(); // open プレースホルダを捨てる
      out.push({
        kind: "node",
        node: { type: "mark", children: toNodes(inner), data: { hName: "mark" } },
      });
    } else if (touchesContent(tokens[i + 1], "after")) {
      openers.push(out.length);
      out.push({ kind: "open" });
    } else {
      out.push({ kind: "text", value: DELIMITER });
    }
  }

  // 閉じられなかった開始記号は本文の `==` に戻す
  for (const index of openers) out[index] = { kind: "text", value: DELIMITER };
  return toNodes(out);
}

/** 区切り記号が空白以外の内容に接しているか（マーカー成立条件） */
function touchesContent(token: Token | undefined, side: "before" | "after"): boolean {
  if (!token) return false;
  if (token.kind === "node") return true;
  if (token.kind !== "text") return false;
  const ch = side === "before" ? token.value.at(-1) : token.value[0];
  return ch !== undefined && !/\s/.test(ch);
}

/** text ノードは `==`（ちょうど2連続の半角 `=`）を区切りとして分解する */
function tokenize(children: MdNode[]): Token[] {
  const tokens: Token[] = [];
  for (const child of children) {
    if (child.type !== "text" || typeof child.value !== "string") {
      tokens.push({ kind: "node", node: child });
      continue;
    }
    const value = child.value;
    let pos = 0;
    for (const match of value.matchAll(/=+/g)) {
      if (match[0].length !== 2) continue;
      if (match.index > pos) tokens.push({ kind: "text", value: value.slice(pos, match.index) });
      tokens.push({ kind: "delim" });
      pos = match.index + DELIMITER.length;
    }
    if (pos < value.length) tokens.push({ kind: "text", value: value.slice(pos) });
  }
  return tokens;
}

/** トークン列を mdast の子ノード列へ戻す（連続するテキストは結合） */
function toNodes(tokens: Token[]): MdNode[] {
  const nodes: MdNode[] = [];
  for (const token of tokens) {
    if (token.kind === "node") {
      nodes.push(token.node);
      continue;
    }
    const value = token.kind === "text" ? token.value : DELIMITER;
    const last = nodes.at(-1);
    if (last?.type === "text" && typeof last.value === "string") last.value += value;
    else nodes.push({ type: "text", value });
  }
  return nodes;
}
