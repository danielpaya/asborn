import path from "node:path";
import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",

  basePath,

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;