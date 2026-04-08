export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          DataTherapy • About Us
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          About DataTherapy
          <span className="block text-white/65">Our mission and approach</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          DataTherapy was founded to help people navigate the increasingly complex world of data-driven news and information. We believe in providing clear, structured, and actionable insights to help people make better decisions.
        </p>
      </section>
    </main>
  )
}
