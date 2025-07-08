"use client"
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import dynamic from 'next/dynamic'

interface SectionTransitionProps {
  children: React.ReactNode;
}

// Dynamically import the WebGL component with SSR disabled
const TransitionCanvas = dynamic(
  () => import('./TransitionCanvas'),
  { 
    ssr: false,
    loading: () => null 
  }
)

export default function SectionTransition({ children }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div ref={ref} className="relative">
      {isMounted && isInView && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <TransitionCanvas />
        </div>
      )}
      {children}
    </div>
  )
} 