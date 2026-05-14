"use client"

import { motion } from "framer-motion"
import { Github, GitBranch, Code, Star, Zap, GitCommit, GitMerge, GitPullRequest } from "lucide-react"
import { useEffect, useState } from "react"

const icons = [Github, GitBranch, Code, Star, Zap, GitCommit, GitMerge, GitPullRequest]

interface FloatingElement {
  id: number
  Icon: any
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = []
    for (let i = 0; i < 50; i++) {
      newElements.push({
        id: i,
        Icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.25 + 0.05,
      })
    }
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          initial={{ x: `${element.x}vw`, y: `${element.y}vh`, opacity: element.opacity }}
          animate={{
            x: [`${element.x}vw`, `${(element.x + 30) % 100}vw`, `${element.x}vw`],
            y: [`${element.y}vh`, `${(element.y + 20) % 100}vh`, `${element.y}vh`],
            rotate: [0, 360],
          }}
          transition={{ duration: element.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: element.delay }}
        >
          <element.Icon
            size={element.size}
            className="text-gray-300 dark:text-gh-elevated"
            style={{ opacity: element.opacity }}
          />
        </motion.div>
      ))}

      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-300 dark:border-gh-elevated rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-300 dark:border-gh-elevated rounded-full"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.25, 0.15, 0.25] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-16 h-16 border border-gray-300 dark:border-gh-elevated rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
      />

      {Array.from({ length: 15 }).map((_, i) => {
        const RandomIcon = icons[Math.floor(Math.random() * icons.length)]
        return (
          <motion.div
            key={`extra-${i}`}
            className="absolute"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              rotate: [0, 360],
            }}
            transition={{ duration: Math.random() * 25 + 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: Math.random() * 10 }}
          >
            <RandomIcon
              size={Math.random() * 25 + 15}
              className="text-gray-400 dark:text-gh-elevated"
              style={{ opacity: Math.random() * 0.12 + 0.08 }}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
