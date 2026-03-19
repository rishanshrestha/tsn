"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -12
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 12

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovering(false)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}
      {/* Shine effect */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background: isHovering
            ? `radial-gradient(
                circle at ${50 + rotation.y * 2}% ${50 + rotation.x * 2}%,
                rgba(248, 247, 244, 0.1) 0%,
                transparent 60%
              )`
            : 'transparent',
          transition: 'background 0.2s ease',
        }}
      />
    </motion.div>
  )
}
