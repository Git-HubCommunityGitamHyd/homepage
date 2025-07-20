"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FlipCard } from "./flip-card"

interface EventCardProps {
  event: {
    title: string
    date: string
    location?: string
    attendees?: number
    description: string
    images: string[]
    category: string
  }
  index: number
}

export function EventCard({ event, index }: EventCardProps) {
  const frontContent = (
    <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
          <Calendar className="h-8 w-8 text-white" />
        </div>

        <CardTitle className="text-xl mb-4 leading-tight">{event.title}</CardTitle>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.date}</span>
          </div>
          {event.location && (
            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.location}</span>
            </div>
          )}
          {event.attendees && (
            <div className="flex items-center justify-center text-gray-600">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">{event.attendees} attendees</span>
            </div>
          )}
        </div>

        <Badge variant="secondary" className="mb-4">
          {event.category}
        </Badge>

        <div className="text-sm text-gray-500">Click to see details</div>
      </CardContent>
    </Card>
  )

  const backContent = (
    <Card className="h-full bg-gradient-to-br from-gray-900 to-black text-white border-2 border-gray-700">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="flex-shrink-0 mb-4">
          <h3 className="text-lg font-bold mb-2">{event.title}</h3>
          <div className="flex items-center text-gray-300 text-sm mb-3">
            <Calendar className="h-4 w-4 mr-2" />
            {event.date}
          </div>
        </div>

        <div className="flex-grow mb-4">
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">{event.description}</p>

          {/* Image Gallery */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 text-gray-200">Event Gallery</h4>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {event.images.map((image, imgIndex) => (
                <div key={imgIndex} className="flex-shrink-0">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${event.title} - Image ${imgIndex + 1}`}
                    width={80}
                    height={60}
                    className="w-20 h-15 object-cover rounded border border-gray-600 hover:border-gray-400 transition-colors cursor-pointer"
                    quality={90}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="flex justify-center space-x-2">
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              onClick={(e) => {
                e.stopPropagation()
                // Handle view more action
              }}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View More
            </Button>
          </div>
          <div className="text-center mt-3 text-xs text-gray-400">Click to flip back</div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-80"
    >
      <FlipCard frontContent={frontContent} backContent={backContent} />
    </motion.div>
  )
}
