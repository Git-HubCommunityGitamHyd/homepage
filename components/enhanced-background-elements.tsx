"use client"

import { motion } from "framer-motion"
import {
  Github, GitBranch, GitCommit, GitMerge, GitPullRequest,
  Code, Terminal, Hash, Star, Zap, FileCode, Folder, FolderOpen,
  CheckCircle, AlertCircle, Bug, Settings, Lock, Unlock, Users, UserPlus,
  MessageSquare, Heart,
} from "lucide-react"

export function EnhancedBackgroundElements() {
  const icons = [
    Github, GitBranch, GitCommit, GitMerge, GitPullRequest, Code, Terminal, Hash,
    Star, Zap, FileCode, Folder, FolderOpen, CheckCircle, AlertCircle, Bug,
    Settings, Lock, Unlock, Users, UserPlus, MessageSquare, Heart,
  ]

  const generateRandomElements = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      Icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      opacity: Math.random() * 0.15 + 0.05,
      rotation: Math.random() * 360,
      duration: Math.random() * 60 + 30,
      delay: Math.random() * 10,
    }))
  }

  const generateBranchPaths = (count: number) =>
    Array.from({ length: count }, (_, i) => {
      const sx = Math.random() * 100, sy = Math.random() * 100
      const ex = Math.random() * 100, ey = Math.random() * 100
      const mx1 = (sx + ex) / 2 + (Math.random() * 30 - 15)
      const my1 = (sy + ey) / 2 + (Math.random() * 30 - 15)
      const mx2 = (sx + ex) / 2 + (Math.random() * 30 - 15)
      const my2 = (sy + ey) / 2 + (Math.random() * 30 - 15)
      return {
        id: i,
        path: `M${sx},${sy} C${mx1},${my1} ${mx2},${my2} ${ex},${ey}`,
        opacity: Math.random() * 0.1 + 0.02,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      }
    })

  const generateShapes = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      type: Math.floor(Math.random() * 3),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      opacity: Math.random() * 0.08 + 0.02,
      rotation: Math.random() * 360,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * 8,
    }))

  const generateCodeSnippets = (count: number) => {
    const snippets = [
      "git commit -m 'fix: bug'", "npm install", "function hello() { }",
      "const x = 42;", "<Component />", "import React from 'react'",
      "git push origin main", "docker build -t app .", "SELECT * FROM users",
      "curl https://api.github.com",
    ]
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      text: snippets[Math.floor(Math.random() * snippets.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.15 + 0.05,
      rotation: Math.random() * 30 - 15,
      duration: Math.random() * 50 + 30,
      delay: Math.random() * 10,
    }))
  }

  const randomElements = generateRandomElements(30)
  const branchPaths = generateBranchPaths(15)
  const shapes = generateShapes(10)
  const codeSnippets = generateCodeSnippets(8)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {randomElements.map((element) => (
        <motion.div
          key={`icon-${element.id}`}
          className="absolute"
          style={{ left: `${element.x}vw`, top: `${element.y}vh`, opacity: element.opacity, rotate: element.rotation }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [element.rotation, element.rotation + 360, element.rotation],
          }}
          transition={{ duration: element.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: element.delay }}
        >
          <element.Icon size={element.size} className="text-gray-300 dark:text-gh-elevated" />
        </motion.div>
      ))}

      <svg className="absolute inset-0 w-full h-full">
        {branchPaths.map((branch) => (
          <motion.path
            key={`branch-${branch.id}`}
            d={branch.path}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-gray-200 dark:text-gh-elevated"
            style={{ opacity: branch.opacity }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: branch.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: branch.delay }}
          />
        ))}
      </svg>

      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute"
          style={{ left: `${shape.x}vw`, top: `${shape.y}vh`, opacity: shape.opacity, rotate: shape.rotation }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [shape.opacity, shape.opacity * 1.5, shape.opacity],
            rotate: [shape.rotation, shape.rotation + 180, shape.rotation],
          }}
          transition={{ duration: shape.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: shape.delay }}
        >
          {shape.type === 0 && (
            <div className="rounded-full border border-gray-300 dark:border-gh-elevated" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.type === 1 && (
            <div className="border border-gray-300 dark:border-gh-elevated" style={{ width: shape.size, height: shape.size }} />
          )}
          {shape.type === 2 && (
            <div
              className="border border-gray-300 dark:border-gh-elevated"
              style={{
                width: shape.size,
                height: shape.size * 0.866,
                clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          )}
        </motion.div>
      ))}

      {codeSnippets.map((snippet) => (
        <motion.div
          key={`snippet-${snippet.id}`}
          className="absolute font-mono text-xs text-gray-300 dark:text-gh-elevated"
          style={{ left: `${snippet.x}vw`, top: `${snippet.y}vh`, opacity: snippet.opacity, rotate: snippet.rotation }}
          animate={{ y: [0, -20, 0], opacity: [snippet.opacity, snippet.opacity * 1.5, snippet.opacity] }}
          transition={{ duration: snippet.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: snippet.delay }}
        >
          {snippet.text}
        </motion.div>
      ))}

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 border border-gray-200 dark:border-gh-elevated rounded-full opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-gray-200 dark:border-gh-elevated rounded-full opacity-10"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-2/3 left-2/3 w-32 h-32 border border-gray-200 dark:border-gh-elevated opacity-10"
        animate={{ rotate: [0, 360], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 5 }}
      />
    </div>
  )
}
