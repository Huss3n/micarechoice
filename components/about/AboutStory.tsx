'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function AboutStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <div className="max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Our Story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Born from a Vision of Inclusion
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Micare Choice was founded with a simple yet powerful vision: to create a world 
                where every person with a disability has the support they need to live their 
                best life. Our journey began when our founders recognized the need for 
                person-centered, compassionate disability support services in Melbourne.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                  <p className="mt-2 text-gray-600">
                    To empower individuals with disabilities by providing high-quality, 
                    person-centered support services that promote independence, dignity, 
                    and community participation.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary-600 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-gray-600">
                    A community where every person with a disability is valued, included, 
                    and has equal opportunities to participate in all aspects of life.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-start lg:justify-end"
          >
            <div className="relative">
              <Image
                src="/img/ilovendis.webp"
                alt="Micare Choice story"
                width={600}
                height={400}
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Our Journey Since 2018
            </h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              From humble beginnings to becoming a trusted NDIS provider in Melbourne
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: '2018', milestone: 'Founded', description: 'Micare Choice established with a vision for inclusive support' },
              { year: '2019', milestone: 'NDIS Registration', description: 'Became a registered NDIS provider with full certification' },
              { year: '2021', milestone: '100+ Participants', description: 'Reached milestone of supporting over 100 individuals' },
              { year: '2024', milestone: 'Award Recognition', description: 'Recognized for excellence in disability support services' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {item.year}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.milestone}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
