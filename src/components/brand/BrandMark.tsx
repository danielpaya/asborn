import { cn } from "@/lib/utils";

type MarkKind = "wordmark" | "emblem" | "monogram";

interface BrandMarkProps {
  kind: MarkKind;
  className?: string;
}

/**
 * Placeholder geométrico para las marcas gráficas de ASBOR.
 * Reemplazar por los archivos definitivos en /public/brand:
 * asbor-wordmark.svg, asbor-emblem.svg, asbor-monogram.svg.
 */
export function BrandMark({ kind, className }: BrandMarkProps) {
  if (kind === "wordmark") {
    return (
      <span
        className={cn("font-display text-asbor-ivory tracking-[0.18em]", className)}
        aria-label="ASBOR"
      >
        ASBOR
      </span>
    );
  }

  if (kind === "monogram") {
    return (
      <svg
        viewBox="0 0 48 48"
        className={cn("text-asbor-gold h-10 w-10", className)}
        aria-hidden="true"
      >
        <rect x="1" y="1" width="46" height="46" stroke="currentColor" strokeWidth="1" />
        <path d="M24 8V40M8 24H40" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("text-asbor-gold h-24 w-24", className)}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth="1" />
      <path d="M60 14V106M14 60H106" stroke="currentColor" strokeWidth="1" />
      <path
        d="M60 30C50 42 44 50 44 60C44 72 51 80 60 90C69 80 76 72 76 60C76 50 70 42 60 30Z"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="60" cy="60" r="14" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
