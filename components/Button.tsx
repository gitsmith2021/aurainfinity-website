import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-[0_0_0_1px_rgba(124,58,237,0.6)] hover:bg-brand-soft hover:shadow-[0_8px_30px_-8px_rgba(124,58,237,0.7)]",
  secondary:
    "border border-border bg-white/[0.02] text-foreground hover:border-white/20 hover:bg-white/[0.05]",
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
