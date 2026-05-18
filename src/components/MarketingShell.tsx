import { ReactNode } from 'react'

interface MarketingShellProps {
  title: string
  subtitle?: string
  description: string
  children?: ReactNode
  tag?: string
  eyebrow?: string
}

export function MarketingShell({
  title,
  subtitle,
  description,
  children,
  tag = 'DataTherapy',
  eyebrow,
}: MarketingShellProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24">
        {eyebrow && (
          <div className="mb-2 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white/80">
            {eyebrow}
          </div>
        )}
        <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
          {tag}
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
          {title}
          {subtitle ? <span className="block text-white/65">{subtitle}</span> : null}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
          {description}
        </p>
        {children}
      </section>
    </main>
  )
}
