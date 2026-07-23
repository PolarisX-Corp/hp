import type { Metadata } from "next";
import { COMPANY_BRAND } from "@/lib/company";

export const metadata: Metadata = {
  title: {
    default: "PolarisX株式会社",
    template: "%s | PolarisX",
  },
  description: `${COMPANY_BRAND.catchphrase} ${COMPANY_BRAND.description}`,
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
