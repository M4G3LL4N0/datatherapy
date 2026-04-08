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
            <h3 className="text-sm font-semibold">Resources</h3>
            <Link href="/use-cases" className="text-sm text-white/70 hover:text-white">
              Use Cases
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
          © {new Date().getFullYear()} DataTherapy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
