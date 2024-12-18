"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Sydney, NSW 2000", "Australia"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@metalmarvels.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
  }
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="grid sm:grid-cols-2 gap-6"
    >
      {contactInfo.map((item) => (
        <Card key={item.title} className="p-6">
          <item.icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-rajdhani text-xl font-semibold mb-2">
            {item.title}
          </h3>
          {item.details.map((detail) => (
            <p key={detail} className="text-muted-foreground">
              {detail}
            </p>
          ))}
        </Card>
      ))}
    </motion.div>
  )
}