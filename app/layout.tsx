import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wren Tech - Modern Web Solutions',
  description: 'Professional web development and technical solutions. We create stunning websites, powerful web applications, and premium software products.',
  keywords: 'web development, web design, software engineering, technical solutions, React, Next.js, web applications',
  authors: [{ name: 'Wren Tech' }],
  openGraph: {
    title: 'Wren Tech - Modern Web Solutions',
    description: 'Professional web development and technical solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
