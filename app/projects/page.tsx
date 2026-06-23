'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectsPage() {
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
      title: t('projectsPage.project22.title'),
      category: t('projectsPage.project22.category'),
      description: t('projectsPage.project22.description'),
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'OpenAI GPT-4', 'Upstash Redis'],
      client: t('projectsPage.project22.client'),
      year: '2026',
      link: 'https://wavelength-blond.vercel.app/',
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
      title: t('projectsPage.project21.title'),
      category: t('projectsPage.project21.category'),
      description: t('projectsPage.project21.description'),
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&h=800&fit=crop',
      tags: ['React', 'Express', 'MongoDB', 'Cloudinary', 'Tailwind CSS', 'shadcn/ui'],
      client: t('projectsPage.project21.client'),
      year: '2026',
      link: 'https://bino-foundry.vercel.app/',
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title">{t('projectsPage.title')}</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t('projectsPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  {project.link ? (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold bg-primary-600 px-6 py-3 rounded-lg">
                            View Project →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-sm text-primary-600 font-semibold mb-2">{project.category}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{t('projectsPage.client')}</div>
                        <div className="font-semibold text-gray-900">{project.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{t('projectsPage.year')}</div>
                        <div className="font-semibold text-gray-900">{project.year}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                    >
                      Visit Website
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
