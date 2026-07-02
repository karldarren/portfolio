const projects = [
  {
    title: "Western Colleges Enrollment System",
    role: "Frontend & Backend Developer",
    description:
      "Developed and maintained a web-based enrollment management system for Western Colleges, Inc. using PHP/Laravel and MySQL. Deployed on Hostinger with consistent uptime for students and staff.",
    tags: ["PHP", "Laravel", "MySQL", "Hostinger"],
    live: "https://wci-homeofthechampion.cloud/",
  },
  {
    title: "CaviteNest",
    role: "Lead Full Stack Developer",
    description:
      "Built a property rental and booking platform as a capstone project, then took over as sole developer in 2026. Expanded it into a fully functional rental booking system deployed on Vercel.",
    tags: ["NestJS", "TypeScript", "MongoDB", "Vercel"],
    live: "https://cavitenest.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-12" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-neutral-600 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-1 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--accent)] mb-3">{project.role}</p>
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.live}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
