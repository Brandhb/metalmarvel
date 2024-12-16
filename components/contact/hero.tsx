"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          alt="Metal manufacturing facility"
          fill
          className="object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="font-rajdhani text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have a project in mind? Contact us to discuss how MetalMarvels can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}