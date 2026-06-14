// サーバー/クライアント双方で使う純粋なフォーマッタ（fs 等に依存しない）

/** "2026-05-28" -> "2026.05.28" */
export function formatDot(date: string): string {
  return date.replaceAll("-", ".");
}
