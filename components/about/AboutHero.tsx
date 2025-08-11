'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HeartIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function AboutHero() {
  return (
    <div className="relative pt-16 lg:pt-20">
      <div className="absolute inset-0">
        <Image
          src="/img/ilovendis.webp"
          alt="About Micare Choice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/70 to-gray-700/60"></div>
      </div>

      <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Micare Choice
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              We are a registered NDIS provider in Melbourne, dedicated to empowering 
              individuals with disabilities to live independently, achieve their goals, 
              and participate fully in community life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <HeartIcon className="h-8 w-8 text-white mb-3 mx-auto" />
              <div className="text-xl font-bold text-white mb-2">Compassionate</div>
              <div className="text-white/80 text-sm">Care delivered with empathy and understanding</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <UserGroupIcon className="h-8 w-8 text-white mb-3 mx-auto" />
              <div className="text-xl font-bold text-white mb-2">Professional</div>
              <div className="text-white/80 text-sm">Qualified, experienced support team</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <ShieldCheckIcon className="h-8 w-8 text-white mb-3 mx-auto" />
              <div className="text-xl font-bold text-white mb-2">Trusted</div>
              <div className="text-white/80 text-sm">Registered and quality-assured services</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
