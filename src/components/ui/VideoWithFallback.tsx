"use client";

import { forwardRef, useState, type VideoHTMLAttributes } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { cn } from "@/lib/utils";

interface VideoWithFallbackProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  label: string;
  className?: string;
}

export const VideoWithFallback = forwardRef<HTMLVideoElement, VideoWithFallbackProps>(
  ({ src, label, className, poster, ...rest }, ref) => {
    const [errored, setErrored] = useState(false);

    if (errored) {
      return (
        <div className={cn("relative", className)}>
          <MediaPlaceholder
            label={label}
            resource={src}
            variant="video"
            className="absolute inset-0"
          />
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden", className)}>
        <video
          ref={ref}
          poster={poster}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
          {...rest}
        >
          <source src={src} />
        </video>
      </div>
    );
  }
);

VideoWithFallback.displayName = "VideoWithFallback";
