import { MarketingShell } from '@/components/MarketingShell'
import { StructuredBrief } from '@/components/StructuredBrief'
import { marketDipBrief } from './sample-briefs/market-dip'
import { geopoliticalTensionsBrief } from './sample-briefs/geopolitical-tensions'
import Link from 'next/link'

const sampleBriefs = [
  {
    id: 'market-dip',
    title: 'Market Volatility',
    description: 'Financial anxiety during market corrections',
    brief: marketDipBrief
  },
  {
    id: 'geopolitical-tensions',
    title: 'Geopolitical Tensions', 
    description: 'Assessing regional conflicts and global impact',
    brief: geopoliticalTensionsBrief
  }
]

export default function SampleBrief({ params }: { params: { id?: string } }) {
  const currentBrief = params.id 
    ? sampleBriefs.find(b => b.id === params.id)
    : sampleBriefs[0]

  return (
    <MarketingShell
      title={`Sample Brief: ${currentBrief?.title || ''}`}
      subtitle="Structured Analysis of Common Fears"
      description="See how DataTherapy transforms anxiety into actionable understanding."
      tag="DataTherapy • Sample Brief"
    >
      <div className="mt-8">
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {sampleBriefs.map(brief => (
            <Link
              key={brief.id}
              href={`/sample-brief/${brief.id}`}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                currentBrief?.id === brief.id
                  ? 'bg-white text-black'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {brief.title}
            </Link>
          ))}
        </div>
        
        {currentBrief && (
          <StructuredBrief items={currentBrief.brief} />
        )}
      </div>
    </MarketingShell>
  )
}
