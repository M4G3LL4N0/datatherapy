/**
 * DataTherapy brief types: engine output (StructuredBriefData) plus legacy section arrays.
 */

export type BriefScoreBlock = {
  value: number
  label: string
}

export type BriefItem = {
  type?: "text" | "list" | "action" | "insight" | "threat" | "pattern" | "protection" | "response"
  content: string | string[]
  severity?: number | { level: number; rationale?: string }
  timeframe?: "immediate" | "short-term" | "long-term"
  mediaImpact?: number
  cognitiveLoad?: number
  recurrencePattern?: string
  recurrenceFrequency?: number
  confidence?: number
  mitigationLevel?: number
  detectionMethod?: "automated" | "manual" | "hybrid"
  analysisType?: "quantitative" | "qualitative" | "mixed"
  responseStatus?: "pending" | "active" | "completed"
  sources?: {
    name: string
    url?: string
    reliability?: "high" | "medium" | "low"
    timestamp?: string
  }[]
  metadata?: {
    firstObserved?: string
    lastObserved?: string
    peakIntensity?: number
    relatedPatterns?: string[]
    analysisFramework?: string
    responseEffectiveness?: number
  }
  actions?: {
    label: string
    url: string
    priority: "critical" | "high" | "medium" | "low"
    status?: "pending" | "in-progress" | "completed"
  }[]
}

export type BriefSection = {
  title?: string
  type?: string
  content?: string | string[]
  items?: BriefItem[]
  severity?: number | { level: number; rationale?: string }
  tone?: string
  label?: string
  confidence?: number
  relevance?: {
    personal?: number
    professional?: number
    local?: number
    global?: number
  }
  urgency?: string
  metadata?: Record<string, string | number | boolean | undefined>
}

/** Engine + optional legacy `sections` */
export type StructuredBriefData = {
  sections?: BriefSection[]
  summary?: string
  seriousness?: number | BriefScoreBlock
  personalRelevance?: number | BriefScoreBlock
  urgency?: number | BriefScoreBlock
  certainty?: number | BriefScoreBlock
  signalSummary?: string
  topRiskInterpretation?: string
  likely?: string
  possible?: string
  unlikely?: string
  mythVsReality?: string
  whatThisMeans?: string
  actionSteps?: string[]
  groundingExplanation?: string
  confidenceNote?: string
  [key: string]: unknown
}
