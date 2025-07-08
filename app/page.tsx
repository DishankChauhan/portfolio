"use client"
import { Suspense, lazy, useEffect } from 'react'
import Loading from './loading'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import BackgroundGrid from './components/BackgroundGrid'
import ScrollProgress from './components/ScrollProgress'
import ParticleBackground from './components/ParticleBackground'
import FloatingHeading from './components/FloatingHeading'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy load all components
const Header = lazy(() => import('./components/Header'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Activities = lazy(() => import('./components/Hackathons'))
const Contact = lazy(() => import('./components/Contact'))
const Achievements = lazy(() => import('./components/Achievements'))
const LeetcodeStats = lazy(() => import('./components/LeetcodeStats'))

export default function Home() {
  // Enable keyboard navigation
  useKeyboardNavigation()
  
  // Enable scroll animations
  useScrollAnimations()

  // Add keyboard shortcut helper
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '?' && e.shiftKey) {
        // Show keyboard shortcuts modal
        console.log('Show keyboard shortcuts')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <motion.main 
      className="min-h-screen max-w-4xl mx-auto px-6 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <BackgroundGrid className="parallax" data-speed="0.2" />
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <div className="space-y-16">
            <div className="space-y-4">
              <LeetcodeStats />
              <section id="header" className="focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <Header />
              </section>
            </div>
            
            <section id="about" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>About Me</FloatingHeading>
              <About />
            </section>
            
            <section id="experience" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Experience</FloatingHeading>
              <Experience />
            </section>
            
            <section id="education" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Education</FloatingHeading>
              <Education />
            </section>
            
            <section id="skills" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Skills</FloatingHeading>
              <Skills />
            </section>
            
            <section id="achievements" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Achievements</FloatingHeading>
              <Achievements />
            </section>
            
            <section id="projects" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Projects</FloatingHeading>
              <Projects />
            </section>
            
            <section id="activities" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Activities</FloatingHeading>
              <Activities />
            </section>
            
            <section id="contact" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
              <FloatingHeading>Contact</FloatingHeading>
              <Contact />
            </section>
          </div>
        </Suspense>
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <div className="sr-only">
        <h2>Keyboard Shortcuts</h2>
        <ul>
          <li>↑/k: Previous section</li>
          <li>↓/j: Next section</li>
          <li>Home: Top of page</li>
          <li>End: Bottom of page</li>
          <li>Alt + 1-9: Jump to section</li>
          <li>?: Show this help</li>
        </ul>
      </div>
    </motion.main>
  )
} 