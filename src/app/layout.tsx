import type { Metadata, Viewport } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  title: 'DataTherapy',
  description: 'Transform uncertainty into clarity',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
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
