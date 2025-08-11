'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    name: 'Phone Support',
    description: 'Speak directly with our friendly team',
    details: '+61 400 000 000',
    hours: '24/7 Emergency Support',
    icon: PhoneIcon,
    action: 'tel:+61400000000',
    primary: true
  },
  {
    name: 'Email Support',
    description: 'Send us a detailed message',
    details: 'info@micarechoice.com.au',
    hours: 'Response within 2 hours',
    icon: EnvelopeIcon,
    action: 'mailto:info@micarechoice.com.au',
    primary: false
  },
  {
    name: 'Live Chat',
    description: 'Chat with us online',
    details: 'Available on website',
    hours: 'Mon-Fri: 8am-6pm',
    icon: ChatBubbleLeftRightIcon,
    action: '#chat',
    primary: false
  },
  {
    name: 'Book Consultation',
    description: 'Schedule a free meeting',
    details: 'In-person or video call',
    hours: 'Flexible scheduling',
    icon: CalendarDaysIcon,
    action: '/contact#form',
    primary: false
  }
]

const officeHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
  { day: 'Sunday', hours: 'Emergency support only' },
  { day: 'Public Holidays', hours: 'Emergency support only' }
]

export default function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Get in Touch
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We're Here to Help
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Multiple ways to connect with our team. Choose the method that works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.action}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col items-center rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group ${
                method.primary ? 'bg-primary-600 text-white' : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-full mb-6 transition-transform group-hover:scale-110 ${
                method.primary ? 'bg-white/20' : 'bg-primary-100'
              }`}>
                <method.icon className={`h-8 w-8 ${
                  method.primary ? 'text-white' : 'text-primary-600'
                }`} aria-hidden="true" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                method.primary ? 'text-white' : 'text-gray-900'
              }`}>
                {method.name}
              </h3>
              <p className={`text-sm mb-3 ${
                method.primary ? 'text-primary-100' : 'text-gray-600'
              }`}>
                {method.description}
              </p>
              <p className={`text-base font-medium mb-2 ${
                method.primary ? 'text-white' : 'text-primary-600'
              }`}>
                {method.details}
              </p>
              <p className={`text-xs ${
                method.primary ? 'text-primary-200' : 'text-gray-500'
              }`}>
                {method.hours}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-x-3 mb-6">
              <ClockIcon className="h-6 w-6 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-3">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>Emergency Support:</strong> Available 24/7 for urgent situations. 
                Call our main number and follow the prompts for emergency assistance.
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-x-3 mb-6">
              <MapPinIcon className="h-6 w-6 text-primary-600" />
              <h3 className="text-xl font-semibold text-gray-900">Our Location</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Main Office</h4>
                <p className="text-gray-600">
                  Melbourne, Victoria<br />
                  Australia
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Service Areas</h4>
                <p className="text-gray-600">
                  We provide services throughout Melbourne and surrounding areas, 
                  including inner and outer suburbs.
                </p>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Home Visits:</strong> We come to you! Most of our services 
                  are provided in your home or community setting.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Immediate Support?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              If you're experiencing a crisis or need immediate assistance, 
              don't hesitate to contact us. We have 24/7 emergency support available.
            </p>
            <a 
              href="tel:+61400000000"
              className="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Emergency Line
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
