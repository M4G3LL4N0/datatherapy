import { MarketingShell } from '@/components/MarketingShell'

export default function Contact() {
  return (
    <MarketingShell
      title="Fear Response Protocol"
      subtitle="Systematize your defense against recurring threats"
      description="Our threat pattern analysts specialize in decoding media-amplified risks and building durable protection frameworks against the most persistent fear categories."
      tag="DataTherapy • Contact Us"
    >
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-white/15 p-6 hover:bg-white/5 transition-colors">
          <h3 className="text-lg font-semibold">Threat Response</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-red-400">⚠️</span>
              <a href="mailto:urgent@datatherapy.ai" className="hover:underline">
                Immediate Threat Support
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">✉️</span>
              <a href="mailto:hello@datatherapy.ai" className="hover:underline">
                General Inquiries
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">💼</span>
              <a href="mailto:sales@datatherapy.ai" className="hover:underline">
                Enterprise Sales
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">🤝</span>
              <a href="mailto:partners@datatherapy.ai" className="hover:underline">
                Partnerships
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">📰</span>
              <a href="mailto:press@datatherapy.ai" className="hover:underline">
                Press Inquiries
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">🔒</span>
              <a href="mailto:security@datatherapy.ai" className="hover:underline">
                Security Concerns
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Office Locations</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-400">📍</span>
              <div>
                <p className="font-medium">San Francisco (HQ)</p>
                <p className="text-white/80">123 AI Street, Suite 100</p>
                <p className="text-xs text-white/60 mt-1">Mon-Fri, 9AM-5PM PT</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400">📍</span>
              <div>
                <p className="font-medium">New York</p>
                <p className="text-white/80">456 Data Avenue, Floor 5</p>
                <p className="text-xs text-white/60 mt-1">Mon-Fri, 9AM-5PM ET</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/15 p-6">
          <h3 className="text-lg font-semibold">Connect With Us</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="text-blue-400">🐦</span>
              <a href="https://twitter.com/datatherapy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter / X
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">💼</span>
              <a href="https://linkedin.com/company/datatherapy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">📖</span>
              <a href="https://github.com/datatherapy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400">📞</span>
              <span className="text-white/80">+1 (555) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              question: "What's the best way to reach support?",
              answer: "Email support@datatherapy.ai for fastest response."
            },
            {
              question: "Do you handle urgent requests?",
              answer: "Critical issues should be sent to security@datatherapy.ai"
            },
            {
              question: "Are you hiring?",
              answer: "Check our careers page for open positions."
            },
            {
              question: "How quickly do you respond?",
              answer: "Typically within 24-48 hours for non-urgent requests."
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
