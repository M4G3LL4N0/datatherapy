import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sample Briefs | DataTherapy",
  description:
    "Explore sample DataTherapy Briefs for fear categories like market panic, AI replacement, outbreaks, war headlines, crime fears, and social overthinking."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
