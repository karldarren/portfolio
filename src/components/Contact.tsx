"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="font-mono text-[var(--terminal-green)] text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-neutral-400 mb-10 text-center">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I&apos;m always open to new opportunities and conversations.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="glass rounded-2xl p-8 glow-cyan">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--glass-border)]">
              <span className="w-3 h-3 rounded-full bg-[var(--terminal-red)]" />
              <span className="w-3 h-3 rounded-full bg-[var(--terminal-yellow)]" />
              <span className="w-3 h-3 rounded-full bg-[var(--terminal-green)]" />
              <span className="ml-3 font-mono text-xs text-neutral-500">contact-form.sh</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-neutral-500 mb-1 block">name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] focus:glow-cyan transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-neutral-500 mb-1 block">email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] focus:glow-cyan transition-all font-mono text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-neutral-500 mb-1 block">subject:</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Project Inquiry"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] focus:glow-cyan transition-all font-mono text-sm"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-neutral-500 mb-1 block">message:</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Hey, I'd like to work with you on..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder-neutral-600 focus:outline-none focus:border-[var(--accent)] focus:glow-cyan transition-all resize-none font-mono text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] hover:opacity-90 text-black font-medium rounded-xl transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed font-mono"
              >
                {status === "sending" ? "$ sending..." : "$ send_message"}
              </button>
              {status === "sent" && (
                <p className="text-[var(--terminal-green)] text-sm text-center mt-2 font-mono">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-[var(--terminal-red)] text-sm text-center mt-2 font-mono">
                  ✗ Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
