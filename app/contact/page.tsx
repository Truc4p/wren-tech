'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      alert(t('contactPage.successMessage'))
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title">{t('contactPage.title')}</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            {t('contactPage.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contactPage.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder={t('contactPage.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder={t('contactPage.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder={t('contactPage.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                  >
                    <option value="">{t('contactPage.selectService')}</option>
                    <option value="web-development">{t('contactPage.serviceWebDev')}</option>
                    <option value="ui-ux-design">{t('contactPage.serviceUiUx')}</option>
                    <option value="ecommerce">{t('contactPage.serviceEcommerce')}</option>
                    <option value="backend">{t('contactPage.serviceBackend')}</option>
                    <option value="seo">{t('contactPage.serviceSeo')}</option>
                    <option value="other">{t('contactPage.serviceOther')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder={t('contactPage.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? t('contactPage.sending') : t('contactPage.send')}</span>
                  <FiSend />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contactPage.infoTitle')}</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.address')}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{t('contactPage.addressValue')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.phone')}</h3>
                    <a href={`tel:${t('contactPage.phoneValue')}`} className="text-gray-600 hover:text-primary-600">
                      {t('contactPage.phoneValue')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t('contactPage.email')}</h3>
                    <a href={`mailto:${t('contactPage.emailValue')}`} className="text-gray-600 hover:text-primary-600">
                      {t('contactPage.emailValue')}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t('contactPage.hoursTitle')}</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>{t('contactPage.monday')}</span>
                    <span className="font-semibold">{t('contactPage.mondayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contactPage.saturday')}</span>
                    <span className="font-semibold">{t('contactPage.saturdayHours')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contactPage.sunday')}</span>
                    <span className="font-semibold">{t('contactPage.sundayHours')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
