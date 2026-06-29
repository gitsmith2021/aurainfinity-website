"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "@/components/Section";
import { milestones } from "@/lib/data";

export function Timeline() {
  return (
    <Section
      id="status"
      tone="light"
      eyebrow="Company Status"
      title="Where we are today."
    >
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
        className="relative max-w-2xl border-l border-border pl-8"
      >
        {milestones.map((milestone) => (
          <motion.li
            key={milestone.label}
            variants={{
              hidden: { opacity: 0, x: -8 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
            }}
            className="relative pb-8 last:pb-0"
          >
            <span
              className={`absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-background ${
                milestone.done
                  ? "bg-brand text-white"
                  : "border border-border bg-surface text-subtle"
              }`}
            >
              {milestone.done ? (
                <Check className="h-3 w-3" strokeWidth={3} />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-subtle" />
              )}
            </span>
            <p
              className={`text-base ${
                milestone.done ? "text-foreground" : "text-muted"
              }`}
            >
              {milestone.label}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
