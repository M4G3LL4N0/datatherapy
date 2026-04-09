import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <Link href="/product" className="text-sm text-white/70 hover:text-white">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-white/70 hover:text-white">
              Pricing
            </Link>
            <Link href="/app" className="text-sm text-white/70 hover:text-white">
              Try Now
            </Link>
            <Link href="/technology" className="text-sm text-white/70 hover:text-white">
              Technology
            </Link>
            <Link href="/integrations" className="text-sm text-white/70 hover:text-white">
              Integrations
            </Link>
            <Link href="/roadmap" className="text-sm text-white/70 hover:text-white">
              Roadmap
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <Link href="/about" className="text-sm text-white/70 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="text-sm text-white/70 hover:text-white">
              Contact
            </Link>
            <Link href="/investors" className="text-sm text-white/70 hover:text-white">
              Investors
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Clarity Tools</h3>
            <Link href="/fear-index" className="text-sm text-white/70 hover:text-white">
              Current Threat Index
            </Link>
            <Link href="/protection-patterns" className="text-sm text-white/70 hover:text-white">
              Protection Frameworks
            </Link>
            <Link href="/media-amplification" className="text-sm text-white/70 hover:text-white">
              Media Influence Analysis 
            </Link>
            <Link href="/technology" className="text-sm text-white/70 hover:text-white">
              Technology
            </Link>
            <Link href="/sample-brief" className="text-sm text-white/70 hover:text-white">
              Sample Brief
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-white">
              Terms
            </Link>
          </div>
        </div>
        <div className="border-t border-white/15 pt-8 text-center text-sm text-white/50">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-6">
              <span className="text-xs font-medium text-white/50">Trusted by:</span>
              <div className="flex items-center gap-4 opacity-70">
                <span>Fortune 100</span>
                <span>•</span>
                <span>Government</span>
                <span>•</span>
                <span>Global 2000</span>
              </div>
            </div>
            <div className="text-xs text-white/50">
              © {new Date().getFullYear()} DataTherapy, Inc. All rights reserved.<br />
              DataTherapy® is a registered trademark of DataTherapy, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
