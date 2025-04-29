"use client"

import { useState, useEffect } from "react"

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
  className?: string
  verticalMode?: boolean
}

export function ImageCarousel({ images, interval = 5000, className = "", verticalMode = false }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className={`relative w-full h-full overflow-hidden rounded-lg shadow-lg ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ display: index === currentIndex ? "block" : "none" }} // Garante que imagens ocultas não ocupem espaço
        >
          <img
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            className={`w-full h-full ${verticalMode ? "object-contain" : "object-cover"}`}
          />
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
