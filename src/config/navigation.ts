export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "GALA 001", href: "/coleccion/gala-001" },
  { label: "Historia", href: "/historia" },
  { label: "El jean", href: "/anatomia" },
  { label: "Código ASBOR", href: "/codigo-asbor" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Marca",
    links: [
      { label: "Historia", href: "/historia" },
      { label: "Código ASBOR", href: "/codigo-asbor" },
      { label: "Laboratorio", href: "/laboratorio" },
    ],
  },
  {
    title: "Producto",
    links: [
      { label: "GALA 001", href: "/coleccion/gala-001" },
      { label: "Anatomía del jean", href: "/anatomia" },
      { label: "Tomar turno", href: "/turno" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  },
];

export const ctaTurnHref = "/turno";
