"use client"

import Image from "next/image"
import { useState, useCallback } from "react"

interface AutoScrollGalleryProps {
  images: string[]
  title: string
}

function GalleryImage({ src, alt, onLoad }: { src: string; alt: string; onLoad: () => void }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-64 h-48 flex-shrink-0">
      {!loaded && <div className="absolute inset-0 skeleton rounded-lg" />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={512}
        height={384}
        style={{ objectFit: "cover" }}
        className={`rounded-lg w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        quality={95}
        sizes="(max-width: 768px) 256px, 512px"
        unoptimized={false}
        onLoad={() => {
          setLoaded(true)
          onLoad()
        }}
      />
    </div>
  )
}

export function AutoScrollGallery({ images, title }: AutoScrollGalleryProps) {
  const [loadedCount, setLoadedCount] = useState(0)
  const allLoaded = loadedCount >= images.length

  const handleImageLoad = useCallback(() => {
    setLoadedCount((prev) => prev + 1)
  }, [])

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 bg-gray-100 dark:bg-gh-elevated rounded-lg">
        <p className="text-gray-500 dark:text-gh-muted text-lg">No Images Available</p>
      </div>
    )
  }

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      {/* First list — drives load tracking */}
      <ul className={`flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none ${allLoaded ? "animate-infinite-scroll" : ""}`}>
        {images.map((image, index) => (
          <li key={index}>
            <GalleryImage src={image} alt={`${title} - Image ${index + 1}`} onLoad={handleImageLoad} />
          </li>
        ))}
      </ul>

      {/* Duplicate list for seamless loop — only mounted after images are ready */}
      {allLoaded && (
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <li key={index}>
              <div className="relative w-64 h-48 flex-shrink-0">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Image ${index + 1}`}
                  width={512}
                  height={384}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-full"
                  quality={95}
                  sizes="(max-width: 768px) 256px, 512px"
                  unoptimized={false}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
