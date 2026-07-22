"use client";

import { social } from "@/config/social";
import { microcopy } from "@/config/brand";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline";
  className?: string;
}

export function WhatsAppButton({ variant = "floating", className }: WhatsAppButtonProps) {
  const handleClick = () => trackEvent("whatsapp_click", { variant });

  if (variant === "inline") {
    return (
      <a
        href={social.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "focus-ring label-caps text-asbor-ivory hover:text-asbor-gold inline-flex min-h-11 items-center gap-2 transition-colors",
          className
        )}
      >
        <WhatsAppIcon />
        {microcopy.whatsapp}
      </a>
    );
  }

  return (
    <a
      href={social.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={microcopy.whatsapp}
      className={cn(
        "focus-ring bg-asbor-gold text-asbor-black fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95",
        className
      )}
    >
      <WhatsAppIcon />
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.06L2 22l5.1-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M8.5 8.7c.2-.9 1-1.4 1.6-1.3.3 0 .6.2.9.9l.5 1.2c.2.4.1.8-.1 1.1l-.5.6c-.2.3-.2.6 0 .9.5 1 1.6 2.1 2.7 2.6.3.1.6.1.9-.1l.6-.5c.3-.2.7-.3 1.1-.1l1.2.5c.7.3.9.6.9.9.1.7-.5 1.6-1.4 1.9-1.1.4-2.6 0-4.4-1.1-1.9-1.1-3.3-2.9-3.9-4.4-.4-1.1-.4-2 .1-3Z"
        fill="currentColor"
      />
    </svg>
  );
}
