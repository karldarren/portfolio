"use client";

import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "NestJS", "PHP/Laravel"],
  },
  {
    title: "Database & Hosting",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB", "Vercel", "Hostinger", "Network Admin"],
  },
  {
    title: "IT & Technical",
    icon: "🔧",
    skills: ["Hardware Repair", "System Formatting", "MikroTik Config", "LAN/Networking", "Troubleshooting"],
  },
  {
    title: "Tools & Software",
    icon: "⚡",
    skills: ["Git", "VS Code", "MS Office Suite", "DaVinci Resolve", "CapCut", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[var(--terminal-green)] text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl glass hover:scale-[1.02] transition-transform gradient-border-animated">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold font-mono text-[var(--accent)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[var(--accent)]/5 border border-[var(--accent)]/20 text-neutral-400 hover:text-[var(--accent)] hover:border-[var(--accent)]/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
