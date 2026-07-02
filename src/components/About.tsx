export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-8" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-400 leading-relaxed">
            <p>
              I&apos;m a BS Information Technology graduate from Cavite State University (Magna Cum Laude)
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
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Education</p>
              <p className="text-lg font-semibold mt-1">BS Information Technology</p>
              <p className="text-sm text-neutral-400">Cavite State University — Magna Cum Laude</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Location</p>
              <p className="text-lg font-semibold mt-1">Cavite, Philippines</p>
            </div>
            <div className="p-4 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
              <p className="text-sm text-neutral-500 uppercase tracking-wide">Focus</p>
              <p className="text-lg font-semibold mt-1">Full-Stack Web Dev & IT Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
