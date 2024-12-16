"use client"

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/contact')
  }

  return (
    <section className="py-24 bg-primary/10">
      <div className="container text-center">
        <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Metal Projects?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today to discuss your requirements and discover how MetalMarvels can bring your vision to life.
        </p>
        <Button size="lg" className="text-lg" onClick={handleGetStarted}>
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}