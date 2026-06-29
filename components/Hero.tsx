"use client";

import { motion, type Variants } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { EASE, stagger } from "@/lib/motion";

const container = stagger(0.12, 0.1);

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient brand glow + grid texture */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] max-w-[120vw] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div variants={item} className="mb-10">
          <Logo showWordmark={false} className="scale-150" />
        </motion.div>

        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-soft" />
          Aura Infinity
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
        >
          Building Intelligent Software Platforms
          <br className="hidden sm:block" />{" "}
          <span className="bg-gradient-to-r from-brand-soft to-accent bg-clip-text text-transparent">
            for the Real World.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          Aura Infinity is building a new generation of enterprise software
          designed to simplify complex operations through thoughtful design,
          intelligent automation and responsible AI.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="#vision" variant="primary">
            Explore Our Vision
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
