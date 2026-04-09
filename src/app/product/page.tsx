import { MarketingShell } from '@/components/MarketingShell'

export default function Product() {
  return (
    <MarketingShell
      title="DataTherapy Briefs"
      subtitle="Transform uncertainty into structured understanding"
      description="Our AI-powered technology analyzes complex situations to deliver clarity and actionable recommendations instantly."
      tag="DataTherapy • Product"
    >
      <div className="mt-12 rounded-xl border border-white/15 p-6 bg-gradient-to-b from-white/5 to-white/[0.01]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Purpose-Built For</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">1</span>
                <span>Enterprise Risk Teams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">2</span>
                <span>Government Analysts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-xs">3</span>
                <span>Decision Makers</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Key Benefits</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Reduce analysis time by 80%</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Standardized severity scoring</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-400">✓</span>
                <span>Enterprise-grade security</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors">
            Request Enterprise Demo
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold">See It In Action</h3>
        <div className="mt-8 flex overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex space-x-4 snap-x snap-mandatory">
            <div className="w-[300px] flex-shrink-0 snap-start rounded-lg border border-white/15 p-6">
              <h4 className="font-medium">Crisis Analysis</h4>
              <p className="mt-2 text-sm text-white/80">Real-time geopolitical event breakdown with impact assessment</p>
              <div className="mt-4 text-xs text-white/50">
                <span className="font-medium">Key Features:</span>
                <ul className="mt-1 space-y-1">
                  <li>• Real-time event tracking</li>
                  <li>• Impact probability scoring</li>
                  <li>• Stakeholder analysis</li>
                </ul>
              </div>
            </div>
            <div className="w-[300px] flex-shrink-0 snap-start rounded-lg border border-white/15 p-6">
              <h4 className="font-medium">Market Shifts</h4>
              <p className="mt-2 text-sm text-white/80">Structured analysis of emerging market trends</p>
              <div className="mt-4 text-xs text-white/50">
                <span className="font-medium">Key Features:</span>
                <ul className="mt-1 space-y-1">
                  <li>• Trend identification</li>
                  <li>• Market impact forecasting</li>
                  <li>• Competitive analysis</li>
                </ul>
              </div>
            </div>
            <div className="w-[300px] flex-shrink-0 snap-start rounded-lg border border-white/15 p-6">
              <h4 className="font-medium">Organizational Risk</h4>
              <p className="mt-2 text-sm text-white/80">Internal risk factors with mitigation strategies</p>
              <div className="mt-4 text-xs text-white/50">
                <span className="font-medium">Key Features:</span>
                <ul className="mt-1 space-y-1">
                  <li>• Risk factor identification</li>
                  <li>• Mitigation planning</li>
                  <li>• Scenario modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Technical Specifications</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-white/15 p-6">
            <h4 className="font-medium">AI Architecture</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li>• Multi-model ensemble</li>
              <li>• Real-time data processing</li>
              <li>• Contextual understanding</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/15 p-6">
            <h4 className="font-medium">Security</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li>• SOC 2 Type II certified</li>
              <li>• End-to-end encryption</li>
              <li>• Role-based access control</li>
            </ul>
          </div>
          <div className="rounded-lg border border-white/15 p-6">
            <h4 className="font-medium">Performance</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/80">
              <li>• 99.9% uptime SLA</li>
              <li>• Sub-second response times</li>
              <li>• Scalable infrastructure</li>
            </ul>
          </div>
        </div>
      </div>
    </MarketingShell>
  )
}
