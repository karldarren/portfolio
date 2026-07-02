"use client";

import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "NestJS", "PHP/Laravel"],
  },
  {
    title: "Database & Hosting",
    skills: ["MySQL", "MongoDB", "Vercel", "Hostinger", "Network Administration"],
  },
  {
    title: "IT & Technical",
    skills: ["Hardware Repair", "System Formatting", "MikroTik Configuration", "LAN/Networking", "Troubleshooting"],
  },
  {
    title: "Tools & Software",
    skills: ["Git", "VS Code", "Microsoft Office Suite", "DaVinci Resolve", "CapCut", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-16 bg-[var(--accent)] rounded mb-12" />
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[var(--accent)]">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-neutral-400 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {skill}
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
