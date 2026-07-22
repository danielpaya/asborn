"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface VisualSuccessMessageProps {
  title: string;
  body: string;
  notice?: string;
  actions?: ReactNode;
}

export function VisualSuccessMessage({
  title,
  body,
  notice,
  actions,
}: VisualSuccessMessageProps) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-asbor-gold/30 bg-asbor-black-soft flex flex-col items-center gap-6 border px-6 py-14 text-center sm:px-14"
    >
      <span className="border-asbor-gold text-asbor-gold flex h-16 w-16 items-center justify-center rounded-full border">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12.5L10 17.5L19 6.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="max-w-md space-y-3">
        <h3 className="font-display text-asbor-ivory text-3xl">{title}</h3>
        <p className="text-asbor-text-muted text-sm leading-relaxed">{body}</p>
        {notice && <p className="label-caps text-asbor-gold-muted">{notice}</p>}
      </div>
      {actions && <div className="flex flex-col gap-4 sm:flex-row">{actions}</div>}
    </motion.div>
  );
}
