import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { principles } from "@/lib/data";

export function Philosophy() {
  // The closing line is a summary rather than a belief — render it quieter.
  const beliefs = principles.slice(0, -1);
  const closing = principles[principles.length - 1];

  return (
    <Section id="vision" eyebrow="Why Aura Exists">
      <div className="max-w-3xl">
        <ul className="space-y-8">
          {beliefs.map((line, index) => (
            <Reveal as="li" key={line} delay={index * 0.08}>
              <p className="text-balance text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl">
                {line}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <p className="mt-10 border-l-2 border-brand/50 pl-5 text-lg text-muted">
            {closing}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
