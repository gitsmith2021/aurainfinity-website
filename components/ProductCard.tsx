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

const statusStyles: Record<ProductStatus, string> = {
  "Launching Soon": "bg-brand/15 text-brand-soft ring-brand/30",
  "Core Platform": "bg-accent/15 text-accent ring-accent/30",
  Engineering: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/25",
  "In Planning": "bg-white/[0.05] text-muted ring-white/10",
  Research: "bg-white/[0.05] text-muted ring-white/10",
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
      className="glass group relative flex h-full flex-col rounded-card border border-border p-7 transition-colors duration-300 hover:border-white/15"
    >
      {/* Soft brand glow revealed on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at 50% 0%, rgba(124,58,237,0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-brand-soft transition-colors duration-300 group-hover:border-brand/40 group-hover:text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium ring-1 ring-inset ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <h3 className="relative z-10 mt-6 text-lg font-semibold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="relative z-10 mt-2 text-pretty text-sm leading-relaxed text-muted">
        {description}
      </p>
    </motion.article>
  );
}
