import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SymbolExplorer } from "@/components/brand/SymbolExplorer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { codeAsborPrinciples } from "@/data/symbols";
import { microcopy } from "@/config/brand";

export const metadata: Metadata = {
  title: "Código ASBOR",
  description:
    "Disciplina, carácter, legado, excelencia y Colombia: los principios y símbolos que construyen el lenguaje visual de ASBOR.",
  alternates: { canonical: "/codigo-asbor" },
};

export default function CodigoAsborPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Código ASBOR", href: "/codigo-asbor" }]} />

      <section className="px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FILOSOFÍA"
            title="Más que símbolos."
            description="Cada forma representa una idea. Juntas construyen el lenguaje visual de ASBOR."
          />
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-y px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="SISTEMA GRÁFICO" title="Los cinco símbolos." />
          <div className="mt-16">
            <SymbolExplorer />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="PRINCIPIOS" title="El Código ASBOR." />
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {codeAsborPrinciples.map((principle) => (
              <div key={principle.id} className="border-asbor-gold/40 border-t pt-5">
                <h3 className="font-display text-asbor-ivory text-2xl">
                  {principle.title}
                </h3>
                <p className="text-asbor-text-muted mt-3 text-sm leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asbor-ivory px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-asbor-black text-3xl sm:text-4xl">
          Conoce el jean que lleva este código.
        </h2>
        <div className="mt-8">
          <PrimaryButton href="/coleccion/gala-001">
            {microcopy.discoverCollection}
          </PrimaryButton>
        </div>
      </section>
    </>
  );
}
