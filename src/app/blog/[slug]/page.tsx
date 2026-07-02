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
        <Link href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors mb-8 inline-block">
          ← Back to Blog
        </Link>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-semibold prose-a:text-[var(--accent)] prose-strong:text-white prose-code:text-[var(--accent)] prose-code:bg-[var(--card-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-[var(--card-bg)] prose-pre:border prose-pre:border-[var(--card-border)]">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
