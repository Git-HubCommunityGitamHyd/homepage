"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ImageIcon, Clock } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PopupCard } from "./popup-card"
import { AutoScrollGallery } from "./auto-scroll-gallery"

interface EventPopupCardProps {
  event: {
    title: string
    date: string
    location?: string
    attendees?: number
    description: string
    images: string[]
    category: string
    duration?: string
  }
  index: number
}

export function EventPopupCard({ event, index }: EventPopupCardProps) {
  const frontContent = (
    <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gh-surface dark:to-gh-elevated border-2 border-gray-200 dark:border-gh-border hover:border-gray-300 dark:hover:border-gh-muted transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/40">
      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
        <motion.div
          className="w-16 h-16 bg-black dark:bg-gh-elevated rounded-full flex items-center justify-center mb-6 dark:border dark:border-gh-border"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          <Calendar className="h-8 w-8 text-white dark:text-gh-accent" />
        </motion.div>

        <CardTitle className="text-xl mb-4 leading-tight text-gray-900 dark:text-gh-text">{event.title}</CardTitle>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center text-gray-600 dark:text-gh-muted">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          {event.location && (
            <div className="flex items-center justify-center text-gray-600 dark:text-gh-muted">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
          {event.attendees && (
            <div className="flex items-center justify-center text-gray-600 dark:text-gh-muted">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.attendees} attendees</span>
            </div>
          )}
        </div>

        <Badge variant="secondary" className="mb-4 px-3 py-1 dark:bg-gh-elevated dark:text-gh-text dark:border-gh-border">
          {event.category}
        </Badge>

        <motion.div
          className="text-sm text-gray-500 dark:text-gh-muted flex items-center gap-2"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ImageIcon className="h-4 w-4" />
          Click to see details
        </motion.div>
      </CardContent>
    </Card>
  )

  const backContent = (
    <div className="h-full flex flex-col min-h-[700px]">
      {/* Header */}
      <div className="mb-8">
        <motion.h3
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-gh-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {event.title}
        </motion.h3>

        <motion.div
          className="flex flex-wrap gap-6 text-base text-gray-600 dark:text-gh-muted mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-3"><Calendar className="h-5 w-5" />{event.date}</div>
          {event.location && <div className="flex items-center gap-3"><MapPin className="h-5 w-5" />{event.location}</div>}
          {event.attendees && <div className="flex items-center gap-3"><Users className="h-5 w-5" />{event.attendees} attendees</div>}
          {event.duration && <div className="flex items-center gap-3"><Clock className="h-5 w-5" />{event.duration}</div>}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Badge variant="outline" className="border-black dark:border-gh-accent text-black dark:text-gh-accent px-6 py-3 text-base">
            {event.category}
          </Badge>
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gh-text">Event Details</h4>
        <p className="text-gray-600 dark:text-gh-muted leading-relaxed text-xl">{event.description}</p>
      </motion.div>

      {/* Gallery — only rendered when images exist */}
      {event.images.length > 0 && (
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h4 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gh-text flex items-center gap-4">
            <ImageIcon className="h-6 w-6" />
            Event Gallery
          </h4>
          <AutoScrollGallery images={event.images} title={event.title} />
        </motion.div>
      )}
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-80"
    >
      <PopupCard frontContent={frontContent} backContent={backContent} cardId={`event-${index}`} className="h-full" />
    </motion.div>
  )
}
