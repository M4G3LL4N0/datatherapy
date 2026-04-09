import { MarketingShell } from '@/components/MarketingShell'
import { StructuredBrief } from '@/components/StructuredBrief'

export default function BriefPage() {
  return (
    <MarketingShell
      title="DataTherapy Brief"
      subtitle="Transform uncertainty into clarity"
      description="Enter your concern or question to receive a structured DataTherapy Brief with severity assessment, grounding context, and action steps."
      tag="DataTherapy • Brief"
    >
      <form className="mt-8 space-y-4">
        <div>
          <label htmlFor="concern" className="block text-sm font-medium text-white/80">
            What's concerning you?
          </label>
          <textarea
            id="concern"
            name="concern"
            rows={4}
            className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 p-3 text-sm text-white focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="E.g. 'I'm worried about job security due to the economic downturn...'"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="urgent"
              name="urgent"
              type="checkbox"
              className="h-4 w-4 rounded border-white/15 bg-white/5 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="urgent" className="ml-2 block text-sm text-white/80">
              This is urgent
            </label>
          </div>
          <button
            type="submit"
            className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Generate Brief
          </button>
        </div>
      </form>

      <div className="mt-12 border-t border-white/15 pt-12">
        <h3 className="text-lg font-semibold">Example Brief</h3>
        <p className="mt-1 text-sm text-white/60">This demonstrates what your personalized brief will look like</p>
        <StructuredBrief sections={[
          {
            title: "Current Situation",
            content: "You're feeling overwhelmed by recent news about economic uncertainty and potential layoffs.",
            severity: 8
          },
          {
            title: "Key Facts",
            content: "The current economic indicators show a 30% chance of recession. Your company has stable cash reserves but is implementing cost-cutting measures."
          },
          {
            title: "Recommended Actions",
            content: "1. Review your emergency fund\n2. Update your resume\n3. Schedule a career development discussion with your manager",
            severity: 6
          },
          {
            title: "Long-term Perspective",
            content: "Economic cycles are normal. Focus on building transferable skills and maintaining professional relationships.",
            severity: 4
          }
        ]} />
      </div>
    </MarketingShell>
  )
}
