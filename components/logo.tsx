"use client"

import { motion } from "framer-motion"

export function Logo({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) {
  const blockSize = size === "small" ? 16 : size === "large" ? 28 : 22
  const gap = size === "small" ? 2 : size === "large" ? 3 : 2
  const fontSize = size === "small" ? "text-[6px]" : size === "large" ? "text-[10px]" : "text-[8px]"

  const blocks = [
    // Row 1 (top) - N E
    { row: 0, col: 2, letter: "N" },
    { row: 0, col: 3, letter: "E" },
    // Row 2 - P A L
    { row: 1, col: 0, letter: null },
    { row: 1, col: 1, letter: null },
    { row: 1, col: 2, letter: "P" },
    { row: 1, col: 3, letter: "A" },
    { row: 1, col: 4, letter: "L" },
    // Row 3 (empty squares on left)
    { row: 2, col: 0, letter: null, outline: true },
    { row: 2, col: 1, letter: null, outline: true },
    { row: 2, col: 2, letter: null },
    { row: 2, col: 3, letter: null },
    // Row 4
    { row: 3, col: 2, letter: null, outline: true },
    { row: 3, col: 3, letter: null, outline: true },
  ]

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Grid blocks */}
      <div 
        className="relative"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(5, ${blockSize}px)`,
          gridTemplateRows: `repeat(4, ${blockSize}px)`,
          gap: `${gap}px`,
        }}
      >
        {blocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            className={`flex items-center justify-center ${fontSize} font-bold tracking-wider
              ${block.outline 
                ? 'border border-foreground/20 bg-transparent' 
                : 'bg-foreground text-background'
              }`}
            style={{
              gridColumn: block.col + 1,
              gridRow: block.row + 1,
              width: blockSize,
              height: blockSize,
            }}
          >
            {block.letter}
          </motion.div>
        ))}
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span 
          className={`font-serif font-semibold leading-none ${
            size === "small" ? "text-lg" : size === "large" ? "text-3xl" : "text-2xl"
          }`}
        >
          The Startup
        </span>
        <span 
          className={`font-sans font-light tracking-wide leading-none ${
            size === "small" ? "text-sm" : size === "large" ? "text-xl" : "text-lg"
          }`}
        >
          Network
        </span>
      </div>
    </div>
  )
}

export function LogoMark({ className = "" }: { className?: string }) {
  const blocks = [
    { row: 0, col: 2, letter: "N" },
    { row: 0, col: 3, letter: "E" },
    { row: 1, col: 0, letter: null },
    { row: 1, col: 1, letter: null },
    { row: 1, col: 2, letter: "P" },
    { row: 1, col: 3, letter: "A" },
    { row: 1, col: 4, letter: "L" },
    { row: 2, col: 0, letter: null, outline: true },
    { row: 2, col: 1, letter: null, outline: true },
    { row: 2, col: 2, letter: null },
    { row: 2, col: 3, letter: null },
    { row: 3, col: 2, letter: null, outline: true },
    { row: 3, col: 3, letter: null, outline: true },
  ]

  return (
    <div 
      className={`relative ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 18px)',
        gridTemplateRows: 'repeat(4, 18px)',
        gap: '2px',
      }}
    >
      {blocks.map((block, i) => (
        <div
          key={i}
          className={`flex items-center justify-center text-[7px] font-bold tracking-wider
            ${block.outline 
              ? 'border border-foreground/20 bg-transparent' 
              : 'bg-foreground text-background'
            }`}
          style={{
            gridColumn: block.col + 1,
            gridRow: block.row + 1,
            width: 18,
            height: 18,
          }}
        >
          {block.letter}
        </div>
      ))}
    </div>
  )
}
