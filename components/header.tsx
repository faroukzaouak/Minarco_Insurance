"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="bg-primary text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>11959 Katy Fwy Ste 500, Houston TX 77079</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@minarcoinsurance.com" className="hover:underline">
                  contact@minarcoinsurance.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:8324769999" className="hover:underline">
                (832) 476-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Minarco Insurance</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:8324769999" className="flex items-center text-sm text-foreground hover:text-primary">
              <Phone className="h-4 w-4 mr-2" />
              (832) 476-9999
            </a>
            <Button className="bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="tel:8324769999" className="flex items-center text-sm text-foreground hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                (832) 476-9999
              </a>
              <Button className="w-fit bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
