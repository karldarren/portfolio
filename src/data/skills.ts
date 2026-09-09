export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "NestJS", "PHP", "Laravel"],
  },
  {
    title: "Database & Hosting",
    skills: ["MySQL", "MongoDB", "Vercel", "Hostinger"],
  },
  {
    title: "IT & Networking",
    skills: [
      "MikroTik",
      "LAN Networking",
      "Hardware Troubleshooting",
      "System Administration",
      "Network Troubleshooting",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Figma", "DaVinci Resolve", "CapCut", "Microsoft Office"],
  },
];
