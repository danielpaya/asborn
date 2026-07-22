"use client";

import { motion } from "framer-motion";
import { revealImage } from "@/lib/motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  label: string;
  className?: string;
  caption?: string;
  eyebrow?: string;
  tone?: "light" | "dark";
}

export function ImageReveal({
  src,
  alt,
  label,
  className,
  caption,
  eyebrow,
  tone = "light",
}: ImageRevealProps) {
  const isDark = tone === "dark";
  return (
    <motion.figure
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={revealImage}
      className={cn("relative", className)}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        label={label}
        className="aspect-[4/5] w-full"
      />
      {(eyebrow || caption) && (
        <figcaption className="mt-4">
          {eyebrow && (
            <p
              className={cn(
                "label-caps",
                isDark ? "text-asbor-gold-muted" : "text-asbor-gold"
              )}
            >
              {eyebrow}
            </p>
          )}
          {caption && (
            <p
              className={cn(
                "mt-1 text-sm",
                isDark ? "text-asbor-black-soft/70" : "text-asbor-text-muted"
              )}
            >
              {caption}
            </p>
          )}
        </figcaption>
      )}
    </motion.figure>
  );
}
