"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { anatomyPoints } from "@/data/product-specifications";
import { trackEvent } from "@/lib/analytics";
import { ProductDetailCard } from "@/components/product/ProductDetailCard";
import { cn } from "@/lib/utils";

export function AnatomyDiagram() {
  const [activeId, setActiveId] = useState(anatomyPoints[0].id);
  const active = anatomyPoints.find((point) => point.id === activeId)!;

  function selectPoint(id: string) {
    setActiveId(id);
    trackEvent("anatomy_point_open", { point: id });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
      <div className="border-asbor-border bg-asbor-charcoal/50 relative mx-auto aspect-[3/5] w-full max-w-sm border">
        <svg
          viewBox="0 0 120 200"
          className="text-asbor-gold-muted/70 absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M28 8H92L96 30L86 100L78 190H62L58 108L52 190H36L28 100L18 30L28 8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <path d="M28 8H92" stroke="currentColor" strokeWidth="1" />
          <path d="M60 8V60" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
        </svg>

        {anatomyPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => selectPoint(point.id)}
            aria-pressed={activeId === point.id}
            aria-label={point.label}
            style={{ left: `${point.x}%`, top: `${point.y}%` }}
            className={cn(
              "focus-ring absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-all",
              activeId === point.id
                ? "border-asbor-gold bg-asbor-gold scale-110"
                : "border-asbor-gold/60 bg-asbor-black/70 hover:border-asbor-gold"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                activeId === point.id ? "bg-asbor-black" : "bg-asbor-gold"
              )}
            />
          </button>
        ))}
      </div>

      <div>
        <p className="label-caps text-asbor-gold-muted">Punto seleccionado</p>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3"
          >
            <ProductDetailCard spec={active.specification} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex flex-wrap gap-2">
          {anatomyPoints.map((point) => (
            <button
              key={point.id}
              onClick={() => selectPoint(point.id)}
              className={cn(
                "label-caps border px-3 py-2 text-[10px] transition-colors",
                activeId === point.id
                  ? "border-asbor-gold text-asbor-gold"
                  : "border-asbor-border text-asbor-text-muted hover:border-asbor-gold-muted"
              )}
            >
              {point.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
