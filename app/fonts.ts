import { Space_Grotesk, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";

// 新DS(/ サービスページ) — すべて variable フォント(weight指定なし)で配信
export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  display: "swap",
});
