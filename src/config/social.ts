export interface SocialLink {
  label: string;
  href: string;
  platform: "instagram" | "tiktok" | "whatsapp";
}

/**
 * Enlaces provisionales. Reemplazar por las URL y número reales antes del lanzamiento.
 */
export const social: Record<"instagram" | "tiktok" | "whatsapp", SocialLink> = {
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/asbor.co",
    platform: "instagram",
  },
  tiktok: {
    label: "TikTok",
    href: "https://www.tiktok.com/@asbor.co",
    platform: "tiktok",
  },
  whatsapp: {
    label: "WhatsApp",
    href: "https://wa.me/573000000000",
    platform: "whatsapp",
  },
};

export const socialList: SocialLink[] = [
  social.instagram,
  social.tiktok,
  social.whatsapp,
];
