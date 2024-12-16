"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const materials = [
  {
    category: "Ferrous",
    items: ["Cast Iron", "Mild Steel", "Stainless Steel", "Duplex Steel"],
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&q=80"
  },
  {
    category: "Non-Ferrous",
    items: ["Aluminum", "Brass", "Bronze", "Copper Alloys"],
    image: "https://images.unsplash.com/photo-1617953141905-b27fb0fa7f61?auto=format&fit=crop&q=80"
  }
]

export function MaterialsGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="materials" className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Materials We Work With
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {materials.map((material) => (
            <motion.div key={material.category} variants={item}>
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={material.image}
                    alt={material.category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-rajdhani text-xl font-semibold mb-4">
                    {material.category} Materials
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {material.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}