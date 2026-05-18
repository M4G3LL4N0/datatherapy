import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from '@/components/MarketingShell'

export default function MediaAnalysis() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      title="Media Amplification Analysis"
      subtitle="Understanding information cascades"
      description="Tools to track and analyze how media influences threat perception patterns."
      tag="DataTherapy • Media Analysis"
    >
      <div className="prose prose-invert max-w-none">
        <h3>Key Features</h3>
        <ul>
          <li>Viral pattern detection</li>
          <li>Sentiment tracking</li>
          <li>Source reliability scoring</li>
          <li>Amplification timeline visualization</li>
        </ul>
      </div>
    </MarketingShell>
  </>
  )
}
