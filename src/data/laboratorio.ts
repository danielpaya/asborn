export interface SuggestionCategory {
  value: string;
  label: string;
}

export const suggestionCategories: SuggestionCategory[] = [
  { value: "tela", label: "Tela" },
  { value: "comodidad", label: "Comodidad" },
  { value: "fit", label: "Fit" },
  { value: "tallas", label: "Tallas" },
  { value: "bordado", label: "Bordado" },
  { value: "color", label: "Color" },
  { value: "empaque", label: "Empaque" },
  { value: "precio", label: "Precio" },
  { value: "proxima-coleccion", label: "Próxima colección" },
  { value: "experiencia-compra", label: "Experiencia de compra" },
  { value: "otro", label: "Otro" },
];

export const laboratorioContent = {
  title: "Ayúdanos a construir lo que sigue.",
  intro:
    "ASBOR está en evolución permanente. Tu opinión puede convertirse en parte de una próxima colección.",
  notice: "Demostración visual — las sugerencias todavía no se envían.",
  submitLabel: "Compartir una idea",
  loadingLabel: "Preparando tu idea...",
  successTitle: "Gracias por aportar al próximo capítulo de ASBOR.",
  successBody:
    "Esta es una demostración visual. La sugerencia no ha sido enviada ni almacenada.",
  finishDemo: "Finalizar demostración",
  errors: {
    firstName: "Escribe tu nombre.",
    category: "Selecciona una categoría.",
    suggestion: "Escribe tu sugerencia.",
    consent: "Acepta el consentimiento para completar la demostración.",
  },
  consentRequired:
    "Autorizo visualmente el tratamiento de los datos para demostrar cómo funcionaría el envío de una sugerencia. Entiendo que esta versión no envía ni almacena información.",
} as const;
