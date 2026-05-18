import type { FearCategoryDetail } from "@/types/datatherapy"

const mitigation = {
  standard: {
    immediate: [
      "Name what is confirmed versus what is headline or rumor.",
      "Limit repeated checking; pick one or two high-signal sources.",
      "Write a one-sentence version of the fear in plain language."
    ],
    shortTerm: [
      "Track one concrete metric instead of the broadest possible story.",
      "Talk the scenario through with someone who stays specific.",
      "Schedule a revisit time so the mind is not stuck in infinite now."
    ],
    longTerm: [
      "Build a small personal information diet with clear boundaries.",
      "Practice separating visibility from personal exposure.",
      "Keep a log of past alarms that did not play out as imagined."
    ]
  }
}

export const fearCategories: FearCategoryDetail[] = [
  {
    slug: "world-chaos",
    id: "world-chaos",
    title: "War, Collapse, and World Chaos",
    name: "War, Collapse, and World Chaos",
    description:
      "Fear triggered by wars, escalation headlines, terrorism, civil disorder, and the sense that everything is becoming unstable.",
    mechanisms: ["immediate danger", "imagined future ruin", "loss of control", "helplessness"],
    severityRange: [6, 10],
    recurrencePatterns: [
      "Breaking escalation coverage",
      "Social feed surges after major events",
      "Election and policy shock cycles"
    ],
    mediaAmplificationScore: 9,
    cognitiveImpact: 8,
    relatedCategories: ["money-recession", "general-dread", "misinformation-reality"],
    commonDistortions: [
      "Total collapse thinking from partial information",
      "Treating distant events as immediately personal",
      "Confusing attention with probability"
    ],
    commonOverreactions: [
      "All-or-nothing planning",
      "Doomscrolling for certainty that never arrives",
      "Shutting down normal routines preemptively"
    ],
    structuredInterpretation:
      "World-chaos fear is often a mix of real geopolitical risk and psychological inflation. Structure separates what is happening globally from what is happening to you this week.",
    mitigationStrategies: {
      immediate: [
        "Identify your actual exposure: location, supply chain, job, family ties.",
        "Replace endless scanning with timed check-ins on primary sources.",
        ...mitigation.standard.immediate.slice(0, 1)
      ],
      shortTerm: [
        "Map second-order effects (energy, markets) without assuming worst cases.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Maintain baseline resilience: savings, documents, community ties.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "health-outbreaks",
    id: "health-outbreaks",
    title: "Disease, Outbreaks, and Bodily Danger",
    name: "Disease, Outbreaks, and Bodily Danger",
    description:
      "Fear triggered by symptoms, outbreaks, contamination, medical uncertainty, and bodily vulnerability.",
    mechanisms: ["contamination / bodily threat", "immediate danger", "loss of control"],
    severityRange: [5, 9],
    recurrencePatterns: [
      "Symptom searching spirals",
      "Outbreak news cycles",
      "Seasonal illness waves"
    ],
    mediaAmplificationScore: 8,
    cognitiveImpact: 9,
    relatedCategories: ["general-dread", "misinformation-reality"],
    commonDistortions: [
      "Treating a symptom search result as a diagnosis",
      "Equating risk in the population with risk to you personally",
      "Certainty inflation from anecdote-heavy feeds"
    ],
    commonOverreactions: [
      "Emergency framing for non-emergency sensations",
      "Avoiding care due to fear of bad news",
      "Constant body checking"
    ],
    structuredInterpretation:
      "Health fear often spikes when uncertainty meets easy access to catastrophic stories. A brief clarifies what needs professional attention versus what needs pacing and monitoring.",
    mitigationStrategies: {
      immediate: [
        "If this may be an emergency, use appropriate emergency services — DataTherapy is not emergency support.",
        "Separate observed symptoms from story-driven conclusions.",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Use clinician guidance for interpretation, not unfiltered forums alone.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Build a calm routine for baseline health habits and checkups.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "money-recession",
    id: "money-recession",
    title: "Money, Recession, and Financial Ruin",
    name: "Money, Recession, and Financial Ruin",
    description:
      "Fear tied to layoffs, inflation, recession, market drops, debt, housing pressure, and falling behind.",
    mechanisms: ["imagined future ruin", "status loss", "loss of control", "helplessness"],
    severityRange: [5, 9],
    recurrencePatterns: [
      "Market open/close anxiety",
      "Layoff rumor cycles",
      "Macro headline waves"
    ],
    mediaAmplificationScore: 7,
    cognitiveImpact: 8,
    relatedCategories: ["ai-future-of-work", "general-dread", "world-chaos"],
    commonDistortions: [
      "One portfolio day interpreted as life verdict",
      "Personalizing every macro headline",
      "Confusing volatility with permanent ruin"
    ],
    commonOverreactions: [
      "Impulsive liquidation or avoidance of all risk",
      "Shame spirals about money",
      "Comparing your inside to others’ outside"
    ],
    structuredInterpretation:
      "Financial fear blends real constraints with narrative. Structure highlights liquidity, runway, and actual decisions instead of mood-driven forecasting.",
    mitigationStrategies: {
      immediate: [
        "List cash runway and non-negotiables in plain numbers.",
        "Pause major irreversible moves during panic spikes.",
        ...mitigation.standard.immediate.slice(0, 2)
      ],
      shortTerm: [
        "Scenario plan: base case vs stress case, with triggers for action.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Automate savings and reduce decision fatigue during volatility.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "crime-safety",
    id: "crime-safety",
    title: "Crime, Attack, and Personal Safety",
    name: "Crime, Attack, and Personal Safety",
    description:
      "Fear caused by crime stories, violence, public danger, trafficking panic, and feeling unsafe in everyday life.",
    mechanisms: ["immediate danger", "loss of control", "helplessness"],
    severityRange: [4, 9],
    recurrencePatterns: [
      "Viral crime clips",
      "Local rumor spikes",
      "Travel or nightlife events"
    ],
    mediaAmplificationScore: 8,
    cognitiveImpact: 7,
    relatedCategories: ["misinformation-reality", "general-dread"],
    commonDistortions: [
      "Availability bias from memorable clips",
      "Treating rare events as common",
      "Overestimating threat without base rates"
    ],
    commonOverreactions: [
      "Total avoidance of ordinary activities",
      "Hypervigilance that exhausts the nervous system",
      "Spreading unverified danger posts"
    ],
    structuredInterpretation:
      "Safety fear is sensitive because stakes are real. Structure balances prudent caution with proportionality using context, not only intensity of headlines.",
    mitigationStrategies: {
      immediate: [
        "If you are in immediate danger, contact emergency services or local authorities.",
        "Separate verified local guidance from viral fear content.",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Choose practical habits: routes, lighting, check-ins — proportional to real risk.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Rebuild trust in ordinary environments through measured exposure and skills.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "ai-future-of-work",
    id: "ai-future-of-work",
    title: "AI, Job Replacement, and Future Obsolescence",
    name: "AI, Job Replacement, and Future Obsolescence",
    description:
      "Fear about skills becoming worthless, jobs disappearing, and technology outpacing personal security.",
    mechanisms: ["status loss", "imagined future ruin", "loss of control"],
    severityRange: [4, 8],
    recurrencePatterns: [
      "Product launch hype cycles",
      "Layoff news clustering",
      "Peer comparison on social feeds"
    ],
    mediaAmplificationScore: 8,
    cognitiveImpact: 8,
    relatedCategories: ["money-recession", "general-dread", "misinformation-reality"],
    commonDistortions: [
      "Treating fastest-adoption stories as universal timelines",
      "Identity collapse from tool change",
      "Confusing disruption with personal worth"
    ],
    commonOverreactions: [
      "Panic pivoting without strategy",
      "Learn-everything burnout",
      "Avoiding tools that could raise leverage"
    ],
    structuredInterpretation:
      "AI fear mixes real labor shifts with speculative doom. Structure focuses on skills, leverage, and optionality rather than headline velocity.",
    mitigationStrategies: {
      immediate: [
        "List tasks you do weekly; identify augmentation vs automation risk honestly.",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Pick one workflow to improve with AI literacy, not ten at once.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Invest in durable skills: judgment, communication, domain depth, reliability.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "misinformation-reality",
    id: "misinformation-reality",
    title: "Misinformation, Rumors, and Reality Confusion",
    name: "Misinformation, Rumors, and Reality Confusion",
    description:
      "Fear driven by not knowing what is real, whom to trust, or how to interpret conflicting and alarming claims.",
    mechanisms: ["reality confusion", "loss of control", "helplessness"],
    severityRange: [4, 8],
    recurrencePatterns: [
      "Crisis rumor bursts",
      "Algorithmic outrage cycles",
      "Community echo chambers"
    ],
    mediaAmplificationScore: 9,
    cognitiveImpact: 8,
    relatedCategories: ["world-chaos", "health-outbreaks", "general-dread"],
    commonDistortions: [
      "Treating certainty and confidence as the same thing",
      "Believing the scariest version because it feels vigilant",
      "Wholesale distrust or wholesale trust"
    ],
    commonOverreactions: [
      "Argument spirals without shared facts",
      "Withdrawal from all news",
      "Spreading claims to “warn” without verification"
    ],
    structuredInterpretation:
      "Reality confusion elevates fear because the mind abhors ambiguity. Structure replaces infinite debate with triage: what is confirmed, what is contested, and what to do meanwhile.",
    mitigationStrategies: {
      immediate: [
        "Ask: primary source or repetition? Dated or fresh? Local or global?",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Use lateral reading: compare independent outlets and official channels.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Build a small set of trusted processes, not a single heroic source.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "social-overthinking",
    id: "social-overthinking",
    title: "Social Rejection, Betrayal, and Overthinking",
    name: "Social Rejection, Betrayal, and Overthinking",
    description:
      "Fear triggered by messages, silence, exclusion, betrayal, embarrassment, and being misunderstood.",
    mechanisms: ["social rejection", "status loss", "loss of control"],
    severityRange: [3, 8],
    recurrencePatterns: [
      "Message delays",
      "Group chat dynamics",
      "Relationship transitions"
    ],
    mediaAmplificationScore: 6,
    cognitiveImpact: 9,
    relatedCategories: ["general-dread", "misinformation-reality"],
    commonDistortions: [
      "Mind-reading from limited data",
      "Catastrophizing silence",
      "Personalizing neutral events"
    ],
    commonOverreactions: [
      "Preemptive withdrawal",
      "Excessive reassurance seeking",
      "Replay loops that never resolve"
    ],
    structuredInterpretation:
      "Social fear often encodes threat into ambiguous cues. Structure slows the story down and separates interpretation from fact.",
    mitigationStrategies: {
      immediate: [
        "Label the story you are telling versus what you actually know.",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Use direct, bounded communication when safe and appropriate.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Practice tolerating uncertainty in relationships without constant proof.",
        ...mitigation.standard.longTerm
      ]
    }
  },
  {
    slug: "general-dread",
    id: "general-dread",
    title: "General Future Dread and Uncertainty",
    name: "General Future Dread and Uncertainty",
    description:
      "Fear that everything is getting worse at once, the future is broken, and nothing feels stable or clear.",
    mechanisms: ["imagined future ruin", "loss of control", "helplessness", "reality confusion"],
    severityRange: [4, 9],
    recurrencePatterns: [
      "Late-night rumination",
      "Stacking unrelated worries",
      "Burnout and sleep disruption"
    ],
    mediaAmplificationScore: 7,
    cognitiveImpact: 9,
    relatedCategories: ["money-recession", "world-chaos", "health-outbreaks"],
    commonDistortions: [
      "Emotional reasoning: feels true therefore is true",
      "Overgeneralization from one domain to all domains",
      "Time collapse: future pain imagined as present fact"
    ],
    commonOverreactions: [
      "Freezing on basic decisions",
      "Seeking total certainty before any action",
      "Numbing that removes restorative habits"
    ],
    structuredInterpretation:
      "General dread is diffuse threat without a single object. Structure creates categories, scores, and next steps so the mind can work with parts instead of an infinite whole.",
    mitigationStrategies: {
      immediate: [
        "Ground with sensory basics: breath, movement, water, light, time boundaries.",
        ...mitigation.standard.immediate
      ],
      shortTerm: [
        "Break the worry stack into named items with one next step each.",
        ...mitigation.standard.shortTerm
      ],
      longTerm: [
        "Rebuild routines that restore sleep, connection, and measurable progress.",
        ...mitigation.standard.longTerm
      ]
    }
  }
]

export const fearCategoryMap: Record<string, FearCategoryDetail> = Object.fromEntries(
  fearCategories.map((c) => [c.slug, c])
)
