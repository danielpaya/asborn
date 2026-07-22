export type SymbolId = "cruz" | "meandro" | "laurel" | "palmeta" | "roseta";

export interface BrandSymbol {
  id: SymbolId;
  name: string;
  meaning: string;
  description: string;
}

export const brandSymbols: BrandSymbol[] = [
  {
    id: "cruz",
    name: "Cruz",
    meaning: "Equilibrio, dirección y firmeza.",
    description:
      "La forma que ordena el sistema visual de ASBOR. Representa un punto de partida estable desde el cual crecer.",
  },
  {
    id: "meandro",
    name: "Meandro",
    meaning: "Continuidad y evolución.",
    description:
      "Una línea que nunca se interrumpe. Simboliza el progreso constante de la marca, capítulo tras capítulo.",
  },
  {
    id: "laurel",
    name: "Laurel",
    meaning: "Esfuerzo convertido en logro.",
    description:
      "El Laurel de Ascenso: una composición que representa el crecimiento construido con disciplina.",
  },
  {
    id: "palmeta",
    name: "Palmeta",
    meaning: "Crecimiento.",
    description:
      "Una forma que se expande hacia afuera, como referencia a la ambición de ASBOR de seguir creciendo sin perder su origen.",
  },
  {
    id: "roseta",
    name: "Roseta",
    meaning: "Precisión y armonía.",
    description:
      "Un punto de equilibrio geométrico. Representa el cuidado por el detalle en cada pieza que produce ASBOR.",
  },
];

export const codeAsborPrinciples = [
  {
    id: "disciplina",
    title: "Disciplina",
    text: "La calidad no aparece por accidente. Se construye mediante repetición, precisión y constancia.",
  },
  {
    id: "caracter",
    title: "Carácter",
    text: "Las prendas comunican una parte de quiénes somos antes de pronunciar una palabra.",
  },
  {
    id: "legado",
    title: "Legado",
    text: "Diseñar para trascender significa crear algo que conserve significado más allá de una temporada.",
  },
  {
    id: "excelencia",
    title: "Excelencia",
    text: "Cada colección debe ser mejor que la anterior.",
  },
  {
    id: "colombia",
    title: "Colombia",
    text: "ASBOR nace y se construye en Colombia. Su ambición es internacional, pero su origen forma parte de su identidad.",
  },
] as const;
