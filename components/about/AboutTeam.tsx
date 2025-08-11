'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    bio: 'With over 15 years in disability services, Sarah leads our team with passion and expertise in person-centered care.',
    qualifications: 'Master of Social Work, Certified Disability Professional',
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Clinical Manager',
    bio: 'Michael oversees our clinical programs and ensures the highest quality of care for all participants.',
    qualifications: 'Bachelor of Occupational Therapy, NDIS Quality Auditor',
    avatar: 'MC'
  },
  {
    name: 'Emma Williams',
    role: 'Support Coordination Lead',
    bio: 'Emma specializes in helping participants navigate their NDIS journey and maximize their plan outcomes.',
    qualifications: 'Bachelor of Psychology, Certified Support Coordinator',
    avatar: 'EW'
  },
  {
    name: 'David Rodriguez',
    role: 'Community Engagement Manager',
    bio: 'David builds partnerships and develops community programs that enhance participant inclusion.',
    qualifications: 'Master of Community Development, Inclusion Specialist',
    avatar: 'DR'
  },
  {
    name: 'Lisa Thompson',
    role: 'Quality & Compliance Manager',
    bio: 'Lisa ensures we maintain the highest standards and comply with all NDIS requirements and regulations.',
    qualifications: 'Bachelor of Health Administration, Quality Systems Manager',
    avatar: 'LT'
  },
  {
    name: 'James Park',
    role: 'Training & Development Coordinator',
    bio: 'James leads our staff training programs and ensures continuous professional development.',
    qualifications: 'Bachelor of Education, Certified Training Professional',
    avatar: 'JP'
  }
]

export default function AboutTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the People Behind Our Mission
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our experienced and passionate team is dedicated to providing exceptional 
            support services. Each team member brings unique skills and expertise to 
            help you achieve your goals.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-x-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{person.avatar}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium leading-6 text-primary-600">
                    {person.role}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {person.bio}
              </p>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-xs font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                  Qualifications
                </h4>
                <p className="text-xs text-gray-600">
                  {person.qualifications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate, qualified professionals to join our 
              team. If you're committed to making a difference in people's lives, 
              we'd love to hear from you.
            </p>
            <a 
              href="/contact"
              className="btn-primary"
            >
              Career Opportunities
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
