'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ShieldCheckIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  DocumentCheckIcon
} from '@heroicons/react/24/outline'

const certifications = [
  {
    name: 'NDIS Registered Provider',
    description: 'Officially registered with the National Disability Insurance Agency',
    icon: ShieldCheckIcon,
    details: ['Core Supports', 'Capacity Building', 'Capital Supports'],
    status: 'Current',
    color: 'bg-green-100 text-green-600'
  },
  {
    name: 'Quality & Safeguards Commission',
    description: 'Verified by the NDIS Quality and Safeguards Commission',
    icon: CheckBadgeIcon,
    details: ['Quality Standards Met', 'Safeguards Verified', 'Regular Audits'],
    status: 'Certified',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    name: 'ISO 9001:2015',
    description: 'International standard for quality management systems',
    icon: DocumentCheckIcon,
    details: ['Quality Management', 'Continuous Improvement', 'Customer Focus'],
    status: 'Certified',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    name: 'Professional Development',
    description: 'Ongoing training and professional development programs',
    icon: AcademicCapIcon,
    details: ['Annual Training Hours', 'Skill Development', 'Best Practice Updates'],
    status: 'Ongoing',
    color: 'bg-orange-100 text-orange-600'
  }
]

const statistics = [
  { label: 'Years NDIS Registered', value: '5+' },
  { label: 'Staff Training Hours/Year', value: '200+' },
  { label: 'Quality Audits Passed', value: '100%' },
  { label: 'Compliance Rate', value: '100%' }
]

export default function AboutCertifications() {
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
            Certifications & Compliance
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted & Verified Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our certifications and compliance record demonstrate our commitment to 
            maintaining the highest standards of service quality and safety.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start gap-x-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${cert.color}`}>
                    <cert.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {cert.name}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">
                      {cert.description}
                    </p>
                    <ul className="space-y-1">
                      {cert.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-x-2 text-sm text-gray-500">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary-600"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">
              Our Compliance Record
            </h3>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our certifications are more than credentials - they represent our 
              unwavering commitment to providing safe, high-quality services that 
              you can trust.
            </p>
            <a 
              href="/contact"
              className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Learn More About Our Standards
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
