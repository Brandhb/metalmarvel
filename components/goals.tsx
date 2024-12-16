"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Target, Users, Lightbulb, Shield } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pioneering new technologies and processes in metal manufacturing.",
    percentage: 95
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Delivering exceptional service and quality to every client.",
    percentage: 98
  },
  {
    icon: Lightbulb,
    title: "Sustainability",
    description: "Implementing eco-friendly practices in metal processing.",
    percentage: 90
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Maintaining consistent quality and timely delivery.",
    percentage: 97
  }
]

export function Goals() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-rajdhani text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Goals
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {goals.map((goal) => (
            <motion.div key={goal.title} variants={item}>
              <Card className="p-6 h-full">
                <goal.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-rajdhani text-xl font-semibold mb-2">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {goal.description}
                </p>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${goal.percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full bg-primary"
                  />
                </div>
                <span className="block text-sm text-muted-foreground mt-2">
                  {goal.percentage}% Achievement
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}