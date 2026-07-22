"use client";

import { useState } from "react";
import type { SocialVideoItem } from "@/config/media";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { VideoWithFallback } from "@/components/ui/VideoWithFallback";

export function SocialVideoCard({ item }: { item: SocialVideoItem }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="bg-asbor-black relative aspect-[9/16] w-full overflow-hidden">
        <VideoWithFallback
          src={item.video}
          label={item.title}
          poster={item.poster}
          className="h-full w-full"
          controls
          autoPlay
          playsInline
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className="focus-ring group bg-asbor-charcoal relative aspect-[9/16] w-full overflow-hidden text-left"
      aria-label={`Reproducir video: ${item.title}`}
    >
      <ImageWithFallback
        src={item.poster}
        alt={item.title}
        label={item.title}
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="bg-asbor-black/35 group-hover:bg-asbor-black/20 absolute inset-0 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="border-asbor-gold bg-asbor-black/60 text-asbor-gold flex h-14 w-14 items-center justify-center rounded-full border transition-transform group-hover:scale-110">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7-11-7Z" />
          </svg>
        </span>
      </span>
      <span className="from-asbor-black/90 absolute right-0 bottom-0 left-0 bg-gradient-to-t to-transparent px-4 py-4">
        <span className="label-caps text-asbor-ivory">{item.title}</span>
      </span>
    </button>
  );
}
