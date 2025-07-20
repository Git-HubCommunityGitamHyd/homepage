"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FlipCard } from "./flip-card"

interface BoardMemberCardProps {
  member: {
    name: string
    role: string
    image: string
    description: string
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  index: number
}

export function BoardMemberCard({ member, index }: BoardMemberCardProps) {
  const frontContent = (
    <Card className="h-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-2xl font-bold">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <CardTitle className="text-2xl mb-4">{member.name}</CardTitle>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          {member.role}
        </Badge>
        <div className="mt-6 text-sm text-gray-500">Click to learn more</div>
      </CardContent>
    </Card>
  )

  const backContent = (
    <Card className="h-full bg-gradient-to-br from-black to-gray-800 text-white border-2 border-gray-700">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-shrink-0 mb-4">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white"
          />
        </div>

        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-center">{member.name}</h3>
          <Badge variant="outline" className="mb-4 mx-auto block w-fit text-white border-white">
            {member.role}
          </Badge>

          <div className="flex-grow">
            <p className="text-sm text-gray-300 leading-relaxed line-clamp-6">{member.description}</p>
          </div>
        </div>

        <div className="flex-shrink-0 mt-4">
          <div className="flex justify-center space-x-3">
            {member.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(`https://github.com/${member.github}`, "_blank")
                }}
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
            {member.linkedin && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(`https://linkedin.com/in/${member.linkedin}`, "_blank")
                }}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            )}
            {member.twitter && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(`https://twitter.com/${member.twitter}`, "_blank")
                }}
              >
                <Twitter className="h-4 w-4" />
              </Button>
            )}
            {member.email && (
              <Button
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(`mailto:${member.email}`, "_blank")
                }}
              >
                <Mail className="h-4 w-4" />
              </Button>
            )}
          </div>
          <div className="text-center mt-3 text-xs text-gray-400">Click to flip back</div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-96 w-full"
    >
      <FlipCard frontContent={frontContent} backContent={backContent} />
    </motion.div>
  )
}
