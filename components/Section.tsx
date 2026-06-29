import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Standard vertical rhythm + max width for every content section.
 * Optional eyebrow/title block keeps headings visually consistent.
 */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className ?? ""}`}
    >
      {(eyebrow || title) && (
        <Reveal className="mb-14 max-w-2xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-soft">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          )}
        </Reveal>
      )}
      {children}
    </section>
  );
}
