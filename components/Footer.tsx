'use client'

import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const services = [
    { name: t('footer.service1'), href: '/services#web-development' },
    { name: t('footer.service2'), href: '/services#react-apps' },
    { name: t('footer.service3'), href: '/services#ecommerce' },
    { name: t('footer.service4'), href: '/services#digital-products' },
  ]

  const company = [
    { name: t('nav.home'), href: '/' },
    { name: t('footer.aboutUs'), href: '/about' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, href: '#' },
    { name: 'Twitter', icon: FiTwitter, href: '#' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
    { name: 'Instagram', icon: FiInstagram, href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Icon container with gradient background */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20 group-hover:shadow-xl group-hover:shadow-primary-600/30 transition-all duration-300 group-hover:scale-105">
                  {/* Stylized W icon */}
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4L7 20L12 8L17 20L21 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Text */}
              <div className="flex flex-col -space-y-1">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Wren
                </span>
                <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                  Tech
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-600 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">123 ABC Street, Son Tra, Danang, Vietnam</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-600 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-600 flex-shrink-0" size={18} />
                <a href="mailto:info@wrentech.com" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                  info@wrentech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Wren Tech. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
