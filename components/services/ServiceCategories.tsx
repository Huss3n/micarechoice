'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  HomeIcon,
  UserGroupIcon,
  HeartIcon,
  TruckIcon,
  ClockIcon,
  AcademicCapIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const serviceCategories = [
  {
    id: 'daily-living',
    name: 'Daily Living Support',
    description: 'Comprehensive assistance with daily activities to help you maintain independence in your own home.',
    icon: HomeIcon,
    color: 'bg-blue-100 text-blue-600',
    services: [
      'Personal hygiene and grooming assistance',
      'Meal planning and preparation',
      'Household cleaning and maintenance',
      'Shopping and errands',
      'Medication management and reminders',
      'Budget management and bill paying',
      'Laundry and ironing services',
      'Basic home repairs coordination'
    ],
    pricing: 'From $45/hour',
  },
  {
    id: 'community',
    name: 'Community Participation',
    description: 'Support to engage with your community and participate in meaningful social activities.',
    icon: UserGroupIcon,
    color: 'bg-green-100 text-green-600',
    services: [
      'Social group activities and events',
      'Community center participation',
      'Recreational and leisure activities',
      'Cultural and religious activities',
      'Sports and fitness programs',
      'Volunteer work assistance',
      'Friendship and relationship building',
      'Community skill development'
    ],
    pricing: 'From $42/hour',
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Professional personal care services delivered with dignity, respect, and compassion.',
    icon: HeartIcon,
    color: 'bg-pink-100 text-pink-600',
    services: [
      'Personal hygiene assistance',
      'Showering and bathing support',
      'Dressing and grooming',
      'Mobility and transfer assistance',
      'Continence management',
      'Skin care and health monitoring',
      'Oral hygiene and dental care',
      'Hair care and styling'
    ],
    pricing: 'From $52/hour',
  },
  {
    id: 'transport',
    name: 'Transport Services',
    description: 'Safe, reliable transportation to help you access your community and appointments.',
    icon: TruckIcon,
    color: 'bg-yellow-100 text-yellow-600',
    services: [
      'Medical and therapy appointments',
      'Social outings and events',
      'Shopping and errands',
      'Work and education transport',
      'Family visits and social connections',
      'Recreation and leisure trips',
      'Emergency transport services',
      'Wheelchair accessible vehicles'
    ],
    pricing: 'From $1.20/km + $35/hour',
  },
  {
    id: 'respite',
    name: 'Respite Care',
    description: 'Flexible respite care options to provide breaks for you and your family caregivers.',
    icon: ClockIcon,
    color: 'bg-purple-100 text-purple-600',
    services: [
      'Short-term in-home respite',
      'Overnight respite care',
      'Emergency respite services',
      'Planned respite breaks',
      'Social respite activities',
      'Companion care services',
      'Holiday and travel support',
      'Crisis intervention support'
    ],
    pricing: 'From $48/hour',
  },
  {
    id: 'capacity-building',
    name: 'Capacity Building',
    description: 'Skill development programs to help you achieve your personal and professional goals.',
    icon: AcademicCapIcon,
    color: 'bg-indigo-100 text-indigo-600',
    services: [
      'Life skills training and development',
      'Employment preparation and support',
      'Educational assistance and tutoring',
      'Communication skills development',
      'Technology training and support',
      'Independent living skills',
      'Social skills development',
      'Goal setting and achievement planning'
    ],
    pricing: 'From $65/hour',
  },
]

export default function ServiceCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div id="service-categories" className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Service Categories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive NDIS Support Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a full range of NDIS services tailored to your individual needs and goals. 
            Our experienced team is here to support you every step of the way.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-1">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 lg:p-12"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
                  {/* Service Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-x-3 mb-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800">
                      {category.pricing}
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-start gap-x-3"
                        >
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer customized support packages to meet your unique needs and goals. 
              Contact us to discuss your specific requirements.
            </p>
            <a 
              href="/contact" 
              className="btn-primary"
            >
              Contact Us for Custom Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
