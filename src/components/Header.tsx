"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const mobileLinks = [
  { href: "/fear-library", label: "Fear library" },
  { href: "/fear-categories", label: "Fear categories" },
  { href: "/media-analysis", label: "Media signal framing" },
  { href: "/trend-analysis", label: "Trend language" },
  { href: "/interpretation-guide", label: "Interpretation guide" },
  { href: "/sample-brief", label: "Sample briefs" },
  { href: "/brief", label: "Brief form" },
  { href: "/impact-assessment", label: "Impact framing" },
  { href: "/cognitive-load", label: "Cognitive load" },
  { href: "/response-framework/immediate", label: "Response — immediate" },
  { href: "/response-framework/short-term", label: "Response — short-term" },
  { href: "/response-framework/long-term", label: "Response — long-term" },
  { href: "/pricing", label: "Pricing" },
  { href: "/app", label: "Try now" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#0a0a0a]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
            DataTherapy
          </Link>
          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-sm font-medium text-white/80">
            MVP
          </span>
        </div>

        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          <div className="group relative">
            <Link href="/fear-library" className="hover:text-white/80">
              Explore
            </Link>
            <div className="absolute top-full left-1/2 mt-2 hidden w-56 -translate-x-1/2 rounded-lg border border-white/15 bg-[#0a0a0a] p-2 group-hover:block">
              <div className="px-3 py-2 text-sm text-white/50">Library</div>
              <Link href="/fear-library" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Fear library
              </Link>
              <Link href="/fear-categories" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                Fear categories
              </Link>
              <Link href="/media-analysis" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Media signal framing
              </Link>
              <Link href="/trend-analysis" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Trend language
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="/interpretation-guide" className="hover:text-white/80">
              Interpret
            </Link>
            <div className="absolute top-full left-1/2 mt-2 hidden w-56 -translate-x-1/2 rounded-lg border border-white/15 bg-[#0a0a0a] p-2 group-hover:block">
              <Link href="/interpretation-guide" className="block px-3 py-2 text-sm hover:bg-white/5">
                Interpretation guide
              </Link>
              <Link href="/sample-brief" className="block px-3 py-2 text-sm hover:bg-white/5">
                Sample briefs
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="/brief" className="hover:text-white/80">
              Brief
            </Link>
            <div className="absolute top-full left-1/2 mt-2 hidden w-56 -translate-x-1/2 rounded-lg border border-white/15 bg-[#0a0a0a] p-2 group-hover:block">
              <Link href="/brief" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                Brief form
              </Link>
              <Link href="/impact-assessment" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Impact framing
              </Link>
              <Link href="/cognitive-load" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-purple-500" />
                Cognitive load
              </Link>
            </div>
          </div>
          <div className="group relative">
            <Link href="/response-framework" className="hover:text-white/80">
              Respond
            </Link>
            <div className="absolute top-full left-1/2 mt-2 hidden w-56 -translate-x-1/2 rounded-lg border border-white/15 bg-[#0a0a0a] p-2 group-hover:block">
              <div className="px-3 py-2 text-sm text-white/50">Pacing</div>
              <Link href="/response-framework/immediate" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Immediate
              </Link>
              <Link href="/response-framework/short-term" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                Short-term
              </Link>
              <Link href="/response-framework/long-term" className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Long-term
              </Link>
            </div>
          </div>
          <Link href="/pricing" className="hover:text-white/80">
            Pricing
          </Link>
          <Link href="/app" className="rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
            Try now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link href="/app" className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium" onClick={() => setOpen(false)}>
            Try now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white"
            aria-expanded={open}
            aria-controls="datatherapy-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <nav
          id="datatherapy-mobile-nav"
          className="mx-auto flex max-h-[70vh] max-w-6xl flex-col gap-1 overflow-y-auto border-t border-white/10 px-4 sm:px-6 py-3 sm:py-4 md:hidden"
          aria-label="Mobile"
        >
          <p className="px-3 py-1 text-sm uppercase tracking-wide text-white/40">Informational tools — not clinical advice</p>
          {mobileLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2.5 text-sm text-white/85 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
