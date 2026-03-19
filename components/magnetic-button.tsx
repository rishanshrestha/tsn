"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "primary" | "outline" | "ghost"
  onClick?: () => void
}

export function MagneticButton({ 
  children, 
  className = "", 
  variant = "primary",
  onClick 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY

    const distance = Math.sqrt(distX * distX + distY * distY)
    const maxDistance = 80

    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      setPosition({
        x: distX * strength * 0.3,
        y: distY * strength * 0.3,
      })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = "relative overflow-hidden magnetic transition-all duration-300"
  const variantStyles = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/10",
  }

  return (
    <motion.button
      ref={buttonRef}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
