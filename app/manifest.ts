import type { MetadataRoute } from "next";
import { COMPANY_BRAND } from "@/lib/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PolarisX株式会社",
    short_name: "PolarisX",
    description: `${COMPANY_BRAND.catchphrase} ${COMPANY_BRAND.description}`,
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
