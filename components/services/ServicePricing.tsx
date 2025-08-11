'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

const pricingTiers = [
  {
    name: 'Core Supports',
    description: 'Essential daily living and assistance services',
    priceRange: '$45-65',
    unit: 'per hour',
    features: [
      'Daily living support',
      'Personal care assistance',
      'Household tasks',
      'Meal preparation',
      'Shopping assistance',
      'Basic transport'
    ],
    note: 'Most common NDIS funding category'
  },
  {
    name: 'Capacity Building',
    description: 'Skill development and independence training',
    priceRange: '$65-85',
    unit: 'per hour',
    features: [
      'Life skills training',
      'Employment support',
      'Education assistance',
      'Social skills development',
      'Technology training',
      'Goal achievement support'
    ],
    note: 'Investment in long-term independence'
  },
  {
    name: 'Capital Supports',
    description: 'Equipment and home modifications',
    priceRange: 'Quote',
    unit: 'based',
    features: [
      'Assistive technology',
      'Home modifications',
      'Vehicle modifications',
      'Communication devices',
      'Mobility equipment',
      'Safety equipment'
    ],
    note: 'One-time purchases with NDIS approval'
  }
]

export default function ServicePricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Pricing Information
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transparent NDIS Pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our pricing aligns with NDIS price guides and is transparent, fair, and competitive. 
            All services are funded through your NDIS plan.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {tier.description}
              </p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {tier.priceRange}
                </span>
                <span className="text-gray-600 ml-1">
                  {tier.unit}
                </span>
              </div>

              <div className="bg-primary-50 rounded-lg p-3 mb-6">
                <div className="flex items-center gap-x-2">
                  <InformationCircleIcon className="h-4 w-4 text-primary-600" />
                  <span className="text-xs text-primary-800">
                    {tier.note}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-x-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Understanding NDIS Pricing
                </h3>
                <p className="text-gray-600 mb-4">
                  All our services are provided at NDIS-approved rates. Your services are 
                  funded through your NDIS plan, and we handle all the billing directly 
                  with the NDIA.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• No upfront costs to you</li>
                  <li>• Direct billing to NDIS</li>
                  <li>• Transparent pricing structure</li>
                  <li>• Regular plan reviews available</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Need Help with Your NDIS Plan?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team can help you understand your NDIS plan and how to 
                  make the most of your funding.
                </p>
                <a 
                  href="/contact"
                  className="btn-primary text-sm"
                >
                  Get Plan Assistance
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
