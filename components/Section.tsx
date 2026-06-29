import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type Tone = "dark" | "light";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

/**
 * A full-bleed section band. `tone` sets the dark/light surface tokens for
 * everything inside (see docs/DESIGN.md §6); the inner column holds the
 * 1200px reading width and the standard 120–180px vertical rhythm.
 */
export function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "dark",
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`theme-${tone} bg-background text-foreground ${
        tone === "light" ? "border-y border-border" : ""
      }`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        {(eyebrow || title) && (
          <Reveal className="mb-14 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-soft">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                {title}
              </h2>
            )}
          </Reveal>
        )}
        <div className={className}>{children}</div>
      </div>
    </section>
  );
}
