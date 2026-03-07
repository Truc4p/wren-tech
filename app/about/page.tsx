'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">{t('aboutPage.title')}</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t('aboutPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('aboutPage.storyTitle')}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('aboutPage.story1')}
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('aboutPage.story2')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('aboutPage.story3')}
              </p>
            </div>
            <div className="relative rounded-2xl h-96 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Wren Tech Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">{t('aboutPage.valuesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.value1.title')}</h3>
              <p className="text-gray-600">
                {t('aboutPage.value1.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.value2.title')}</h3>
              <p className="text-gray-600">
                {t('aboutPage.value2.description')}
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('aboutPage.value3.title')}</h3>
              <p className="text-gray-600">
                {t('aboutPage.value3.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
