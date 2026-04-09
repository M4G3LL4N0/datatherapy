import { MarketingShell } from '@/components/MarketingShell'

const interpretationPrinciples = [
  {
    title: "Separate Signal from Noise",
    description: "Identify the core facts versus emotional reactions",
    examples: [
      "Focus on verified data points",
      "Note emotional language in reporting"
    ]
  },
  {
    title: "Assess Temporal Patterns",
    description: "Determine if this is new or recurring",
    examples: [
      "Check historical precedents",
      "Note duration of the situation"
    ]
  },
  {
    title: "Quantify Impact",
    description: "Measure actual versus perceived effects",
    examples: [
      "Use severity scales",
      "Compare to similar past events"
    ]
  },
  {
    title: "Identify Stakeholders",
    description: "Determine who is truly affected",
    examples: [
      "Map direct vs indirect impact",
      "Assess geographic concentration"
    ]
  },
  {
    title: "Track Media Amplification",
    description: "Monitor how coverage affects perception",
    examples: [
      "Note sensationalist language",
      "Compare multiple sources"
    ]
  },
  {
    title: "Establish Response Frameworks",
    description: "Create structured action plans",
    examples: [
      "Define decision thresholds",
      "Prepare contingency options"
    ]
  }
]

export default function InterpretationGuide() {
  return (
    <MarketingShell
      title="How to Interpret Fear Patterns"
      subtitle="DataTherapy's Framework for Clear Thinking"
      description="Systematic approaches to transform anxiety into actionable understanding."
      tag="DataTherapy • Interpretation Guide"
    >
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interpretationPrinciples.map((principle, i) => (
          <div key={i} className="rounded-lg border border-white/15 p-6 hover:bg-white/5 transition-colors">
            <h3 className="font-medium">{principle.title}</h3>
            <p className="mt-2 text-sm text-white/80">{principle.description}</p>
            <div className="mt-4">
              <h4 className="text-xs font-medium text-white/60 mb-1">Examples:</h4>
              <ul className="text-xs text-white/70 space-y-1">
                {principle.examples.map((example, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </MarketingShell>
  )
}
