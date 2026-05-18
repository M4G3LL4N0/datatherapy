import { SubpageVisual } from "@/components/SubpageVisual";
import Link from "next/link"
import { MarketingShell } from "@/components/MarketingShell"

const links = [
  { href: "/response-framework/immediate", label: "Immediate response", hint: "0–72h" },
  { href: "/response-framework/short-term", label: "Short-term mitigation", hint: "72h–2w" },
  { href: "/response-framework/long-term", label: "Long-term resilience", hint: "2w+" },
]

export default function ResponseFrameworkHubPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="Response framework"
      title="Pacing response after fear spikes."
      description="Use these pages as structured reflection prompts—not clinical protocols. They pair with a DataTherapy Brief to turn alarm into proportionate next steps."
      tag="DataTherapy • Response"
    >
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
          >
            <p className="text-xs text-white/50">{item.hint}</p>
            <p className="mt-3 text-lg font-semibold text-white">{item.label}</p>
            <p className="mt-4 text-sm text-white/55">Open pacing guide →</p>
          </Link>
        ))}
      </div>
    </MarketingShell>
  </>
  )
}
