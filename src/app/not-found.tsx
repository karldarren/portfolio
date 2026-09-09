import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-grid px-6">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-bold text-gradient">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-[var(--color-text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 py-3 font-medium text-[#04222a] transition-all hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
