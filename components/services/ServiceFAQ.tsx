'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'What is the NDIS and am I eligible?',
    answer: 'The National Disability Insurance Scheme (NDIS) provides funding for people with permanent and significant disabilities. To be eligible, you must be under 65 when you first apply, live in Australia, and have a permanent disability that significantly affects your ability to participate in everyday activities. We can help you understand your eligibility and assist with applications.'
  },
  {
    question: 'How do I get started with Micare Choice?',
    answer: 'Getting started is simple. Contact us for a free consultation where we\'ll discuss your needs and NDIS plan. We\'ll then conduct an assessment, match you with appropriate support workers, and begin delivering services according to your preferences and schedule.'
  },
  {
    question: 'Can I choose my support workers?',
    answer: 'Absolutely! We believe in choice and control. You can meet potential support workers before making a decision, and we\'ll work to match you with someone who shares your interests and understands your needs. If you\'re not happy with your support worker, we can arrange a replacement.'
  },
  {
    question: 'What areas do you service?',
    answer: 'We provide services throughout Melbourne and surrounding areas. Our service areas include the CBD, inner suburbs, and many outer suburban areas. Contact us to confirm if we service your specific location.'
  },
  {
    question: 'How is billing handled?',
    answer: 'We handle all billing directly with the NDIA (National Disability Insurance Agency). You don\'t need to pay upfront costs - we claim directly from your NDIS plan. We provide regular statements so you can track your plan usage and remaining funds.'
  },
  {
    question: 'What if I need services outside normal hours?',
    answer: 'We offer flexible scheduling including evenings, weekends, and public holidays. We also provide 24/7 emergency support for urgent situations. Additional rates may apply for after-hours services as per NDIS guidelines.'
  },
  {
    question: 'Can services be adjusted as my needs change?',
    answer: 'Yes, we regularly review your support needs and can adjust services accordingly. We work with you and your plan manager to ensure your services continue to meet your goals. Major changes may require NDIS plan reviews.'
  },
  {
    question: 'What qualifications do your staff have?',
    answer: 'All our support workers are fully qualified, certified, and undergo comprehensive background checks. They receive ongoing training in disability support, first aid, and specialized areas relevant to their roles. We ensure all staff meet NDIS worker screening requirements.'
  }
]

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Got Questions? We Have Answers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here are some common questions about our NDIS services. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly team is here to help. Contact us for personalized 
              answers to your questions about NDIS services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61400000000"
                className="btn-primary"
              >
                Call +61 400 000 000
              </a>
              <a 
                href="/contact"
                className="btn-secondary"
              >
                Send Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
