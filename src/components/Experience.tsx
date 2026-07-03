"use client";

import AnimatedSection from "./AnimatedSection";

const experiences = [
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
    title: "MIS / IT - On-the-Job Training",
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
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[var(--terminal-green)] text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
          </div>
        </AnimatedSection>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass rounded-xl p-6 gradient-border-animated hover:scale-[1.01] transition-transform">
                {/* Terminal-style header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--glass-border)]">
                  <span className="w-3 h-3 rounded-full bg-[var(--terminal-red)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--terminal-yellow)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--terminal-green)]" />
                  <span className="ml-3 font-mono text-xs text-neutral-500">{exp.company}</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-[var(--accent)]">{exp.company} — {exp.location}</p>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 mt-1 md:mt-0 px-3 py-1 rounded-full bg-[var(--accent)]/10">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed flex gap-3">
                      <span className="text-[var(--accent)] mt-0.5 shrink-0 font-mono">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
