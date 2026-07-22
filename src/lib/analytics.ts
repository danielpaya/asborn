/**
 * Helper de analítica preparado para conectar una herramienta real en el futuro.
 * No transmite información a ningún servicio: únicamente registra eventos en
 * consola durante el desarrollo. No debe recibir datos personales.
 */
export type AnalyticsEvent =
  | "hero_collection_click"
  | "hero_turn_click"
  | "founder_video_play"
  | "product_gallery_view"
  | "anatomy_point_open"
  | "size_guide_open"
  | "turn_survey_start"
  | "turn_survey_step"
  | "turn_survey_complete_demo"
  | "suggestion_form_start"
  | "suggestion_form_complete_demo"
  | "whatsapp_click"
  | "instagram_click"
  | "tiktok_click";

export interface AnalyticsPayload {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload): void {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[asbor:analytics] ${event}`, payload ?? {});
  }
}
