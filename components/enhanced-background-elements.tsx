"use client"

import { motion } from "framer-motion"
import {
  Github,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Code,
  Terminal,
  Hash,
  Star,
  Zap,
  FileCode,
  Folder,
  FolderOpen,
  CheckCircle,
  AlertCircle,
  Bug,
  Settings,
  Lock,
  Unlock,
  Users,
  UserPlus,
  MessageSquare,
  Heart,
} from "lucide-react"

export function EnhancedBackgroundElements() {
  // Array of GitHub-themed icons
  const icons = [
    Github,
    GitBranch,
    GitCommit,
    GitMerge,
    GitPullRequest,
    Code,
    Terminal,
    Hash,
    Star,
    Zap,
    FileCode,
    Folder,
    FolderOpen,
    CheckCircle,
    AlertCircle,
    Bug,
    Settings,
    Lock,
    Unlock,
    Users,
    UserPlus,
    MessageSquare,
    Heart,
  ]

  // Generate random elements
  const generateRandomElements = (count: number) => {
    const elements = []
    for (let i = 0; i < count; i++) {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)]
      elements.push({
        id: i,
        Icon: IconComponent,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 10, // 10-40px
        opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
        rotation: Math.random() * 360,
        duration: Math.random() * 60 + 30, // 30-90s
        delay: Math.random() * 10,
      })
    }
    return elements
  }

  // Generate code branch paths
  const generateBranchPaths = (count: number) => {
    const paths = []
    for (let i = 0; i < count; i++) {
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      const endX = Math.random() * 100
      const endY = Math.random() * 100
      const midX1 = (startX + endX) / 2 + (Math.random() * 30 - 15)
      const midY1 = (startY + endY) / 2 + (Math.random() * 30 - 15)
      const midX2 = (startX + endX) / 2 + (Math.random() * 30 - 15)
      const midY2 = (startY + endY) / 2 + (Math.random() * 30 - 15)

      paths.push({
        id: i,
        path: `M${startX},${startY} C${midX1},${midY1} ${midX2},${midY2} ${endX},${endY}`,
        opacity: Math.random() * 0.1 + 0.02, // 0.02-0.12
        duration: Math.random() * 20 + 10, // 10-30s
        delay: Math.random() * 5,
      })
    }
    return paths
  }

  // Generate geometric shapes
  const generateShapes = (count: number) => {
    const shapes = []
    for (let i = 0; i < count; i++) {
      const shapeType = Math.floor(Math.random() * 3) // 0: circle, 1: square, 2: hexagon
      shapes.push({
        id: i,
        type: shapeType,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20, // 20-80px
        opacity: Math.random() * 0.08 + 0.02, // 0.02-0.1
        rotation: Math.random() * 360,
        duration: Math.random() * 40 + 20, // 20-60s
        delay: Math.random() * 8,
      })
    }
    return shapes
  }

  // Generate code snippets
  const generateCodeSnippets = (count: number) => {
    const snippets = [
      "git commit -m 'fix: bug'",
      "npm install",
      "function hello() { }",
      "const x = 42;",
      "<Component />",
      "import React from 'react'",
      "git push origin main",
      "docker build -t app .",
      "SELECT * FROM users",
      "curl https://api.github.com",
    ]

    const elements = []
    for (let i = 0; i < count; i++) {
      elements.push({
        id: i,
        text: snippets[Math.floor(Math.random() * snippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.15 + 0.05, // 0.05-0.2
        rotation: Math.random() * 30 - 15, // -15 to 15 degrees
        duration: Math.random() * 50 + 30, // 30-80s
        delay: Math.random() * 10,
      })
    }
    return elements
  }

  const randomElements = generateRandomElements(30)
  const branchPaths = generateBranchPaths(15)
  const shapes = generateShapes(10)
  const codeSnippets = generateCodeSnippets(8)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Icon elements */}
      {randomElements.map((element) => (
        <motion.div
          key={`icon-${element.id}`}
          className="absolute"
          style={{
            left: `${element.x}vw`,
            top: `${element.y}vh`,
            opacity: element.opacity,
            rotate: element.rotation,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [element.rotation, element.rotation + 360, element.rotation],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: element.delay,
          }}
        >
          <element.Icon size={element.size} className="text-gray-300" />
        </motion.div>
      ))}

      {/* Branch paths */}
      <svg className="absolute inset-0 w-full h-full">
        {branchPaths.map((branch) => (
          <motion.path
            key={`branch-${branch.id}`}
            d={branch.path}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-200"
            style={{ opacity: branch.opacity }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: branch.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: branch.delay,
            }}
          />
        ))}
      </svg>

      {/* Geometric shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{
            left: `${shape.x}vw`,
            top: `${shape.y}vh`,
            opacity: shape.opacity,
            rotate: shape.rotation,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {shape.type === 0 && (
            <div className="rounded-full border border-gray-300" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.type === 1 && (
            <div className="border border-gray-300" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.type === 2 && (
            <div
              className="border border-gray-300"
              style={{
                width: shape.size,
                height: shape.size * 0.866, // Hexagon height ratio
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Code snippets */}
      {codeSnippets.map((snippet) => (
        <motion.div
          key={`snippet-${snippet.id}`}
          className="absolute font-mono text-xs text-gray-300"
          style={{
            left: `${snippet.x}vw`,
            top: `${snippet.y}vh`,
            opacity: snippet.opacity,
            rotate: snippet.rotation,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [snippet.opacity, snippet.opacity * 1.5, snippet.opacity],
          }}
          transition={{
            duration: snippet.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: snippet.delay,
          }}
        >
          {snippet.text}
        </motion.div>
      ))}

      {/* Large decorative elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-200 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-gray-200 rounded-full opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-2/3 left-2/3 w-32 h-32 border border-gray-200 opacity-10"
        animate={{
          rotate: [0, 360],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 5,
        }}
      />
    </div>
  )
}
