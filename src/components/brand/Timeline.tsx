"use client";

import { motion } from "framer-motion";
import { timelineChapters, timelineClosing } from "@/data/timeline";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Timeline() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerChildren(0.15)}
        className="grid gap-8 md:grid-cols-3"
      >
        {timelineChapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            variants={fadeUp}
            className="border-asbor-gold/40 border-t pt-6"
          >
            <p className="label-caps text-asbor-gold-muted">{chapter.number}</p>
            <h3 className="font-display text-asbor-ivory mt-2 text-2xl">
              {chapter.title}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {chapter.items.map((item) => (
                <li
                  key={item}
                  className="text-asbor-text-muted flex items-start gap-2.5 text-sm"
                >
                  <span className="bg-asbor-gold mt-2 h-1 w-1 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-display text-asbor-ivory mt-16 text-center text-2xl sm:text-3xl"
      >
        {timelineClosing}
      </motion.p>
    </div>
  );
}
