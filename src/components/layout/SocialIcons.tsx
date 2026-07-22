"use client";

import { socialList } from "@/config/social";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const eventByPlatform: Record<string, AnalyticsEvent> = {
  instagram: "instagram_click",
  tiktok: "tiktok_click",
  whatsapp: "whatsapp_click",
};

const iconPaths: Record<string, string> = {
  instagram:
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm5.6-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  tiktok:
    "M14 3v10.6a2.6 2.6 0 1 1-2.2-2.57V8.9A5.4 5.4 0 1 0 16.4 14V8.6c1 .7 2.2 1.1 3.6 1.1V7.1c-1.9 0-3.4-1-4-2.6A4.6 4.6 0 0 1 14 3Z",
};

export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {socialList
        .filter((item) => item.platform !== "whatsapp")
        .map((item) => (
          <li key={item.platform}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              onClick={() => trackEvent(eventByPlatform[item.platform])}
              className="focus-ring text-asbor-ivory hover:text-asbor-gold inline-flex h-10 w-10 items-center justify-center transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={iconPaths[item.platform]} />
              </svg>
            </a>
          </li>
        ))}
    </ul>
  );
}
