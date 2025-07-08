"use client"
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function TransitionEffect() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const shader = {
    uniforms: {
      uTime: { value: 0 },
      uProgress: { value: 0 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uProgress;
      varying vec2 vUv;

      void main() {
        vec2 uv = vUv;
        float progress = uProgress;
        
        float wave = sin(uv.x * 10.0 + uTime) * 0.1;
        uv.y += wave * progress;
        
        float alpha = smoothstep(uv.y - 0.2, uv.y + 0.2, progress);
        
        gl_FragColor = vec4(vec3(0.1, 0.2, 0.3), alpha * 0.5);
      }
    `
  }

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
      materialRef.current.uniforms.uProgress.value = 1
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial 
        ref={materialRef}
        args={[shader]}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function TransitionCanvas() {
  return (
    <Canvas>
      <TransitionEffect />
    </Canvas>
  )
} 