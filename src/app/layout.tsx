import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "DataTherapy",
  description:
    "DataTherapy transforms scary news, fear-triggering ideas, and uncertainty into grounded explanations, structured data, and calm context."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
