"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function BrandStatement() {
  return (
    <section className="bg-asbor-ivory px-6 py-24 sm:px-10 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerChildren(0.15)}
        className="mx-auto max-w-4xl"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-asbor-black text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.05]"
        >
          Un jean diferente no debería ser inaccesible.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-asbor-black-soft/80 mt-8 max-w-2xl text-lg leading-relaxed"
        >
          ASBOR nació para crear denim con identidad, comodidad y detalles que puedan
          reconocerse. Este es el primer capítulo de una marca colombiana construida para
          evolucionar.
        </motion.p>
      </motion.div>
    </section>
  );
}
