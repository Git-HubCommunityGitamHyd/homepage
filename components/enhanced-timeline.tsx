"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRef } from "react"

interface TimelineItem {
  date: string
  title: string
  description: string
}

interface EnhancedTimelineProps {
  items: TimelineItem[]
}

export function EnhancedTimeline({ items }: EnhancedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Animated timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-black via-gray-600 to-black rounded-full"
          style={{ height: lineHeight }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
        >
          <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }} className="group">
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl hover:shadow-black/10 bg-white relative overflow-hidden">
                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <CardHeader className="relative z-10">
                  <motion.div whileHover={{ x: index % 2 === 0 ? -5 : 5 }} transition={{ duration: 0.2 }}>
                    <CardTitle className="text-xl group-hover:text-black transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="font-semibold text-black text-lg">{item.date}</CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <motion.p
                    className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                    whileHover={{ x: index % 2 === 0 ? -3 : 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </CardContent>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{
                    x: "200%",
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                />
              </Card>
            </motion.div>
          </div>

          {/* Timeline dot */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 z-20"
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg cursor-pointer relative overflow-hidden"
              whileHover={{
                scale: 1.5,
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {/* Pulsing effect */}
              <motion.div
                className="absolute inset-0 bg-black rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
