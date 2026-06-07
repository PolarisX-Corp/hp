import type { Metadata } from "next";
import { Hanken_Grotesk, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "PolarisX株式会社",
  description:
    "労働を、無くす。人がやらなくてよい労働は、すべてテクノロジーへ。人が人らしく生き、暇を謳歌できる「すばらしき新世界」をつくります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${hanken.variable} ${zenKaku.variable}`}>
      <body>{children}</body>
    </html>
  );
}
