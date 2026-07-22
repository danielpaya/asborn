import type { MetadataRoute } from "next";
import { brand } from "@/config/brand";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/turno", "/laboratorio", "/gracias/"],
      },
    ],
    sitemap: `${brand.url}/sitemap.xml`,
  };
}