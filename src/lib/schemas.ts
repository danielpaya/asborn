import { z } from "zod";
import {
  colorOptions,
  contactChannelOptions,
  fitOptions,
  interestOptions,
  priceRangeOptions,
  sizeOptions,
  surveyContent,
} from "@/data/purchase-turn-survey";
import { laboratorioContent, suggestionCategories } from "@/data/laboratorio";

const optionValues = (options: { value: string }[]): [string, ...string[]] => {
  const [first, ...rest] = options.map((option) => option.value);
  return [first, ...rest];
};

const whatsappPattern = /^[0-9+()\s-]{7,20}$/;

export const surveySchema = z.object({
  firstName: z.string().trim().min(2, surveyContent.errors.firstName),
  lastName: z.string().trim().min(2, surveyContent.errors.lastName),
  whatsapp: z
    .string()
    .trim()
    .min(7, surveyContent.errors.whatsapp)
    .regex(whatsappPattern, surveyContent.errors.whatsapp),
  city: z.string().trim().min(2, surveyContent.errors.city),
  department: z.string().trim().min(2, surveyContent.errors.department),
  size: z.enum(optionValues(sizeOptions), {
    error: surveyContent.errors.size,
  }),
  fit: z.enum(optionValues(fitOptions), {
    error: surveyContent.errors.fit,
  }),
  color: z.enum(optionValues(colorOptions), {
    error: surveyContent.errors.color,
  }),
  interest: z.enum(optionValues(interestOptions), {
    error: surveyContent.errors.interest,
  }),
  priceRange: z.enum(optionValues(priceRangeOptions), {
    error: surveyContent.errors.priceRange,
  }),
  contactChannel: z.enum(optionValues(contactChannelOptions), {
    error: surveyContent.errors.contactChannel,
  }),
  comment: z.string().trim().max(400).optional().or(z.literal("")),
  consentRequired: z.literal(true, {
    error: surveyContent.errors.consent,
  }),
  consentOptional: z.boolean().optional(),
});

export type SurveyFormValues = z.infer<typeof surveySchema>;

export const surveyStepFields: Record<string, (keyof SurveyFormValues)[]> = {
  datos: ["firstName", "lastName", "whatsapp", "city", "department"],
  talla: ["size"],
  preferencias: ["fit", "color"],
  interes: ["interest", "priceRange", "contactChannel", "comment"],
  confirmacion: ["consentRequired", "consentOptional"],
};

export const surveyDefaultValues: SurveyFormValues = {
  firstName: "",
  lastName: "",
  whatsapp: "",
  city: "",
  department: "",
  size: undefined as unknown as SurveyFormValues["size"],
  fit: undefined as unknown as SurveyFormValues["fit"],
  color: undefined as unknown as SurveyFormValues["color"],
  interest: undefined as unknown as SurveyFormValues["interest"],
  priceRange: undefined as unknown as SurveyFormValues["priceRange"],
  contactChannel: undefined as unknown as SurveyFormValues["contactChannel"],
  comment: "",
  consentRequired: false as unknown as true,
  consentOptional: false,
};

export const suggestionSchema = z.object({
  firstName: z.string().trim().min(2, laboratorioContent.errors.firstName),
  lastName: z.string().trim().optional().or(z.literal("")),
  category: z.enum(optionValues(suggestionCategories), {
    error: laboratorioContent.errors.category,
  }),
  suggestion: z.string().trim().min(10, laboratorioContent.errors.suggestion).max(600),
  whatsapp: z.string().trim().optional().or(z.literal("")),
  email: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => !value || z.email().safeParse(value).success,
      "Ingresa un correo válido."
    ),
  consent: z.literal(true, { error: laboratorioContent.errors.consent }),
});

export type SuggestionFormValues = z.infer<typeof suggestionSchema>;

export const suggestionDefaultValues: SuggestionFormValues = {
  firstName: "",
  lastName: "",
  category: undefined as unknown as SuggestionFormValues["category"],
  suggestion: "",
  whatsapp: "",
  email: "",
  consent: false as unknown as true,
};
