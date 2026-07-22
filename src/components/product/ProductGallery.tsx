"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ProductImage } from "@/data/collections";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Modal } from "@/components/system/Modal";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [index, setIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const current = images[index];

  function goTo(next: number) {
    const clamped = (next + images.length) % images.length;
    setIndex(clamped);
    trackEvent("product_gallery_view", { image: images[clamped].id });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") goTo(index + 1);
    if (event.key === "ArrowLeft") goTo(index - 1);
  }

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index - 1 : index + 1);
    }
    touchStartX.current = null;
  }

  const isZoomable = current.id === "embroidery";

  return (
    <div className="flex flex-col gap-4">
      <div
        role="group"
        aria-roledescription="carrusel"
        aria-label={`Galería GALA 001, imagen ${index + 1} de ${images.length}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="focus-ring bg-asbor-charcoal relative aspect-[4/5] w-full overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={current.src}
              alt={current.alt}
              label={current.label}
              className="h-full w-full"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => goTo(index - 1)}
          aria-label="Imagen anterior"
          className="focus-ring border-asbor-border bg-asbor-black/60 text-asbor-ivory hover:border-asbor-gold hover:text-asbor-gold absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center border backdrop-blur transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Imagen siguiente"
          className="focus-ring border-asbor-border bg-asbor-black/60 text-asbor-ivory hover:border-asbor-gold hover:text-asbor-gold absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center border backdrop-blur transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {isZoomable && (
          <button
            onClick={() => setZoomOpen(true)}
            className="focus-ring label-caps border-asbor-gold/60 bg-asbor-black/70 text-asbor-gold absolute right-3 bottom-3 border px-4 py-2 backdrop-blur"
          >
            Zoom
          </button>
        )}

        <div className="label-caps bg-asbor-black/60 text-asbor-ivory absolute bottom-3 left-3 px-3 py-1.5 backdrop-blur">
          {index + 1} / {images.length}
        </div>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {images.map((image, i) => (
          <button
            key={image.id}
            onClick={() => goTo(i)}
            aria-label={`Ver ${image.label}`}
            aria-current={i === index}
            className={cn(
              "relative h-16 w-16 shrink-0 overflow-hidden border transition-colors",
              i === index
                ? "border-asbor-gold"
                : "border-asbor-border hover:border-asbor-gold-muted"
            )}
          >
            <ImageWithFallback
              src={image.src}
              alt=""
              label={image.label}
              className="h-full w-full"
            />
          </button>
        ))}
      </div>

      <Modal
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
        title={`Zoom — ${current.label}`}
      >
        <div className="relative aspect-square w-full">
          <ImageWithFallback
            src={current.src}
            alt={current.alt}
            label={current.label}
            className="h-full w-full"
          />
        </div>
      </Modal>
    </div>
  );
}
