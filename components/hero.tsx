"use client"

import { Button } from "@/components/ui/button"
import { Shield, Clock, Users, Phone } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="bg-gradient-to-br from-[#5b84c4]/10 via-white to-[#f98125]/10 py-12 sm:py-16 lg:py-20">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8 xl:space-y-10 order-2 lg:order-1 xl:col-span-3">
            <div className="space-y-4 sm:space-y-6 xl:space-y-8">
              <div className="inline-flex items-center px-3 sm:px-4 xl:px-6 py-1.5 sm:py-2 xl:py-3 bg-[#f98125]/10 rounded-full text-xs sm:text-sm xl:text-base font-medium text-[#f98125]">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 mr-1.5 sm:mr-2 xl:mr-3" />
                Trusted Insurance Solutions
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#11224d] leading-tight xl:leading-tight">
                Your <span className="text-transparent bg-gradient-to-r from-[#218eec] to-[#f98125] bg-clip-text">Trusted</span> Insurance Partner
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-[#193a6f] leading-relaxed max-w-3xl xl:max-w-4xl">
                At Minarco Insurance Agency, we provide personalized insurance solutions for families, truckers, and businesses. 
                Our mission is simple: deliver peace of mind through reliable coverage that fits your unique needs and budget.
              </p>
            </div>
            <div>
              <Button onClick={scrollToContact} size="lg" className="text-base sm:text-lg xl:text-xl px-6 sm:px-8 lg:px-10 xl:px-14 py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#e08843] hover:to-[#d97a3c] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Quote Today
              </Button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 max-w-5xl">
              <div className="flex items-center space-x-4 p-5 sm:p-6 bg-white/75 backdrop-blur-sm rounded-xl shadow-md border border-white/30 hover:bg-white/85 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-[#f98125]/15 to-[#f98125]/25 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-[#f98125]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-[#11224d] leading-tight">10+</div>
                  <div className="text-sm sm:text-base font-medium text-[#193a6f] leading-tight">Years Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-5 sm:p-6 bg-white/75 backdrop-blur-sm rounded-xl shadow-md border border-white/30 hover:bg-white/85 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-[#218eec]/15 to-[#218eec]/25 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 sm:h-7 sm:w-7 text-[#218eec]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-[#11224d] leading-tight">Fast</div>
                  <div className="text-sm sm:text-base font-medium text-[#193a6f] leading-tight">Easy Process</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-5 sm:p-6 bg-white/75 backdrop-blur-sm rounded-xl shadow-md border border-white/30 hover:bg-white/85 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-[#f19953]/15 to-[#f19953]/25 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 sm:h-7 sm:w-7 text-[#f19953]" />
                </div>
                <div className="min-w-0">
                  <div className="text-xl sm:text-2xl font-bold text-[#11224d] leading-tight">400+</div>
                  <div className="text-sm sm:text-base font-medium text-[#193a6f] leading-tight">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 xl:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#218eec]/20 to-[#f98125]/20 rounded-2xl sm:rounded-3xl xl:rounded-[2rem] blur-2xl sm:blur-3xl xl:blur-[4rem]"></div>
            <img
              src="/happy-family-insurance.png"
              alt="Happy family protected by insurance"
              className="relative rounded-2xl sm:rounded-3xl xl:rounded-[2rem] shadow-xl sm:shadow-2xl xl:shadow-3xl border-2 sm:border-4 xl:border-6 border-white/50 backdrop-blur-sm w-full h-auto max-w-2xl xl:max-w-3xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
