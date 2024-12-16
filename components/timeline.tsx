"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const milestones = [
  {
    year: "1985",
    title: "Company Founded",
    description: "MetalMarvels established with a vision to revolutionize metal manufacturing."
  },
  {
    year: "1995",
    title: "Expansion of Services",
    description: "Introduced advanced casting technologies and expanded production capabilities."
  },
  {
    year: "2005",
    title: "International Growth",
    description: "Expanded operations globally and established partnerships across continents."
  },
  {
    year: "2015",
    title: "Innovation Center",
    description: "Opened state-of-the-art R&D facility for metal processing innovation."
  },
  {
    year: "2023",
    title: "Industry Leadership",
    description: "Recognized as industry leader in sustainable metal manufacturing."
  }
]

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} className="py-24 bg-secondary/20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-border" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div className={index % 2 === 0 ? "md:order-1" : ""}>
                <div className="bg-card p-6 rounded-lg">
                  <span className="text-primary font-rajdhani text-2xl font-bold">
                    {milestone.year}
                  </span>
                  <h3 className="font-rajdhani text-xl font-semibold mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}