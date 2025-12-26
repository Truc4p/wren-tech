import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wren Digital - Modern Web Solutions',
  description: 'Professional web development and digital solutions. We create stunning websites, powerful web applications, and premium digital products.',
  keywords: 'web development, web design, digital solutions, React, Next.js, web applications',
  authors: [{ name: 'Wren Digital' }],
  openGraph: {
    title: 'Wren Digital - Modern Web Solutions',
    description: 'Professional web development and digital solutions',
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
