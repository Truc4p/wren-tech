'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectsPage() {
  const { t } = useLanguage()
  
  const projects = [
    {
      title: t('projectsPage.project1.title'),
      category: t('projectsPage.project1.category'),
      description: t('projectsPage.project1.description'),
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&h=800&fit=crop',
      tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'MongoDB'],
      client: t('projectsPage.project1.client'),
      year: '2024',
    },
    {
      title: t('projectsPage.project2.title'),
      category: t('projectsPage.project2.category'),
      description: t('projectsPage.project2.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      tags: ['React', 'Chart.js', 'REST API', 'PostgreSQL'],
      client: t('projectsPage.project2.client'),
      year: '2024',
    },
    {
      title: t('projectsPage.project3.title'),
      category: t('projectsPage.project3.category'),
      description: t('projectsPage.project3.description'),
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      tags: ['Next.js', 'Framer Motion', 'Sanity CMS', 'TypeScript'],
      client: t('projectsPage.project3.client'),
      year: '2023',
    },
    {
      title: t('projectsPage.project4.title'),
      category: t('projectsPage.project4.category'),
      description: t('projectsPage.project4.description'),
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'SendGrid'],
      client: t('projectsPage.project4.client'),
      year: '2023',
    },
    {
      title: t('projectsPage.project5.title'),
      category: t('projectsPage.project5.category'),
      description: t('projectsPage.project5.description'),
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop',
      tags: ['PWA', 'React', 'Firebase', 'Service Workers'],
      client: t('projectsPage.project5.client'),
      year: '2023',
    },
    {
      title: t('projectsPage.project6.title'),
      category: t('projectsPage.project6.category'),
      description: t('projectsPage.project6.description'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
      tags: ['Next.js', 'Google Maps API', 'PostgreSQL', 'AWS'],
      client: t('projectsPage.project6.client'),
      year: '2022',
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
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
