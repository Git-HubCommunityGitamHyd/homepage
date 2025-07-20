"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  glowEffect?: boolean
}

export function InteractiveCard({
  children,
  className = "",
  hoverScale = 1.02,
  glowEffect = false,
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: -3,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="relative"
    >
      {glowEffect && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg opacity-0 blur-sm"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}

      <Card
        className={`
      relative transition-all duration-200 
      hover:shadow-xl hover:shadow-black/10
      border-gray-200 hover:border-gray-300
      ${className}
    `}
      >
        {children}

        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 -skew-x-12"
          whileHover={{
            opacity: [0, 0.1, 0],
            x: [-100, 300],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </Card>
    </motion.div>
  )
}
