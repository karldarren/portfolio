"use client";

import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "AI and Ethics in Electronics Engineering",
    type: "Technical Webinar",
    description: "Balancing Technical Efficiency with Ethical Responsibility and Accountability",
  },
  {
    title: "Virtual Assistant Online Training",
    type: "Certification",
    description: "Data Entry, Graphics Design, Facebook Advertising, Social Media Management",
  },
  {
    title: "National Certificate II in Driving",
    type: "TESDA Certification",
    description: "Technical Education and Skills Development Authority",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-16 bg-[var(--accent)] rounded mb-12" />
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.title} delay={index * 0.1}>
              <div className="p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] h-full">
                <span className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] inline-block mb-3">
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
