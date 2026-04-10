import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fear Library | DataTherapy",
  description:
    "Browse recurring fear categories and structured sample briefs across world chaos, health, money, crime, AI, misinformation, relationships, and general dread."
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
