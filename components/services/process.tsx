"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileText, Settings, TestTube, Package } from "lucide-react"

const processes = [
  {
    icon: FileText,
    title: "Requirements Analysis",
    description: "Detailed assessment of project specifications and material requirements."
  },
  {
    icon: Settings,
    title: "Process Selection",
    description: "Choosing the optimal manufacturing process for your specific needs."
  },
  {
    icon: TestTube,
    title: "Quality Testing",
    description: "Rigorous testing and inspection throughout the production process."
  },
  {
    icon: Package,
    title: "Final Delivery",
    description: "Secure packaging and timely delivery of your finished products."
  }
]

export function ProcessShowcase() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Process
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <process.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-rajdhani text-xl font-semibold mb-2">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}