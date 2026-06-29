import {
  GraduationCap,
  HardHat,
  Wrench,
  ScanEye,
  BrainCircuit,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type ProductStatus =
  | "Launching Soon"
  | "In Planning"
  | "Research"
  | "Core Platform"
  | "Engineering";

export interface Product {
  name: string;
  description: string;
  status: ProductStatus;
  icon: LucideIcon;
}

export const products: Product[] = [
  {
    name: "Aura Campus",
    description: "Academic ERP platform for higher education.",
    status: "Launching Soon",
    icon: GraduationCap,
  },
  {
    name: "Aura Build",
    description: "Construction and project management platform.",
    status: "In Planning",
    icon: HardHat,
  },
  {
    name: "Aura Field",
    description: "Field service management platform.",
    status: "In Planning",
    icon: Wrench,
  },
  {
    name: "Aura Vision",
    description: "Computer vision and operational intelligence platform.",
    status: "Research",
    icon: ScanEye,
  },
  {
    name: "Aura Intelligence",
    description: "Enterprise AI and executive intelligence layer.",
    status: "Core Platform",
    icon: BrainCircuit,
  },
  {
    name: "Aura Core",
    description: "Shared platform foundation powering every Aura product.",
    status: "Engineering",
    icon: Layers,
  },
];

export const principles: string[] = [
  "We believe software should remove complexity instead of creating it.",
  "We believe technology should empower people, not overwhelm them.",
  "We believe intelligence belongs inside the platform, not inside endless spreadsheets.",
  "Every product we build is guided by these principles.",
];

export const mission =
  "To build intelligent software platforms that help organizations operate with greater clarity, efficiency and confidence.";

export interface TechItem {
  name: string;
}

export const technologies: TechItem[] = [
  { name: "Next.js" },
  { name: "Supabase" },
  { name: "Railway" },
  { name: "Vercel" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Artificial Intelligence" },
  { name: "Cloud Infrastructure" },
];

export interface MilestoneItem {
  label: string;
  done: boolean;
}

export const milestones: MilestoneItem[] = [
  { label: "Company vision finalized", done: true },
  { label: "Aura Campus in active development", done: true },
  { label: "Aura Core foundation complete", done: true },
  { label: "Aura Intelligence platform complete", done: true },
  { label: "Production infrastructure live", done: true },
  { label: "Corporate website", done: false },
  { label: "Company registration", done: false },
  { label: "Product launch", done: false },
];

export interface NavLink {
  label: string;
  href: string;
}

export const footerLinks: NavLink[] = [
  { label: "About", href: "#vision" },
  { label: "Products", href: "#ecosystem" },
  { label: "Engineering", href: "#technology" },
  { label: "Contact", href: "#contact" },
];
