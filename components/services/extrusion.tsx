"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Factory, CheckCircle2 } from "lucide-react"

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
            <Card className="p-4 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1587289792131-b78915e8e8c5?auto=format&fit=crop&q=80"
                alt="Metal extrusion equipment"
                className="w-full h-full object-cover rounded"
              />
            </Card>
            <Card className="p-4 aspect-square translate-y-8">
              <img
                src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80"
                alt="Extruded metal profiles"
                className="w-full h-full object-cover rounded"
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