import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  HeartIcon 
} from '@heroicons/react/24/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Daily Living Support', href: '/services#daily-living' },
    { name: 'Community Participation', href: '/services#community' },
    { name: 'Personal Care', href: '/services#personal-care' },
    { name: 'Respite Care', href: '/services#respite' },
    { name: 'Transport Services', href: '/services#transport' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'NDIS Code of Conduct', href: '/code-of-conduct' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-white">Micare Choice</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Providing compassionate, professional NDIS services in Melbourne. 
              We are committed to empowering individuals with disabilities to live 
              independently and achieve their goals.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="h-5 w-5 text-primary-400" />
                <span className="text-sm">Melbourne, Victoria, Australia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <a href="tel:+61400000000" className="text-sm hover:text-white transition-colors">
                  +61 400 000 000
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                <a href="mailto:info@micarechoice.com.au" className="text-sm hover:text-white transition-colors">
                  info@micarechoice.com.au
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-sm font-semibold leading-6 text-white">NDIS Registration</h3>
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-gray-300">
                    Registered NDIS Provider
                  </p>
                  <p className="text-sm text-gray-300">
                    Provider ID: [Registration Number]
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-300">Quality & Safeguards Commission Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {currentYear} Micare Choice. All rights reserved. ABN: [ABN Number]
            </p>
            <div className="mt-4 sm:mt-0 flex items-center space-x-1 text-xs text-gray-400">
              <span>Made with</span>
              <HeartIcon className="h-3 w-3 text-red-500" />
              <span>in Melbourne, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
