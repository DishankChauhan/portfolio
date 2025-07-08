"use client"
import { Suspense, lazy } from 'react'
import Loading from './loading'

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
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <Suspense fallback={<Loading />}>
        <div className="space-y-8 animate-fadeIn">
          <LeetcodeStats />
          <Header />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Achievements />
          <Projects />
          <Activities />
          <Contact />
        </div>
      </Suspense>
    </main>
  )
} 