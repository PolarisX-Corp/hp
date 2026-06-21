import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PolarisX株式会社",
    short_name: "PolarisX",
    description:
      "AI×データ活用で、意思決定に再現性を。勘と経験に頼ってきた「良い判断」を、誰もが・何度でも再現できる仕組みへ。",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#366EFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
