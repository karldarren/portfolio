export interface Service {
  no: string;
  title: string;
  description: string;
  icon: string; // lucide-style key handled by the component
}

export const services: Service[] = [
  {
    no: "01",
    title: "Web Systems",
    description: "Custom web applications and internal systems built to fit real workflows.",
    icon: "code",
  },
  {
    no: "02",
    title: "Automation",
    description: "Turning repetitive, manual processes into reliable digital workflows.",
    icon: "workflow",
  },
  {
    no: "03",
    title: "IT & Network Support",
    description: "Computer, network, and infrastructure troubleshooting to minimize downtime.",
    icon: "network",
  },
  {
    no: "04",
    title: "System Deployment",
    description: "Deploying and maintaining web-based systems in production.",
    icon: "rocket",
  },
  {
    no: "05",
    title: "Technical Operations",
    description: "Technical support for events, streaming, and digital infrastructure.",
    icon: "settings",
  },
];
