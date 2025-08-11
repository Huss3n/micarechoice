'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  PhoneIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

const steps = [
  {
    id: 1,
    name: 'Initial Contact',
    description: 'Get in touch with us via phone, email, or our contact form. We\'ll discuss your needs and answer any questions.',
    icon: PhoneIcon,
    details: [
      'Free initial consultation',
      'Discuss your NDIS plan',
      'Understand your goals',
      'Answer all questions'
    ]
  },
  {
    id: 2,
    name: 'Assessment & Planning',
    description: 'We conduct a comprehensive assessment to understand your needs and develop a personalized support plan.',
    icon: UserIcon,
    details: [
      'In-home assessment',
      'Review NDIS plan',
      'Identify support needs',
      'Create service agreement'
    ]
  },
  {
    id: 3,
    name: 'Service Setup',
    description: 'We match you with the right support workers and set up your services according to your preferences.',
    icon: ClipboardDocumentCheckIcon,
    details: [
      'Match with support workers',
      'Schedule services',
      'Complete documentation',
      'Establish routines'
    ]
  },
  {
    id: 4,
    name: 'Ongoing Support',
    description: 'We provide continuous support and regularly review your progress to ensure your goals are being met.',
    icon: PlayIcon,
    details: [
      'Regular service delivery',
      'Progress monitoring',
      'Plan reviews',
      'Continuous improvement'
    ]
  },
]

export default function ServiceProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-gray-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Get Started
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting started with Micare Choice is simple. We've streamlined our process 
            to make it as easy as possible for you to access the support you need.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mb-6">
                    <step.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-x-2 text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-600"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Contact us today for your free consultation. We're here to help you understand 
              your options and create a support plan that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61400000000"
                className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Call +61 400 000 000
              </a>
              <a 
                href="/contact"
                className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
