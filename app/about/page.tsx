"use client"

import { motion } from "framer-motion"
import { AboutHero } from "@/components/about-hero"
import { Timeline } from "@/components/timeline"
import { Goals } from "@/components/goals"
import { Team } from "@/components/team"

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Goals />
      {/*<Team />*/}
    </>
  )
}