"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav, ctaTurnHref } from "@/config/navigation";
import { microcopy } from "@/config/brand";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const focusable = containerRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-asbor-black fixed inset-0 z-[70] flex flex-col justify-between px-6 py-8 sm:px-10"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-asbor-ivory text-2xl tracking-[0.18em]">
              ASBOR
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="focus-ring text-asbor-ivory flex h-11 w-11 items-center justify-center"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2">
            {primaryNav.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="focus-ring font-display text-asbor-ivory hover:text-asbor-gold block py-3 text-4xl transition-colors sm:text-5xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="border-asbor-border flex flex-col gap-6 border-t pt-6">
            <Link
              href={ctaTurnHref}
              onClick={onClose}
              className="focus-ring bg-asbor-gold label-caps text-asbor-black hover:bg-asbor-ivory inline-flex min-h-12 items-center justify-center px-7 py-3 transition-colors"
            >
              {microcopy.takeTurn}
            </Link>
            <div className="flex items-center justify-between">
              <SocialIcons />
              <WhatsAppButton variant="inline" className="static" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
