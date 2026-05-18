import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from "@/components/MarketingShell"
import Link from "next/link"

const cases = [
  {
    title: "Headline panic → structured read",
    body: "You see a breaking story and your mind jumps to worst-case meaning for your job, money, or safety. A brief separates visibility from exposure and rumor from confirmation.",
    href: "/sample-brief",
  },
  {
    title: "Financial fear without a spreadsheet spiral",
    body: "Markets, layoffs, and recession language trigger future dread. Scoring helps you ask what is actually at stake for you this month—not for civilization in the abstract.",
    href: "/fear-categories/money-recession",
  },
  {
    title: "Health symptom or story overload",
    body: "Symptoms plus search results can feel like certainty. The brief engine highlights uncertainty language and nudges toward appropriate clinical boundaries—not diagnosis theater.",
    href: "/fear-categories/health-outbreaks",
  },
  {
    title: "AI and career anxiety",
    body: "When change narratives move fast, fear outruns facts. Structure turns vague obsolescence dread into relevance and urgency you can reason about.",
    href: "/fear-categories/ai-future-of-work",
  },
  {
    title: "Social signal over-reading",
    body: "Silence and ambiguity become rejection scripts. A calm interpretation layer slows the story down and names what is known versus imagined.",
    href: "/fear-categories/social-overthinking",
  },
  {
    title: "Reality confusion and rumor stacks",
    body: "Conflicting scary claims collapse into one big threat feeling. The product triages certainty so you can act on process, not on infinite debate.",
    href: "/fear-categories/misinformation-reality",
  },
]

export default function UseCasesPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title="Use cases"
      subtitle="Where fear-to-context helps"
      description="DataTherapy is for people who want structured understanding when information feels loud—without pretending to be therapy, emergency support, or professional advice."
      tag="DataTherapy • Use cases"
    >
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
            <p className="mt-4 text-xs text-white/45">Open related framing →</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-white/10 bg-black/25 p-8">
        <h3 className="text-lg font-semibold text-white">How people use the MVP</h3>
        <ol className="mt-6 list-decimal space-y-4 pl-5 text-sm leading-7 text-white/70">
          <li>Paste a fear-triggering thought or headline into the generator.</li>
          <li>Pick the closest category and tone for phrasing.</li>
          <li>Read the brief as a pacing tool—not a prediction engine.</li>
        </ol>
        <p className="mt-8 text-sm text-white/55">
          <Link href="/app" className="text-white underline-offset-4 hover:underline">
            Open the app
          </Link>{" "}
          ·{" "}
          <Link href="/app/how-it-works" className="text-white underline-offset-4 hover:underline">
            How it works
          </Link>
        </p>
      </div>

      <p className="mt-12 text-xs leading-6 text-white/45">
        If you are in immediate danger, contact emergency services or appropriate local crisis resources. DataTherapy
        provides education and structured interpretation only.
      </p>
    </MarketingShell>
  </>
  )
}
