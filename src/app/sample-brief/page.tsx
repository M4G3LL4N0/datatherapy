import type { Metadata } from "next"
import { MarketingShell } from "@/components/MarketingShell"
import { sampleBriefTopics } from "@/data/sampleBriefTopics"

export const metadata: Metadata = {
  title: "Sample Briefs | DataTherapy",
  description:
    "Explore sample DataTherapy Briefs for fear categories like market panic, AI replacement, outbreaks, war headlines, crime fears, and social overthinking."
}

export default function SampleBriefPage() {
  const featured = sampleBriefTopics.filter((item) => item.featured).slice(0, 6)

  return (
    <MarketingShell
      eyebrow="Sample Briefs"
      title="See how a DataTherapy Brief works."
      description="These examples show how the product converts scary information into seriousness, relevance, urgency, certainty, interpretation, and grounded next steps."
    >
      <section className="space-y-8">
        {featured.map((item) => (
          <div key={item.id} className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <div className="mb-6">
              <p className="text-sm text-white/55">{item.category}</p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-white/70">{item.shortDescription}</p>
            </div>
          </div>
        ))}
      </section>
    </MarketingShell>
  )
}
