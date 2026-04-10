import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Product | DataTherapy",
  description:
    "Learn how DataTherapy turns scary information into structured understanding through seriousness, relevance, urgency, and certainty scoring."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
