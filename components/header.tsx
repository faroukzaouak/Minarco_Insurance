"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const insuranceServices = [
  { name: "Auto Insurance", href: "/services/auto" },
  { name: "Home Insurance", href: "/services/home" },
  { name: "Life Insurance", href: "/services/life" },
  { name: "Commercial Insurance", href: "/services/commercial" },
  { name: "Health Insurance", href: "/services/health" },
  { name: "Renters Insurance", href: "/services/renters" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  const handleGetQuote = () => {
    // Check if we're on a page that has a quote form
    const pagesWithQuoteForms = [
      '/', // home page
      '/services/auto',
      '/services/home', 
      '/services/life',
      '/services/commercial',
      '/services/health',
      '/services/renters',
      '/contact'
    ]
    
    if (pagesWithQuoteForms.includes(pathname)) {
      // Scroll to quote form on current page
      const quoteForm = document.getElementById('quote-form')
      if (quoteForm) {
        quoteForm.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      // If no quote form on current page, go to contact page
      window.location.href = '/contact#quote-form'
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

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
                <span className="truncate">16365 Park Ten Pl Ste 350, Houston, TX 77084</span>
              </div>
              <div className="hidden md:flex items-center text-xs sm:text-sm">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <a href="mailto:info@minarcoins.com" className="hover:underline truncate">
                  info@minarcoins.com
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
            <Link href="/" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center text-sm lg:text-base text-foreground hover:text-primary transition-colors"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                Services
                <ChevronDown className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
              </button>
              <div 
                className={`absolute left-0 top-full mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-50 transition-all duration-200 ${
                  isServicesDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <div className="py-2">
                  {insuranceServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-sm lg:text-base text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="tel:8324769999" className="flex items-center text-xs lg:text-sm text-foreground hover:text-primary">
              <Phone className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">(832) 476-9999</span>
            </a>
            <Button onClick={handleGetQuote} className="text-sm lg:text-base px-4 lg:px-6 py-2 bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-foreground font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  {insuranceServices.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <a href="tel:8324769999" className="flex items-center text-sm text-foreground hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                (832) 476-9999
              </a>
              <Button onClick={handleGetQuote} className="w-fit bg-[#f19953] hover:bg-[#e08843] text-white">Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
