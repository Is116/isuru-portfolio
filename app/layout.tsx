import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isuru Pathirathna - Web & Mobile Developer',
  description: 'Open-source enthusiast building web and mobile applications. Passionate about React, React Native, and modern development.',
  keywords: ['isuru pathirathna', 'web developer', 'mobile developer', 'react native', 'react', 'next.js', 'open source', 'typescript'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
