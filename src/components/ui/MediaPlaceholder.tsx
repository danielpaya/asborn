import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  label: string;
  resource?: string;
  className?: string;
  variant?: "image" | "video";
}

export function MediaPlaceholder({
  label,
  resource,
  className,
  variant = "image",
}: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        "border-asbor-border bg-asbor-charcoal/60 relative flex h-full min-h-40 w-full flex-col items-center justify-center gap-3 border border-dashed px-6 py-10 text-center",
        className
      )}
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="text-asbor-gold-muted"
      >
        <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="1" />
        {variant === "video" ? (
          <path d="M16 13L27 20L16 27V13Z" stroke="currentColor" strokeWidth="1" />
        ) : (
          <path
            d="M1 1L39 39M39 1L1 39"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        )}
      </svg>
      <p className="label-caps text-asbor-silver">
        {variant === "video" ? "Video pendiente" : "Imagen pendiente"}
      </p>
      <p className="text-asbor-text-muted text-sm">{label}</p>
      {resource && (
        <p className="text-asbor-text-muted/70 max-w-full font-mono text-[11px] break-all">
          {resource}
        </p>
      )}
    </div>
  );
}
