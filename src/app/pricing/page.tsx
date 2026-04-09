import { MarketingShell } from '@/components/MarketingShell'

export default function Pricing() {
  return (
    <MarketingShell
      title="Pricing"
      subtitle="Simple plans for everyone"
      description="Choose the plan that fits your needs. Start with our free tier or unlock advanced features with our premium plans."
      tag="DataTherapy • Pricing"
    >
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Starter</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold">$0</span>
            <span className="text-sm text-white/60">/month</span>
          </div>
          <p className="mt-2 text-sm text-white/80">For individuals exploring DataTherapy</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> 5 briefs/month
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Basic severity scoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/60">✗</span> Priority processing
            </li>
          </ul>
          <button className="mt-8 w-full rounded-lg border border-white/15 py-2 text-sm font-medium hover:bg-white/5">
            Get Started
          </button>
        </div>

        <div className="rounded-xl border-2 border-blue-500/20 p-6 bg-gradient-to-b from-blue-500/10 to-transparent">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold">Professional</h3>
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
              Popular
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold">$49</span>
            <span className="text-sm text-white/60">/month</span>
          </div>
          <p className="mt-2 text-sm text-white/80">For serious individuals and small teams</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> 50 briefs/month
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Advanced severity scoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Priority processing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Action recommendations
            </li>
          </ul>
          <button className="mt-8 w-full rounded-lg bg-blue-500 py-2 text-sm font-medium text-white hover:bg-blue-600">
            Start Free Trial
          </button>
        </div>

        <div className="rounded-xl border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Enterprise</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold">Custom</span>
          </div>
          <p className="mt-2 text-sm text-white/80">For organizations needing scale</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Unlimited briefs
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Custom severity models
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Real-time processing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✓</span> Dedicated account manager
            </li>
          </ul>
          <button className="mt-8 w-full rounded-lg border border-white/15 py-2 text-sm font-medium hover:bg-white/5">
            Contact Sales
          </button>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Enterprise Add-ons</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {name: 'API Access', desc: 'Full programmatic integration'},
            {name: 'White-labeling', desc: 'Custom branding and domains'},
            {name: 'SLA Guarantees', desc: '99.99% uptime'},
            {name: 'On-premise', desc: 'Private cloud deployment'},
          ].map((addon, i) => (
            <div key={i} className="rounded-lg border border-white/15 p-4">
              <h4 className="font-medium">{addon.name}</h4>
              <p className="mt-2 text-sm text-white/80">{addon.desc}</p>
            </div>
          ))}
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
    </MarketingShell>
  )
}
