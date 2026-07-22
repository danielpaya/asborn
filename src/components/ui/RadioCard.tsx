import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface RadioCardProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  id: string;
  label: string;
  description?: string;
}

export const RadioCard = forwardRef<HTMLInputElement, RadioCardProps>(
  ({ id, label, description, className, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className={cn(
          "group border-asbor-border relative flex min-h-11 cursor-pointer flex-col gap-1 border px-4 py-3.5 transition-colors",
          "peer-focus-visible:outline peer-focus-visible:outline-2",
          "has-[:checked]:border-asbor-gold has-[:checked]:bg-asbor-gold/[0.06]",
          "has-[:focus-visible]:outline-asbor-gold has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2",
          "hover:border-asbor-gold-muted",
          className
        )}
      >
        <input ref={ref} type="radio" id={id} className="sr-only" {...rest} />
        <span className="text-asbor-ivory flex items-center justify-between text-sm font-medium">
          {label}
          <span
            aria-hidden="true"
            className="border-asbor-border group-has-[:checked]:border-asbor-gold flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
          >
            <span className="bg-asbor-gold hidden h-2 w-2 rounded-full group-has-[:checked]:block" />
          </span>
        </span>
        {description && (
          <span className="text-asbor-text-muted text-xs leading-relaxed">
            {description}
          </span>
        )}
      </label>
    );
  }
);

RadioCard.displayName = "RadioCard";
