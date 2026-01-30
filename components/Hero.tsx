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
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center space-x-2 w-full sm:w-auto">
                <span>{t('hero.cta1')}</span>
                <FiArrowRight />
              </Link>
              <Link href="/projects" className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto">
                {t('hero.cta2')}
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
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
            <div className="relative w-full h-[500px]">
              {/* Main illustration container */}
              <div className="relative w-full h-full">
                {/* Floating Card 1 - Top Left */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-10 w-48 h-32 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </motion.div>

                {/* Floating Card 2 - Center Right */}
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-32 right-0 w-56 h-40 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl shadow-2xl p-5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-8 bg-white/60 rounded"></div>
                      <div className="w-2 h-12 bg-white/80 rounded"></div>
                      <div className="w-2 h-6 bg-white/60 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/40 rounded w-full"></div>
                    <div className="h-2 bg-white/30 rounded w-4/5"></div>
                  </div>
                </motion.div>

                {/* Floating Card 3 - Bottom Left */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 w-52 h-36 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full"></div>
                    <div>
                      <div className="h-2 bg-gray-300 rounded w-20 mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg"></div>
                    <div className="h-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg"></div>
                    <div className="h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg"></div>
                  </div>
                </motion.div>

                {/* Floating Card 4 - Bottom Right */}
                <motion.div
                  animate={{ y: [0, 25, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-0 right-10 w-44 h-28 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-semibold text-gray-400">ANALYTICS</div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-end space-x-1 h-12">
                    <div className="w-full h-8 bg-primary-200 rounded"></div>
                    <div className="w-full h-12 bg-primary-400 rounded"></div>
                    <div className="w-full h-6 bg-primary-300 rounded"></div>
                    <div className="w-full h-10 bg-primary-500 rounded"></div>
                  </div>
                </motion.div>

                {/* Central Circle Decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
