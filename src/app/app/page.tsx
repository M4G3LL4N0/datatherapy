"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"
import { StructuredBrief, type StructuredBriefData } from "@/components/StructuredBrief"
import { sampleBriefTopics } from "@/data/sampleBriefTopics"
import { generateDataTherapyBrief } from "@/lib/generateDataTherapyBrief"

const categories = [
  "News / World Events",
  "Financial Fear",
  "Health Fear",
  "Social / Relationship Fear",
  "Career / AI Fear",
  "Crime / Safety Fear",
  "General Uncertainty",
  "Misinformation / Rumor Fear"
] as const

const tones = ["Analytical", "Grounding", "Direct"] as const

export default function AppPage() {
  const featuredSamples = useMemo(() => sampleBriefTopics.slice(0, 6), [])
  const [input, setInput] = useState(featuredSamples[0]?.inputText ?? "")
  const [category, setCategory] = useState<string>(featuredSamples[0]?.category ?? categories[0])
  const [tone, setTone] = useState<string>(featuredSamples[0]?.recommendedTone ?? tones[0])
  const [result, setResult] = useState<StructuredBriefData>({
    sections: []
  })

  function runBrief() {
    setResult(
      generateDataTherapyBrief({
        input,
        category,
        tone
      })
    )
  }

  return (
    <MarketingShell
      eyebrow="App"
      title="Generate a DataTherapy Brief."
      description="Paste a fear-triggering thought, headline, or uncertainty and turn it into a structured interpretation."
    >
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
          <label className="block text-sm text-white/70">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="mt-3 min-h-[180px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
            placeholder="Paste a scary headline, fear, or spiraling thought..."
          />

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-white/70">Tone</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none"
              >
                {tones.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="button"
            onClick={runBrief}
            className="mt-6 rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            Generate brief
          </button>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Try a sample</h2>
              <Link href="/app/examples" className="text-sm text-white/70 hover:text-white">
                View examples
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3">
              {featuredSamples.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => {
                    setInput(sample.inputText)
                    setCategory(sample.category)
                    setTone(sample.recommendedTone)
                    setResult(
                      generateDataTherapyBrief({
                        input: sample.inputText,
                        category: sample.category,
                        tone: sample.recommendedTone
                      })
                    )
                  }}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left transition hover:bg-white/10"
                >
                  <p className="text-sm text-white/85">{sample.title}</p>
                  <p className="mt-2 text-xs text-white/55">{sample.shortDescription}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
          <StructuredBrief brief={result} />
        </div>
      </section>
    </MarketingShell>
  )
}
