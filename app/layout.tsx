"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import ThemeToggle from './components/ThemeToggle'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const ParticlesBackground = dynamic(() => import('./components/ParticlesBackground'), {
  ssr: false,
  loading: () => null
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <ParticlesBackground />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 