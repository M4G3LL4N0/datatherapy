import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from "@/components/MarketingShell"

export default function TermsPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="Terms"
      title="Terms (MVP placeholder)."
      description="Use of this demo site is at your own risk. Nothing here is professional advice. Replace this stub with counsel-reviewed terms before broad distribution."
      tag="DataTherapy • Terms"
    >
      <div className="mt-10 space-y-6 text-sm leading-7 text-white/70">
        <p>
          DataTherapy provides educational framing and structured interpretation. It is not therapy, not a crisis service,
          and not a substitute for qualified professionals.
        </p>
        <p>
          Scores and briefs are heuristic outputs meant to support calmer thinking, not definitive predictions or
          instructions for high-stakes decisions.
        </p>
      </div>
    </MarketingShell>
  </>
  )
}
