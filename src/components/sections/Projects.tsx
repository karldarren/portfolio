"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import Icon from "@/components/ui/Icon";
import { projects } from "@/data/projects";
import { fadeUp, viewportOnce } from "@/components/motion/variants";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeading index="01." title="Featured Work" />
      <p className="mb-10 max-w-2xl text-[var(--color-text-muted)]">
        Real systems I&apos;ve designed, built, and deployed. Each one solved a concrete problem —
        from centralizing ISP operations to replacing manual enrollment.
      </p>

      <div className="space-y-8">
        {projects.map((p, i) => {
          const host = p.live ? p.live.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";
          return (
          <motion.article
            key={p.slug}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-[var(--dur-base)] hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-lg)]"
          >
            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              {/* Preview — framed like a browser window so the real UI is the focus */}
              <div className="flex flex-col bg-[var(--color-bg-elevated)] p-4 md:p-6 lg:border-b-0">
                <div className="mb-3 flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-danger)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warn)]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-signal)]/70" />
                  {p.live && (
                    <span className="ml-2 truncate rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 font-mono text-[11px] text-[var(--color-text-faint)]">
                      {host}
                    </span>
                  )}
                </div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Screenshot of the ${p.title} interface`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  ) : (
                    // No screenshot asset yet — branded, non-fabricated preview.
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-grid px-6 text-center">
                      <span className="font-mono text-2xl font-bold tracking-tight">
                        <span className="text-[var(--color-signal)]">&lt;</span>
                        {p.title}
                        <span className="text-[var(--color-signal)]">/&gt;</span>
                      </span>
                      {p.category && (
                        <span className="font-mono text-xs text-[var(--color-text-faint)]">{p.category}</span>
                      )}
                      {p.live && (
                        <span className="mt-1 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-[11px] text-[var(--color-accent)]">
                          <Icon name="external" className="h-3.5 w-3.5" />
                          {host}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-signal)]">
                  {p.featured ? "Featured Project" : p.category ?? "Project"}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-sm text-[var(--color-accent-2)]">{p.role}</p>
                  {p.status === "building" && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-warn)]/30 bg-[var(--color-warn)]/10 px-2.5 py-0.5 font-mono text-[11px] text-[var(--color-warn)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-warn)]" />
                      Currently Building
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                {p.category && (
                  <p className="mt-0.5 text-sm text-[var(--color-text-faint)]">{p.category}</p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {p.summary}
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                      Problem
                    </p>
                    <p className="mt-1 leading-relaxed text-[var(--color-text-muted)]">{p.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                      Result
                    </p>
                    <p className="mt-1 leading-relaxed text-[var(--color-text-muted)]">{p.result}</p>
                  </div>
                </div>

                {p.features && p.features.length > 0 && (
                  <div className="mt-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                      Key Features
                    </p>
                    <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                          <span className="mt-0.5 shrink-0 font-mono text-[var(--color-accent)]">▹</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary px-4 py-2"
                    >
                      <Icon name="external" className="h-4 w-4" />
                      {p.status === "building" ? "Visit Live" : "Live Demo"}
                    </a>
                  )}
                  {p.caseStudy && (
                    <Link href={`/projects/${p.slug}`} className="btn btn-secondary group/cs px-4 py-2">
                      Case Study
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform duration-[var(--dur-base)] group-hover/cs:translate-x-0.5"
                      />
                    </Link>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary px-4 py-2"
                    >
                      <Icon name="github" className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
