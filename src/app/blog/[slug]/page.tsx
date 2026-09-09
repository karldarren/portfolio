import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Karl Darren De Sosa`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen py-24 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="mb-8 inline-block text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]">
          ← Back to Blog
        </Link>
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 text-sm text-[var(--color-text-faint)]">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs text-[var(--color-accent)]">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-semibold prose-a:text-[var(--color-accent)] prose-strong:text-[var(--color-text)] prose-code:text-[var(--color-accent)] prose-code:bg-[var(--color-surface)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--color-surface)] prose-pre:border prose-pre:border-[var(--color-border)]">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
