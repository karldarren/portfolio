/** Core technologies grouped into logical categories — only what the portfolio actually uses. */
export interface TechGroup {
  label: string;
  items: string[];
}

export const techGroups: TechGroup[] = [
  { label: "Development", items: ["JavaScript", "TypeScript", "React", "Next.js", "NestJS", "PHP", "Laravel"] },
  { label: "Database", items: ["MySQL", "MongoDB"] },
  { label: "Deployment", items: ["Vercel", "Hostinger"] },
  { label: "Network / Infrastructure", items: ["MikroTik"] },
  { label: "Tools", items: ["Git", "Figma"] },
];

/** Flat list (derived) for any consumer that needs a single array. */
export const technologies: string[] = techGroups.flatMap((g) => g.items);
