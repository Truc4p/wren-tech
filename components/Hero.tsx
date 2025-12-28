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
            <div className="relative w-full h-[550px]">
              {/* Background glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/30 via-teal-400/20 to-emerald-400/30 rounded-full blur-3xl"></div>
              
              {/* Main illustration container */}
              <div className="relative w-full h-full">
                {/* Floating Card 1 - Code Editor (Top Left) */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-8 w-56 h-36 bg-white rounded-2xl shadow-2xl overflow-hidden group hover:shadow-cyan-200/50 transition-shadow duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white"></div>
                  <div className="relative p-4">
                    {/* Window controls */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-400 rounded-full group-hover:bg-red-500 transition-colors"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:bg-yellow-500 transition-colors"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full group-hover:bg-green-500 transition-colors"></div>
                    </div>
                    {/* Code lines */}
                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-400 font-mono">1</div>
                        <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-300 rounded w-16"></div>
                        <div className="h-2 bg-cyan-200 rounded w-12"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-400 font-mono">2</div>
                        <div className="h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded w-20"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-400 font-mono">3</div>
                        <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded w-14"></div>
                        <div className="h-2 bg-pink-200 rounded w-10"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-xs text-gray-400 font-mono">4</div>
                        <div className="h-2 bg-gray-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"></div>
                </motion.div>

                {/* Floating Card 2 - Dashboard (Center Right) */}
                <motion.div
                  animate={{ 
                    y: [0, 25, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-28 right-0 w-64 h-48 bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/90 via-teal-600/90 to-emerald-600/90"></div>
                  <div className="relative p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/30">
                          <div className="w-5 h-5 bg-white rounded-lg"></div>
                        </div>
                        <div>
                          <div className="h-2 bg-white/60 rounded w-16 mb-1"></div>
                          <div className="h-1.5 bg-white/40 rounded w-12"></div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-xl rounded-lg flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full mx-0.5"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Chart */}
                    <div className="flex-1 flex items-end justify-between space-x-2">
                      <motion.div 
                        animate={{ scaleY: [1, 0.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                        className="w-full bg-white/30 backdrop-blur-sm rounded-t-lg h-12"
                      ></motion.div>
                      <motion.div 
                        animate={{ scaleY: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                        className="w-full bg-white/50 backdrop-blur-sm rounded-t-lg h-20"
                      ></motion.div>
                      <motion.div 
                        animate={{ scaleY: [1, 0.9, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                        className="w-full bg-white/40 backdrop-blur-sm rounded-t-lg h-16"
                      ></motion.div>
                      <motion.div 
                        animate={{ scaleY: [1, 1.15, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        className="w-full bg-white/60 backdrop-blur-sm rounded-t-lg h-24"
                      ></motion.div>
                    </div>
                  </div>
                  {/* Shimmer effect */}
                  <motion.div 
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  ></motion.div>
                </motion.div>

                {/* Floating Card 3 - Design Palette (Bottom Left) */}
                <motion.div
                  animate={{ 
                    y: [0, -18, 0],
                    rotate: [0, -1, 0]
                  }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-24 left-0 w-60 h-40 bg-white rounded-2xl shadow-2xl overflow-hidden group hover:shadow-teal-200/50 transition-shadow duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative p-5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-lg"></div>
                        <div>
                          <div className="h-2 bg-gray-300 rounded w-16 mb-1"></div>
                          <div className="h-1.5 bg-gray-200 rounded w-12"></div>
                        </div>
                      </div>
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Color palette */}
                    <div className="grid grid-cols-4 gap-2">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl shadow-lg cursor-pointer"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-14 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl shadow-lg cursor-pointer"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl shadow-lg cursor-pointer"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl shadow-lg cursor-pointer"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Card 4 - Analytics Stats (Bottom Right) */}
                <motion.div
                  animate={{ 
                    y: [0, 22, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-4 right-8 w-52 h-32 bg-white rounded-2xl shadow-2xl overflow-hidden group hover:shadow-emerald-200/50 transition-shadow duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
                  <div className="relative p-4 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold text-gray-400 tracking-wider">PERFORMANCE</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <div className="text-xs font-semibold text-emerald-600">+24%</div>
                      </div>
                    </div>
                    
                    {/* Chart bars */}
                    <div className="flex-1 flex items-end justify-between space-x-1.5">
                      <div className="flex flex-col items-center space-y-1 flex-1">
                        <motion.div 
                          animate={{ scaleY: [0.6, 1, 0.6] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-full bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-t h-10"
                        ></motion.div>
                        <div className="text-[8px] text-gray-400 font-semibold">M</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 flex-1">
                        <motion.div 
                          animate={{ scaleY: [0.8, 1.1, 0.8] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                          className="w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t h-16"
                        ></motion.div>
                        <div className="text-[8px] text-gray-400 font-semibold">T</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 flex-1">
                        <motion.div 
                          animate={{ scaleY: [0.5, 0.9, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                          className="w-full bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t h-12"
                        ></motion.div>
                        <div className="text-[8px] text-gray-400 font-semibold">W</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 flex-1">
                        <motion.div 
                          animate={{ scaleY: [0.7, 1.15, 0.7] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                          className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t h-14"
                        ></motion.div>
                        <div className="text-[8px] text-gray-400 font-semibold">T</div>
                      </div>
                      <div className="flex flex-col items-center space-y-1 flex-1">
                        <motion.div 
                          animate={{ scaleY: [0.9, 1.2, 0.9] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                          className="w-full bg-gradient-to-t from-teal-600 to-teal-500 rounded-t h-18"
                        ></motion.div>
                        <div className="text-[8px] text-gray-400 font-semibold">F</div>
                      </div>
                    </div>
                  </div>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500"></div>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [0, -100, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 right-20 w-2 h-2 bg-cyan-400 rounded-full blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -120, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-40 left-20 w-3 h-3 bg-teal-400 rounded-full blur-sm"
                ></motion.div>
                <motion.div
                  animate={{ 
                    y: [0, -80, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  className="absolute top-60 left-32 w-2 h-2 bg-emerald-400 rounded-full blur-sm"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
