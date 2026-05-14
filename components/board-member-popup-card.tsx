"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, User } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PopupCard } from "./popup-card"
import { EnhancedButton } from "./enhanced-button"

interface BoardMemberPopupCardProps {
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

function MemberImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gh-border shadow-sm flex-shrink-0">
      {!loaded && <div className="absolute inset-0 skeleton rounded-full" />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={80}
        height={80}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

function MemberImageLarge({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gh-border shadow-lg flex-shrink-0">
      {!loaded && <div className="absolute inset-0 skeleton rounded-full" />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={200}
        height={200}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export function BoardMemberPopupCard({ member, index }: BoardMemberPopupCardProps) {
  const frontContent = (
    <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gh-surface dark:to-gh-elevated border-2 border-gray-200 dark:border-gh-border hover:border-gray-300 dark:hover:border-gh-muted transition-all duration-300 hover:shadow-lg dark:hover:shadow-black/40">
      <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <MemberImage src={member.image} alt={member.name} />
        </motion.div>
        <CardTitle className="text-2xl mb-4 text-gray-900 dark:text-gh-text">{member.name}</CardTitle>
        <Badge variant="secondary" className="text-lg px-4 py-2 mb-4 dark:bg-gh-elevated dark:text-gh-text dark:border-gh-border">
          {member.role}
        </Badge>
        <motion.div
          className="text-sm text-gray-500 dark:text-gh-muted flex items-center gap-2"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <User className="h-4 w-4" />
          Click to learn more
        </motion.div>
      </CardContent>
    </Card>
  )

  const backContent = (
    <div className="w-full h-auto mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <MemberImageLarge src={member.image} alt={member.name} />
        </motion.div>
        <div className="flex-1">
          <motion.h3
            className="text-5xl font-bold mb-6 text-gray-900 dark:text-gh-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          >
            {member.name}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          >
            <Badge variant="outline" className="text-xl px-8 py-3 border-black dark:border-gh-accent text-black dark:text-gh-accent font-medium">
              {member.role}
            </Badge>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
      >
        <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gh-text">About</h4>
        <p className="text-gray-600 dark:text-gh-muted leading-relaxed text-xl">{member.description}</p>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeOut" }}
      >
        <h4 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gh-text">Connect</h4>
        <div className="flex flex-wrap gap-4">
          {[
            { condition: member.github,   href: `https://github.com/${member.github}`,      icon: Github,   label: "GitHub",   colorScheme: "github"   as const },
            { condition: member.linkedin, href: `https://linkedin.com/in/${member.linkedin}`, icon: Linkedin, label: "LinkedIn", colorScheme: "linkedin" as const },
            { condition: member.twitter,  href: `https://twitter.com/${member.twitter}`,     icon: Twitter,  label: "Twitter",  colorScheme: "twitter"  as const },
            { condition: member.email,    href: `mailto:${member.email}`,                    icon: Mail,     label: "Email",    colorScheme: "email"    as const },
          ].map(
            (social, socialIndex) =>
              social.condition && (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.7 + socialIndex * 0.1, ease: "easeOut" }}
                >
                  <EnhancedButton
                    size="lg"
                    colorScheme={social.colorScheme}
                    className="text-base px-4 py-2"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation()
                      window.open(social.href, "_blank")
                    }}
                  >
                    <social.icon className="h-5 w-5" />
                    {social.label}
                  </EnhancedButton>
                </motion.div>
              ),
          )}
        </div>
      </motion.div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <PopupCard frontContent={frontContent} backContent={backContent} cardId={`member-${index}`} className="h-full" />
    </motion.div>
  )
}
