"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80"
          alt="Industrial metal manufacturing"
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
            Crafting Excellence in Metal
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Since our founding, MetalMarvels has been at the forefront of metal manufacturing innovation, 
            delivering precision-engineered solutions that set industry standards.
          </p>
        </motion.div>
      </div>
    </section>
  )
}