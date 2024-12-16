"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Cast, CheckCircle2 } from "lucide-react"

const castingFeatures = [
  "Investment casting for complex geometries",
  "Sand casting for larger components",
  "Die casting for high-volume production",
  "Lost-wax casting for precision parts",
  "Shell molding for smooth finishes",
  "Centrifugal casting for cylindrical parts"
]

export function CastingService() {
  return (
    <section id="casting" className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Cast className="h-12 w-12 text-primary mb-6" />
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
              Metal Casting Services
            </h2>
            <p className="text-muted-foreground mb-8">
              Our advanced casting facilities and expert metallurgists deliver 
              precision-engineered components for diverse industrial applications.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {castingFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <Card className="p-4 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80"
                alt="Investment casting process"
                className="w-full h-full object-cover rounded"
              />
            </Card>
            <Card className="p-4 aspect-square translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80"
                alt="Sand casting process"
                className="w-full h-full object-cover rounded"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}