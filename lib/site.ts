export const siteConfig = {
  name: "Aura Infinity",
  tagline: "Building Intelligent Software Platforms.",
  description:
    "Aura Infinity is building a new generation of enterprise software designed to simplify complex operations through thoughtful design, intelligent automation and responsible AI.",
  url: "https://aurainfinity.pro",
  email: "contact@aurainfinity.pro",
  brand: {
    primary: "#7C3AED",
    accent: "#A855F7",
  },
} as const;

export type SiteConfig = typeof siteConfig;
