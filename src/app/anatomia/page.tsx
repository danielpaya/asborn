import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnatomyDiagram } from "@/components/product/AnatomyDiagram";
import { ProductDetailCard } from "@/components/product/ProductDetailCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { anatomyModules } from "@/data/product-specifications";
import { microcopy } from "@/config/brand";

export const metadata: Metadata = {
  title: "Anatomía del jean",
  description:
    "Explora la tela, el patronaje, el fit, la confección y los detalles de GALA 001, el primer jean de ASBOR.",
  alternates: { canonical: "/anatomia" },
};

const chapters = [
  { number: "01", title: "El tejido" },
  { number: "02", title: "El patronaje" },
  { number: "03", title: "El fit" },
  { number: "04", title: "La confección" },
  { number: "05", title: "Los detalles" },
  { number: "06", title: "El cuidado" },
  { number: "07", title: "Lo que sigue" },
];

export default function AnatomiaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "El jean", href: "/anatomia" }]} />

      <section className="px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="ANATOMÍA"
            title="Diseñado para sentirse bien."
            description="ASBOR busca conservar el carácter del denim y ofrecer la comodidad necesaria para acompañar el movimiento cotidiano."
          />
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-y px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="DIAGRAMA" title="Explora cada punto del jean." />
          <div className="mt-14">
            <AnatomyDiagram />
          </div>
        </div>
      </section>

      <nav aria-label="Capítulos de la anatomía" className="px-6 py-10 sm:px-10">
        <ol className="mx-auto flex max-w-6xl flex-wrap gap-3">
          {chapters.map((chapter) => (
            <li
              key={chapter.number}
              className="label-caps border-asbor-border text-asbor-text-muted border px-4 py-2"
            >
              {chapter.number} — {chapter.title}
            </li>
          ))}
        </ol>
      </nav>

      {anatomyModules.map((module, index) => (
        <section
          key={module.id}
          className={
            index % 2 === 0
              ? "px-6 py-20 sm:px-10"
              : "border-asbor-border bg-asbor-black-soft border-y px-6 py-20 sm:px-10"
          }
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow={`0${index + 1}`}
              title={module.title}
              description={module.description}
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {module.specs.map((spec) => (
                <ProductDetailCard key={spec.label} spec={spec} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="06" title="El cuidado" />
          <div className="mt-10 max-w-md">
            <ProductDetailCard
              spec={{
                label: "Instrucciones de cuidado",
                status: "pending",
                description: "Especificación en desarrollo.",
              }}
            />
          </div>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="07" title="Lo que sigue" />
          <p className="text-asbor-text-muted mt-6 max-w-2xl text-lg leading-relaxed">
            Cada especificación se irá confirmando a medida que avance el desarrollo de
            GALA 001. No publicamos datos técnicos hasta que estén validados.
          </p>
        </div>
      </section>

      <section className="bg-asbor-ivory px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-asbor-black text-3xl sm:text-4xl">
          Conoce la colección completa.
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
