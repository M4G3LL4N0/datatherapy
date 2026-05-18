import { SubpageVisual } from "@/components/SubpageVisual";
import { fearCategories } from "@/data/fearCategories"
import { MarketingShell } from "@/components/MarketingShell"
import Link from "next/link"

export default function FearCategoriesPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title="Fear categories"
      subtitle="Recurring patterns, not just headlines"
      description="DataTherapy organizes fear intelligence by mechanisms that repeat across news cycles—so interpretation stays steady when headlines change."
      tag="DataTherapy • Fear categories"
    >
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fearCategories.map((category) => (
          <Link
            key={category.id}
            href={`/fear-categories/${category.slug}`}
            className="rounded-lg border border-white/15 p-6 transition-colors hover:bg-white/5"
          >
            <h3 className="text-lg font-medium">{category.name}</h3>
            <p className="mt-2 text-sm text-white/70">{category.description}</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-red-400">
                Signal range: {category.severityRange[0]}-{category.severityRange[1]}/10
              </span>
              <span className="text-white/50">{category.recurrencePatterns.length} recurrence cues</span>
            </div>
          </Link>
        ))}
      </div>
    </MarketingShell>
  </>
  )
}
