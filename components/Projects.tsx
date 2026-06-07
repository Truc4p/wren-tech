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
      title: t('projectsPage.project14.title'),
      category: t('projectsPage.project14.category'),
      description: t('projectsPage.project14.description'),
      image: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=1200&h=800&fit=crop',
      tags: ['Node.js', 'Vue 3', 'MongoDB', 'React Native', 'Google Gemini AI', 'Redis'],
      client: t('projectsPage.project14.client'),
      year: '2025',
      link: 'https://wrencos-frontend.vercel.app/',
    },
    {
      title: t('projectsPage.project15.title'),
      category: t('projectsPage.project15.category'),
      description: t('projectsPage.project15.description'),
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=800&fit=crop',
      tags: ['React Native', 'Flask', 'SQLite', 'Google Gemini AI', 'USDA API', 'Expo'],
      client: t('projectsPage.project15.client'),
      year: '2025',
      link: 'https://nutrition-track-dusky.vercel.app/',
    },
    {
      title: t('projectsPage.project16.title'),
      category: t('projectsPage.project16.category'),
      description: t('projectsPage.project16.description'),
      image: 'https://images.unsplash.com/photo-1609357912334-e96886c0212b?w=1200&h=800&fit=crop',
      tags: ['Node.js', 'Vue 3', 'MongoDB', 'React Native', 'Google Gemini AI', 'Qdrant', 'RAG'],
      client: t('projectsPage.project16.client'),
      year: '2026',
      link: 'https://derma-mind-vert.vercel.app/',
    },
    {
      title: t('projectsPage.project17.title'),
      category: t('projectsPage.project17.category'),
      description: t('projectsPage.project17.description'),
      image: 'https://plus.unsplash.com/premium_photo-1663091967607-2e15b89f4d6e?w=1200&h=800&fit=crop',
      tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Eloquent ORM'],
      client: t('projectsPage.project17.client'),
      year: '2025',
      link: 'https://warehouse-management-system-ecru.vercel.app/',
    },
    {
      title: t('projectsPage.project20.title'),
      category: t('projectsPage.project20.category'),
      description: t('projectsPage.project20.description'),
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop',
      tags: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Groq', 'RAG', 'HTML/CSS/JS'],
      client: t('projectsPage.project20.client'),
      year: '2025',
      link: 'https://lifeos-ai-seven.vercel.app/',
    },
    {
      title: t('projectsPage.project18.title'),
      category: t('projectsPage.project18.category'),
      description: t('projectsPage.project18.description'),
      image: 'https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1200&h=800&fit=crop',
      tags: ['.NET', 'C#', 'SQL Server', 'React', 'Docker'],
      client: t('projectsPage.project18.client'),
      year: '2025',
      link: 'https://edu-center-app.onrender.com',
    },
    {
      title: t('projectsPage.project19.title'),
      category: t('projectsPage.project19.category'),
      description: t('projectsPage.project19.description'),
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop',
      tags: ['Java', 'DSA', 'CSV', 'HTML', 'CSS', 'JavaScript'],
      client: t('projectsPage.project19.client'),
      year: '2026',
      link: 'https://books-application-eight.vercel.app/',
    },
    {
      title: t('projectsPage.project7.title'),
      category: t('projectsPage.project7.category'),
      description: t('projectsPage.project7.description'),
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop',
      tags: ['Next.js', 'Prisma', 'TypeScript', 'Tailwind CSS'],
      client: t('projectsPage.project7.client'),
      year: '2025',
      link: 'https://paradise-resort-rouge.vercel.app',
    },
    {
      title: t('projectsPage.project9.title'),
      category: t('projectsPage.project9.category'),
      description: t('projectsPage.project9.description'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      tags: ['Next.js 14', 'TypeScript', 'Prisma', 'Mapbox', 'PostgreSQL'],
      client: t('projectsPage.project9.client'),
      year: '2025',
      link: 'https://real-estate-liart-tau-15.vercel.app/',
    },
    {
      title: t('projectsPage.project10.title'),
      category: t('projectsPage.project10.category'),
      description: t('projectsPage.project10.description'),
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
      client: t('projectsPage.project10.client'),
      year: '2025',
      link: 'https://urban-bistro-ten.vercel.app/',
    },
    {
      title: t('projectsPage.project8.title'),
      category: t('projectsPage.project8.category'),
      description: t('projectsPage.project8.description'),
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop',
      tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      client: t('projectsPage.project8.client'),
      year: '2025',
      link: 'https://fashion-one-teal.vercel.app/',
    },
    {
      title: t('projectsPage.project11.title'),
      category: t('projectsPage.project11.category'),
      description: t('projectsPage.project11.description'),
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      client: t('projectsPage.project11.client'),
      year: '2025',
      link: 'https://car-dana.vercel.app/',
    },
    {
      title: t('projectsPage.project12.title'),
      category: t('projectsPage.project12.category'),
      description: t('projectsPage.project12.description'),
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&h=800&fit=crop',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      client: t('projectsPage.project12.client'),
      year: '2025',
      link: 'https://dental-care-ebon.vercel.app/',
    },
    {
      title: t('projectsPage.project13.title'),
      category: t('projectsPage.project13.category'),
      description: t('projectsPage.project13.description'),
      image: 'https://plus.unsplash.com/premium_photo-1664970900025-1e3099ca757a?w=1200&h=800&fit=crop',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      client: t('projectsPage.project13.client'),
      year: '2025',
      link: 'https://coffee-shop-xi-six.vercel.app/',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 bg-gray-50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {project.link ? (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
                  <div className="p-5 sm:p-6">
                    <div className="text-xs sm:text-sm text-primary-600 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
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
                </Link>
              ) : (
                <>
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
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
                  <div className="p-5 sm:p-6">
                    <div className="text-xs sm:text-sm text-primary-600 font-semibold mb-2">{project.category}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    
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
                </>
              )}
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
