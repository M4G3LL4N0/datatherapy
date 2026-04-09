import { fearPillars } from './fear-pillars/types'
import { MarketingShell } from '@/components/MarketingShell'
import Link from 'next/link'

export default function FearLibrary() {
  return (
    <MarketingShell
      title="Fear Pattern Library"
      subtitle="Comprehensive catalog of threat scenarios"
      description="Explore 50+ systematically analyzed fear patterns across all major risk categories."
      tag="DataTherapy • Fear Library"
    >
      <div className="mt-8 space-y-12">
        {fearPillars.map(pillar => (
          <div key={pillar.id} className="border-b border-white/15 pb-8 last:border-0">
            <h2 className="text-xl font-semibold">{pillar.name}</h2>
            <p className="mt-2 text-white/70">{pillar.description}</p>
            
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pillar.categories.map(category => (
                <div key={category.id} className="rounded-lg border border-white/15 p-6 hover:bg-white/5 transition-colors">
                  <h3 className="font-medium">{category.name}</h3>
                  <div className="mt-4 space-y-3">
                    {category.briefs.map(brief => (
                      <Link
                        key={brief.id}
                        href={`/sample-brief/${brief.id}`}
                        className="block text-sm text-white/80 hover:text-white hover:underline"
                      >
                        {brief.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MarketingShell>
  )
}
