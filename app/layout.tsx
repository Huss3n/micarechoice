import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Micare Choice - Professional NDIS Services in Melbourne',
    template: '%s | Micare Choice'
  },
  description: 'Micare Choice is a registered NDIS provider in Melbourne, Australia, offering comprehensive disability support services with compassion, dignity, and excellence.',
  keywords: 'NDIS provider Melbourne, disability services, NDIS support, disability care, registered NDIS provider Australia, Melbourne disability services',
  authors: [{ name: 'Micare Choice' }],
  creator: 'Micare Choice',
  publisher: 'Micare Choice',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://micarechoice.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Micare Choice - Professional NDIS Services in Melbourne',
    description: 'Registered NDIS provider offering comprehensive disability support services in Melbourne, Australia.',
    url: 'https://micarechoice.com.au',
    siteName: 'Micare Choice',
    images: [
      {
        url: '/img/ilovendis.webp',
        width: 1200,
        height: 630,
        alt: 'Micare Choice - NDIS Services',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micare Choice - Professional NDIS Services in Melbourne',
    description: 'Registered NDIS provider offering comprehensive disability support services in Melbourne, Australia.',
    images: ['/img/ilovendis.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-id',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
