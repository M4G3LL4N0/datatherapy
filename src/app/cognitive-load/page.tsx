import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from '@/components/MarketingShell'

export default function CognitiveLoad() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title="Cognitive Impact Assessment"
      subtitle="Measuring mental strain patterns"
      description="Tools to evaluate and predict the psychological impact of threat patterns."
      tag="DataTherapy • Threat Assessment"
    >
      <div className="prose prose-invert max-w-none">
        <h3>Key Metrics</h3>
        <ul>
          <li>Attention drain measurement</li>
          <li>Decision fatigue tracking</li>
          <li>Anxiety level projections</li>
          <li>Recovery time estimates</li>
        </ul>
      </div>
    </MarketingShell>
  </>
  )
}
