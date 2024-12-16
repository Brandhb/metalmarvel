"use client"

import { ServicesHero } from "@/components/services/hero"
import { CastingService } from "@/components/services/casting"
import { ExtrusionService } from "@/components/services/extrusion"
import { MaterialsGrid } from "@/components/services/materials"
import { ProcessShowcase } from "@/components/services/process"
import { ServicesCTA } from "@/components/services/cta"

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <CastingService />
      <ExtrusionService />
      <MaterialsGrid />
      <ProcessShowcase />
      <ServicesCTA />
    </>
  )
}