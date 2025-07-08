"use client"
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Points } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const count = 5000
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)
    const r = Math.random() * 1.5

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled={false}
      material={
        new THREE.PointsMaterial({
          size: 0.002,
          sizeAttenuation: true,
          transparent: true,
          color: '#fff',
          opacity: 0.6
        })
      }
    />
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 2], fov: 75 }}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  )
} 