import type { FearCategory } from "@/types/datatherapy"

export const fearCategories: FearCategory[] = [
  {
    slug: "world-chaos",
    title: "War, Collapse, and World Chaos",
    description:
      "Fear triggered by wars, escalation headlines, terrorism, civil disorder, and the sense that everything is becoming unstable.",
    mechanisms: ["immediate danger", "imagined future ruin", "loss of control", "helplessness"]
  },
  {
    slug: "health-outbreaks",
    title: "Disease, Outbreaks, and Bodily Danger",
    description:
      "Fear triggered by symptoms, outbreaks, contamination, medical uncertainty, and bodily vulnerability.",
    mechanisms: ["contamination / bodily threat", "immediate danger", "loss of control"]
  },
  {
    slug: "money-recession",
    title: "Money, Recession, and Financial Ruin",
    description:
      "Fear tied to layoffs, inflation, recession, market drops, debt, housing pressure, and falling behind.",
    mechanisms: ["imagined future ruin", "status loss", "loss of control", "helplessness"]
  },
  {
    slug: "crime-safety",
    title: "Crime, Attack, and Personal Safety",
    description:
      "Fear caused by crime stories, violence, public danger, trafficking panic, and feeling unsafe in everyday life.",
    mechanisms: ["immediate danger", "loss of control", "helplessness"]
  },
  {
    slug: "ai-future-of-work",
    title: "AI, Job Replacement, and Future Obsolescence",
    description:
      "Fear about skills becoming worthless, jobs disappearing, and technology outpacing personal security.",
    mechanisms: ["status loss", "imagined future ruin", "loss of control"]
  },
  {
    slug: "misinformation-reality",
    title: "Misinformation, Rumors, and Reality Confusion",
    description:
      "Fear driven by not knowing what is real, whom to trust, or how to interpret conflicting and alarming claims.",
    mechanisms: ["reality confusion", "loss of control", "helplessness"]
  },
  {
    slug: "social-overthinking",
    title: "Social Rejection, Betrayal, and Overthinking",
    description:
      "Fear triggered by messages, silence, exclusion, betrayal, embarrassment, and being misunderstood.",
    mechanisms: ["social rejection", "status loss", "loss of control"]
  },
  {
    slug: "general-dread",
    title: "General Future Dread and Uncertainty",
    description:
      "Fear that everything is getting worse at once, the future is broken, and nothing feels stable or clear.",
    mechanisms: ["imagined future ruin", "loss of control", "helplessness", "reality confusion"]
  }
]
