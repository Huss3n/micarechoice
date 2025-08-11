'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'How quickly can I expect a response?',
    answer: 'We aim to respond to all inquiries within 2 hours during business hours (Monday-Friday, 8am-6pm). For urgent matters, please call our 24/7 emergency line at +61 400 000 000.'
  },
  {
    question: 'Do I need to have an NDIS plan before contacting you?',
    answer: 'No, you don\'t need to have an NDIS plan already. We can help you understand the NDIS process, assist with applications, and support you through the planning process. We work with people at all stages of their NDIS journey.'
  },
  {
    question: 'Is the initial consultation really free?',
    answer: 'Yes, absolutely! We offer a completely free initial consultation with no obligation. This gives us a chance to understand your needs and for you to learn about our services. There are no hidden costs or commitments.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We provide services throughout Melbourne and surrounding areas, including inner and outer suburbs. If you\'re unsure whether we service your area, please contact us and we\'ll confirm availability in your location.'
  },
  {
    question: 'Can I choose my support workers?',
    answer: 'Absolutely! We believe in choice and control. You can meet potential support workers before making a decision, and we work to match you with someone who understands your needs and shares your interests.'
  },
  {
    question: 'What if I need support outside normal business hours?',
    answer: 'We offer flexible scheduling including evenings, weekends, and public holidays. We also provide 24/7 emergency support for urgent situations. Additional rates may apply as per NDIS guidelines.'
  }
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Common Questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Before You Contact Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are answers to some frequently asked questions. If you don't find what 
            you're looking for, please don't hesitate to contact us directly.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our friendly team is 
              here to help answer any questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61400000000"
                className="btn-primary"
              >
                Call +61 400 000 000
              </a>
              <a 
                href="#form"
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Use Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
