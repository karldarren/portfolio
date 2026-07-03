"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Western Colleges Enrollment System",
    role: "Frontend & Backend Developer",
    description:
      "Developed and maintained a web-based enrollment management system for Western Colleges, Inc. using PHP/Laravel and MySQL. Deployed on Hostinger with consistent uptime for students and staff.",
    tags: ["PHP", "Laravel", "MySQL", "Hostinger"],
    live: "https://wci-homeofthechampion.cloud/",
    image: "/projects/wci-enrollment.png",
    color: "var(--accent)",
  },
  {
    title: "CaviteNest",
    role: "Lead Full Stack Developer",
    description:
      "Built a property rental and booking platform as a capstone project, then took over as sole developer in 2026. Expanded it into a fully functional rental booking system deployed on Vercel.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Vercel"],
    live: "https://cavitenest.com/",
    image: "/projects/cavitenest.png",
    color: "var(--accent-secondary)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-grid">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[var(--terminal-green)] text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <div className="rounded-xl glass gradient-border-animated overflow-hidden group hover:scale-[1.02] transition-transform h-full flex flex-col">
                {/* Project screenshot */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-mono text-[var(--accent-secondary)] mb-3">{project.role}</p>
                  <p className="text-neutral-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg glass text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.live}
                    className="text-sm font-mono text-neutral-400 hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-[var(--terminal-green)]">→</span> View Live
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
