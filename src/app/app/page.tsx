'use client'

import { MarketingShell } from '@/components/MarketingShell'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function AppPage() {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
    redirect('/')
  }

  return (
    <MarketingShell
      title="Your Dashboard"
      subtitle="Premium DataTherapy Experience"
      description="Access your saved briefs, analytics, and premium tools."
      tag="DataTherapy • App"
    >
      <div className="mt-8 rounded-xl border border-white/15 p-6 bg-gradient-to-b from-white/5 to-white/[0.01]">
        <h3 className="text-xl font-semibold">Premium Features</h3>
        <ul className="mt-4 space-y-4 text-sm">
          <li className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs">✓</span>
            <span>Saved Brief History</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs">✓</span>
            <span>Priority Processing</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs">✓</span>
            <span>Advanced Analytics</span>
          </li>
        </ul>
      </div>

      {status === 'authenticated' && (
        <div className="mt-8">
          <p className="text-sm text-white/80">Welcome back, {session.user?.name}</p>
        </div>
      )}
    </MarketingShell>
  )
}
