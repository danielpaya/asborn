"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface EditorialTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
}

export function EditorialText({ lines, className, lineClassName }: EditorialTextProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerChildren(0.15)}
      className={cn("space-y-4", className)}
    >
      {lines.map((line, index) => (
        <motion.p
          key={index}
          variants={fadeUp}
          className={cn("text-base leading-relaxed sm:text-lg", lineClassName)}
        >
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
}
