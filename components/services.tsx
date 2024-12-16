"use client"

import { useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Cast, Factory, Layers, Settings } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

const services = [
  {
    icon: Cast,
    title: 'Metal Casting',
    description: 'Precision investment and sand casting for ferrous and non-ferrous materials.',
  },
  {
    icon: Factory,
    title: 'Metal Extrusion',
    description: 'High-quality extruded metal profiles for precision components.',
  },
  {
    icon: Layers,
    title: 'Material Selection',
    description: 'Expert guidance in choosing the right materials for your needs.',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description: 'Tailored metal solutions for your specific requirements.',
  },
]

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering excellence through advanced metal processing technologies and expert craftsmanship.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-6 bg-card/50 backdrop-blur transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-rajdhani text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}