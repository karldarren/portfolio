export interface ProjectScreenshot {
  /** Path under /public. Only reference images that actually exist on disk. */
  src: string;
  /** Short label shown in the gallery (e.g. "Dashboard"). */
  label: string;
  /** Meaningful alt text for accessibility. */
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category?: string;
  role: string;
  status?: "shipped" | "building";
  summary: string;
  problem: string;
  result: string;
  features?: string[];
  tags: string[];
  image?: string;
  live?: string;
  github?: string;
  accent: "cyan" | "violet";
  /** Marks the primary featured project (rendered first / emphasized). */
  featured?: boolean;
  /**
   * Long-form case-study content for /projects/[slug].
   * Every field is optional — the case-study page only renders sections that
   * have real, verified content. Nothing here is fabricated.
   */
  caseStudy?: {
    /** Eyebrow label shown above the title on the case-study page + card. */
    eyebrow?: string;
    /** What the system does and who it's for. */
    overview?: string;
    /** The real-world workflow/problem the system addresses. */
    problemDetail?: string;
    /** How the system solves that problem. */
    solution?: string;
    /** What the owner personally designed / built / deployed / maintained. */
    contribution?: string;
    /** Practical outcome — no invented numbers, users, or revenue. */
    resultDetail?: string;
    /** Grouped, real technology stack. */
    stack?: { label: string; items: string[] }[];
    /** Verified screenshots only. Empty/omitted => branded placeholder. */
    screenshots?: ProjectScreenshot[];
  };
}

export const projects: Project[] = [
  {
    slug: "internest",
    title: "InterNest",
    category: "ISP & GCash Business Manager",
    role: "Full-Stack Developer / System Builder",
    status: "shipped",
    featured: true,
    summary:
      "InterNest is a business management platform designed to bring ISP operations and GCash-based services into one centralized system. It provides client-facing workflows for registration, bill payment, and issue reporting while giving business owners a dashboard for managing operations and transactions.",
    problem:
      "Managing ISP customers and business transactions can involve multiple disconnected workflows, payment records, and manual processes.",
    result:
      "A centralized platform that brings customer management, payment workflows, business transactions, and operational information into one system.",
    features: [
      "ISP client registration",
      "Online bill payment workflow",
      "Issue reporting / support workflow",
      "GCash business management",
      "Business dashboard",
      "Admin / staff access",
    ],
    tags: ["Next.js", "React", "Vercel"],
    image: "/projects/internest.png",
    live: "https://internest.vercel.app/",
    accent: "cyan",
    caseStudy: {
      eyebrow: "Featured Project",
      overview:
        "InterNest is a business management platform that brings ISP operations and GCash-based services together in one place. It's built for small ISP and GCash business owners who need client-facing workflows — registration, bill payment, and issue reporting — alongside an owner-facing dashboard for managing day-to-day operations and transactions.",
      problemDetail:
        "Running an ISP alongside GCash services often means juggling several disconnected workflows: customer records in one place, payment tracking in another, and support requests handled manually. That fragmentation makes it harder to keep operations and transaction records consistent.",
      solution:
        "InterNest centralizes those workflows into a single system. Clients can register, pay bills, and report issues online, while the business owner works from a dashboard that covers customer management, payment workflows, and business transactions — reducing the number of separate, manual steps.",
      contribution:
        "I designed and built the platform end to end as the full-stack developer — the client-facing workflows, the business dashboard, and the admin/staff access model — and deployed it on Vercel.",
      resultDetail:
        "The result is a working, deployed platform that consolidates ISP customer management, GCash business management, payment workflows, and support requests into one centralized system.",
      stack: [
        { label: "Framework", items: ["Next.js", "React"] },
        { label: "Deployment", items: ["Vercel"] },
      ],
      screenshots: [
        {
          src: "/projects/internest.png",
          label: "Overview",
          alt: "InterNest ISP & GCash business manager interface",
        },
      ],
    },
  },
  {
    slug: "wci-enrollment",
    title: "Western Colleges Enrollment System",
    category: "School Information System",
    role: "Frontend & Backend Developer",
    status: "shipped",
    summary:
      "A web-based enrollment management system for Western Colleges, Inc., built with PHP/Laravel and MySQL and deployed on Hostinger with consistent uptime for students and staff.",
    problem:
      "The school relied on a traditional manual enrollment process that was slow and error-prone. I replaced it with a real-world web system that digitizes enrollment end to end.",
    result:
      "Reduced processing time and improved data accuracy for students and staff, running in production with consistent uptime on Hostinger.",
    tags: ["PHP", "Laravel", "MySQL", "Hostinger"],
    image: "/projects/wci-enrollment.png",
    live: "https://wci-homeofthechampion.cloud/",
    accent: "cyan",
    caseStudy: {
      eyebrow: "School Information System",
      overview:
        "A web-based enrollment management system for Western Colleges, Inc. that digitizes the enrollment process end to end for students and staff. Built with PHP/Laravel and MySQL and deployed on Hostinger.",
      problemDetail:
        "The school relied on a traditional, manual enrollment process that was slow and prone to errors — a real-world workflow that needed to move online.",
      solution:
        "I built a web system that digitizes enrollment from start to finish, replacing the manual paperwork with a structured Laravel/MySQL application that students and staff use directly.",
      contribution:
        "I developed the system across both frontend and backend using PHP/Laravel and MySQL, and deployed and maintained it in production on Hostinger.",
      resultDetail:
        "The system runs in production with consistent uptime on Hostinger, reducing processing time and improving data accuracy for students and staff.",
      stack: [
        { label: "Backend", items: ["PHP", "Laravel"] },
        { label: "Database", items: ["MySQL"] },
        { label: "Deployment", items: ["Hostinger"] },
      ],
      screenshots: [
        {
          src: "/projects/wci-enrollment.png",
          label: "Overview",
          alt: "Western Colleges Enrollment System interface",
        },
      ],
    },
  },
  {
    slug: "cavitenest",
    title: "CaviteNest",
    category: "Rental & Booking Platform",
    role: "Lead Full-Stack Developer",
    status: "building",
    summary:
      "A property rental and booking platform started as a capstone and expanded into a functional booking system, built with NestJS, TypeScript, and MongoDB and deployed on Vercel.",
    problem:
      "Renters and property owners needed a single platform to list, discover, and book rentals. I designed the full-stack architecture and took over as sole developer to continue building it.",
    result:
      "Grew from a capstone prototype into a working rental booking platform with a full-stack TypeScript architecture, deployed on Vercel.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Vercel"],
    image: "/projects/cavitenest.png",
    live: "https://cavitenest.com/",
    accent: "violet",
    caseStudy: {
      eyebrow: "In Development · Rental & Booking Platform",
      overview:
        "CaviteNest is a property rental and booking platform where renters and property owners can list, discover, and book rentals. It started as a capstone project and is being actively expanded into a functional booking system. Built with NestJS, TypeScript, and MongoDB, deployed on Vercel.",
      problemDetail:
        "Renters and property owners needed a single platform to list, discover, and book rentals rather than relying on scattered, informal channels.",
      solution:
        "I designed the full-stack TypeScript architecture (NestJS + MongoDB) and continued building it as sole developer, growing it from a capstone prototype toward a working booking platform.",
      contribution:
        "I designed the full-stack architecture and took over as the sole developer to continue building the platform, handling development and deployment on Vercel. This project is still in active development.",
      resultDetail:
        "CaviteNest has grown from a capstone prototype into a working rental booking platform on a full-stack TypeScript architecture, deployed on Vercel. It remains actively in development.",
      stack: [
        { label: "Backend", items: ["NestJS", "TypeScript"] },
        { label: "Database", items: ["MongoDB"] },
        { label: "Deployment", items: ["Vercel"] },
      ],
      screenshots: [
        {
          src: "/projects/cavitenest.png",
          label: "Overview",
          alt: "CaviteNest rental and booking platform interface",
        },
      ],
    },
  },
];

/** Look up a single project by slug (used by the case-study route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
