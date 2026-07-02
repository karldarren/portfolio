export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--card-bg)]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <div className="h-1 w-16 bg-[var(--accent)] rounded mb-8 mx-auto" />
        <p className="text-neutral-400 mb-10">
          Have a project in mind or just want to say hi? Feel free to reach out.
          I&apos;m always open to new opportunities and conversations.
        </p>
        <form className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-[var(--background)] border border-[var(--card-border)] text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
