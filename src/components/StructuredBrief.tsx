import { cn } from "@/app/lib/utils"
import Link from "next/link"
import type {
  BriefItem,
  BriefSection,
  BriefScoreBlock,
  StructuredBriefData,
} from "@/types/structured-brief"

export type {
  BriefItem,
  BriefSection,
  StructuredBriefData,
} from "@/types/structured-brief"

function normalizeScore(
  raw: number | BriefScoreBlock | undefined
): { value: number; label?: string } | null {
  if (raw === undefined || raw === null) return null
  if (typeof raw === "number") return { value: raw }
  if (typeof raw === "object" && "value" in raw && typeof raw.value === "number") {
    return { value: raw.value, label: raw.label }
  }
  return null
}

function itemSeverityValue(item: BriefItem): number | null {
  const s = item.severity
  if (s === undefined) return null
  if (typeof s === "number") return s
  if (typeof s === "object" && s && "level" in s && typeof s.level === "number") return s.level
  return null
}

function sectionSeverityValue(section: BriefSection): number | null {
  const s = section.severity
  if (s === undefined) return null
  if (typeof s === "number") return s
  if (typeof s === "object" && s && "level" in s && typeof s.level === "number") return s.level
  return null
}

function renderContent(content: string | string[]) {
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {content.map((point, i) => (
          <li key={i} className="text-sm text-white/80">
            {point}
          </li>
        ))}
      </ul>
    )
  }
  if (content.includes("\n") && content.split("\n").length > 1) {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {content
          .split("\n")
          .map((p) => p.trim())
          .filter(Boolean)
          .map((point, i) => (
            <li key={i} className="text-sm text-white/80">
              {point}
            </li>
          ))}
      </ul>
    )
  }
  return <p className="text-sm text-white/80">{content}</p>
}

function ScoreCard({
  label,
  score,
}: {
  label: string
  score: { value: number; label?: string } | null
}) {
  if (!score) return null
  const v = score.value
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/45">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{Math.round(v)}</p>
      {score.label ? <p className="mt-1 text-xs text-white/55">{score.label}</p> : null}
    </div>
  )
}

function EngineBrief({ data }: { data: StructuredBriefData }) {
  const s = normalizeScore(data.seriousness as number | BriefScoreBlock | undefined)
  const r = normalizeScore(data.personalRelevance as number | BriefScoreBlock | undefined)
  const u = normalizeScore(data.urgency as number | BriefScoreBlock | undefined)
  const c = normalizeScore(data.certainty as number | BriefScoreBlock | undefined)

  const hasEngine = !!(
    data.summary ||
    s ||
    r ||
    u ||
    c ||
    data.signalSummary ||
    data.topRiskInterpretation ||
    data.likely ||
    data.possible ||
    data.unlikely ||
    data.mythVsReality ||
    data.whatThisMeans ||
    (data.actionSteps && data.actionSteps.length) ||
    data.groundingExplanation ||
    data.confidenceNote
  )

  if (!hasEngine) return null

  return (
    <div className="space-y-6">
      {data.summary ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Signal summary</p>
          <p className="mt-3 text-sm leading-7 text-white/80">{String(data.summary)}</p>
        </div>
      ) : null}

      {(s || r || u || c) && (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <ScoreCard label="Seriousness" score={s} />
          <ScoreCard label="Relevance" score={r} />
          <ScoreCard label="Urgency" score={u} />
          <ScoreCard label="Certainty" score={c} />
        </div>
      )}

      {data.signalSummary ? (
        <p className="text-sm leading-7 text-white/70">{data.signalSummary}</p>
      ) : null}

      {data.topRiskInterpretation ? (
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Top risk read</p>
          <p className="mt-2 text-sm text-white/80">{data.topRiskInterpretation}</p>
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-3">
        {data.likely ? (
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-medium text-white/55">Likely</p>
            <p className="mt-2 text-sm text-white/75">{data.likely}</p>
          </div>
        ) : null}
        {data.possible ? (
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-medium text-white/55">Possible</p>
            <p className="mt-2 text-sm text-white/75">{data.possible}</p>
          </div>
        ) : null}
        {data.unlikely ? (
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-medium text-white/55">Unlikely</p>
            <p className="mt-2 text-sm text-white/75">{data.unlikely}</p>
          </div>
        ) : null}
      </div>

      {data.mythVsReality ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Myth vs reality</p>
          <p className="mt-3 text-sm text-white/75">{data.mythVsReality}</p>
        </div>
      ) : null}

      {data.whatThisMeans ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">What this means</p>
          <p className="mt-3 text-sm text-white/75">{data.whatThisMeans}</p>
        </div>
      ) : null}

      {data.actionSteps && data.actionSteps.length > 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Next steps</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-white/75">
            {data.actionSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {data.groundingExplanation ? (
        <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Grounding</p>
          <p className="mt-3 text-sm text-white/75">{data.groundingExplanation}</p>
        </div>
      ) : null}

      {data.confidenceNote ? (
        <p className="text-xs text-white/50">{data.confidenceNote}</p>
      ) : null}
    </div>
  )
}

function LegacyItemBlock({ item }: { item: BriefItem }) {
  const sev = itemSeverityValue(item)
  return (
    <div
      className={cn(
        "rounded-md p-3",
        item.type === "action"
          ? "border border-blue-500/20 bg-blue-500/10"
          : item.type === "insight"
            ? "border border-purple-500/20 bg-purple-500/10"
            : item.type === "threat"
              ? "border border-red-500/20 bg-red-500/10"
              : item.type === "pattern"
                ? "border border-yellow-500/20 bg-yellow-500/10"
                : item.type === "protection"
                  ? "border border-green-500/20 bg-green-500/10"
                  : item.type === "response"
                    ? "border border-indigo-500/20 bg-indigo-500/10"
                    : ""
      )}
    >
      {item.type === "list" ? (
        renderContent(typeof item.content === "string" ? item.content.split("\n") : item.content)
      ) : (
        renderContent(item.content)
      )}
      {sev !== null ? (
        <div className="mt-2 text-xs text-white/60">
          Concern level:{" "}
          <span
            className={cn(
              sev >= 7 ? "text-red-400" : sev >= 4 ? "text-yellow-400" : "text-green-400"
            )}
          >
            {sev}/10
          </span>
        </div>
      ) : null}
      {item.timeframe ? (
        <div className="mt-2 text-xs text-white/60">
          Timeframe: <span className="text-blue-400">{item.timeframe}</span>
        </div>
      ) : null}
      {(item.mediaImpact || item.cognitiveLoad || item.recurrenceFrequency) ? (
        <div className="mt-3 grid grid-cols-3 gap-2">
          {item.mediaImpact ? (
            <div>
              <div className="mb-1 text-xs text-white/60">Media impact</div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-purple-500"
                  style={{ width: `${item.mediaImpact * 10}%` }}
                />
              </div>
            </div>
          ) : null}
          {item.cognitiveLoad ? (
            <div>
              <div className="mb-1 text-xs text-white/60">Cognitive load</div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-blue-500"
                  style={{ width: `${item.cognitiveLoad * 10}%` }}
                />
              </div>
            </div>
          ) : null}
          {item.recurrenceFrequency ? (
            <div>
              <div className="mb-1 text-xs text-white/60">Recurrence</div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-yellow-500"
                  style={{ width: `${item.recurrenceFrequency * 10}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      {item.sources && item.sources.length > 0 ? (
        <div className="mt-3">
          <div className="mb-2 text-xs text-white/60">Sources</div>
          <div className="space-y-2">
            {item.sources.map((source, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    source.reliability === "high"
                      ? "bg-green-500"
                      : source.reliability === "medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  )}
                />
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white hover:underline"
                  >
                    {source.name}
                  </a>
                ) : (
                  <span className="text-white/70">{source.name}</span>
                )}
                {source.timestamp ? (
                  <span className="ml-auto text-white/50">{source.timestamp}</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {item.actions && item.actions.length > 0 ? (
        <div className="mt-3">
          <div className="mb-2 text-xs text-white/60">Next steps</div>
          <div className="space-y-2">
            {item.actions.map((action, i) => (
              <Link
                key={i}
                href={action.url}
                className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-sm",
                  action.priority === "critical"
                    ? "bg-red-500/10 hover:bg-red-500/15"
                    : action.priority === "high"
                      ? "bg-yellow-500/10 hover:bg-yellow-500/15"
                      : action.priority === "medium"
                        ? "bg-blue-500/10 hover:bg-blue-500/15"
                        : "bg-white/5 hover:bg-white/10"
                )}
              >
                {action.label}
                <span className="text-xs text-white/50">→</span>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      {item.metadata ? (
        <div className="mt-3 text-xs text-white/70">
          {item.metadata.analysisFramework ? (
            <div className="col-span-2">
              <span className="text-white/50">Analysis framework:</span>{" "}
              {item.metadata.analysisFramework}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

function LegacySections({ sections }: { sections: BriefSection[] }) {
  if (!sections.length) return null
  return (
    <div className="mt-6 space-y-6">
      {sections.map((section, index) => {
        const items = section.items ?? []
        const severities = items.map(itemSeverityValue).filter((n): n is number => n !== null)
        const secSev = sectionSeverityValue(section)
        const peak =
          secSev !== null
            ? secSev
            : severities.length
              ? Math.max(...severities)
              : null

        const title = section.title ?? section.label ?? `Section ${index + 1}`

        return (
          <div key={index} className="rounded-lg border border-white/15 p-6">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              {peak !== null && peak > 0 ? (
                <div
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all duration-200",
                    peak >= 7
                      ? "bg-red-500/10 text-red-400 hover:bg-red-500/15"
                      : peak >= 4
                        ? "bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/15"
                        : "bg-green-500/10 text-green-400 hover:bg-green-500/15"
                  )}
                >
                  Peak signal: {peak}/10
                </div>
              ) : null}
            </div>

            {section.content !== undefined ? (
              <div className="mt-4">{renderContent(section.content)}</div>
            ) : null}

            {section.relevance ? (
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-white/55 md:grid-cols-4">
                {section.relevance.personal !== undefined ? (
                  <span>Personal: {section.relevance.personal}</span>
                ) : null}
                {section.relevance.professional !== undefined ? (
                  <span>Professional: {section.relevance.professional}</span>
                ) : null}
                {section.relevance.local !== undefined ? (
                  <span>Local: {section.relevance.local}</span>
                ) : null}
                {section.relevance.global !== undefined ? (
                  <span>Global: {section.relevance.global}</span>
                ) : null}
              </div>
            ) : null}

            {section.urgency ? (
              <p className="mt-2 text-xs text-white/55">Urgency: {section.urgency}</p>
            ) : null}

            {items.length > 0 ? (
              <div className="mt-4 space-y-4">
                {items.map((item, itemIndex) => (
                  <LegacyItemBlock key={itemIndex} item={item} />
                ))}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

type StructuredBriefProps = {
  brief?: StructuredBriefData
  data?: StructuredBriefData
  sections?: BriefSection[]
  className?: string
}

function StructuredBriefComponent({
  brief,
  data,
  sections: sectionsProp,
  className,
}: StructuredBriefProps) {
  const briefData = { ...(brief || data || {}) } as StructuredBriefData
  if (sectionsProp && sectionsProp.length) {
    briefData.sections = sectionsProp
  }

  if (
    !briefData ||
    (Object.keys(briefData).length === 0 &&
      !(briefData.sections && briefData.sections.length))
  ) {
    return null
  }

  const sectionList = Array.isArray(briefData.sections) ? briefData.sections : []

  return (
    <div className={cn("mt-6 space-y-8", className)}>
      <EngineBrief data={briefData} />
      <LegacySections sections={sectionList} />
    </div>
  )
}

export { StructuredBriefComponent as StructuredBrief }
export { StructuredBriefComponent }
export default StructuredBriefComponent
