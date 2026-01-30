'use client'

import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiShoppingCart, FiDatabase, FiSmartphone, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: FiCode,
      title: t('service.webDev'),
      description: t('service.webDevDesc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiLayout,
      title: t('service.uiux'),
      description: t('service.uiuxDesc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiShoppingCart,
      title: t('service.ecommerce'),
      description: t('service.ecommerceDesc'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiDatabase,
      title: t('service.backend'),
      description: t('service.backendDesc'),
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiSmartphone,
      title: t('service.responsive'),
      description: t('service.responsiveDesc'),
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FiTrendingUp,
      title: t('service.seo'),
      description: t('service.seoDesc'),
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary inline-block">
            {t('services.viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
