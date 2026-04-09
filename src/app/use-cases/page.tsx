import { MarketingShell } from '@/components/MarketingShell'

export default function UseCases() {
  return (
    <MarketingShell
      title="Use Cases"
      subtitle="Where DataTherapy makes a difference"
      description="From personal anxieties to global events, DataTherapy helps provide clarity and structure to complex situations."
      tag="DataTherapy • Use Cases"
    >
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Crisis Management</h3>
          <p className="mt-2 text-sm text-white/80">
            Real-time analysis of geopolitical events with impact assessment
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              +80% faster analysis
            </div>
            <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              95% accuracy
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Market Intelligence</h3>
          <p className="mt-2 text-sm text-white/80">
            Structured analysis of emerging market trends and shifts
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              60% time saved
            </div>
            <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              90% consistency
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Organizational Risk</h3>
          <p className="mt-2 text-sm text-white/80">
            Identification and mitigation of internal risk factors
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              70% faster audits
            </div>
            <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
              85% coverage
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">How It Works</h3>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
              1
            </div>
            <h4 className="mt-4 font-medium">Input Concern</h4>
            <p className="mt-2 text-sm text-white/80">Describe your situation or paste relevant information</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
              2
            </div>
            <h4 className="mt-4 font-medium">AI Analysis</h4>
            <p className="mt-2 text-sm text-white/80">Our system processes and structures the information</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-medium">
              3
            </div>
            <h4 className="mt-4 font-medium">Receive Brief</h4>
            <p className="mt-2 text-sm text-white/80">Get a structured report with insights and actions</p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Customer Success Stories</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/15 p-6">
            <h4 className="font-medium">Global Bank</h4>
            <p className="mt-2 text-sm text-white/80">
              "Reduced risk assessment time by 65% while improving accuracy by 40%"
            </p>
            <div className="mt-4 text-xs text-blue-400">Read Case Study →</div>
          </div>
          <div className="rounded-lg border border-white/15 p-6">
            <h4 className="font-medium">Healthcare Network</h4>
            <p className="mt-2 text-sm text-white/80">
              "Improved decision speed while maintaining 99.7% consistency across teams"
            </p>
            <div className="mt-4 text-xs text-blue-400">Read Case Study →</div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade at any time."
            },
            {
              question: "Is there a free trial?",
              answer: "The Professional plan includes a 14-day free trial."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards and enterprise invoicing."
            },
            {
              question: "How is billing handled?",
              answer: "Plans are billed monthly or annually with a discount."
            }
          ].map((faq, i) => (
            <div key={i} className="rounded-lg border border-white/15 p-6">
              <h4 className="font-medium">{faq.question}</h4>
              <p className="mt-2 text-sm text-white/80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">What Our Customers Say</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/15 p-6">
            <p className="text-sm text-white/80">
              "The Professional plan paid for itself within weeks by saving our team hours of analysis time."
            </p>
            <div className="mt-4 text-sm font-medium">- Startup Founder</div>
          </div>
          <div className="rounded-lg border border-white/15 p-6">
            <p className="text-sm text-white/80">
              "The Enterprise plan's custom models have transformed how we assess risk across our organization."
            </p>
            <div className="mt-4 text-sm font-medium">- Fortune 500 Executive</div>
          </div>
        </div>
      </div>
    </MarketingShell>
  )
}
