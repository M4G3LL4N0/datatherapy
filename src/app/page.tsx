export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
          </span>
          DataTherapy • clarity through data
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Understand scary things
          <span className="block text-white/65">with structure, not spirals.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          DataTherapy turns fear-triggering news, uncertainty, and overwhelming ideas into grounded explanations,
          practical context, and calmer understanding.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h2 className="text-lg font-medium">Signal scoring</h2>
            <p className="mt-3 text-white/65">
              Separate real urgency from noise with structured interpretation.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h2 className="text-lg font-medium">Context layers</h2>
            <p className="mt-3 text-white/65">
              Understand what happened, what it means, and what does not need to be assumed.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/5 to-white/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <h2 className="text-lg font-medium">Grounded next steps</h2>
            <p className="mt-3 text-white/65">
              Leave with practical actions and calmer orientation instead of doom-heavy confusion.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
