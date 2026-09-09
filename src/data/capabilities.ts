import type Icon from "@/components/ui/Icon";

type IconName = React.ComponentProps<typeof Icon>["name"];

export interface Capability {
  no: string;
  title: string;
  icon: IconName;
  items: string[];
}

/** "What I Build" — broad technical capability. No certifications/licenses claimed. */
export const capabilities: Capability[] = [
  {
    no: "01",
    title: "Web Systems",
    icon: "code",
    items: ["Business applications", "Dashboards", "Customer portals", "Management systems"],
  },
  {
    no: "02",
    title: "Network & FTTH",
    icon: "network",
    items: ["FTTH deployment", "Router configuration", "MikroTik", "LAN infrastructure"],
  },
  {
    no: "03",
    title: "Automation",
    icon: "workflow",
    items: ["Workflow automation", "Process improvement", "System integrations"],
  },
  {
    no: "04",
    title: "IT Operations",
    icon: "support",
    items: ["Technical support", "System deployment", "Troubleshooting", "Infrastructure"],
  },
];

export interface BuildStep {
  no: string;
  title: string;
  description: string;
}

/** "How I Build Systems" — reinforces the System Builder identity. */
export const buildProcess: BuildStep[] = [
  { no: "01", title: "Understand", description: "Understand the actual problem and workflow." },
  { no: "02", title: "Design", description: "Plan the system, architecture, and user experience." },
  { no: "03", title: "Build", description: "Develop the actual system." },
  { no: "04", title: "Deploy", description: "Deploy and configure the system for real-world use." },
  { no: "05", title: "Support", description: "Troubleshoot, maintain, and improve the system." },
];
