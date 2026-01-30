'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const Testimonials = () => {
  const { t } = useLanguage()
  const testimonials = [
    {
      name: t('testimonial1.name'),
      role: t('testimonial1.role'),
      content: t('testimonial1.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: t('testimonial2.name'),
      role: t('testimonial2.role'),
      content: t('testimonial2.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    },
    {
      name: t('testimonial3.name'),
      role: t('testimonial3.role'),
      content: t('testimonial3.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      name: t('testimonial4.name'),
      role: t('testimonial4.role'),
      content: t('testimonial4.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      name: t('testimonial5.name'),
      role: t('testimonial5.role'),
      content: t('testimonial5.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    },
    {
      name: t('testimonial6.name'),
      role: t('testimonial6.role'),
      content: t('testimonial6.content'),
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-32 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('testimonials.title')}</h2>
          <p className="section-subtitle">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
