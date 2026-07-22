"use client";

import { motion } from "framer-motion";
import { HeroVideo } from "@/components/media/HeroVideo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { brand, microcopy } from "@/config/brand";
import { trackEvent } from "@/lib/analytics";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Hero() {
  return (
    <section className="bg-asbor-black relative flex min-h-[100svh] items-end overflow-hidden">
      <HeroVideo />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.12)}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-40 pb-16 sm:px-10 sm:pb-24"
      >
        <motion.p variants={fadeUp} className="label-caps text-asbor-gold">
          Primer capítulo
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-asbor-ivory mt-4 text-[clamp(4rem,12vw,10rem)] leading-[0.9]"
        >
          ASBOR
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-display text-asbor-gold mt-4 text-[clamp(1.4rem,3vw,2.4rem)]"
        >
          {brand.tagline}
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-asbor-text-muted mt-3 max-w-md text-base sm:text-lg"
        >
          {brand.slogan}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <PrimaryButton
            href="/coleccion/gala-001"
            onClick={() => trackEvent("hero_collection_click")}
          >
            {microcopy.discoverCollection}
          </PrimaryButton>
          <SecondaryButton href="/turno" onClick={() => trackEvent("hero_turn_click")}>
            {microcopy.takeTurn}
          </SecondaryButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="label-caps text-asbor-text-muted">Desplázate</span>
        <span className="bg-asbor-gold/60 h-10 w-px animate-pulse" />
      </motion.div>
    </section>
  );
}
