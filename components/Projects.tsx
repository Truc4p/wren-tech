'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Modern online store with seamless checkout and inventory management',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Stripe', 'Tailwind'],
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Application',
      description: 'Analytics dashboard with real-time data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'Chart.js', 'API'],
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio showcasing photography and design work',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Framer Motion', 'CMS'],
    },
    {
      title: 'Restaurant Booking',
      category: 'Web Application',
      description: 'Online reservation system with menu and table management',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Fitness App',
      category: 'Mobile Web',
      description: 'Workout tracker with progress monitoring and meal planning',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      tags: ['PWA', 'React', 'Firebase'],
    },
    {
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Property listing platform with advanced search filters',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      tags: ['Next.js', 'Maps API', 'Database'],
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <FiExternalLink className="text-primary-600" size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn-primary inline-block">
            {t('projects.viewAll')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
