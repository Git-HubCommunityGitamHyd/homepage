"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode, MouseEvent } from "react"

interface EnhancedButtonProps {
  children: ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  type?: "primary" | "secondary"
  colorScheme?: "default" | "github" | "linkedin" | "twitter" | "email" | "community"
}

export function EnhancedButton({
  children,
  variant = "default",
  size = "default",
  className = "",
  onClick,
  type = "primary",
  colorScheme = "default",
}: EnhancedButtonProps) {
  const isPrimary = type === "primary"

  const getColorScheme = () => {
    switch (colorScheme) {
      case "github":
        return "bg-black hover:bg-gray-800 text-white border-black shadow-lg hover:shadow-xl"
      case "linkedin":
        return "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 shadow-lg hover:shadow-xl"
      case "twitter":
        return "bg-blue-400 hover:bg-blue-500 text-white border-blue-400 shadow-lg hover:shadow-xl"
      case "email":
        return "bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-lg hover:shadow-xl"
      case "community":
        return "bg-gradient-to-r from-black via-gray-800 to-black hover:from-gray-800 hover:via-black hover:to-gray-800 text-white border-black shadow-2xl hover:shadow-3xl transform-gpu"
      default:
        return isPrimary
          ? "bg-black hover:bg-gray-800 text-white border-black hover:shadow-lg hover:shadow-black/25"
          : "border-black text-black hover:bg-gray-50 bg-transparent hover:shadow-md"
    }
  }

  return (
    <motion.div
      whileHover={{ scale: colorScheme === "community" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative overflow-hidden"
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {colorScheme === "community" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 opacity-0 blur-xl"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <Button
        variant={variant}
        size={size}
        className={`
          relative z-10 transition-all duration-300 group rounded-xl font-semibold
          ${getColorScheme()}
          ${colorScheme === "community" ? "px-8 py-4 text-lg" : ""}
          ${className}
        `}
        onClick={onClick}
      >
        <motion.span
          className="flex items-center gap-3"
          whileHover={{ x: colorScheme === "community" ? 2 : isPrimary ? 1 : 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {children}
        </motion.span>

        {/* Shimmer effect for community button */}
        {colorScheme === "community" && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: "-100%" }}
            whileHover={{
              x: "200%",
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          />
        )}

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl opacity-0"
          whileTap={{
            opacity: [0, 0.2, 0],
            scale: [0.8, 1.1, 1],
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </Button>
    </motion.div>
  )
}
