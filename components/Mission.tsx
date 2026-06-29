import { Reveal } from "@/components/Reveal";
import { mission } from "@/lib/data";

export function Mission() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[160px]"
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center sm:py-36">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-brand-soft">
            Our Mission
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-balance text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {mission}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
