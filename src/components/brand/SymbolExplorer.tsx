"use client";

import { useState, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brandSymbols, type SymbolId } from "@/data/symbols";
import { cn } from "@/lib/utils";

const symbolGlyphs: Record<SymbolId, ReactElement> = {
  cruz: <path d="M20 6V34M6 20H34" stroke="currentColor" strokeWidth="1.4" />,
  meandro: (
    <path
      d="M4 10H14V18H26V10H36M4 30H14V22H26V30H36"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
  ),
  laurel: (
    <path
      d="M20 6C14 14 10 20 10 26C10 32 15 36 20 38C25 36 30 32 30 26C30 20 26 14 20 6Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
  ),
  palmeta: (
    <path
      d="M20 36V16M20 16C14 16 10 12 10 6M20 16C26 16 30 12 30 6M20 24C15 24 11 21 9 17M20 24C25 24 29 21 31 17"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
  ),
  roseta: (
    <>
      <circle
        cx="20"
        cy="20"
        r="14"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="20" cy="20" r="5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path
        d="M20 6V14M20 26V34M6 20H14M26 20H34"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </>
  ),
};

export function SymbolExplorer() {
  const [activeId, setActiveId] = useState<SymbolId>("cruz");
  const active = brandSymbols.find((symbol) => symbol.id === activeId)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div
        role="tablist"
        aria-label="Símbolos del Código ASBOR"
        className="grid grid-cols-5 gap-3 sm:gap-4"
      >
        {brandSymbols.map((symbol) => (
          <button
            key={symbol.id}
            role="tab"
            id={`symbol-tab-${symbol.id}`}
            aria-selected={activeId === symbol.id}
            aria-controls="symbol-panel"
            onClick={() => setActiveId(symbol.id)}
            className={cn(
              "focus-ring flex aspect-square flex-col items-center justify-center gap-2 border transition-colors",
              activeId === symbol.id
                ? "border-asbor-gold bg-asbor-gold/[0.08] text-asbor-gold"
                : "border-asbor-border text-asbor-silver hover:border-asbor-gold-muted"
            )}
          >
            <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden="true">
              {symbolGlyphs[symbol.id]}
            </svg>
            <span className="label-caps text-[10px]">{symbol.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          id="symbol-panel"
          role="tabpanel"
          aria-labelledby={`symbol-tab-${active.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="border-asbor-gold/40 border-l pl-6 sm:pl-10"
        >
          <p className="label-caps text-asbor-gold-muted">{active.name}</p>
          <p className="font-display text-asbor-ivory mt-3 text-3xl sm:text-4xl">
            {active.meaning}
          </p>
          <p className="text-asbor-text-muted mt-5 max-w-md text-base leading-relaxed">
            {active.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
