const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with cart, checkout, and payment integration using Next.js and Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task board with real-time updates, drag-and-drop, and team workspaces.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chat Interface",
    description:
      "A conversational AI app with streaming responses, markdown rendering, and chat history.",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-12" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--background)] hover:border-neutral-600 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
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
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                <a
                  href={project.live}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
