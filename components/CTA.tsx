'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const CTA = () => {
  const { t } = useLanguage()
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-primary-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center space-x-2"
            >
              <span>{t('cta.button1')}</span>
              <FiArrowRight />
            </Link>
            <a
              href="mailto:info@wrentech.com"
              className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
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
            className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-white/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-white">
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm sm:text-base text-white/80">{t('cta.support')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                <div className="text-sm sm:text-base text-white/80">{t('cta.satisfaction')}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-2">{t('cta.delivery')}</div>
                <div className="text-sm sm:text-base text-white/80">{t('cta.delivery')}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
