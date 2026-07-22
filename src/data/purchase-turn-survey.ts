export interface SurveyOption {
  value: string;
  label: string;
  description?: string;
}

export const sizeOptions: SurveyOption[] = [
  { value: "28", label: "28" },
  { value: "30", label: "30" },
  { value: "32", label: "32" },
  { value: "34", label: "34" },
  { value: "36", label: "36" },
  { value: "38", label: "38" },
  { value: "40", label: "40" },
  { value: "no-seguro", label: "No estoy seguro" },
];

export const fitOptions: SurveyOption[] = [
  {
    value: "ajustado",
    label: "Ajustado",
    description: "Silueta cercana al cuerpo, de pierna a tobillo.",
  },
  {
    value: "recto",
    label: "Recto",
    description: "Corte uniforme, sin ajustarse ni ensancharse.",
  },
  {
    value: "relajado",
    label: "Relajado",
    description: "Más espacio en muslo y pierna, para mayor comodidad.",
  },
  {
    value: "no-seguro",
    label: "No estoy seguro",
    description: "Aún estás definiendo tu preferencia de fit.",
  },
];

export const colorOptions: SurveyOption[] = [
  { value: "negro-profundo", label: "Negro profundo" },
  { value: "negro-lavado", label: "Negro lavado" },
  { value: "azul-oscuro", label: "Azul oscuro" },
  { value: "otro", label: "Otro" },
];

export const interestOptions: SurveyOption[] = [
  { value: "primeros", label: "Quiero ser de los primeros" },
  { value: "conocer", label: "Me interesa conocer el producto" },
  { value: "precio", label: "Quiero ver el precio definitivo" },
  { value: "informacion", label: "Solo quiero recibir información" },
];

export const priceRangeOptions: SurveyOption[] = [
  { value: "110-120", label: "Entre $110.000 y $120.000" },
  { value: "121-135", label: "Entre $121.000 y $135.000" },
  { value: "136-150", label: "Entre $136.000 y $150.000" },
  { value: "depende", label: "Depende de la calidad y los detalles" },
];

export const contactChannelOptions: SurveyOption[] = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "correo", label: "Correo electrónico" },
];

export interface SurveyStepMeta {
  id: string;
  index: number;
  title: string;
}

export const surveySteps: SurveyStepMeta[] = [
  { id: "datos", index: 1, title: "Tus datos" },
  { id: "talla", index: 2, title: "Tu talla" },
  { id: "preferencias", index: 3, title: "Tus preferencias" },
  { id: "interes", index: 4, title: "Tu interés" },
  { id: "confirmacion", index: 5, title: "Confirmación" },
];

export const surveyContent = {
  label: "GALA 001",
  title: "Toma tu lugar en el primer capítulo.",
  intro:
    "Esta encuesta nos ayudará a mostrar cómo funcionará el proceso de turnos para la primera colección de ASBOR.",
  notice: "Demostración visual — la información no será enviada ni almacenada.",
  process:
    "En la versión final, las personas registradas serán contactadas en orden para confirmar talla, disponibilidad, precio definitivo y fecha de entrega.",
  submitLabel: "Tomar turno para GALA 001",
  loadingLabel: "Preparando tu solicitud visual...",
  successTitle: "Tu solicitud visual para GALA 001 está lista.",
  successBody:
    "Esta es una demostración. Tus datos no han sido enviados y todavía no tienes un turno de compra real.",
  backToCollection: "Volver a GALA 001",
  finishDemo: "Finalizar demostración",
  sizeGuideCta: "Consultar guía de tallas",
  consentRequired:
    "Autorizo visualmente el tratamiento de los datos para demostrar cómo funcionaría una solicitud de turno. Entiendo que esta versión no envía ni almacena información.",
  consentOptional: "Quiero conocer futuros lanzamientos de ASBOR.",
  errors: {
    firstName: "Escribe tu nombre.",
    lastName: "Escribe tu apellido.",
    whatsapp: "Ingresa un número de WhatsApp válido.",
    city: "Escribe tu ciudad.",
    department: "Escribe tu departamento.",
    size: "Selecciona tu talla aproximada.",
    fit: "Selecciona una opción para continuar.",
    color: "Selecciona una opción para continuar.",
    interest: "Selecciona una opción para continuar.",
    priceRange: "Selecciona una opción para continuar.",
    contactChannel: "Selecciona una opción para continuar.",
    consent: "Acepta el consentimiento para completar la demostración.",
  },
  commentPlaceholder: "Comodidad, diseño, calidad, bordado, fit, empaque u otro aspecto.",
} as const;

export const sizeGuide = {
  title: "Guía de tallas — referencia",
  notice: "Medidas de referencia. Sujetas a confirmación individual en el proceso real.",
  rows: [
    { size: "28", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "30", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "32", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "34", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "36", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "38", waist: "En desarrollo", hip: "En desarrollo" },
    { size: "40", waist: "En desarrollo", hip: "En desarrollo" },
  ],
} as const;
