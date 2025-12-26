'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  const stats = [
    { number: '100+', label: t('hero.stat1') },
    { number: '5+', label: t('hero.stat2') },
    { number: '5.0', label: t('hero.stat3') },
  ]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <FiCheckCircle />
              <span className="text-sm font-medium">{t('hero.badge')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>{t('hero.cta1')}</span>
                <FiArrowRight />
              </Link>
              <Link href="/projects" className="btn-secondary inline-flex items-center justify-center">
                {t('hero.cta2')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl shadow-2xl overflow-hidden">
              {/* Placeholder for hero image - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl"></div>
                  </div>
                  <p className="text-lg font-semibold">Your Hero Image Here</p>
                  <p className="text-sm opacity-80 mt-2">Replace with your actual design</p>
                </div>
              </div>
              
              {/* Floating elements decoration */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg animate-pulse delay-75"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
