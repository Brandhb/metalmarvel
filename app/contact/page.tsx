"use client"

import { ContactHero } from "@/components/contact/hero"
import { ContactForm } from "@/components/contact/form"
import { ContactMap } from "@/components/contact/map"
import { ContactInfo } from "@/components/contact/info"

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-12">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}