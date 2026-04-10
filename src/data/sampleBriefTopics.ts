import { generateDataTherapyBrief } from "@/lib/generateDataTherapyBrief"
import type { SampleBriefTopic } from "@/types/datatherapy"

const seeds = [
  {
    id: "market-crash",
    title: "I saw a market crash headline. Should I panic about my future?",
    slug: "market-crash-future-panic",
    category: "Financial Fear",
    fearPillar: "money-recession",
    shortDescription: "Financial headlines can make long-term fear feel immediate and personal.",
    inputText: "I saw headlines about a market crash and now I feel like my future is ruined.",
    recommendedTone: "Analytical",
    featured: true,
    tags: ["market", "recession", "future", "panic"]
  },
  {
    id: "ai-jobs",
    title: "Everyone says AI is replacing jobs. Am I screwed?",
    slug: "ai-replacing-jobs-am-i-screwed",
    category: "Career / AI Fear",
    fearPillar: "ai-future-of-work",
    shortDescription: "AI anxiety often blends real structural change with inflated personal doom.",
    inputText: "Everyone says AI is replacing jobs and I feel like my skills are becoming worthless.",
    recommendedTone: "Direct",
    featured: true,
    tags: ["ai", "jobs", "career", "future"]
  },
  {
    id: "outbreak-news",
    title: "There’s a disease outbreak in the news. How worried should I actually be?",
    slug: "disease-outbreak-how-worried",
    category: "Health Fear",
    fearPillar: "health-outbreaks",
    shortDescription: "Outbreak coverage can trigger bodily fear far beyond direct exposure.",
    inputText: "There is a disease outbreak in the news and I am worried it means I am in danger now.",
    recommendedTone: "Grounding",
    featured: true,
    tags: ["health", "outbreak", "disease", "fear"]
  },
  {
    id: "crime-feed",
    title: "Crime stories online are making me feel unsafe all the time.",
    slug: "crime-stories-feel-unsafe",
    category: "Crime / Safety Fear",
    fearPillar: "crime-safety",
    shortDescription: "Repeated crime content can distort the map of everyday danger.",
    inputText: "Crime stories online are making me feel unsafe everywhere even when I am just living normally.",
    recommendedTone: "Grounding",
    featured: true,
    tags: ["crime", "safety", "fear", "media"]
  },
  {
    id: "war-escalation",
    title: "War headlines are making me feel like everything is collapsing.",
    slug: "war-headlines-everything-collapsing",
    category: "News / World Events",
    fearPillar: "world-chaos",
    shortDescription: "Escalation stories often create a sense of total collapse even when the real impact is narrower.",
    inputText: "I saw war escalation headlines and now I feel like everything is collapsing.",
    recommendedTone: "Analytical",
    featured: true,
    tags: ["war", "world", "collapse", "fear"]
  },
  {
    id: "layoff-rumor",
    title: "I keep hearing rumors about layoffs and I’m panicking.",
    slug: "layoff-rumors-panic",
    category: "Financial Fear",
    fearPillar: "money-recession",
    shortDescription: "Rumor plus job insecurity can create severe future fear before facts are clear.",
    inputText: "I keep hearing rumors about layoffs at work and now every meeting scares me.",
    recommendedTone: "Direct",
    featured: true,
    tags: ["layoffs", "rumor", "job", "panic"]
  },
  {
    id: "message-overthinking",
    title: "I keep overthinking one message and assuming the worst.",
    slug: "overthinking-one-message",
    category: "Social / Relationship Fear",
    fearPillar: "social-overthinking",
    shortDescription: "Small social ambiguity can expand into rejection, shame, and worst-case storytelling.",
    inputText: "I keep overthinking one message and assuming silence means rejection.",
    recommendedTone: "Grounding",
    featured: false,
    tags: ["social", "message", "rejection", "overthinking"]
  },
  {
    id: "reality-confusion",
    title: "I can’t tell what’s real anymore because every version sounds terrifying.",
    slug: "cant-tell-whats-real",
    category: "Misinformation / Rumor Fear",
    fearPillar: "misinformation-reality",
    shortDescription: "Conflicting scary claims can create reality confusion that feels like threat.",
    inputText: "I cannot tell what is real anymore because every version of the story sounds terrifying.",
    recommendedTone: "Analytical",
    featured: false,
    tags: ["misinformation", "rumor", "reality", "confusion"]
  },
  {
    id: "future-broken",
    title: "The future feels broken. How do I think clearly again?",
    slug: "future-feels-broken",
    category: "General Uncertainty",
    fearPillar: "general-dread",
    shortDescription: "When fear has no single object, structure becomes even more important.",
    inputText: "The future feels broken and I feel like everything is getting worse at once.",
    recommendedTone: "Grounding",
    featured: false,
    tags: ["future", "dread", "uncertainty", "control"]
  },
  {
    id: "symptom-spiral",
    title: "A health symptom made me spiral after reading online.",
    slug: "health-symptom-spiral",
    category: "Health Fear",
    fearPillar: "health-outbreaks",
    shortDescription: "Online symptom searching often creates certainty inflation and bodily panic.",
    inputText: "A health symptom made me spiral after reading online and now I think something is very wrong.",
    recommendedTone: "Grounding",
    featured: false,
    tags: ["symptom", "health", "panic", "online"]
  }
] as const

export const sampleBriefTopics: SampleBriefTopic[] = seeds.map((seed) => ({
  ...seed,
  brief: generateDataTherapyBrief({
    input: seed.inputText,
    category: seed.category,
    tone: seed.recommendedTone
  })
}))
export interface SampleBriefTopic {
  id: string
  title: string
  shortDescription: string
  category: string
  fearPillar?: string
  featured?: boolean
  brief?: any
}

export const sampleBriefTopics: SampleBriefTopic[] = [
  {
    id: '1',
    title: 'Market Panic Example',
    shortDescription: 'Analyzing sudden stock market drops',
    category: 'Financial Fears',
    featured: true,
    brief: {}
  },
  {
    id: '2',
    title: 'AI Replacement Concerns',
    shortDescription: 'Understanding automation anxiety',
    category: 'Technological Fears',
    featured: true,
    brief: {}
  }
]
