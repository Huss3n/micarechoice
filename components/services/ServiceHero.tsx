'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ServiceHero() {
  const scrollToServices = () => {
    const element = document.getElementById('service-categories')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img/ilovendis.webp"
          alt="NDIS Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our NDIS Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl mx-auto">
              Comprehensive disability support services designed to help you achieve your goals 
              and live independently. We offer person-centered care that respects your choices 
              and empowers your journey.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-white/80 text-sm">Service Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">150+</div>
                <div className="text-white/80 text-sm">Participants Supported</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={scrollToServices}
            className="mt-12 inline-flex items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="mr-2">Explore Our Services</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDownIcon className="h-5 w-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
