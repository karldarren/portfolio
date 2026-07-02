export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-[var(--accent)] text-sm font-medium mb-4 tracking-wide uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Karl Darren De Sosa
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-xl mx-auto">
          BS Information Technology graduate with hands-on experience in web-based system development, IT support, and network administration.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--card-border)] hover:border-neutral-500 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
