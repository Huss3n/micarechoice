import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import AboutSection from '@/components/sections/AboutSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'
import StatsSection from '@/components/sections/StatsSection'
import StructuredData from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Micare Choice - Professional NDIS Services in Melbourne',
  description: 'Micare Choice is a registered NDIS provider in Melbourne, Australia, offering comprehensive disability support services with compassion, dignity, and excellence.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="organization" />
      <StructuredData type="localBusiness" />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesOverview />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
