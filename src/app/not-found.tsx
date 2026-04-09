import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24">
        <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/65">
          404 · Not Found
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
          This page drifted out of reach.
        </h1>

        <span className="mt-4 block text-lg text-white/65">
          But we&apos;ll help you find your way.
        </span>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to a place that can actually help.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Go Home
          </Link>

          <Link
            href="/about"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
}
