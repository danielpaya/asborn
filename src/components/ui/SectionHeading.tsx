"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "label-caps mb-4",
            isDark ? "text-asbor-gold-muted" : "text-asbor-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display leading-[1.05]",
          "text-[clamp(2.5rem,6vw,5.5rem)]",
          isDark ? "text-asbor-black" : "text-asbor-ivory"
        )}
      >
        {title}
      </h2>
      {description && (
        <div
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            isDark ? "text-asbor-black-soft/80" : "text-asbor-text-muted"
          )}
        >
          {description}
        </div>
      )}
    </motion.div>
  );
}
