'use client'

import { MarketingShell } from '@/components/MarketingShell'
import { StructuredBrief } from '@/components/StructuredBrief'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function AppPage() {
  const { data: session, status } = useSession()
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [brief, setBrief] = useState<{
    sections: Array<{
      title: string
      content: string
      severity?: number
    }>
  } | null>(null)

  if (status === 'unauthenticated') {
    redirect('/')
  }

  const handleGenerateBrief = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    
    // Simulate API call
    setTimeout(() => {
      setBrief({
        sections: [
          {
            title: "Situation Analysis",
            content: input || "The user is experiencing uncertainty about a complex situation that requires structured analysis.",
            severity: 6
          },
          {
            title: "Key Factors",
            content: "1. Multiple variables at play\n2. Emotional component present\n3. Time-sensitive considerations"
          },
          {
            title: "Recommended Actions",
            content: "1. Break down into smaller components\n2. Prioritize based on impact\n3. Create timeline for resolution",
            severity: 5
          },
          {
            title: "Long-term Perspective",
            content: "This situation is part of a larger pattern that can be addressed systematically.",
            severity: 4
          }
        ]
      })
      setIsGenerating(false)
    }, 1500)
  }

  return (
    <MarketingShell
      title="DataTherapy Brief"
      subtitle="Transform uncertainty into clarity"
      description="Enter your concern or question to receive a structured DataTherapy Brief with severity scoring and actionable insights."
      tag="DataTherapy • App"
    >
      <form onSubmit={handleGenerateBrief} className="mt-8 space-y-4">
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            disabled={isGenerating}
            className="rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate Brief'}
          </button>
        </div>
      </form>

      {isGenerating && (
        <div className="mt-8 rounded-lg border border-white/15 p-6">
          <div className="flex items-center space-x-2 text-sm text-white/80">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            <span>Analyzing your input...</span>
          </div>
        </div>
      )}

      {brief && (
        <div className="mt-8 border-t border-white/15 pt-8">
          <h3 className="text-xl font-semibold">Your DataTherapy Brief</h3>
          <StructuredBrief sections={brief.sections} />
        </div>
      )}

      <div className="mt-12 border-t border-white/15 pt-12">
        <h3 className="text-xl font-semibold">Recent Briefs</h3>
        <div className="mt-4 grid grid-cols-1 gap-4">
          <div className="rounded-lg border border-white/15 p-4 hover:bg-white/5 transition-colors">
            <h4 className="font-medium">Career Transition Analysis</h4>
            <p className="mt-1 text-sm text-white/80">Generated 2 days ago</p>
          </div>
          <div className="rounded-lg border border-white/15 p-4 hover:bg-white/5 transition-colors">
            <h4 className="font-medium">Market Risk Assessment</h4>
            <p className="mt-1 text-sm text-white/80">Generated 1 week ago</p>
          </div>
        </div>
      </div>
    </MarketingShell>
  )
}
