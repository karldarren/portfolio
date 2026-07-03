export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--glass-border)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-neutral-500">
          <span className="text-[var(--terminal-green)]">©</span> {new Date().getFullYear()} Karl Darren De Sosa
        </p>
        <p className="font-mono text-xs text-neutral-600">
          Built with <span className="text-[var(--accent)]">Next.js</span> + <span className="text-[var(--accent-secondary)]">Tailwind CSS</span>
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/karldarren"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/karldarren"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors"
          >
            linkedin
          </a>
          <a
            href="mailto:karldarrendesosa@gmail.com"
            className="font-mono text-sm text-neutral-500 hover:text-[var(--accent)] transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
