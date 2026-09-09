import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Karl Darren De Sosa",
  description: "Articles about web development, tech, and my journey as a developer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="mb-8 inline-block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
          ← Back to Home
        </Link>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Blog</h1>
        <p className="mb-12 text-[var(--color-text-muted)]">
          Thoughts on web development, projects, and things I&apos;m learning.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-border-strong)]">
                  <div className="mb-3 flex items-center gap-3 text-sm text-[var(--color-text-faint)]">
                    <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-[var(--color-accent)]">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs text-[var(--color-accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
