"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setIsVisible(true)

      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Check for hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('magnetic')
      setIsHovering(!!isHoverable)
    }

    // Smooth ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 22}px, ${ringY - 22}px)`
      requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousemove', handleElementHover)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    animateRing()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousemove', handleElementHover)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#f8f7f4',
          borderRadius: '50%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: 44,
          height: 44,
          border: '1px solid #f8f7f4',
          borderRadius: '50%',
          opacity: isVisible ? 0.5 : 0,
          transition: 'opacity 0.3s ease, width 0.3s ease, height 0.3s ease',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
    </>
  )
}
