"use client"

import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesCTA() {
  const router = useRouter()

  const handleGetInTouch = () => {
    router.push('/contact')
  }

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact our team to discuss your metal processing requirements and discover 
            how MetalMarvels can bring your vision to life.
          </p>
          <Button size="lg" className="text-lg" onClick={handleGetInTouch}>
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}