export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  /** Optional focus-area tags shown as pills under the bullet points. */
  areas?: string[];
}

// NOTE: Employment dates for the freelance web-dev and FTTH roles were not
// provided, so they are labelled "Freelance" rather than given a fabricated
// date. Update `period` once confirmed.

export const experiences: ExperienceItem[] = [
  {
    title: "MIS / IT Admin Staff (PEAC Coordinator)",
    company: "Western Colleges Inc.",
    location: "Naic, Cavite",
    period: "Oct 2025 – Jun 2026",
    points: [
      "Developed a web-based Enrollment System using PHP, phpMyAdmin, and Hostinger to replace the school's traditional manual enrollment process, reducing processing time and improving data accuracy for students and staff.",
      "Built, configured, and maintained desktop computers, IT equipment, and campus-wide network connectivity, minimizing downtime across faculty and administrative offices.",
      "Provided technical support during school events as Sound Engineer and managed live streaming using audio/video equipment, ensuring uninterrupted broadcast coverage for programs, seminars, and online activities.",
    ],
  },
  {
    title: "MIS / IT — On-the-Job Training",
    company: "Western Colleges Inc.",
    location: "Naic, Cavite",
    period: "Feb 2025 – Jun 2025",
    points: [
      "Assisted in setting up, repairing, and reformatting desktop computers, including hardware assembly and installation of operating systems.",
      "Troubleshot issues with computers, printers, and network devices, and configured MikroTik routers with basic bandwidth management.",
      "Managed computer lab equipment, including LAN cable organization and RJ45 crimping.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Independent / Freelance",
    location: "Cavite",
    period: "Freelance",
    points: [
      "Design and develop practical web-based systems and business applications, including dashboards, customer portals, and workflow-driven applications, along with deployment, maintenance, and troubleshooting.",
      "Build full-stack, responsive web applications with PHP/Laravel, React/Next.js, and NestJS/TypeScript, backed by MySQL or MongoDB and API integrations.",
      "Handle deployment and ongoing maintenance, keeping systems running and improving them over time.",
    ],
    areas: [
      "Full-Stack Web Development",
      "Business Systems",
      "Dashboard Development",
      "Responsive Web Applications",
      "Deployment",
      "Maintenance",
    ],
  },
  {
    title: "Freelance FTTH / Fiber Technician",
    company: "Independent / Freelance",
    location: "Cavite",
    period: "Freelance",
    points: [
      "Provide hands-on FTTH and fiber-network installation and technical support for residential and small-business connectivity projects.",
      "Configure ONU/ONT devices, routers, and MikroTik, and manage cable routing for reliable connectivity.",
      "Perform LAN deployment, network troubleshooting, and customer installations.",
    ],
    areas: [
      "FTTH installation",
      "Fiber network deployment",
      "ONU/ONT configuration",
      "Router configuration",
      "MikroTik",
      "LAN deployment",
      "Cable management",
      "Network troubleshooting",
      "Customer installation",
    ],
  },
  {
    title: "Freelance Computer Technician",
    company: "Independent / Freelance",
    location: "Cavite",
    period: "2023 – Present",
    points: [
      "Diagnose and repair hardware and software issues for clients using diagnostic tools.",
      "Perform system formatting and install operating systems, applications, and drivers to optimize performance.",
      "Provide troubleshooting and technical support to clients, ensuring smooth device operation.",
    ],
  },
];
