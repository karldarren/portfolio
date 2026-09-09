import Icon from "@/components/ui/Icon";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="font-mono text-sm text-[var(--color-text-muted)]">
              <span className="text-[var(--color-signal)]">©</span> {new Date().getFullYear()}{" "}
              {profile.name}
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--color-text-faint)]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-signal)] align-middle" />{" "}
              system: operational · built with Next.js + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Icon name="github" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Icon name="linkedin" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
