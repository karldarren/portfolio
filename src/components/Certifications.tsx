"use client";

import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "AI and Ethics in Electronics Engineering",
    type: "Technical Webinar",
    description: "Balancing Technical Efficiency with Ethical Responsibility and Accountability",
    icon: "🤖",
  },
  {
    title: "Virtual Assistant Online Training",
    type: "Certification",
    description: "Data Entry, Graphics Design, Facebook Advertising, Social Media Management",
    icon: "💻",
  },
  {
    title: "National Certificate II in Driving",
    type: "TESDA Certification",
    description: "Technical Education and Skills Development Authority",
    icon: "🏎️",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative bg-grid">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-[var(--terminal-green)] text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 0.1}>
              <div className="p-5 rounded-xl glass hover:scale-[1.03] transition-transform gradient-border-animated h-full">
                <span className="text-3xl mb-3 block">{cert.icon}</span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] inline-block mb-3">
                  {cert.type}
                </span>
                <h3 className="text-base font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
