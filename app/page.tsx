import { Button } from "@/components/ui/button"
import { HeroVideo } from "@/components/hero-video"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <>
      <HeroVideo />
      <Services />
      <Features />
      <CTA />
    </>
  )
}