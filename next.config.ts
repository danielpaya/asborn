import path from "node:path";
import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Genera una versión HTML estática en la carpeta /out
  output: "export",

  // GitHub Pages publica el proyecto bajo /asborn
  basePath,

  // Ayuda a que las rutas estáticas funcionen correctamente
  trailingSlash: true,

  // GitHub Pages no dispone del servidor de optimización de imágenes de Next
  images: {
    unoptimized: true,
  },

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;