import { Metadata } from 'next'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceCategories from '@/components/services/ServiceCategories'
import ServiceProcess from '@/components/services/ServiceProcess'
import ServicePricing from '@/components/services/ServicePricing'
import ServiceFAQ from '@/components/services/ServiceFAQ'

export const metadata: Metadata = {
  title: 'NDIS Services | Comprehensive Disability Support in Melbourne',
  description: 'Explore our comprehensive range of NDIS services including daily living support, community participation, personal care, transport, and respite care in Melbourne.',
  keywords: 'NDIS services Melbourne, disability support services, daily living support, community participation, personal care, respite care, transport services',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero />
      <ServiceCategories />
      <ServiceProcess />
      <ServicePricing />
      <ServiceFAQ />
    </div>
  )
}
