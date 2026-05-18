import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"

const steps = [
  {
    title: "Capture the fear signal",
    body: "Paste a headline, rumor, bodily worry, financial jolt, or relationship spiral—anything that spikes uncertainty.",
  },
  {
    title: "Choose category and tone",
    body: "Category nudges scoring toward the right domain. Tone adjusts phrasing while keeping the same core scores.",
  },
  {
    title: "Get a DataTherapy Brief",
    body: "Seriousness, personal relevance, urgency, and certainty anchor the interpretation. Likely, possible, and unlikely readings reduce all-or-nothing thinking.",
  },
  {
    title: "Act on grounded next steps",
    body: "Separate confirmation from speculation, shrink exposure to what is actually yours to solve, and return to high-signal facts before big decisions.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="How it works"
      title="Fear-to-context, in one repeatable flow."
      description="DataTherapy is clarity infrastructure: a local, deterministic brief engine—no API keys, no auth, no database required for the demo path."
      tag="DataTherapy • How it works"
    >
      <ol className="mt-10 grid gap-6 md:grid-cols-2">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <span className="text-xs font-medium text-white/45">Step {i + 1}</span>
            <h2 className="mt-2 text-lg font-semibold text-white">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 rounded-3xl border border-white/10 bg-black/30 p-6 text-sm leading-7 text-white/60">
        <p className="font-medium text-white/80">Safety positioning</p>
        <p className="mt-3">
          DataTherapy is not emergency support, not medical, legal, or financial advice, and not therapy. If someone is in
          immediate danger, they should contact emergency services or appropriate local crisis resources. The product
          provides education and structured interpretation only.
        </p>
      </div>
      <p className="mt-8 text-sm text-white/55">
        <Link href="/app" className="text-white underline-offset-4 hover:underline">
          Try the generator
        </Link>{" "}
        ·{" "}
        <Link href="/product" className="text-white underline-offset-4 hover:underline">
          Product detail
        </Link>
      </p>
    </MarketingShell>
  </>
  )
}
