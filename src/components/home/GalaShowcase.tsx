"use client";

import { galaCollection } from "@/data/collections";
import { microcopy } from "@/config/brand";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ImageReveal } from "@/components/product/ImageReveal";
import { trackEvent } from "@/lib/analytics";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function GalaShowcase() {
  const featured = galaCollection.images.slice(0, 4);

  return (
    <section className="bg-asbor-black-soft px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren(0.12)}
        >
          <motion.p variants={fadeUp} className="label-caps text-asbor-gold">
            {galaCollection.chapterLabel}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-asbor-ivory mt-4 text-[clamp(2.5rem,6vw,5.5rem)]"
          >
            {galaCollection.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-asbor-text-muted mt-6 max-w-md text-lg leading-relaxed"
          >
            {galaCollection.description}
          </motion.p>

          <motion.dl
            variants={fadeUp}
            className="border-asbor-border mt-8 space-y-3 border-t pt-6"
          >
            <Row label="Origen" value="Diseñado en Colombia" />
            <Row label="Producción" value={galaCollection.production} />
            <Row label="Precio estimado" value={galaCollection.priceLabel} />
            <Row label="Turnos" value="Próximamente" />
          </motion.dl>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton
              href="/coleccion/gala-001"
              onClick={() =>
                trackEvent("hero_collection_click", { from: "gala-showcase" })
              }
            >
              Explorar la colección
            </PrimaryButton>
            <SecondaryButton
              href="/turno"
              onClick={() => trackEvent("hero_turn_click", { from: "gala-showcase" })}
            >
              {microcopy.takeTurn}
            </SecondaryButton>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {featured.map((image, i) => (
            <ImageReveal
              key={image.id}
              src={image.src}
              alt={image.alt}
              label={image.label}
              caption={image.label}
              className={i === 0 ? "col-span-2" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <dt className="text-asbor-text-muted">{label}</dt>
      <dd className="text-asbor-ivory">{value}</dd>
    </div>
  );
}
