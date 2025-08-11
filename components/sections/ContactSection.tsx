'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Phone',
    description: 'Speak with our friendly team',
    value: '+61 400 000 000',
    href: 'tel:+61400000000',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    description: 'Send us a detailed message',
    value: 'info@micarechoice.com.au',
    href: 'mailto:info@micarechoice.com.au',
    icon: EnvelopeIcon,
  },
  {
    name: 'Office',
    description: 'Visit us in Melbourne',
    value: 'Melbourne, Victoria',
    href: '/contact#location',
    icon: MapPinIcon,
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-primary-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Contact us today to discuss your NDIS support needs. Our team is here to help you 
            take the next step towards achieving your goals.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <method.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{method.name}</h3>
                <p className="mt-2 text-sm text-gray-600 text-center">{method.description}</p>
                <p className="mt-4 text-base font-medium text-primary-600">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <ClockIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm">24/7 Emergency Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <ChatBubbleLeftRightIcon className="h-5 w-5 text-primary-600" />
              <span className="text-sm">Free Initial Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 sm:col-span-2 lg:col-span-1">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              <span className="text-sm">Usually respond within 2 hours</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link 
            href="/contact" 
            className="btn-primary group inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
