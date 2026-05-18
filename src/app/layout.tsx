import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'DataTherapy',
  description:
    'Turn scary news and fear-triggering uncertainty into structured understanding—scores, context, calm interpretation, and next steps. Not therapy or emergency support.',
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
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
