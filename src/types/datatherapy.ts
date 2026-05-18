export type FearCategoryDetail = {
  /** URL segment */
  slug: string
  /** Stable id (matches slug) */
  id: string
  title: string
  /** Display name for category detail pages */
  name: string
  description: string
  mechanisms: string[]
  severityRange: [number, number]
  recurrencePatterns: string[]
  mediaAmplificationScore: number
  cognitiveImpact: number
  relatedCategories: string[]
  commonDistortions: string[]
  commonOverreactions: string[]
  structuredInterpretation: string
  mitigationStrategies: {
    immediate: string[]
    shortTerm: string[]
    longTerm: string[]
  }
}

/** Legacy slim type for imports that only need basics */
export type FearCategory = Pick<
  FearCategoryDetail,
  "slug" | "title" | "description" | "mechanisms"
>

export type BriefTone = "Analytical" | "Direct" | "Grounding" | string

export type SampleBriefTopic = {
  id: string
  title: string
  slug: string
  category: string
  fearPillar?: string
  shortDescription: string
  inputText: string
  recommendedTone: BriefTone
  featured?: boolean
  tags: string[]
  brief?: import("@/types/structured-brief").StructuredBriefData
}
