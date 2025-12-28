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
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Wren</span>
              </div>
              <span className="text-xl text-white">Digital</span>
            </div>
            <p className="text-sm text-gray-400">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
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
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-sm">123 ABC Street, Son Tra, Danang, Vietnam</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400 flex-shrink-0" size={18} />
                <a href="tel:+1234567890" className="text-sm hover:text-primary-400 transition-colors">
                  +1 234 567 890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400 flex-shrink-0" size={18} />
                <a href="mailto:info@wrendigital.com" className="text-sm hover:text-primary-400 transition-colors">
                  info@wrendigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Wren Digital. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
