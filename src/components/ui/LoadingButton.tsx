import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingLabel?: string;
}

export function LoadingButton({
  loading = false,
  loadingLabel = "Cargando...",
  children,
  className,
  disabled,
  ...rest
}: LoadingButtonProps) {
  return (
    <button
      type="submit"
      className={cn(
        "focus-ring bg-asbor-gold label-caps text-asbor-black hover:bg-asbor-ivory relative inline-flex min-h-12 w-full items-center justify-center gap-3 px-7 py-3 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
        className
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="border-asbor-black/30 border-t-asbor-black h-3.5 w-3.5 animate-spin rounded-full border-2"
        />
      )}
      <span>{loading ? loadingLabel : children}</span>
    </button>
  );
}
