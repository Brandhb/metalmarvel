"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Metal-manufacturing-facility.jpg"
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
            Metal Processing Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            From precision casting to advanced extrusion, we deliver comprehensive metal 
            processing solutions tailored to your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}