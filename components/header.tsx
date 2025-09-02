"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="bg-primary text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-xs sm:text-sm">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                <span className="truncate">11959 Katy Fwy Ste 500, Houston TX 77079</span>
              </div>
              <div className="hidden md:flex items-center text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <a href="mailto:contact@minarcoinsurance.com" className="hover:underline truncate">
                  contact@minarcoinsurance.com
                </a>
              </div>
            </div>
            <div className="flex items-center text-xs sm:text-sm">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <a href="tel:8324769999" className="hover:underline">
                (832) 476-9999
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#218eec] to-[#f98125] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">M</span>
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#11224d] to-[#218eec] bg-clip-text text-transparent">
                Minarco Insurance
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#services" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="tel:8324769999" className="flex items-center text-xs lg:text-sm text-foreground hover:text-primary">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">(832) 476-9999</span>
            </a>
            <Button onClick={scrollToContact} className="text-sm lg:text-base px-4 lg:px-6 py-2 bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
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
              <Button onClick={scrollToContact} className="w-fit bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
