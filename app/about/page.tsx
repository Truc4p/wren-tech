import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Wren Digital',
  description: 'Learn more about Wren Digital, our mission, and the team behind your digital success.',
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom text-center">
          <h1 className="section-title">About Wren Digital</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            We are a team of passionate developers and designers committed to creating exceptional digital experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2020, Wren Digital emerged from a simple belief: every business deserves 
                a powerful digital presence. What started as a small team of developers has grown 
                into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in creating modern, high-performance websites and applications using 
                cutting-edge technologies like React, Next.js, and TypeScript. Our approach combines 
                technical excellence with creative design to deliver solutions that not only look 
                great but drive real business results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over 100 successful projects and counting, we pride ourselves on our commitment 
                to quality, transparency, and client satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Team Photo Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every line of code, every design element is crafted 
                with precision and care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Client Success</h3>
              <p className="text-gray-600">
                Your success is our success. We're committed to delivering solutions that help your 
                business grow and thrive.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of technology trends to ensure your digital presence is always modern 
                and competitive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
