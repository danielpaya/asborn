import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PurchaseTurnSurvey } from "@/components/survey/PurchaseTurnSurvey";
import { surveyContent } from "@/data/purchase-turn-survey";

export const metadata: Metadata = {
  title: "Tomar turno — GALA 001",
  description:
    "Encuesta visual de demostración para conocer cómo funcionará el proceso de turnos de compra de GALA 001, la primera colección de ASBOR.",
  alternates: { canonical: "/turno" },
  robots: { index: false, follow: true },
};

export default function TurnoPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Tomar turno", href: "/turno" }]} />

      <section className="px-6 pt-10 pb-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label-caps text-asbor-gold">{surveyContent.label}</p>
          <h1 className="font-display text-asbor-ivory mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]">
            {surveyContent.title}
          </h1>
          <p className="text-asbor-text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            {surveyContent.intro}
          </p>
          <p className="label-caps border-asbor-gold/40 text-asbor-gold-muted mt-6 inline-block border px-4 py-2">
            {surveyContent.notice}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <PurchaseTurnSurvey />
        </div>
      </section>
    </>
  );
}
