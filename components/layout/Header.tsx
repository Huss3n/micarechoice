'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  console.log('Header render - navigation:', navigation, 'mobileMenuOpen:', mobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Micare Choice</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">M</span>
              </div>
              <span className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Micare Choice
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'} drop-shadow-lg`} aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-300 relative ${
                isActive(item.href)
                  ? scrolled
                    ? 'text-primary-600'
                    : 'text-white'
                  : scrolled
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600"
                  layoutId="activeIndicator"
                />
              )}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:+61400000000"
            className={`flex items-center gap-2 text-sm font-semibold leading-6 transition-colors duration-300 ${
              scrolled
                ? 'text-gray-900 hover:text-primary-600'
                : 'text-white hover:text-white/90'
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </nav>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[70]"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  type="button"
                  className="rounded-md p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              {/* Navigation menu - Scrollable content */}
              <div className="flex-1 overflow-y-auto p-6 bg-white">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Call button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="tel:+61400000000"
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <PhoneIcon className="h-5 w-5 text-primary-600" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
