import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"
import { sampleBriefTopics } from "@/data/sampleBriefTopics"

export default function AppExamplesPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="Examples"
      title="Sample inputs you can paste into the app."
      description="Ten grounded fear-to-context scenarios spanning markets, health, crime, geopolitics, work, social overthinking, misinformation, and general dread—built to expand toward a larger library."
      tag="DataTherapy • Examples"
    >
      <div className="mt-8 space-y-4">
        {sampleBriefTopics.map((item) => (
          <Link
            key={item.id}
            href="/app"
            className="block rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
          >
            <p className="text-xs text-white/50">{item.category}</p>
            <p className="mt-2 font-medium text-white">{item.title}</p>
            <p className="mt-2 text-sm text-white/65">{item.shortDescription}</p>
            <p className="mt-3 text-xs text-white/45">Tone: {item.recommendedTone}</p>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-sm text-white/55">
        <Link href="/app" className="text-white underline-offset-4 hover:underline">
          ← Back to generator
        </Link>
      </p>
    </MarketingShell>
  </>
  )
}
