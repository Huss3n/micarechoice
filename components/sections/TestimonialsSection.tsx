'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    body: 'Micare Choice has transformed my life. Their support workers are not just professional, but genuinely caring. They helped me achieve goals I never thought possible.',
    author: {
      name: 'Sarah M.',
      handle: 'NDIS Participant',
      location: 'Melbourne, VIC',
    },
  },
  {
    body: 'The team at Micare Choice goes above and beyond. They listen to what I need and work with me to make it happen. I feel respected and valued.',
    author: {
      name: 'Michael R.',
      handle: 'NDIS Participant',
      location: 'Carlton, VIC',
    },
  },
  {
    body: 'As a family, we are so grateful for Micare Choice. They provide excellent respite care and have become like extended family to us.',
    author: {
      name: 'Jennifer L.',
      handle: 'Family Member',
      location: 'Richmond, VIC',
    },
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Participants Say
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hear from the people we support about their experiences with Micare Choice.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 shadow-lg">
                  <div className="flex gap-x-1 mb-4">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon 
                        key={rating} 
                        className="h-5 w-5 flex-none text-yellow-400" 
                        aria-hidden="true" 
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-900">
                    <p>"{testimonial.body}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                      <span className="text-sm font-semibold text-primary-600">
                        {testimonial.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.handle}</div>
                      <div className="text-gray-500 text-xs">{testimonial.author.location}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-6 py-3 text-primary-600">
            <StarIcon className="h-5 w-5" />
            <span className="font-semibold">4.9/5 Average Rating</span>
            <span className="text-primary-500">•</span>
            <span className="text-sm">Based on 50+ reviews</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
