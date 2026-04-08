import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          DataTherapy • Page Not Found
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Lost in the data
          <span className="block text-white/65">but we'll help you find your way.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          The page you're looking for doesn't exist or has been moved. Let's get you back to clarity.
        </p>

        <Link
          href="/"
          className="mt-12 w-fit rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Return Home
        </Link>
      </section>
    </main>
  )
}
