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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="h-1 w-16 bg-[var(--accent)] rounded mb-8 mx-auto" />
          <p className="text-neutral-400 mb-10">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I&apos;m always open to new opportunities and conversations.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--foreground)] placeholder-neutral-500 focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-green-500 text-sm text-center mt-2">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center mt-2">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
