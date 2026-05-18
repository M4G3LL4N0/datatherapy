import { MarketingGraphicsStack } from "@/components/MarketingGraphicsStack";
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col justify-center px-6 pb-24 pt-32">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">Fear intelligence</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Turn scary information into structured understanding.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          DataTherapy converts fear-triggering headlines, rumors, and spirals into a calm brief: seriousness, relevance,
          urgency, certainty, interpretations, myth vs reality, and grounded next steps. Not therapy. Not emergency support.
          Clarity infrastructure.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/app"
            className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Try a brief
          </Link>
          <Link
            href="/product"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Product
          </Link>
          <Link
            href="/fear-library"
            className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Fear library
          </Link>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Signal over spiral",
              body: "Separate what is confirmed from what is emotionally amplified.",
            },
            {
              title: "Scores you can reason with",
              body: "Four anchors—seriousness, relevance, urgency, certainty—reduce vague dread.",
            },
            {
              title: "Local demo engine",
              body: "Deterministic brief generation with no API keys for the MVP path.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/65">{card.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-3xl text-xs leading-6 text-white/45">
          If you are in immediate danger, contact emergency services or appropriate local crisis resources. DataTherapy
          does not provide medical, legal, or financial advice—only education and structured interpretation.
        </p>
      </section>
    </div>
  )
}

<MarketingGraphicsStack />
