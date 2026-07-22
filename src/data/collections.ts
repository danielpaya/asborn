export interface ProductImage {
  id: string;
  src: string;
  alt: string;
  label: string;
}

export interface Collection {
  slug: string;
  name: string;
  chapterLabel: string;
  title: string;
  description: string;
  priceLabel: string;
  status: string;
  production: string;
  story: string[];
  images: ProductImage[];
  faqIds: string[];
}

export const galaCollection: Collection = {
  slug: "gala-001",
  name: "GALA 001",
  chapterLabel: "COLECCIÓN 001",
  title: "GALA",
  description:
    "La primera expresión de ASBOR. Un jean colombiano diseñado para combinar identidad, comodidad y detalles reconocibles.",
  priceLabel: "$110.000–$150.000 COP",
  status: "Próximo lanzamiento",
  production: "Primera producción limitada.",
  story: [
    "GALA 001 es el primer capítulo de ASBOR: una colección inspirada en la disciplina, el carácter y la búsqueda constante de excelencia.",
    "Diseñada en Colombia, esta edición limitada da inicio a una visión de largo plazo que mejorará progresivamente cada material y cada proceso.",
  ],
  images: [
    {
      id: "front",
      src: "/images/gala/gala-front.webp",
      alt: "Vista frontal del jean GALA 001 de ASBOR",
      label: "Vista frontal",
    },
    {
      id: "back",
      src: "/images/gala/gala-back.webp",
      alt: "Vista posterior del jean GALA 001 de ASBOR",
      label: "Vista posterior",
    },
    {
      id: "pocket-right",
      src: "/images/gala/gala-pocket-right.webp",
      alt: "Bolsillo derecho con bordado del jean GALA 001",
      label: "Bolsillo derecho",
    },
    {
      id: "pocket-left",
      src: "/images/gala/gala-pocket-left.webp",
      alt: "Bolsillo izquierdo del jean GALA 001",
      label: "Bolsillo izquierdo",
    },
    {
      id: "embroidery",
      src: "/images/gala/gala-embroidery.webp",
      alt: "Detalle del bordado del emblema ASBOR",
      label: "Bordado",
    },
    {
      id: "label",
      src: "/images/gala/gala-label.webp",
      alt: "Marquilla ASBOR",
      label: "Marquilla",
    },
    {
      id: "claw",
      src: "/images/gala/gala-claw.webp",
      alt: "Garra trasera del jean GALA 001",
      label: "Garra",
    },
    {
      id: "stitching",
      src: "/images/gala/gala-stitching.webp",
      alt: "Detalle de costuras del jean GALA 001",
      label: "Costuras",
    },
    {
      id: "package-front",
      src: "/images/gala/gala-package-front.webp",
      alt: "Empaque ASBOR, vista frontal",
      label: "Empaque — frontal",
    },
    {
      id: "package-back",
      src: "/images/gala/gala-package-back.webp",
      alt: "Empaque ASBOR, vista posterior",
      label: "Empaque — posterior",
    },
    {
      id: "letter",
      src: "/images/gala/gala-letter.webp",
      alt: "Carta de agradecimiento ASBOR",
      label: "Carta de agradecimiento",
    },
  ],
  faqIds: ["talla", "pago", "envio", "turno", "materiales", "cambios"],
};

export const nextCollectionTeaser = {
  name: "CHAOS",
  label: "PRÓXIMO CAPÍTULO",
  description: "La segunda colección de ASBOR está en desarrollo.",
};
