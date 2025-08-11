'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRightIcon, PhoneIcon, HeartIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/ilovendis.webp"
          alt="NDIS Care Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Empowering Lives Through 
              <span className="text-primary-400 block mt-2">Compassionate Care</span>
            </h1>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <HeartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm sm:text-base">Registered NDIS Provider</span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              At Micare Choice, we provide professional NDIS services in Melbourne, 
              helping individuals with disabilities achieve their goals and live 
              independently with dignity and respect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Link 
              href="/services" 
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Explore Our Services</span>
              <ChevronRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+61400000000" 
              className="btn-secondary group flex items-center space-x-2"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-white/80 text-xs sm:text-sm">Years of Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-xs sm:text-sm">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-xs sm:text-sm">Support Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
