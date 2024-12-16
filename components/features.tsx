"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Shield, Clock, Award } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

const features = [
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes ensure superior products.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Efficient production cycles without compromising on quality.',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Setting standards in metal processing with cutting-edge technology.',
  },
]

export function Features() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80"
          alt="Metal workshop background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-rajdhani text-3xl md:text-4xl font-bold mb-6">
              Why Choose MetalMarvels?
            </h2>
            <p className="text-muted-foreground mb-8">
              With decades of experience and cutting-edge technology, we deliver exceptional metal solutions that meet the highest industry standards.
            </p>

            <div 
              ref={ref}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className={`p-6 transition-all duration-500 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <feature.icon className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <h3 className="font-rajdhani text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className={`relative h-[600px] transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80"
              alt="Metal manufacturing process"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}