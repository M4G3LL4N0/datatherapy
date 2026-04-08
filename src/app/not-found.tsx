import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          404 • Page not found
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          This page doesn&apos;t exist
          <span className="block text-white/65">but we&apos;ll help you get back on track.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          The page you&apos;re looking for doesn&apos;t exist, may have moved, or was never published.
          Head back to the homepage or jump into the product.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Back home
          </Link>

          <Link
            href="/app"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Open the app
          </Link>
        </div>
      </section>
    </main>
  )
}
