import { SubpageVisual } from "@/components/SubpageVisual";
import { MarketingShell } from "@/components/MarketingShell"

export default function PrivacyPage() {
  return (
    <>
    <SubpageVisual variant="default" />
      <MarketingShell
      eyebrow="Privacy"
      title="Privacy stance (MVP)."
      description="The demo brief engine runs locally in the browser session. No accounts are required for the current experience. Review this page before any future analytics, auth, or data collection ships."
      tag="DataTherapy • Privacy"
    >
      <div className="mt-10 space-y-6 text-sm leading-7 text-white/70">
        <p>
          DataTherapy is built to prioritize clarity over data harvesting. This placeholder page exists so navigation does
          not break; a full privacy policy should be published before production marketing or sign-in flows.
        </p>
        <p>
          DataTherapy is not emergency support and does not provide medical, legal, or financial advice. If you are in
          immediate danger, contact emergency services or appropriate local crisis resources.
        </p>
      </div>
    </MarketingShell>
  </>
  )
}
