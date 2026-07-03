"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-grid">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[var(--terminal-green)] text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I&apos;m a BS Information Technology graduate from{" "}
                <span className="text-[var(--accent)]">Cavite State University</span>{" "}
                (<span className="text-[var(--accent-secondary)]">Magna Cum Laude</span>)
                with hands-on experience in web-based system development, IT support, and network
                administration within academic environments.
              </p>
              <p>
                Skilled in building and maintaining school information systems using PHP/Laravel and MySQL,
                deploying systems on Hostinger, managing campus-wide network connectivity, and resolving
                hardware, software, and network issues to minimize downtime.
              </p>
              <p>
                Currently developing CaviteNest, a property rental and booking platform using NestJS,
                TypeScript, and MongoDB, deployed on Vercel. Also experienced in providing technical
                support for live events and streaming activities.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              <div className="p-5 rounded-xl glass glow-cyan hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-glow" />
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Education</p>
                </div>
                <p className="text-lg font-semibold">BS Information Technology</p>
                <p className="text-sm text-neutral-400">Cavite State University — Magna Cum Laude</p>
              </div>
              <div className="p-5 rounded-xl glass glow-purple hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] pulse-glow" />
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Location</p>
                </div>
                <p className="text-lg font-semibold">Cavite, Philippines</p>
              </div>
              <div className="p-5 rounded-xl glass hover:scale-[1.02] transition-transform" style={{ boxShadow: "0 0 30px rgba(74, 222, 128, 0.1)" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--terminal-green)] pulse-glow" />
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Focus</p>
                </div>
                <p className="text-lg font-semibold">Full-Stack Web Dev & IT Support</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
