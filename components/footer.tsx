import Link from 'next/link'
import { Hammer } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Hammer className="h-6 w-6 text-primary" />
              <span className="font-rajdhani font-bold text-xl">MetalMarvels</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Precision Engineered Metal Services – Powered by Expertise, Built for Excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#casting" className="text-sm text-muted-foreground hover:text-primary">Metal Casting</Link></li>
              <li><Link href="/services#extrusion" className="text-sm text-muted-foreground hover:text-primary">Metal Extrusion</Link></li>
              <li><Link href="/services#materials" className="text-sm text-muted-foreground hover:text-primary">Materials</Link></li>
              <li><Link href="/services#custom" className="text-sm text-muted-foreground hover:text-primary">Custom Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Metal Street</li>
              <li>Industrial District</li>
              <li>contact@metalmarvels.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} MetalMarvels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}