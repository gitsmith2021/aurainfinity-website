"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data";

export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      tone="light"
      eyebrow="The Aura Ecosystem"
      title="A connected family of platforms, built on one intelligent foundation."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </motion.div>
    </Section>
  );
}
