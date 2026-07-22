import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { galaCollection } from "@/data/collections";
import { anatomyModules } from "@/data/product-specifications";
import { faqs } from "@/data/faqs";
import { sizeGuide } from "@/data/purchase-turn-survey";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialText } from "@/components/ui/EditorialText";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductDetailCard } from "@/components/product/ProductDetailCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/system/JsonLd";
import { microcopy } from "@/config/brand";

export const metadata: Metadata = {
  title: "GALA 001",
  description: galaCollection.description,
  alternates: { canonical: "/coleccion/gala-001" },
  openGraph: {
    title: `${galaCollection.name} | ${brand.name}`,
    description: galaCollection.description,
  },
};

const collectionFaqs = faqs.filter((faq) => galaCollection.faqIds.includes(faq.id));

const developmentFields = [
  "Composición",
  "Peso",
  "Elasticidad",
  "Lavado",
  "Medidas",
  "Colores",
  "Unidades",
  "Fecha de entrega",
];

export default function GalaCollectionPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: galaCollection.name,
          description: galaCollection.description,
          brand: { "@type": "Brand", name: brand.name },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/PreOrder",
            priceCurrency: "COP",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: 110000,
              maxPrice: 150000,
              priceCurrency: "COP",
            },
          },
        }}
      />
      <Breadcrumbs items={[{ label: "GALA 001", href: "/coleccion/gala-001" }]} />

      <section className="px-6 pt-10 pb-16 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <ProductGallery images={galaCollection.images} />

          <div className="lg:sticky lg:top-32">
            <p className="label-caps text-asbor-gold">{galaCollection.chapterLabel}</p>
            <h1 className="font-display text-asbor-ivory mt-3 text-[clamp(3rem,7vw,5.5rem)] leading-[0.95]">
              {galaCollection.title}
            </h1>
            <p className="text-asbor-text-muted mt-5 max-w-md text-lg leading-relaxed">
              {galaCollection.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="font-display text-asbor-gold text-2xl">
                {galaCollection.priceLabel}
              </span>
              <span className="label-caps border-asbor-border text-asbor-silver border px-3 py-1.5">
                {galaCollection.status}
              </span>
            </div>

            <p className="text-asbor-text-muted/70 mt-2 text-xs">
              {galaCollection.production} El precio final y la disponibilidad se
              confirmarán antes del lanzamiento.
            </p>

            <div className="mt-9">
              <PrimaryButton href="/turno">{microcopy.takeTurn}</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="LA COLECCIÓN" title="Historia de GALA 001" />
          <EditorialText
            className="mt-8"
            lines={[...galaCollection.story]}
            lineClassName="text-asbor-text-muted"
          />
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="FICHA TÉCNICA" title="Fit e información técnica" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {anatomyModules.map((module) => (
              <div key={module.id} className="border-asbor-border border p-6">
                <h3 className="font-display text-asbor-ivory text-2xl">{module.title}</h3>
                <ul className="mt-4 space-y-2">
                  {module.specs.map((spec) => (
                    <li key={spec.label} className="text-asbor-text-muted text-sm">
                      <span className="text-asbor-ivory">{spec.label}: </span>
                      {spec.value ?? "En desarrollo"}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {developmentFields.map((field) => (
              <ProductDetailCard
                key={field}
                spec={{ label: field, status: "pending", description: "En desarrollo." }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-asbor-border bg-asbor-black-soft border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="REFERENCIA" title="Tabla de tallas" />
          <p className="text-asbor-text-muted mt-4 text-sm">{sizeGuide.notice}</p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-asbor-border text-asbor-gold-muted border-b">
                  <th className="label-caps py-3 pr-4 font-medium">Talla</th>
                  <th className="label-caps py-3 pr-4 font-medium">Cintura</th>
                  <th className="label-caps py-3 font-medium">Cadera</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.rows.map((row) => (
                  <tr key={row.size} className="border-asbor-border/60 border-b">
                    <td className="text-asbor-ivory py-3 pr-4">{row.size}</td>
                    <td className="text-asbor-text-muted py-3 pr-4">{row.waist}</td>
                    <td className="text-asbor-text-muted py-3">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="CUIDADO" title="Cómo cuidar tu ASBOR" />
          <div className="mt-8">
            <ProductDetailCard
              spec={{
                label: "Instrucciones de cuidado",
                status: "pending",
                description:
                  "En desarrollo. Se publicarán antes del lanzamiento de GALA 001.",
              }}
            />
          </div>
        </div>
      </section>

      <section className="border-asbor-border border-t px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="PREGUNTAS FRECUENTES" title="Lo que quieres saber" />
          <div className="mt-10">
            <FaqAccordion items={collectionFaqs} />
          </div>
        </div>
      </section>

      <section className="bg-asbor-ivory px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-asbor-black text-3xl sm:text-4xl">
          Sé parte del primer capítulo de ASBOR.
        </h2>
        <div className="mt-8">
          <PrimaryButton href="/turno">{microcopy.takeTurn}</PrimaryButton>
        </div>
      </section>
    </>
  );
}
