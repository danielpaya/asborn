"use client";

import { heroMedia } from "@/config/media";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { VideoWithFallback } from "@/components/ui/VideoWithFallback";

export function HeroVideo() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 -z-10">
      <VideoWithFallback
        src={heroMedia.desktopVideo}
        label="asbor-hero-desktop.mp4"
        poster={heroMedia.poster}
        className="hidden h-full w-full sm:block"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <VideoWithFallback
        src={heroMedia.mobileVideo}
        label="asbor-hero-mobile.mp4"
        poster={heroMedia.poster}
        className="block h-full w-full sm:hidden"
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="from-asbor-black/60 via-asbor-black/40 to-asbor-black absolute inset-0 bg-gradient-to-b" />
    </div>
  );
}
