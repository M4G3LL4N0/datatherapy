import type { StructuredBriefData } from "@/types/structured-brief"

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value))
}

function labelForScore(value: number, type: "severity" | "urgency" | "certainty" | "relevance") {
  if (type === "certainty") {
    if (value >= 75) return "high"
    if (value >= 45) return "moderate"
    return "low"
  }

  if (value >= 75) return "high"
  if (value >= 45) return "moderate"
  return "low"
}

export function generateDataTherapyBrief({
  input,
  category,
  tone
}: {
  input: string
  category: string
  tone: string
}): StructuredBriefData {
  const text = input.toLowerCase()

  const intenseWords = [
    "war",
    "attack",
    "crash",
    "collapse",
    "outbreak",
    "emergency",
    "fired",
    "layoff",
    "death",
    "danger",
    "virus",
    "crime",
    "unsafe",
    "recession",
    "panic"
  ]

  const uncertaintyWords = [
    "maybe",
    "might",
    "possibly",
    "rumor",
    "heard",
    "unconfirmed",
    "think",
    "seems"
  ]

  const exposureWords = ["i", "my", "me", "my job", "my future", "my health", "my relationship"]
  const urgentWords = ["now", "immediately", "today", "urgent", "right away", "breaking"]

  let seriousness = 28
  let personalRelevance = 24
  let urgency = 22
  let certainty = 72

  for (const word of intenseWords) {
    if (text.includes(word)) seriousness += 7
  }

  for (const word of uncertaintyWords) {
    if (text.includes(word)) certainty -= 8
  }

  for (const word of exposureWords) {
    if (text.includes(word)) personalRelevance += 6
  }

  for (const word of urgentWords) {
    if (text.includes(word)) urgency += 9
  }

  if (category.includes("Financial")) seriousness += 8
  if (category.includes("Health")) seriousness += 10
  if (category.includes("Crime")) urgency += 8
  if (category.includes("Career") || category.includes("AI")) personalRelevance += 7
  if (category.includes("Social")) personalRelevance += 10
  if (category.includes("Misinformation")) certainty -= 10
  if (category.includes("World")) seriousness += 9

  seriousness = clamp(seriousness)
  personalRelevance = clamp(personalRelevance)
  urgency = clamp(urgency)
  certainty = clamp(certainty)

  const tonePrefix =
    tone === "Grounding"
      ? "Take a breath: "
      : tone === "Direct"
        ? "Direct read: "
        : "Analytical read: "

  const summary = `${tonePrefix}${input.trim() || "A fear-triggering scenario"} appears to combine uncertainty with emotionally amplified interpretation.`

  const topRiskInterpretation =
    seriousness >= 70
      ? "The biggest risk is treating a serious topic as if it guarantees immediate personal collapse."
      : "The biggest risk is letting ambiguity expand into a much larger threat than the facts currently support."

  const likely =
    seriousness >= 70
      ? "This is important and worth tracking, but the most likely outcome is a narrower impact than your fear response suggests."
      : "This is more likely to be a manageable concern than a total-life emergency."

  const possible =
    certainty < 45
      ? "Some elements may turn out worse than expected, but the current signal is not strong enough to justify worst-case certainty."
      : "There may be real implications here, especially if the trend develops further or becomes more directly relevant to you."

  const unlikely =
    personalRelevance < 45
      ? "It is unlikely that this immediately affects every part of your life just because it feels large and visible."
      : "It is unlikely that one signal alone fully defines your future, safety, or worth."

  const mythVsReality =
    "Myth: visibility means immediate personal danger. Reality: highly visible stories often feel bigger than their direct exposure, and structured context usually reveals a narrower, more actionable picture."

  const whatThisMeans =
    "This situation deserves interpretation, not instant catastrophe. The right question is not 'Is everything ruined?' but 'What is actually happening, how directly does it affect me, and what is the next useful move?'"

  const actionSteps = [
    "Separate what is confirmed from what is speculative.",
    "Focus on your direct exposure instead of the broadest possible interpretation.",
    "Decide whether this requires action now, monitoring later, or no immediate response.",
    "Return to the highest-signal facts before drawing future-wide conclusions."
  ]

  const groundingExplanation =
    tone === "Grounding"
      ? "Your nervous system may be reacting faster than the available evidence. Structure helps reduce the feeling of infinite threat."
      : tone === "Direct"
        ? "The fear may be real, but the current interpretation is probably broader than the actual signal."
        : "Ambiguity creates psychological inflation. Turning fear into categories, scores, and next steps restores interpretive control."

  const signalSummary = `Seriousness appears ${labelForScore(
    seriousness,
    "severity"
  )}, relevance appears ${labelForScore(
    personalRelevance,
    "relevance"
  )}, urgency appears ${labelForScore(
    urgency,
    "urgency"
  )}, and certainty appears ${labelForScore(certainty, "certainty")}.`

  const confidenceNote =
    certainty >= 70
      ? "Confidence is relatively stronger because the input contains fewer explicit uncertainty signals."
      : "Confidence is limited because the input includes rumor-like, speculative, or emotionally amplified language."

  return {
    summary,
    seriousness: {
      value: seriousness,
      label: labelForScore(seriousness, "severity")
    },
    personalRelevance: {
      value: personalRelevance,
      label: labelForScore(personalRelevance, "relevance")
    },
    urgency: {
      value: urgency,
      label: labelForScore(urgency, "urgency")
    },
    certainty: {
      value: certainty,
      label: labelForScore(certainty, "certainty")
    },
    signalSummary,
    topRiskInterpretation,
    likely,
    possible,
    unlikely,
    mythVsReality,
    whatThisMeans,
    actionSteps,
    groundingExplanation,
    confidenceNote
  }
}

export default generateDataTherapyBrief
