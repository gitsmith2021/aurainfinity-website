"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { technologies } from "@/lib/data";

export function Technology() {
  return (
    <Section
      id="technology"
      tone="dark"
      eyebrow="Technology"
      title="Built on a modern, proven foundation."
    >
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        className="flex flex-wrap gap-3"
      >
        {technologies.map((tech) => (
          <motion.li
            key={tech.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-muted transition-colors duration-300 hover:border-foreground/15 hover:text-foreground"
          >
            {tech.name}
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
