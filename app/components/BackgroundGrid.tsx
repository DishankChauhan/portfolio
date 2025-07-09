"use client"
import { useEffect, useRef } from 'react'

interface BackgroundGridProps {
  className?: string;
  'data-speed'?: string;
}

export default function BackgroundGrid({ className = "", ...props }: BackgroundGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    resizeCanvas()

    const cellSize = 30
    const cols = Math.ceil(canvas.width / cellSize)
    const rows = Math.ceil(canvas.height / cellSize)

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 0.5

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize
          const y = j * cellSize

          const distanceToMouse = Math.sqrt(
            Math.pow(x - mousePosition.current.x, 2) +
            Math.pow(y - mousePosition.current.y, 2)
          )

          const maxDistance = 150
          const scale = Math.max(0, 1 - distanceToMouse / maxDistance)

          ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + scale * 0.1})`
          
          ctx.beginPath()
          ctx.rect(
            x + scale * 2,
            y + scale * 2,
            cellSize - scale * 4,
            cellSize - scale * 4
          )
          ctx.stroke()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 opacity-50 ${className}`}
      {...props}
    />
  )
} 