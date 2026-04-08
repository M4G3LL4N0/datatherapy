import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: "DataTherapy - Clarity Through Data",
  description:
    "DataTherapy transforms scary news, fear-triggering ideas, and uncertainty into grounded explanations, structured data, and calm context.",
  openGraph: {
    title: "DataTherapy - Clarity Through Data",
    description: "Turn fear-triggering news into grounded understanding with structured data analysis.",
    url: "https://datatherapy.com",
    siteName: "DataTherapy",
    images: [
      {
        url: "https://datatherapy.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataTherapy - Clarity Through Data",
    description: "Turn fear-triggering news into grounded understanding with structured data analysis.",
    images: ["https://datatherapy.com/og-image.jpg"],
  },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
