import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SuggestionForm } from "@/components/laboratorio/SuggestionForm";
import { laboratorioContent } from "@/data/laboratorio";

export const metadata: Metadata = {
  title: "Laboratorio ASBOR",
  description:
    "Comparte visualmente una idea para las próximas colecciones de ASBOR. Demostración: las sugerencias no se envían ni se almacenan.",
  alternates: { canonical: "/laboratorio" },
  robots: { index: false, follow: true },
};

export default function LaboratorioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Laboratorio", href: "/laboratorio" }]} />

      <section className="px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="label-caps text-asbor-gold">Laboratorio ASBOR</p>
          <h1 className="font-display text-asbor-ivory mt-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]">
            {laboratorioContent.title}
          </h1>
          <p className="text-asbor-text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            {laboratorioContent.intro}
          </p>
          <p className="label-caps border-asbor-gold/40 text-asbor-gold-muted mt-6 inline-block border px-4 py-2">
            {laboratorioContent.notice}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <SuggestionForm />
        </div>
      </section>
    </>
  );
}
