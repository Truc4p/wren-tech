'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const CTA = () => {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
            >
              <span>{t('cta.button1')}</span>
              <FiArrowRight />
            </Link>
            <a
              href="mailto:info@wrendigital.com"
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-all duration-300 inline-flex items-center space-x-2"
            >
              <FiMail />
              <span>{t('cta.button2')}</span>
            </a>
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-12 border-t border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/80">{t('cta.support')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/80">{t('cta.satisfaction')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{t('cta.delivery')}</div>
                <div className="text-white/80">{t('cta.delivery')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
