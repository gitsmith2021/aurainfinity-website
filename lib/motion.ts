import type { Variants } from "framer-motion";

/** Shared "ease-out-expo"-style curve used across the site for a calm feel. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** A single, subtle fade-and-rise. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Parent variant that staggers its children's reveals. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});
