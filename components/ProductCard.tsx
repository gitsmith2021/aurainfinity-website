"use client";

import { motion, type Variants } from "framer-motion";
import type { Product, ProductStatus } from "@/lib/data";
import { EASE } from "@/lib/motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/**
 * Status is conveyed by a small dot, not a colored chip — purple marks products
 * in active build (or the core platform), neutral marks future work. This keeps
 * badges legible and on-brand in both light and dark bands.
 */
const statusDot: Record<ProductStatus, string> = {
  "Launching Soon": "bg-brand",
  "Core Platform": "bg-brand",
  Engineering: "bg-brand",
  "In Planning": "bg-subtle",
  Research: "bg-subtle",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { icon: Icon, name, description, status } = product;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="group flex h-full flex-col rounded-card border border-border bg-surface p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-foreground/15 hover:shadow-[0_10px_30px_-16px_rgba(0,0,0,0.18)]"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-brand transition-colors duration-300 group-hover:border-brand/40">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[status]}`} />
          {status}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">
        {description}
      </p>
    </motion.article>
  );
}
