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
          <Link href="/product" className="hover:text-white/80">
            Product
          </Link>
          <Link href="/use-cases" className="hover:text-white/80">
            Use Cases
          </Link>
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
