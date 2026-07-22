"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { primaryNav, ctaTurnHref } from "@/config/navigation";
import { microcopy } from "@/config/brand";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setSolid(current > 40);
    if (current < 80) {
      setHidden(false);
    } else if (current > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[65] transition-colors duration-300",
          solid || menuOpen
            ? "bg-asbor-black/85 border-asbor-border border-b backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            className="focus-ring font-display text-asbor-ivory text-2xl tracking-[0.18em]"
          >
            ASBOR
          </Link>

          <nav
            className="hidden items-center gap-9 lg:flex"
            aria-label="Navegación principal"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring label-caps text-asbor-ivory/85 hover:text-asbor-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={ctaTurnHref}
              className="focus-ring border-asbor-gold label-caps text-asbor-gold hover:bg-asbor-gold hover:text-asbor-black hidden min-h-11 items-center border px-6 py-2.5 transition-colors sm:inline-flex"
            >
              {microcopy.takeTurn}
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              className="focus-ring text-asbor-ivory flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M0 1H22" stroke="currentColor" strokeWidth="1.4" />
                <path d="M0 8H22" stroke="currentColor" strokeWidth="1.4" />
                <path d="M0 15H22" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
