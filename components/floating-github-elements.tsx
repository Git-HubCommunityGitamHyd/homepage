"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

export function FloatingGitHubElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating Octocat */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Github className="w-32 h-32 text-gray-100 opacity-30" />
      </motion.div>

      {/* Medium floating elements */}
      <motion.div
        className="absolute top-1/3 left-1/5"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Github className="w-20 h-20 text-gray-100 opacity-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3"
        animate={{
          x: [-10, 10, -10],
          y: [10, -10, 10],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <Github className="w-24 h-24 text-gray-100 opacity-25" />
      </motion.div>

      {/* Small floating elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 40 - 20],
            y: [0, Math.random() * 40 - 20],
            rotate: [0, Math.random() * 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <Github
            className="text-gray-100"
            size={Math.random() * 20 + 10}
            style={{ opacity: Math.random() * 0.2 + 0.05 }}
          />
        </motion.div>
      ))}

      {/* Branch-like connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <motion.path
          d="M100,100 Q200,150 300,100 T500,100"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-gray-300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M200,300 Q400,250 600,300 T800,300"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-gray-300"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>
    </div>
  )
}
