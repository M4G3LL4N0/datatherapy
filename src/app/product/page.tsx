import { Metadata } from "next"
import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"

export const metadata: Metadata = {
  title: "Product - DataTherapy",
  description: "A product built to turn fear into structure through repeatable brief formats and explainable scoring."
}

export default function ProductPage() {

const modules = [
  {
    title: "DataTherapy Brief",
    description:
      "A structured output that converts fear into a readable map: seriousness, personal relevance, urgency, certainty, likely outcomes, myth vs reality, action steps, and grounding context."
  },
  {
    title: "Fear Category System",
    description:
      "Topics are classified by recurring fear patterns rather than headlines alone, so the product can stay useful across changing news cycles."
  },
  {
    title: "Signal Scoring",
    description:
      "The product reduces ambiguity with four anchor scores that help users understand what matters now, what is unclear, and what may not require panic."
  },
  {
    title: "Static-to-Live Architecture",
    description:
      "DataTherapy starts with a strong static intelligence layer and evolves into a live product with richer interpretation, personalization, and real-time inputs later."
  }
]

const specs = [
  {
    title: "Seriousness",
    description:
      "Measures how objectively severe the issue appears based on the language, category, and intensity of the input."
  },
  {
    title: "Personal Relevance",
    description:
      "Estimates how directly the issue may affect the user, based on first-person exposure cues and context."
  },
  {
    title: "Urgency",
    description:
      "Separates immediate action from background concern so users do not confuse visibility with immediacy."
  },
  {
    title: "Certainty",
    description:
      "Tracks how confirmed or speculative the situation appears, lowering confidence when rumor language is present."
  },
  {
    title: "Interpretation Layer",
    description:
      "Transforms raw input into likely, possible, and unlikely readings, plus myth-vs-reality framing and action guidance."
  },
  {
    title: "Grounding Layer",
    description:
      "Adds calm, practical explanation designed to reduce spiraling without dismissing genuine concern."
  }
]

export default function ProductPage() {
  return (
    <MarketingShell
      eyebrow="Product"
      title="A product built to turn fear into structure."
      description="DataTherapy helps users move from vague alarm to grounded understanding through a repeatable brief format, a fear-category system, and explainable scoring."
    >
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {modules.map((item) => (
          <div key={item.title} className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-4 text-white/70">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-6">
        <h3 className="text-xl font-semibold">Technical Specifications</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {specs.map((item) => {
            return (
              <div key={item.title} className="rounded-3xl border border-white/15 bg-white/5 p-6">
                <h4 className="text-lg font-medium">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-8">
        <h3 className="text-2xl font-semibold">How the product works</h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/50">Step 1</p>
            <p className="mt-2 text-white/85">User enters a scary headline, uncertainty, or spiraling thought.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/50">Step 2</p>
            <p className="mt-2 text-white/85">DataTherapy classifies the fear pattern and generates a structured brief.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-white/50">Step 3</p>
            <p className="mt-2 text-white/85">The user leaves with clearer interpretation, calmer framing, and practical next steps.</p>
          </div>
        </div>
      </section>

      <section className="mt-16 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/app"
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
        >
          Try the app
        </Link>
        <Link
          href="/sample-brief"
          className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
        >
          View sample briefs
        </Link>
      </section>
    </MarketingShell>
  )
}
