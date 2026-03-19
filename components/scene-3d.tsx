"use client"

import { useEffect, useRef, useState } from "react"

export function Scene3D({ children }: { children: React.ReactNode }) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 8
      const y = (e.clientX / window.innerWidth - 0.5) * -8
      setRotation({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="relative"
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 50%',
      }}
    >
      <div
        ref={sceneRef}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export function FloatingPlane({ 
  className = "", 
  depth = 0,
  children 
}: { 
  className?: string
  depth?: number
  children?: React.ReactNode 
}) {
  return (
    <div
      className={className}
      style={{
        transform: `translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

export function WireframeRing({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute animate-[wireframe-spin_20s_linear_infinite] ${className}`}
      style={{
        width: 300,
        height: 300,
        transformStyle: 'preserve-3d',
      }}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            border: '1px solid rgba(248, 247, 244, 0.1)',
            borderRadius: '50%',
            transform: `rotateY(${i * 15}deg)`,
          }}
        />
      ))}
    </div>
  )
}

export function PerspectiveGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: '500px',
        perspectiveOrigin: '50% 0%',
      }}
    >
      <div
        className="absolute left-0 right-0 bottom-0"
        style={{
          height: '60vh',
          background: `
            linear-gradient(90deg, rgba(248,247,244,0.03) 1px, transparent 1px),
            linear-gradient(rgba(248,247,244,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'rotateX(60deg)',
          transformOrigin: 'bottom',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
        }}
      />
    </div>
  )
}
