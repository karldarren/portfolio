import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import Tag from "@/components/ui/Tag";
import ScreenshotGallery from "@/components/projects/ScreenshotGallery";
import { projects, getProjectBySlug } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = project.category
    ? `${project.title} — ${project.category}`
    : project.title;
  const description =
    project.caseStudy?.overview ?? project.summary;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${title} | ${profile.name}`,
      description,
      url: `/projects/${project.slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${profile.name}`,
      description,
    },
  };
}

/** Small labelled block used for the case-study body sections. */
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-signal)]">
        {label}
      </h2>
      <div className="mt-2 leading-relaxed text-[var(--color-text-muted)]">{children}</div>
    </section>
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const cs = project.caseStudy ?? {};
  const host = project.live
    ? project.live.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "";
  const shots = cs.screenshots ?? [];

  return (
    <div className="min-h-screen px-5 py-16 sm:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          <span aria-hidden="true">←</span> Back to Work
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-signal)]">
              {cs.eyebrow ?? project.category ?? "Project"}
            </p>
            {project.status === "building" && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-warn)]/30 bg-[var(--color-warn)]/10 px-2.5 py-0.5 font-mono text-[11px] text-[var(--color-warn)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-warn)]" />
                In Development
              </span>
            )}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h1>
          {project.category && (
            <p className="mt-1 text-[var(--color-text-muted)]">{project.category}</p>
          )}
        </header>

        {/* Screenshots — real captures only; branded placeholder otherwise */}
        {shots.length > 0 ? (
          <div className="mb-10">
            <ScreenshotGallery shots={shots} title={project.title} />
          </div>
        ) : (
          <div className="mb-10 flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-grid bg-[var(--color-surface)] px-6 text-center">
            <span className="font-mono text-2xl font-bold tracking-tight">
              <span className="text-[var(--color-signal)]">&lt;</span>
              {project.title}
              <span className="text-[var(--color-signal)]">/&gt;</span>
            </span>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 font-mono text-[11px] text-[var(--color-accent)]"
              >
                <Icon name="external" className="h-3.5 w-3.5" />
                {host}
              </a>
            )}
          </div>
        )}

        {/* Body */}
        <div className="space-y-8">
          <Block label="Overview">
            <p>{cs.overview ?? project.summary}</p>
          </Block>

          <Block label="The Problem">
            <p>{cs.problemDetail ?? project.problem}</p>
          </Block>

          {cs.solution && (
            <Block label="The Solution">
              <p>{cs.solution}</p>
            </Block>
          )}

          <Block label="My Role">
            <p>{project.role}</p>
          </Block>

          {project.features && project.features.length > 0 && (
            <Block label="Key Features">
              <ul className="mt-1 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 shrink-0 font-mono text-[var(--color-accent)]">▹</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block label="Technology">
            {cs.stack && cs.stack.length > 0 ? (
              <div className="mt-1 space-y-3">
                {cs.stack.map((group) => (
                  <div key={group.label} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="min-w-28 font-mono text-xs uppercase tracking-wider text-[var(--color-text-faint)]">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            )}
          </Block>

          {cs.contribution && (
            <Block label="My Contribution">
              <p>{cs.contribution}</p>
            </Block>
          )}

          <Block label="Result">
            <p>{cs.resultDetail ?? project.result}</p>
          </Block>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-8">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-2.5"
            >
              <Icon name="external" className="h-4 w-4" />
              {project.status === "building" ? "Visit Live" : "Live Demo"}
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary px-5 py-2.5"
            >
              <Icon name="github" className="h-4 w-4" />
              GitHub
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
