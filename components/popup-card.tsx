"use client"

import type React from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import type { ReactNode } from "react"

interface PopupCardProps {
  frontContent: ReactNode
  backContent: ReactNode
  className?: string
  cardId: string
}

export function PopupCard({ frontContent, backContent, className = "", cardId }: PopupCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showBackContent, setShowBackContent] = useState(false)
  const [mounted, setMounted] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Ensure component is mounted (for portal)
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleCardClick = () => {
    setIsExpanded(true)
    setTimeout(() => setShowBackContent(true), 150) // Delay to sync with expansion
  }

  const handleClose = () => {
    setShowBackContent(false)
    setTimeout(() => setIsExpanded(false), 150) // Delay to sync with content fade
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        handleClose()
      }
    }

    if (isExpanded) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isExpanded, handleClose])

  return (
    <>
      {/* Original Card - always present but invisible when expanded */}
      <motion.div
        ref={cardRef}
        className={`cursor-pointer ${className}`}
        onClick={handleCardClick}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        layoutId={`card-${cardId}`}
        style={{
          visibility: isExpanded ? "hidden" : "visible",
        }}
      >
        {frontContent}
      </motion.div>

      {/* Popup Overlay - Using Portal */}
      {mounted && isExpanded && createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={handleOverlayClick}
            style={{ zIndex: 9999999 }}
          >

            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full h-auto max-h-[80vh] overflow-y-auto hide-scrollbar popup-content"
              layoutId={`card-${cardId}`}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ zIndex: 10000000 }}
            >
              {/* Close Button inside scrollable content */}
              <motion.button
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                onClick={handleClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, scale: 0 }}
                style={{ zIndex: 10000001 }}
              >
                <X className="h-6 w-6 text-gray-600" />
              </motion.button>
              {/* Content Container */}
              <AnimatePresence>
                {showBackContent && (
                  <motion.div
                    className="p-8 md:p-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {backContent}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
