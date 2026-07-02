export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-8" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I&apos;m a developer who thrives on turning ideas into functional, elegant digital
              products. With a strong foundation in modern web technologies, I craft
              responsive interfaces and robust backend systems.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
              to open source, or learning something completely new.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Experience</p>
              <p className="text-lg font-semibold mt-1">2+ Years</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Projects</p>
              <p className="text-lg font-semibold mt-1">10+ Completed</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Focus</p>
              <p className="text-lg font-semibold mt-1">Full-Stack Web Dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
