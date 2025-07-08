"use client"
import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export function useScrollAnimations() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      
      sections.forEach(section => {
        if (section instanceof HTMLElement) {
          const rect = section.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0

          if (isVisible) {
            section.style.opacity = '1'
            section.style.transform = 'translateY(0)'
          }
        }
      })
    }

    // Initial setup
    document.querySelectorAll('section').forEach(section => {
      if (section instanceof HTMLElement) {
        section.style.opacity = '0'
        section.style.transform = 'translateY(20px)'
        section.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }
    })

    // Add parallax effect to background elements
    const parallaxElements = document.querySelectorAll('.parallax')
    const handleParallax = () => {
      parallaxElements.forEach(element => {
        if (element instanceof HTMLElement) {
          const speed = element.getAttribute('data-speed') || '0.5'
          const yPos = -(window.scrollY * parseFloat(speed))
          element.style.transform = `translate3d(0, ${yPos}px, 0)`
        }
      })
    }

    window.addEventListener('scroll', () => {
      handleScroll()
      handleParallax()
      requestAnimationFrame(handleParallax)
    })

    // Initial check
    handleScroll()
    handleParallax()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleParallax)
    }
  }, [prefersReducedMotion])
} 