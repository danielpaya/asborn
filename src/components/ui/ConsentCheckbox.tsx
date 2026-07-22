import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ConsentCheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  id: string;
  label: string;
  error?: string;
}

export const ConsentCheckbox = forwardRef<HTMLInputElement, ConsentCheckboxProps>(
  ({ id, label, error, className, ...rest }, ref) => {
    const errorId = `${id}-error`;
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={id}
          className={cn("flex cursor-pointer items-start gap-3", className)}
        >
          <input
            ref={ref}
            type="checkbox"
            id={id}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
            className={cn(
              "focus-ring mt-0.5 h-5 w-5 shrink-0 cursor-pointer appearance-none border bg-transparent transition-colors",
              "checked:bg-asbor-gold checked:border-asbor-gold",
              error ? "border-red-400/60" : "border-asbor-border"
            )}
            {...rest}
          />
          <span className="text-asbor-text-muted text-sm leading-relaxed">{label}</span>
        </label>
        {error && (
          <p id={errorId} role="alert" className="text-xs text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  }
);

ConsentCheckbox.displayName = "ConsentCheckbox";
