import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Activities from './components/Hackathons'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
    </main>
  )
} 