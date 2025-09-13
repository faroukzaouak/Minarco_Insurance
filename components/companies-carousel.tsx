'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Company {
  name: string
  logo: string
  alt: string
}

// Use static list of clean logos that definitely exist
const staticCompanies = [
  { name: 'Progressive', logo: '/company-logos/progressive.svg', alt: 'Progressive Insurance Logo' },
  { name: 'GEICO', logo: '/company-logos/geico.svg', alt: 'GEICO Insurance Logo' },
  { name: 'BiBerk', logo: '/company-logos/biberk.svg', alt: 'BiBerk Insurance Logo' },
  { name: 'Berkley Insurance', logo: '/company-logos/berkley-insurance.svg', alt: 'Berkley Insurance Logo' },
  { name: 'Next Insurance', logo: '/company-logos/next-insurance.svg', alt: 'Next Insurance Logo' },
  { name: 'USLI', logo: '/company-logos/usli.svg', alt: 'USLI Insurance Logo' },
  { name: 'American Risk', logo: '/company-logos/american-risk.svg', alt: 'American Risk Insurance Logo' },
  { name: 'Wellington', logo: '/company-logos/wellington.svg', alt: 'Wellington Insurance Logo' },
  { name: 'Coverwhale', logo: '/company-logos/coverwhale.svg', alt: 'Coverwhale Insurance Logo' }
]

export default function CompaniesCarousel() {
  const [companies, setCompanies] = useState<Company[]>(staticCompanies)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimationSupported, setIsAnimationSupported] = useState(true)

  useEffect(() => {
    // Try to fetch from API, but fall back to static list
    fetch('/api/company-logos')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setCompanies(data)
        }
      })
      .catch(err => {
        console.log('Using static logos, API error:', err)
        // Keep using static list
      })
  }, [])

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsAnimationSupported(!mediaQuery.matches)

    const handleChange = () => setIsAnimationSupported(!mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Fallback carousel for non-animation users
    if (!isAnimationSupported && companies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % Math.ceil(companies.length / 3))
      }, 3000) // Change every 3 seconds
      return () => clearInterval(interval)
    }
  }, [companies.length, isAnimationSupported])

  // Triple the companies array for truly seamless scrolling (animation mode)
  const extendedCompanies = [...companies, ...companies, ...companies]
  
  // Group companies for static mode
  const groupedCompanies = []
  for (let i = 0; i < companies.length; i += 3) {
    groupedCompanies.push(companies.slice(i, i + 3))
  }

  if (companies.length === 0) {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#11224d]/8 via-[#218eec]/5 to-[#f98125]/8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#11224d]/8 via-[#218eec]/5 to-[#f98125]/8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11224d] mb-6">
            Trusted Insurance Partners
          </h2>
          <p className="text-lg sm:text-xl text-[#193a6f] max-w-4xl mx-auto leading-relaxed">
            We work with leading insurance companies to provide you with the best coverage options and competitive rates
          </p>
        </div>
        
        {isAnimationSupported ? (
          // Animated carousel for modern browsers
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm py-8">
            {/* Enhanced gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white/10 via-white/5 to-transparent z-10 pointer-events-none"></div>
            
            {/* Additional inner fade for smoother transition */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#11224d]/20 via-[#218eec]/10 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#11224d]/20 via-[#218eec]/10 to-transparent z-20 pointer-events-none"></div>
            
            {/* Moving carousel */}
            <div className="flex animate-scroll-smooth items-center">
              {extendedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12 flex items-center justify-center"
                  style={{ width: '220px', height: '120px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={180}
                      height={90}
                      className="object-contain max-w-full max-h-full filter brightness-90 contrast-110 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Static carousel for reduced motion or older browsers
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {(groupedCompanies[currentIndex] || companies.slice(0, 3)).map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center"
                  style={{ height: '120px' }}
                >
                  <div className="relative w-full h-full flex items-center justify-center p-6 hover:scale-105 transition-all duration-300 group">
                    <Image
                      src={company.logo}
                      alt={company.alt}
                      width={180}
                      height={90}
                      className="object-contain max-w-full max-h-full filter brightness-90 contrast-110 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
                      style={{ backgroundColor: 'transparent' }}
                      onError={(e) => {
                        console.log(`Failed to load logo: ${company.logo}`)
                        e.currentTarget.style.display = 'none'
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded: ${company.logo}`)
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots for static mode */}
            {groupedCompanies.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {groupedCompanies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#f98125] shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`View company group ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 60s linear infinite;
          width: max-content;
        }
        
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
        
        /* Fallback for browsers without animation support */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-smooth {
            animation: none;
            transform: none;
          }
        }
        
        /* Fallback for older browsers */
        @supports not (animation: scroll-smooth 60s linear infinite) {
          .animate-scroll-smooth {
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
