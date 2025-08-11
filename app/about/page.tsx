import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutTeam from '@/components/about/AboutTeam'
import AboutValues from '@/components/about/AboutValues'
import AboutCertifications from '@/components/about/AboutCertifications'

export const metadata: Metadata = {
  title: 'About Us | Micare Choice - Professional NDIS Provider Melbourne',
  description: 'Learn about Micare Choice, a registered NDIS provider in Melbourne committed to providing compassionate, professional disability support services with dignity and respect.',
  keywords: 'about Micare Choice, NDIS provider Melbourne, disability support team, NDIS registration, professional care team',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCertifications />
    </div>
  )
}
