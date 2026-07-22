/**
 * Rutas provisionales de video e imagen. Reemplazar los archivos en /public
 * manteniendo exactamente estos nombres, o actualizar las rutas aquí.
 */
export const heroMedia = {
  desktopVideo: "/videos/asbor-hero-desktop.mp4",
  mobileVideo: "/videos/asbor-hero-mobile.mp4",
  poster: "/images/asbor-hero-poster.webp",
};

export const founderMedia = {
  video: "/videos/fundador-asbor.mp4",
  poster: "/images/fundador-asbor-poster.webp",
};

export interface SocialVideoItem {
  id: string;
  title: string;
  poster: string;
  video: string;
}

export const socialVideos: SocialVideoItem[] = [
  {
    id: "historia",
    title: "Historia de la marca",
    poster: "/images/social/asbor-social-historia-poster.webp",
    video: "/videos/social/asbor-social-historia.mp4",
  },
  {
    id: "detalle",
    title: "Detalle del jean",
    poster: "/images/social/asbor-social-detalle-poster.webp",
    video: "/videos/social/asbor-social-detalle.mp4",
  },
  {
    id: "proceso",
    title: "Proceso de diseño",
    poster: "/images/social/asbor-social-proceso-poster.webp",
    video: "/videos/social/asbor-social-proceso.mp4",
  },
  {
    id: "empaque",
    title: "Empaque",
    poster: "/images/social/asbor-social-empaque-poster.webp",
    video: "/videos/social/asbor-social-empaque.mp4",
  },
];

export const sealImages = {
  pocketRight: "/images/gala/gala-pocket-right.webp",
  pocketLeft: "/images/gala/gala-pocket-left.webp",
  embroidery: "/images/gala/gala-embroidery.webp",
  claw: "/images/gala/gala-claw.webp",
  label: "/images/gala/gala-label.webp",
  stitching: "/images/gala/gala-stitching.webp",
  packageFront: "/images/gala/gala-package-front.webp",
};

export const brandAssets = {
  wordmark: "/brand/asbor-wordmark.svg",
  emblem: "/brand/asbor-emblem.svg",
  monogram: "/brand/asbor-monogram.svg",
};
