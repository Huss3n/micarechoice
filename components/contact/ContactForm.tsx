'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  currentNDISParticipant: z.string().min(1, 'Please select an option'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.string().min(1, 'Please select a preferred contact method'),
  consent: z.boolean().refine(val => val === true, 'You must agree to the privacy policy')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div id="form" className="bg-gray-50 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Contact Form
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Send Us a Message
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll get back to you within 2 hours during business hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. We'll get back to you within 2 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="+61 400 000 000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  What can we help you with? *
                </label>
                <select
                  {...register('inquiryType')}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Please select...</option>
                  <option value="new-participant">New NDIS Participant</option>
                  <option value="service-inquiry">Service Inquiry</option>
                  <option value="existing-participant">Existing Participant</option>
                  <option value="family-inquiry">Family/Carer Inquiry</option>
                  <option value="professional-referral">Professional Referral</option>
                  <option value="other">Other</option>
                </select>
                {errors.inquiryType && (
                  <p className="mt-1 text-sm text-red-600">{errors.inquiryType.message}</p>
                )}
              </div>

              {/* NDIS Participant Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Are you currently an NDIS participant? *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register('currentNDISParticipant')}
                      type="radio"
                      value="yes"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">Yes, I have an NDIS plan</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register('currentNDISParticipant')}
                      type="radio"
                      value="no"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">No, I'm not currently a participant</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register('currentNDISParticipant')}
                      type="radio"
                      value="applying"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700">I'm currently applying</span>
                  </label>
                </div>
                {errors.currentNDISParticipant && (
                  <p className="mt-1 text-sm text-red-600">{errors.currentNDISParticipant.message}</p>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  {...register('preferredContact')}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Please select...</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="video">Video Call</option>
                  <option value="in-person">In-Person Meeting</option>
                </select>
                {errors.preferredContact && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredContact.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  rows={6}
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Tell us about your needs, goals, or any questions you have..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start">
                  <input
                    {...register('consent')}
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I agree to the collection and use of my personal information as outlined in the 
                    <a href="/privacy" className="text-primary-600 hover:text-primary-500 ml-1">
                      Privacy Policy
                    </a>
                    *
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center gap-3 bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
