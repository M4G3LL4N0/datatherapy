"use client"

import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"
import { fearCategories } from "@/data/fearCategories"
import { sampleBriefTopics } from "@/data/sampleBriefTopics"

export default function FearLibraryPage() {
  return (
    <MarketingShell
      eyebrow="Fear Library"
      title="Recurring fears, organized into structure."
      description="DataTherapy classifies fear by underlying pattern, not just headline. The topics change over time. The fear mechanisms repeat."
    >
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {fearCategories.map((category) => {
          const matches = sampleBriefTopics.filter((item) => item.fearPillar === category.slug).slice(0, 3)

          return (
            <div key={category.slug} className="rounded-3xl border border-white/15 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <p className="mt-3 text-white/70">{category.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.mechanisms.map((mechanism) => (
                  <span
                    key={mechanism}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/65"
                  >
                    {mechanism}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {matches.map((item) => (
                  <Link
                    key={item.id}
                    href="/sample-brief"
                    className="block rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/10"
                  >
                    <p className="text-sm text-white/85">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </MarketingShell>
  )
}
