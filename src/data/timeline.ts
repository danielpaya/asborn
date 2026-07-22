export interface TimelineChapter {
  id: string;
  number: string;
  title: string;
  items: string[];
}

export const timelineChapters: TimelineChapter[] = [
  {
    id: "origen",
    number: "Capítulo 01",
    title: "El origen",
    items: ["Primer fit", "Primer emblema", "Primera producción", "Primera comunidad"],
  },
  {
    id: "evolucion",
    number: "Capítulo 02",
    title: "Evolución",
    items: [
      "Mejores textiles",
      "Nuevos cortes",
      "Nuevos lavados",
      "Mayor precisión",
      "Personal especializado",
    ],
  },
  {
    id: "tecnologia",
    number: "Capítulo 03",
    title: "Tecnología",
    items: [
      "Patronaje digital",
      "Pruebas de ajuste",
      "Nuevas técnicas",
      "Personalización",
      "Procesos más eficientes",
    ],
  },
];

export const timelineClosing =
  "No queremos crecer perdiendo nuestra esencia. Queremos crecer mejorándola.";
