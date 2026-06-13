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
