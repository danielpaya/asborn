export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "talla",
    question: "¿Cómo sabré cuál es mi talla?",
    answer:
      "En la encuesta de turno encontrarás una guía de tallas de referencia. La talla definitiva se confirmará de forma individual antes de la entrega.",
  },
  {
    id: "pago",
    question: "¿Ya puedo pagar mi jean?",
    answer:
      "Todavía no. GALA 001 está en estado de próximo lanzamiento y esta versión del sitio es una demostración visual. No se procesan pagos.",
  },
  {
    id: "envio",
    question: "¿Cuándo se hará la entrega?",
    answer:
      "La fecha de entrega se definirá y comunicará directamente a las personas que tomen turno, una vez inicie el proceso real de compra.",
  },
  {
    id: "turno",
    question: "¿Qué significa tomar turno?",
    answer:
      "Tomar turno es una forma de mostrar interés anticipado. En la versión final, las personas registradas serán contactadas en orden para confirmar talla, disponibilidad, precio definitivo y fecha de entrega.",
  },
  {
    id: "materiales",
    question: "¿Qué materiales usa GALA 001?",
    answer:
      "La composición y los acabados finales están en desarrollo. No compartimos especificaciones técnicas hasta que estén confirmadas.",
  },
  {
    id: "cambios",
    question: "¿Se podrán hacer cambios o devoluciones?",
    answer:
      "La política de cambios y devoluciones se publicará junto con el proceso real de compra, antes del lanzamiento de GALA 001.",
  },
];
