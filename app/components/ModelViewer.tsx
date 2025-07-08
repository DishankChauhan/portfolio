"use client"
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'

interface ModelProps {
  path: string;
}

function Model({ path }: ModelProps) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} />
}

interface ModelViewerProps {
  modelPath: string;
  className?: string;
}

export default function ModelViewer({ modelPath, className = "" }: ModelViewerProps) {
  return (
    <div className={`w-full h-64 ${className}`}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Model path={modelPath} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  )
} 