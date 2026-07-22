export type SpecificationStatus = "defined" | "testing" | "pending";

export interface ProductSpecification {
  label: string;
  value?: string;
  status: SpecificationStatus;
  description: string;
}

export const statusLabels: Record<SpecificationStatus, string> = {
  defined: "Definido",
  testing: "En pruebas",
  pending: "En desarrollo",
};

export interface AnatomyPoint {
  id: string;
  label: string;
  /** Posición porcentual sobre el diagrama, 0-100 */
  x: number;
  y: number;
  specification: ProductSpecification;
}

export const anatomyPoints: AnatomyPoint[] = [
  {
    id: "cintura",
    label: "Cintura",
    x: 50,
    y: 8,
    specification: {
      label: "Cintura",
      status: "pending",
      description: "Especificación en desarrollo.",
    },
  },
  {
    id: "tiro",
    label: "Tiro",
    x: 50,
    y: 18,
    specification: {
      label: "Tiro",
      status: "pending",
      description: "Especificación en desarrollo.",
    },
  },
  {
    id: "bolsillo-derecho",
    label: "Bolsillo derecho",
    x: 68,
    y: 30,
    specification: {
      label: "Bolsillo derecho",
      status: "testing",
      description:
        "En desarrollo. Se está definiendo la profundidad y el refuerzo de esquinas.",
    },
  },
  {
    id: "bolsillo-izquierdo",
    label: "Bolsillo izquierdo",
    x: 32,
    y: 30,
    specification: {
      label: "Bolsillo izquierdo",
      status: "testing",
      description:
        "En desarrollo. Se está definiendo la profundidad y el refuerzo de esquinas.",
    },
  },
  {
    id: "bordado",
    label: "Bordado",
    x: 66,
    y: 40,
    specification: {
      label: "Bordado del emblema",
      status: "defined",
      description:
        "El bolsillo trasero derecho lleva el emblema ASBOR bordado en hilo tono dorado mate.",
    },
  },
  {
    id: "costura",
    label: "Costura",
    x: 40,
    y: 45,
    specification: {
      label: "Costuras",
      status: "pending",
      description: "Especificación en desarrollo.",
    },
  },
  {
    id: "rodilla",
    label: "Rodilla",
    x: 45,
    y: 62,
    specification: {
      label: "Rodilla",
      status: "pending",
      description: "Especificación en desarrollo.",
    },
  },
  {
    id: "bota",
    label: "Bota",
    x: 42,
    y: 92,
    specification: {
      label: "Bota",
      status: "pending",
      description: "Especificación en desarrollo.",
    },
  },
  {
    id: "garra",
    label: "Garra",
    x: 50,
    y: 22,
    specification: {
      label: "Garra trasera",
      status: "testing",
      description:
        "En desarrollo. La garra tomará como referencia el sistema gráfico del Código ASBOR.",
    },
  },
  {
    id: "marquilla",
    label: "Marquilla",
    x: 58,
    y: 15,
    specification: {
      label: "Marquilla",
      status: "testing",
      description: "En desarrollo. Incluirá el wordmark ASBOR y datos de la edición.",
    },
  },
];

export interface AnatomyModule {
  id: string;
  title: string;
  description: string;
  specs: ProductSpecification[];
}

export const anatomyModules: AnatomyModule[] = [
  {
    id: "tela",
    title: "La tela",
    description: "Composición, peso, elasticidad, tacto y resistencia.",
    specs: [
      { label: "Composición", status: "pending", description: "En desarrollo." },
      { label: "Peso", status: "pending", description: "En desarrollo." },
      { label: "Elasticidad", status: "pending", description: "En desarrollo." },
      { label: "Resistencia", status: "pending", description: "En desarrollo." },
    ],
  },
  {
    id: "fit",
    title: "El fit",
    description: "Cintura, tiro, muslo, rodilla, bota y largo.",
    specs: [
      { label: "Cintura", status: "pending", description: "En desarrollo." },
      { label: "Tiro", status: "pending", description: "En desarrollo." },
      { label: "Muslo", status: "pending", description: "En desarrollo." },
      { label: "Rodilla", status: "pending", description: "En desarrollo." },
      { label: "Bota", status: "pending", description: "En desarrollo." },
      { label: "Largo", status: "pending", description: "En desarrollo." },
    ],
  },
  {
    id: "confeccion",
    title: "La confección",
    description: "Costuras, refuerzos, herrajes y control de calidad.",
    specs: [
      { label: "Costuras", status: "pending", description: "En desarrollo." },
      { label: "Refuerzos", status: "pending", description: "En desarrollo." },
      { label: "Herrajes", status: "pending", description: "En desarrollo." },
      {
        label: "Control de calidad",
        status: "testing",
        description: "En proceso de definición del protocolo interno.",
      },
    ],
  },
  {
    id: "detalles",
    title: "Los detalles",
    description: "Bordados, marquilla, garra, bolsillos y empaque.",
    specs: [
      {
        label: "Bordado",
        status: "defined",
        description: "Emblema ASBOR bordado en el bolsillo trasero derecho.",
      },
      { label: "Marquilla", status: "testing", description: "En desarrollo." },
      { label: "Garra", status: "testing", description: "En desarrollo." },
      {
        label: "Empaque",
        status: "testing",
        description: "Bolsa zipper, carta y marquilla en definición.",
      },
    ],
  },
];
