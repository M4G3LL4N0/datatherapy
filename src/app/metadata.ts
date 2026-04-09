import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'DataTherapy | AI-Powered Clarity Engineering',
    template: '%s | DataTherapy'
  },
  description: 'Enterprise-grade AI systems that measure, structure and optimize human-system interactions. Used by Fortune 500s and governments to reduce cognitive load at scale.',
  keywords: ['AI analysis', 'decision intelligence', 'complexity reduction', 'enterprise AI', 'clarity engineering'],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'DataTherapy | AI-Powered Clarity Engineering',
    description: 'Enterprise-grade AI systems that measure ambiguity and optimize human-system interactions at scale.',
    url: 'https://datatherapy.ai',
    siteName: 'DataTherapy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataTherapy | AI-Powered Clarity Engineering',
    description: 'Transforming ambiguity into structured understanding for enterprises and governments.',
    creator: '@datatherapy'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}
