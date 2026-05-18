import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from '@/components/MarketingShell'

export default function ImpactAssessment() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title="Impact Assessment"
      subtitle="Projecting threat consequences"
      description="Quantitative models to evaluate potential damage across multiple dimensions."
      tag="DataTherapy • Threat Assessment"
    >
      <div className="prose prose-invert max-w-none">
        <h3>Assessment Dimensions</h3>
        <ul>
          <li>Financial impact projections</li>
          <li>Reputational risk scoring</li>
          <li>Operational disruption estimates</li>
          <li>Psychological impact modeling</li>
        </ul>
      </div>
    </MarketingShell>
  </>
  )
}
