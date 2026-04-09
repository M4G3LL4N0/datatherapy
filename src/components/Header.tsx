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
            <Link href="/threat-patterns" className="hover:text-white/80">
              Threat Patterns
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <Link href="/threat-patterns/economic" className="block px-3 py-2 text-sm hover:bg-white/5">
                Economic Risks
              </Link>
              <Link href="/threat-patterns/geopolitical" className="block px-3 py-2 text-sm hover:bg-white/5">
                Geopolitical Shifts
              </Link>
              <Link href="/threat-patterns/technological" className="block px-3 py-2 text-sm hover:bg-white/5">
                Tech Disruptions
              </Link>
              <Link href="/threat-patterns/environmental" className="block px-3 py-2 text-sm hover:bg-white/5">
                Climate Impacts
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/amplification-cycles" className="hover:text-white/80">
              Media Cycles
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <Link href="/amplification-cycles/trending" className="block px-3 py-2 text-sm hover:bg-white/5">
                Trending Topics
              </Link>
              <Link href="/amplification-cycles/virality" className="block px-3 py-2 text-sm hover:bg-white/5">
                Viral Patterns
              </Link>
              <Link href="/amplification-cycles/sentiment" className="block px-3 py-2 text-sm hover:bg-white/5">
                Sentiment Analysis
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="/response-framework" className="hover:text-white/80">
              Response Framework
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block bg-[#0a0a0a] border border-white/15 rounded-lg p-2 w-48">
              <Link href="/response-framework/immediate" className="block px-3 py-2 text-sm hover:bg-white/5">
                Immediate Actions
              </Link>
              <Link href="/response-framework/short-term" className="block px-3 py-2 text-sm hover:bg-white/5">
                Short-term Strategies
              </Link>
              <Link href="/response-framework/long-term" className="block px-3 py-2 text-sm hover:bg-white/5">
                Long-term Solutions
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
