'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  UserGroupIcon, 
  HeartIcon, 
  ClockIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const stats = [
  {
    id: 1,
    name: 'Participants Supported',
    value: '150+',
    icon: UserGroupIcon,
    description: 'Individuals empowered to achieve their goals',
  },
  {
    id: 2,
    name: 'Years of Experience',
    value: '5+',
    icon: HeartIcon,
    description: 'Dedicated service in disability support',
  },
  {
    id: 3,
    name: 'Response Time',
    value: '<2hrs',
    icon: ClockIcon,
    description: 'Average response to urgent requests',
  },
  {
    id: 4,
    name: 'Quality Rating',
    value: '5★',
    icon: ShieldCheckIcon,
    description: 'NDIS Quality & Safeguards Commission',
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-gray-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by the Community
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our commitment to excellence is reflected in our service statistics and community impact.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col gap-y-4 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <stat.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                </div>
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  )
}
