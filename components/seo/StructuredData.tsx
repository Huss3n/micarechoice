export interface StructuredDataProps {
  type: 'organization' | 'localBusiness' | 'breadcrumb' | 'faq'
  data?: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://micarechoice.com.au'
    
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Micare Choice',
          alternateName: 'Micare Choice NDIS Provider',
          url: baseUrl,
          logo: `${baseUrl}/img/ilovendis.webp`,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+61400000000',
            contactType: 'customer service',
            areaServed: 'AU',
            availableLanguage: ['English']
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Melbourne',
            addressRegion: 'Victoria',
            addressCountry: 'Australia'
          },
          sameAs: [
            'https://www.linkedin.com/company/micare-choice',
            'https://www.facebook.com/micarechoice'
          ],
          foundingDate: '2018',
          description: 'Micare Choice is a registered NDIS provider in Melbourne, Australia, offering comprehensive disability support services with compassion, dignity, and excellence.'
        }

      case 'localBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${baseUrl}/#organization`,
          name: 'Micare Choice',
          image: `${baseUrl}/img/ilovendis.webp`,
          telephone: '+61400000000',
          email: 'info@micarechoice.com.au',
          url: baseUrl,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Melbourne',
            addressRegion: 'Victoria',
            addressCountry: 'Australia'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -37.8136,
            longitude: 144.9631
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '18:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: 'Saturday',
              opens: '09:00',
              closes: '15:00'
            }
          ],
          serviceArea: {
            '@type': 'City',
            name: 'Melbourne'
          },
          priceRange: '$$',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '50',
            bestRating: '5',
            worstRating: '1'
          }
        }

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${baseUrl}${item.href}`
          }))
        }

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        }

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
