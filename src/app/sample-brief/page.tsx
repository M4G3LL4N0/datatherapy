import { SubpageVisual } from "@/components/SubpageVisual";
import { sampleBriefTopics } from "@/data/sampleBriefTopics"
import { MarketingShell } from "@/components/MarketingShell"
import { StructuredBrief } from "@/components/StructuredBrief"
import Link from "next/link"

export default async function SampleBriefPage() {
  const featured = sampleBriefTopics.filter((item) => item.featured).slice(0, 6)

  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="Sample briefs"
      title="See how a DataTherapy Brief works."
      description="Signal over spiral: each example turns fear-triggering language into seriousness, relevance, urgency, certainty, interpretation, and grounded next steps. Not therapy or emergency support—structured clarity only."
      tag="DataTherapy • Sample briefs"
    >
      <p className="mt-6 text-sm text-white/55">
        Prefer to run your own?{" "}
        <Link href="/app" className="text-white underline-offset-4 hover:underline">
          Open the app
        </Link>
        .
      </p>
      <section className="mt-10 space-y-10">
        {featured.map((item) => (
          <div key={item.id} className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <div className="mb-6">
              <p className="text-sm text-white/55">{item.category}</p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-white/70">{item.shortDescription}</p>
            </div>
            {item.brief ? <StructuredBrief brief={item.brief} /> : null}
          </div>
        ))}
      </section>
    </MarketingShell>
  </>
  )
}
