import type { Metadata } from 'next'
import { FiCode, FiLayout, FiShoppingCart, FiDatabase, FiSmartphone, FiTrendingUp } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Our Services - Wren Digital',
  description: 'Explore our comprehensive web development and digital solutions services.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance and user experience.',
      features: ['Custom Development', 'Responsive Design', 'Performance Optimization', 'SEO-Friendly'],
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement across all devices.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      icon: FiShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payments, inventory management, and seamless checkout experiences.',
      features: ['Shopping Cart', 'Payment Integration', 'Product Management', 'Order Tracking'],
    },
    {
      icon: FiDatabase,
      title: 'Backend Development',
      description: 'Robust server-side solutions with databases, APIs, and scalable architecture for your applications.',
      features: ['API Development', 'Database Design', 'Authentication', 'Cloud Integration'],
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that look perfect on all devices, from smartphones to desktop computers.',
      features: ['Mobile-First', 'Cross-Browser', 'Progressive Web Apps', 'Touch Optimized'],
    },
    {
      icon: FiTrendingUp,
      title: 'SEO Optimization',
      description: 'Search engine optimization to improve your visibility and drive organic traffic to your website.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Analytics'],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business grow and succeed in the modern web
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create a solution tailored to your needs
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
