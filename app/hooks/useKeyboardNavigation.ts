"use client"
import { useEffect } from 'react'

const SECTION_IDS = [
  'header',
  'about',
  'experience',
  'education',
  'skills',
  'achievements',
  'projects',
  'activities',
  'contact'
]

export function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't handle if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      const currentSection = SECTION_IDS.find(id => {
        const element = document.getElementById(id)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      const currentIndex = currentSection ? SECTION_IDS.indexOf(currentSection) : -1

      switch (e.key) {
        case 'ArrowDown':
        case 'j':
          e.preventDefault()
          if (currentIndex < SECTION_IDS.length - 1) {
            document.getElementById(SECTION_IDS[currentIndex + 1])?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'ArrowUp':
        case 'k':
          e.preventDefault()
          if (currentIndex > 0) {
            document.getElementById(SECTION_IDS[currentIndex - 1])?.scrollIntoView({ behavior: 'smooth' })
          }
          break
        case 'Home':
          e.preventDefault()
          document.getElementById(SECTION_IDS[0])?.scrollIntoView({ behavior: 'smooth' })
          break
        case 'End':
          e.preventDefault()
          document.getElementById(SECTION_IDS[SECTION_IDS.length - 1])?.scrollIntoView({ behavior: 'smooth' })
          break
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (e.altKey) {
            e.preventDefault()
            const index = parseInt(e.key) - 1
            if (index < SECTION_IDS.length) {
              document.getElementById(SECTION_IDS[index])?.scrollIntoView({ behavior: 'smooth' })
            }
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
} 