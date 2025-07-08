"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingHeadingProps {
  children: string;
  className?: string;
}

export default function FloatingHeading({ children, className = "" }: FloatingHeadingProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 })
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateGradientPosition = () => {
    const x = (mousePosition.x / dimensions.width) * 100
    const y = (mousePosition.y / dimensions.height) * 100
    return `${x}% ${y}%`
  }

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ 
          backgroundPosition: calculateGradientPosition(),
          backgroundSize: '200% 200%'
        }}
      >
        {children}
      </h2>
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundPosition: calculateGradientPosition(),
          backgroundSize: '200% 200%',
          zIndex: -1
        }}
      />
    </motion.div>
  )
} 