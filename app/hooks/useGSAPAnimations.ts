"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export const useGSAPAnimations = () => {
  const timeline = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    // Initialize main timeline
    timeline.current = gsap.timeline()

    // Smooth section transitions
    gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Animate skill bars
    gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.dataset.progress || '0%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 90%'
          }
        }
      )
    })

    // Cleanup
    return () => {
      if (timeline.current) {
        timeline.current.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return timeline.current
} 