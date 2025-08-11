'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  CheckCircleIcon, 
  HeartIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Person-Centered Approach',
    description: 'We put you at the center of everything we do, tailoring our services to meet your unique needs and goals.',
    icon: HeartIcon,
  },
  {
    name: 'Qualified Team',
    description: 'Our experienced professionals are trained, certified, and committed to providing the highest quality care.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Community Focus',
    description: 'We believe in building strong community connections and helping you participate fully in community life.',
    icon: UserGroupIcon,
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8 lg:pt-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-600">About Micare Choice</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Trusted NDIS Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Micare Choice, we are more than just an NDIS provider. We are your partners in 
                achieving independence, building confidence, and creating meaningful connections within 
                your community. Our registered and experienced team is dedicated to supporting you 
                every step of the way.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-primary-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start justify-end lg:order-first"
          >
            <div className="relative">
              <Image
                src="/img/ilovendis.webp"
                alt="Micare Choice team providing support"
                width={600}
                height={400}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Core Values
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              These values guide everything we do and shape the way we deliver our services.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Respect', description: 'We treat everyone with dignity and honor their choices and preferences.' },
              { name: 'Empowerment', description: 'We support individuals to make their own decisions and achieve their goals.' },
              { name: 'Quality', description: 'We maintain the highest standards in all our services and interactions.' },
              { name: 'Innovation', description: 'We continuously improve and adapt our services to meet evolving needs.' },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                  <CheckCircleIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-gray-900">{value.name}</h4>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
