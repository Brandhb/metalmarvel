"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Factory, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const extrusionFeatures = [
  "Aluminum profile extrusion",
  "Brass and copper extrusion",
  "Custom die design",
  "Multi-cavity dies",
  "Surface finishing",
  "Heat treatment services"
]

export function ExtrusionService() {
  return (
    <section id="extrusion" className="py-24 bg-secondary/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-none grid grid-cols-2 gap-4"
          >
            <Card className="p-4 relative aspect-square">
              <Image
                src="/images/Metal-extrusion.jpg"
                alt="Metal extrusion equipment"
                layout="fill"
                className="object-cover rounded"
              />
            </Card>
            <Card className="p-4 relative aspect-square translate-y-8">
              <Image
                src="/images/metal-extrusion-2.jpg"
                alt="Extruded metal profiles"
                layout="fill"
                className="object-cover rounded"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Factory className="h-12 w-12 text-primary mb-6" />
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
              Metal Extrusion Excellence
            </h2>
            <p className="text-muted-foreground mb-8">
              Our state-of-the-art extrusion facilities produce high-quality 
              profiles with precise tolerances and exceptional surface finishes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {extrusionFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
