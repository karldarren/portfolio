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
        <Link href="/" className="text-sm text-neutral-400 hover:text-white transition-colors mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-neutral-400 mb-12">
          Thoughts on web development, projects, and things I&apos;m learning.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`}>
                <div className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-neutral-600 transition-colors">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
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
