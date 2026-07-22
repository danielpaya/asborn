import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialText } from "@/components/ui/EditorialText";
import { Timeline } from "@/components/brand/Timeline";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  founderQuote,
  mission,
  purpose,
  values,
  vision,
  microcopy,
} from "@/config/brand";

export const metadata: Metadata = {
  title: "Historia",
  description:
    "Origen, propósito, misión y visión de ASBOR: una marca colombiana de denim construida para evolucionar.",
  alternates: { canonical: "/historia" },
};

export default function HistoriaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Historia", href: "/historia" }]} />

      <section className="px-6 pt-10 pb-20 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="ORIGEN" title="El origen de ASBOR." />
          <p className="text-asbor-text-muted mt-8 max-w-2xl text-lg leading-relaxed">
            ASBOR nace de la intención de crear un jean diferente, cómodo y reconocible
            que pueda ofrecer una experiencia especial sin convertirse en un producto
            inaccesible.
          </p>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="PROBLEMA IDENTIFICADO"
            title="Una inconformidad con sentido."
          />
          <EditorialText
            className="mt-8"
            lineClassName="text-asbor-text-muted"
            lines={[
              "Encontrar un jean con identidad y buena presentación, normalmente significaba pagar precios demasiado altos.",
              "ASBOR nace para demostrar que el diseño, la identidad y el cuidado por los detalles también pueden ser accesibles.",
            ]}
          />
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="VISIÓN DEL FUNDADOR"
            title="Una idea que empieza en primera persona."
          />
          <blockquote className="border-asbor-gold/50 mt-8 space-y-4 border-l pl-6">
            {founderQuote.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="font-display text-asbor-ivory text-xl leading-relaxed sm:text-2xl"
              >
                {paragraph}
              </p>
            ))}
          </blockquote>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="PROPÓSITO" title="Por qué existe ASBOR." />
          <p className="text-asbor-text-muted mt-8 max-w-2xl text-lg leading-relaxed">
            {purpose.intro}
          </p>
          <p className="text-asbor-text-muted mt-4 max-w-2xl text-base leading-relaxed">
            {purpose.commitment}
          </p>
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {purpose.improvementAreas.map((area) => (
              <div
                key={area}
                className="text-asbor-ivory flex items-center gap-2.5 text-sm"
              >
                <span className="bg-asbor-gold h-1 w-1 shrink-0 rounded-full" />
                {area}
              </div>
            ))}
          </div>
          <p className="text-asbor-text-muted/80 mt-8 max-w-2xl text-sm leading-relaxed italic">
            {purpose.disclaimer}
          </p>
          <p className="font-display text-asbor-gold mt-6 max-w-2xl text-2xl">
            {purpose.coreIdea}
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-2">
          <div>
            <p className="label-caps text-asbor-gold-muted">Misión</p>
            <p className="font-display text-asbor-ivory mt-4 text-2xl leading-snug sm:text-3xl">
              {mission}
            </p>
          </div>
          <div>
            <p className="label-caps text-asbor-gold-muted">Visión</p>
            <p className="font-display text-asbor-ivory mt-4 text-2xl leading-snug sm:text-3xl">
              {vision}
            </p>
          </div>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="VALORES" title="Lo que sostiene cada decisión." />
          <div className="mt-10 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="label-caps border-asbor-gold/40 text-asbor-gold-muted border px-4 py-2"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FABRICACIÓN COLOMBIANA"
            title="Origen colombiano, ambición internacional."
          />
          <p className="text-asbor-text-muted mt-8 max-w-2xl text-lg leading-relaxed">
            ASBOR nace y se construye en Colombia. Su ambición es internacional, pero su
            origen forma parte de su identidad.
          </p>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="PLAN DE EVOLUCIÓN" title="Lo que sigue." />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      <section className="bg-asbor-ivory px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-asbor-black text-3xl sm:text-4xl">
          Este es el primer capítulo. Lo que sigue se construirá mejorando cada detalle.
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
