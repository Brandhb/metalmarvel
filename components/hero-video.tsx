"use client"

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const handleExploreClick = () => {
    router.push('/services')
  }

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://cdn.coverr.co/videos/coverr-molten-metal-being-poured-into-mold-3233/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="font-rajdhani font-bold text-4xl md:text-6xl lg:text-7xl max-w-4xl mb-6">
            Precision Engineered Metal Services
            <span className="block text-primary mt-2">
              Powered by Expertise, Built for Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
            Transforming raw metal into precision-engineered solutions through advanced casting and extrusion technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg" onClick={handleExploreClick}>
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}