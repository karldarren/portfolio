"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Icon from "@/components/ui/Icon";
import { fadeUp, viewportOnce } from "@/components/motion/variants";
import { profile } from "@/data/profile";

const inputClass =
  "w-full rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] px-4 py-3 font-mono text-sm text-[var(--color-text)] placeholder-[var(--color-text-faint)] transition-all focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    // Honeypot: bots fill hidden field.
    const hp = (formRef.current.elements.namedItem("company") as HTMLInputElement)?.value;
    if (hp) return;

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
    <Section id="contact" grid>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <span className="font-mono text-sm text-[var(--color-signal)]">08.</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Have a system that needs to be built?
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)]">
          Whether it&apos;s a web application, an automation, or an IT problem that needs solving —
          let&apos;s turn your idea into something that works.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1fr_1.4fr]">
        {/* Direct channels */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]"
          >
            <Icon name="mail" className="h-5 w-5 text-[var(--color-accent)]" />
            <span className="break-all text-sm">{profile.email}</span>
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]"
          >
            <Icon name="github" className="h-5 w-5 text-[var(--color-accent)]" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-sm)] transition-all duration-[var(--dur-base)] hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]"
          >
            <Icon name="linkedin" className="h-5 w-5 text-[var(--color-accent)]" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-md)]"
        >
          <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-[var(--color-danger)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--color-warn)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--color-signal)]" />
            <span className="ml-2 font-mono text-xs text-[var(--color-text-faint)]">contact-form.sh</span>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block font-mono text-xs text-[var(--color-text-faint)]">
                  name:
                </label>
                <input id="name" type="text" name="name" placeholder="Karl Darren" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-mono text-xs text-[var(--color-text-faint)]">
                  email:
                </label>
                <input id="email" type="email" name="email" placeholder="karldarren@example.com" required className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="title" className="mb-1 block font-mono text-xs text-[var(--color-text-faint)]">
                subject:
              </label>
              <input id="title" type="text" name="title" placeholder="Project inquiry" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-[var(--color-text-faint)]">
                message:
              </label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me what you'd like to build..." required className={`${inputClass} resize-none`} />
            </div>

            {/* Honeypot (hidden from users) */}
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary w-full px-6 py-3 font-mono"
            >
              {status === "sending" ? "$ sending..." : "$ send_message"}
            </button>

            <p aria-live="polite" className="min-h-[1.25rem] text-center font-mono text-sm">
              {status === "sent" && (
                <span className="text-[var(--color-signal)]">✓ Message sent. I&apos;ll get back to you soon.</span>
              )}
              {status === "error" && (
                <span className="text-[var(--color-danger)]">✗ Something went wrong. Please email me directly.</span>
              )}
            </p>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
