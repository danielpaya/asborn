"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SurveyStepProps {
  stepKey: string;
  children: ReactNode;
}

export function SurveyStep({ stepKey, children }: SurveyStepProps) {
  return (
    <motion.div
      key={stepKey}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      {children}
    </motion.div>
  );
}
