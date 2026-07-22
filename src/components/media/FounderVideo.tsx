"use client";

import { useRef, useState } from "react";
import { founderMedia } from "@/config/media";
import { trackEvent } from "@/lib/analytics";
import { VideoWithFallback } from "@/components/ui/VideoWithFallback";

export function FounderVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function handlePlay() {
    if (!started) {
      setStarted(true);
      trackEvent("founder_video_play");
    }
  }

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-sm">
      <VideoWithFallback
        ref={videoRef}
        src={founderMedia.video}
        label="fundador-asbor.mp4"
        poster={founderMedia.poster}
        className="h-full w-full"
        controls
        muted
        playsInline
        onPlay={handlePlay}
      />
      <button
        onClick={toggleSound}
        className="focus-ring label-caps border-asbor-gold/60 bg-asbor-black/70 text-asbor-gold absolute right-4 bottom-4 flex items-center gap-2 border px-4 py-2 backdrop-blur"
      >
        {muted ? "Activar sonido" : "Silenciar"}
      </button>
    </div>
  );
}
