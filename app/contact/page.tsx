import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFAQ from '@/components/contact/ContactFAQ'

export const metadata: Metadata = {
  title: 'Contact Us | Micare Choice - Get in Touch Today',
  description: 'Contact Micare Choice for NDIS support services in Melbourne. Call +61 400 000 000 or use our contact form. Free consultation available.',
  keywords: 'contact Micare Choice, NDIS support Melbourne, disability services contact, free consultation, Melbourne NDIS provider',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
    </div>
  )
}
