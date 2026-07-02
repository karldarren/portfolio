const experiences = [
  {
    title: "MIS / IT Admin Staff (PEAC Coordinator)",
    company: "Western Colleges Inc.",
    location: "Naic, Cavite",
    period: "October 2025 – June 2026",
    points: [
      "Coordinated PEAC compliance documentation and developed the school's Enrollment System and other information systems using web-based platforms.",
      "Built, configured, and maintained desktop computers, IT equipment, and network connectivity across faculty and administrative offices.",
      "Provided technical support during school events as Sound Engineer and managed live streaming for programs, seminars, and online activities.",
    ],
  },
  {
    title: "MIS / IT - On-the-Job Training",
    company: "Western Colleges Inc.",
    location: "Naic, Cavite",
    period: "February 2025 – June 2025",
    points: [
      "Assisted in setting up, repairing, and reformatting desktop computers, including hardware assembly and installation of operating systems.",
      "Troubleshot issues with computers, printers, and network devices, and configured MikroTik routers with basic bandwidth management.",
      "Managed computer lab equipment, including LAN cable organization and RJ45 crimping.",
    ],
  },
  {
    title: "Freelance Computer Technician",
    company: "Self-Employed",
    location: "Cavite",
    period: "2023 – Present",
    points: [
      "Diagnose and repair hardware and software issues for clients using diagnostic tools.",
      "Perform system formatting and install operating systems, applications, and drivers to optimize performance.",
      "Provide troubleshooting and technical support to clients, ensuring smooth device operation.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-12" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--accent)]" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-[var(--accent)] text-sm">{exp.company} — {exp.location}</p>
                </div>
                <span className="text-sm text-neutral-500 mt-1 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 mt-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-neutral-400 leading-relaxed flex gap-2">
                    <span className="text-[var(--accent)] mt-1 shrink-0">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
