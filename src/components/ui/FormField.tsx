import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SharedProps {
  label: string;
  id: string;
  error?: string;
  hint?: string;
  as?: "input" | "textarea";
}

type FormFieldProps = SharedProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>,
    "id"
  >;

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, id, error, hint, as = "input", className, required, ...rest }, ref) => {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error && errorId, hint && hintId].filter(Boolean).join(" ") || undefined;

  const fieldClasses = cn(
    "focus-ring w-full border bg-transparent px-4 py-3 text-base text-asbor-ivory placeholder:text-asbor-text-muted/50 transition-colors",
    error ? "border-red-400/60" : "border-asbor-border focus:border-asbor-gold",
    "disabled:cursor-not-allowed disabled:opacity-50",
    className
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-caps text-asbor-silver">
        {label}
        {required && <span className="text-asbor-gold"> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(fieldClasses, "min-h-32 resize-y")}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          ref={ref as React.Ref<HTMLInputElement>}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={fieldClasses}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && !error && (
        <p id={hintId} className="text-asbor-text-muted text-xs">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";
