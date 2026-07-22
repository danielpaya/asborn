import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  children: ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface ButtonProps
  extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

const baseClasses =
  "focus-ring inline-flex items-center justify-center gap-2 min-h-11 px-7 py-3 label-caps bg-asbor-gold text-asbor-black transition-all duration-200 hover:bg-asbor-ivory active:scale-[0.98]";

export function PrimaryButton(props: LinkProps | ButtonProps) {
  if ("href" in props && props.href) {
    const { href, children, className, onClick } = props;
    return (
      <Link href={href} onClick={onClick} className={cn(baseClasses, className)}>
        {children}
      </Link>
    );
  }

  const { children, className, ...rest } = props as ButtonProps;
  return (
    <button type="button" className={cn(baseClasses, className)} {...rest}>
      {children}
    </button>
  );
}
