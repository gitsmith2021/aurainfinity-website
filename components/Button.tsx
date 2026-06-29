import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none";

// All variants use semantic tokens so they stay correct on light and dark bands.
const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_0_0_1px_rgba(124,58,237,0.5)] hover:bg-brand-soft hover:shadow-[0_8px_24px_-12px_rgba(124,58,237,0.45)]",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-foreground/25 hover:bg-foreground/[0.04]",
  ghost:
    "text-foreground/80 hover:text-foreground hover:bg-foreground/[0.05]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      {children}
    </a>
  );
}
