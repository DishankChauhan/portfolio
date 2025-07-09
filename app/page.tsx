"use client"
import { Suspense, lazy, useEffect } from 'react'
import Loading from './loading'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import BackgroundGrid from './components/BackgroundGrid'
import ScrollProgress from './components/ScrollProgress'
import FloatingHeading from './components/FloatingHeading'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import { useGSAPAnimations } from './hooks/useGSAPAnimations'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

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
const EasterEggGame = lazy(() => import('./components/EasterEggGame'))

// Dynamically import components that use WebGL
const ParticleBackground = dynamic(() => import('./components/ParticleBackground'), {
  ssr: false,
  loading: () => null
})

const SectionTransition = dynamic(() => import('./components/SectionTransition'), {
  ssr: false,
  loading: () => null
})

export default function Home() {
  useKeyboardNavigation()
  useScrollAnimations()
  const timeline = useGSAPAnimations()

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
      <EasterEggGame />
      
      <AnimatePresence mode="wait">
        <Suspense fallback={<Loading />}>
          <div className="space-y-16">
            <div className="space-y-4">
              <LeetcodeStats />
              <section id="header" className="focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <Header />
              </section>
            </div>
            
            <SectionTransition>
              <section id="about" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>About Me</FloatingHeading>
                <About />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="experience" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Experience</FloatingHeading>
                <Experience />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="education" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Education</FloatingHeading>
                <Education />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="skills" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Skills</FloatingHeading>
                <Skills />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="achievements" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Achievements</FloatingHeading>
                <Achievements />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="projects" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Projects</FloatingHeading>
                <Projects />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="activities" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Activities</FloatingHeading>
                <Activities />
              </section>
            </SectionTransition>
            
            <SectionTransition>
              <section id="contact" className="pt-4 focus-visible:outline-none focus-visible:ring-2 ring-primary" tabIndex={0}>
                <FloatingHeading>Contact</FloatingHeading>
                <Contact />
              </section>
            </SectionTransition>
          </div>
        </Suspense>
      </AnimatePresence>
    </motion.main>
  )
} 