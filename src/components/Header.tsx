import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0a0a0a]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold">
            DataTherapy
          </Link>
          <span className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-2.5 py-1 text-xs font-medium text-white shadow-[0_0_8px_rgba(37,99,235,0.3)]">
            Enterprise
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm font-medium">
          <div className="relative group">
            <Link href="/threat-identification" className="hover:text-white/80">
              Identify
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <Link href="/threat-patterns" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Pattern Library
              </Link>
              <Link href="/media-analysis" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Media Signals
              </Link>
              <Link href="/trend-analysis" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Trend Detection
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/threat-assessment" className="hover:text-white/80">
              Assess
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <Link href="/sample-brief" className="block px-3 py-2 text-sm hover:bg-white/5">
                Severity Analysis
              </Link>
              <Link href="/impact-assessment" className="block px-3 py-2 text-sm hover:bg-white/5">
                Impact Projections
              </Link>
              <Link href="/cognitive-load" className="block px-3 py-2 text-sm hover:bg-white/5">
                Cognitive Impact
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/response-framework" className="hover:text-white/80">
              Respond
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <div className="px-3 py-2 text-xs text-white/50">Timeframe:</div>
              <Link href="/response-framework/immediate" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Immediate (0-72h)
              </Link>
              <Link href="/response-framework/short-term" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Short-term (72h-2w)
              </Link>
              <Link href="/response-framework/long-term" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Long-term (2w+)
              </Link>
            </div>
          </div>
          <Link href="/pricing" className="hover:text-white/80">
            Pricing
          </Link>
          <Link href="/app" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
            Try Now
          </Link>
        </div>
      </nav>
    </header>
  )
}
