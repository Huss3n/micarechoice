'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { 
  HomeIcon,
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
  ClockIcon,
  AcademicCapIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Daily Living Support',
    description: 'Assistance with daily activities to help you live independently in your own home.',
    icon: HomeIcon,
    features: ['Personal hygiene assistance', 'Meal preparation', 'Household tasks', 'Medication reminders'],
  },
  {
    name: 'Community Participation',
    description: 'Support to engage with your community and participate in social activities.',
    icon: UserGroupIcon,
    features: ['Social activities', 'Community events', 'Skill development', 'Recreation programs'],
  },
  {
    name: 'Personal Care',
    description: 'Professional personal care services delivered with dignity and respect.',
    icon: HeartIcon,
    features: ['Personal hygiene', 'Grooming assistance', 'Mobility support', 'Health monitoring'],
  },
  {
    name: 'Transport Services',
    description: 'Safe and reliable transport to help you get where you need to go.',
    icon: TruckIcon,
    features: ['Medical appointments', 'Social outings', 'Shopping trips', 'Community access'],
  },
  {
    name: 'Respite Care',
    description: 'Flexible respite care options to support you and your family.',
    icon: ClockIcon,
    features: ['Short-term support', 'Emergency respite', 'Planned breaks', 'Overnight care'],
  },
  {
    name: 'Capacity Building',
    description: 'Programs to help you develop skills and achieve your personal goals.',
    icon: AcademicCapIcon,
    features: ['Life skills training', 'Employment support', 'Education assistance', 'Goal achievement'],
  },
]

export default function ServicesOverview() {
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
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive NDIS Support
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a full range of NDIS services designed to support your independence, 
            well-being, and participation in community life.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-x-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-600"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Link 
            href="/services" 
            className="btn-primary group inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
