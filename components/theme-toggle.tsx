"use client"

import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <motion.button
      onClick={toggle}
      className="relative w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-gh-border bg-white dark:bg-gh-elevated text-gray-600 dark:text-gh-muted hover:bg-gray-100 dark:hover:bg-gh-border hover:text-gray-900 dark:hover:text-gh-text transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </motion.button>
  )
}
