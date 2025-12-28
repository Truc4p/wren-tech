'use client'

import { FiCode, FiLayout, FiShoppingCart, FiDatabase, FiSmartphone, FiTrendingUp } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
  const { t } = useLanguage()
  
  const services = [
    {
      icon: FiCode,
      title: t('service.webDev'),
      description: t('service.webDevDesc'),
      features: [
        t('servicesPage.feature1'),
        t('servicesPage.feature2'),
        t('servicesPage.feature3'),
        t('servicesPage.feature4'),
      ],
    },
    {
      icon: FiLayout,
      title: t('service.uiux'),
      description: t('service.uiuxDesc'),
      features: [
        t('servicesPage.feature5'),
        t('servicesPage.feature6'),
        t('servicesPage.feature7'),
        t('servicesPage.feature8'),
      ],
    },
    {
      icon: FiShoppingCart,
      title: t('service.ecommerce'),
      description: t('service.ecommerceDesc'),
      features: [
        t('servicesPage.feature9'),
        t('servicesPage.feature10'),
        t('servicesPage.feature11'),
        t('servicesPage.feature12'),
      ],
    },
    {
      icon: FiDatabase,
      title: t('service.backend'),
      description: t('service.backendDesc'),
      features: [
        t('servicesPage.feature13'),
        t('servicesPage.feature14'),
        t('servicesPage.feature15'),
        t('servicesPage.feature16'),
      ],
    },
    {
      icon: FiSmartphone,
      title: t('service.responsive'),
      description: t('service.responsiveDesc'),
      features: [
        t('servicesPage.feature17'),
        t('servicesPage.feature18'),
        t('servicesPage.feature19'),
        t('servicesPage.feature20'),
      ],
    },
    {
      icon: FiTrendingUp,
      title: t('service.seo'),
      description: t('service.seoDesc'),
      features: [
        t('servicesPage.feature21'),
        t('servicesPage.feature22'),
        t('servicesPage.feature23'),
        t('servicesPage.feature24'),
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title">{t('servicesPage.title')}</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t('servicesPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('servicesPage.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('servicesPage.cta.subtitle')}
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            {t('servicesPage.cta.button')}
          </a>
        </div>
      </section>
    </div>
  )
}
