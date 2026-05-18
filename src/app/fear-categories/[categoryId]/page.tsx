import { SubpageVisual } from "@/components/SubpageVisual";
import { notFound } from "next/navigation"
import { fearCategoryMap } from "@/data/fearCategories"
import { MarketingShell } from "@/components/MarketingShell"

export default async function FearCategoryPage({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) {
  const { categoryId } = await params
  const category = fearCategoryMap[categoryId]

  if (!category) {
    notFound()
  }

  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title={category.name}
      subtitle="Structured fear-to-context map"
      description={`Calm interpretation for ${category.name.toLowerCase()}: mechanisms, common distortions, and grounded next steps—not sensational certainty.`}
      tag={`DataTherapy • ${category.name}`}
    >
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Pattern definition</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{category.name}</h2>
          <p className="mt-3 text-sm leading-7 text-white/68">{category.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {category.mechanisms.map((m) => (
              <span
                key={m}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/65"
              >
                {m}
              </span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-white/55">
            <div className="rounded-2xl bg-white/[0.05] p-3">
              <div className="text-lg font-semibold text-white">{category.severityRange[1]}</div>
              Peak signal
            </div>
            <div className="rounded-2xl bg-white/[0.05] p-3">
              <div className="text-lg font-semibold text-white">{category.mediaAmplificationScore}</div>
              Media lift
            </div>
            <div className="rounded-2xl bg-white/[0.05] p-3">
              <div className="text-lg font-semibold text-white">{category.cognitiveImpact}</div>
              Load
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Recurrence profile</p>
          <div className="mt-4 space-y-3">
            {category.recurrencePatterns.map((pattern) => (
              <div key={pattern} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-white">{pattern}</h3>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-white/58">
                    Pattern
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  Use as a cue to slow down, verify, and choose a proportional response.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Interpretation scaffolding</p>
          <p className="mt-3 text-sm leading-7 text-white/70">{category.structuredInterpretation}</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Common distortions</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/68">
                {category.commonDistortions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">Common overreactions</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/68">
                {category.commonOverreactions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">Reflection prompts</p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {category.mitigationStrategies.immediate.map((action) => (
              <div key={action} className="rounded-2xl bg-white/[0.05] p-4 text-sm leading-6 text-white/68">
                {action}
              </div>
            ))}
          </div>
        </section>
      </div>
    </MarketingShell>
  </>
  )
}
