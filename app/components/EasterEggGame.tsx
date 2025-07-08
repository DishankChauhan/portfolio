"use client"
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GameObject {
  x: number
  y: number
  size: number
  color: string
}

export default function EasterEggGame() {
  const [isVisible, setIsVisible] = useState(false)
  const [score, setScore] = useState(0)
  const [player, setPlayer] = useState<GameObject>({
    x: 50,
    y: 50,
    size: 20,
    color: '#00ff00'
  })
  const [targets, setTargets] = useState<GameObject[]>([])
  const gameRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number>()
  const [gameOver, setGameOver] = useState(false)

  // Secret key combination: up, up, down, down, left, right, left, right, b, a
  useEffect(() => {
    const keySequence: string[] = []
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keySequence.push(e.key)
      if (keySequence.length > konami.length) {
        keySequence.shift()
      }
      if (JSON.stringify(keySequence) === JSON.stringify(konami)) {
        setIsVisible(true)
        setGameOver(false)
        setScore(0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Game loop
  useEffect(() => {
    if (!isVisible || gameOver) return

    const spawnTarget = () => {
      const newTarget: GameObject = {
        x: Math.random() * (gameRef.current?.clientWidth ?? 300 - 20),
        y: Math.random() * (gameRef.current?.clientHeight ?? 300 - 20),
        size: 15,
        color: '#ff0000'
      }
      setTargets(prev => [...prev, newTarget])
    }

    const interval = setInterval(spawnTarget, 2000)
    
    const gameLoop = () => {
      setTargets(prev => {
        const newTargets = prev.filter(target => {
          const dx = target.x - player.x
          const dy = target.y - player.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < (player.size + target.size) / 2) {
            setScore(s => s + 1)
            return false
          }
          return true
        })
        
        if (newTargets.length > 10) {
          setGameOver(true)
        }
        
        return newTargets
      })
      
      frameRef.current = requestAnimationFrame(gameLoop)
    }
    
    frameRef.current = requestAnimationFrame(gameLoop)
    
    return () => {
      clearInterval(interval)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isVisible, player, gameOver])

  // Handle player movement
  useEffect(() => {
    if (!isVisible) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const speed = 5
      switch (e.key) {
        case 'ArrowUp':
          setPlayer(p => ({ ...p, y: Math.max(0, p.y - speed) }))
          break
        case 'ArrowDown':
          setPlayer(p => ({ ...p, y: Math.min(gameRef.current?.clientHeight ?? 300 - p.size, p.y + speed) }))
          break
        case 'ArrowLeft':
          setPlayer(p => ({ ...p, x: Math.max(0, p.x - speed) }))
          break
        case 'ArrowRight':
          setPlayer(p => ({ ...p, x: Math.min(gameRef.current?.clientWidth ?? 300 - p.size, p.x + speed) }))
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
        onClick={() => !gameOver && setIsVisible(false)}
      >
        <motion.div
          className="relative bg-gray-800 rounded-lg p-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-white mb-2">Score: {score}</div>
          <div
            ref={gameRef}
            className="relative w-[300px] h-[300px] bg-gray-900 rounded overflow-hidden"
          >
            {!gameOver ? (
              <>
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    width: player.size,
                    height: player.size,
                    backgroundColor: player.color,
                    x: player.x,
                    y: player.y
                  }}
                />
                {targets.map((target, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                      width: target.size,
                      height: target.size,
                      backgroundColor: target.color,
                      x: target.x,
                      y: target.y
                    }}
                  />
                ))}
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-xl mb-4">Game Over!</h3>
                <p className="mb-4">Final Score: {score}</p>
                <button
                  className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
                  onClick={() => {
                    setGameOver(false)
                    setScore(0)
                    setTargets([])
                  }}
                >
                  Play Again
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 