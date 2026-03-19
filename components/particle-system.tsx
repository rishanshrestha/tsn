"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  depth: number
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles across 3 depth layers
    const particles: Particle[] = []
    const particleCount = 60

    for (let i = 0; i < particleCount; i++) {
      const depth = Math.floor(Math.random() * 3) // 0, 1, 2
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (0.3 - depth * 0.1),
        vy: (Math.random() - 0.5) * (0.3 - depth * 0.1),
        size: 2 - depth * 0.5,
        opacity: 0.6 - depth * 0.15,
        depth,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        // Mouse gravity for near particles (depth 0)
        if (particle.depth === 0) {
          const dx = mouseX - particle.x
          const dy = mouseY - particle.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            particle.vx += dx * 0.00005
            particle.vy += dy * 0.00005
          }
        }

        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(248, 247, 244, ${particle.opacity * 0.3})`
        ctx.fill()

        // Draw connections for near particles
        particles.forEach((other, j) => {
          if (i >= j) return
          if (particle.depth !== other.depth) return
          
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(248, 247, 244, ${(1 - dist / 100) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
