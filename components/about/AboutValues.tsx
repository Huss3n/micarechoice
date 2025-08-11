'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  HeartIcon,
  UserIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  HandRaisedIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Respect',
    description: 'We treat every individual with dignity, honor their choices, and value their unique perspectives and experiences.',
    icon: HeartIcon,
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Empowerment',
    description: 'We support individuals to make their own decisions, build confidence, and achieve their personal goals.',
    icon: UserIcon,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Quality',
    description: 'We maintain the highest standards in service delivery, continuous improvement, and professional excellence.',
    icon: ShieldCheckIcon,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Innovation',
    description: 'We embrace new ideas, technologies, and approaches to continuously improve our services and outcomes.',
    icon: LightBulbIcon,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Collaboration',
    description: 'We work together with participants, families, and the community to achieve the best possible outcomes.',
    icon: HandRaisedIcon,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in everything we do, setting high standards and consistently delivering results.',
    icon: StarIcon,
    color: 'bg-indigo-100 text-indigo-600',
  },
]

export default function AboutValues() {
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
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Drives Everything We Do
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core values are the foundation of our organization and guide every 
            interaction, decision, and service we provide.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-lg"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${value.color}`}>
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-6">
              Values in Action
            </h3>
            <p className="text-primary-100 mb-8 max-w-3xl mx-auto text-lg">
              These values aren't just words on a page - they're lived experiences. 
              Every day, our team demonstrates these values through their actions, 
              decisions, and commitment to the people we support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">100%</div>
                <div className="text-sm text-primary-100">Staff trained in our values</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">4.9/5</div>
                <div className="text-sm text-primary-100">Value-based service rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Daily</div>
                <div className="text-sm text-primary-100">Value reinforcement</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
