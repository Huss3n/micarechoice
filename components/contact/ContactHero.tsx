'use client'

import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactHero() {
  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-800 pt-16 lg:pt-20">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100 max-w-2xl mx-auto">
              Ready to get started with NDIS support services? We're here to help. 
              Contact us today for a free consultation and let's discuss how we can 
              support you to achieve your goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <a
              href="tel:+61400000000"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors group"
            >
              <PhoneIcon className="h-8 w-8 text-white mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-lg font-bold text-white mb-2">Call Us</div>
              <div className="text-primary-100 text-sm">+61 400 000 000</div>
              <div className="text-primary-200 text-xs mt-1">Available 24/7</div>
            </a>
            
            <a
              href="mailto:info@micarechoice.com.au"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors group"
            >
              <EnvelopeIcon className="h-8 w-8 text-white mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-lg font-bold text-white mb-2">Email Us</div>
              <div className="text-primary-100 text-sm">info@micarechoice.com.au</div>
              <div className="text-primary-200 text-xs mt-1">Response within 2 hours</div>
            </a>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPinIcon className="h-8 w-8 text-white mb-3 mx-auto" />
              <div className="text-lg font-bold text-white mb-2">Visit Us</div>
              <div className="text-primary-100 text-sm">Melbourne, Victoria</div>
              <div className="text-primary-200 text-xs mt-1">By appointment</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Currently accepting new participants</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
