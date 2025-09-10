"use client"

import { Button } from "@/components/ui/button"
import { Shield, Users, Award } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Shield,
    title: "Comprehensive Protection",
    description: "At Minarco Insurance Agency, we understand that every client has unique needs. Our experienced team works closely with you to analyze your specific situation and create a customized insurance portfolio. Whether you're a young professional starting out, a growing family, or a business owner, we take the time to understand your lifestyle, assets, and risks to recommend the perfect coverage combination.",
    image: "/professional-insurance-agent-in-business-suit.png",
  },
  {
    icon: Users,
    title: "Personal Relationship Focus",
    description: "Unlike large insurance corporations, we believe in building lasting relationships with our clients. When you call Minarco Insurance, you'll speak directly with our knowledgeable team who knows your name, your coverage, and your history. We're not just here to sell you a policy – we're here to be your trusted advisors for life's unexpected moments and changing needs.",
    image: "/About-Our-Agency/DJI_20250826_155550_359.jpg",
  },
  {
    icon: Award,
    title: "Local Expertise, Competitive Rates",
    description: "As a local agency, we understand the unique challenges and opportunities in Texas. From severe weather preparations to navigating Texas insurance regulations, our expertise ensures you get coverage that actually works when you need it. We partner with multiple top-rated insurance carriers to bring you competitive rates without compromising on coverage quality.",
    image: "/About-Our-Agency/IMG_7120.webp",
  },
]

export function Services() {
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
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#edf7f6]/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#218eec]/10 rounded-full text-sm font-medium text-[#218eec] mb-6">
            <Shield className="h-4 w-4 mr-2" />
            About Our Agency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#11224d] mb-6">Why Choose Minarco Insurance</h2>
          <p className="text-lg sm:text-xl text-[#193a6f] max-w-4xl mx-auto leading-relaxed">
            We're more than just an insurance agency – we're your trusted partners in protection. 
            Here's what sets us apart in the insurance market.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content Section */}
                <div className={`lg:col-span-3 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 sm:p-4 bg-gradient-to-br from-[#f98125]/10 to-[#f19953]/10 rounded-xl shadow-lg">
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-[#f98125]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11224d] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-[#193a6f] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4">
                    <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#218eec] to-[#f98125] rounded-full" />
                  </div>
                </div>

                {/* Image Section */}
                <div className={`lg:col-span-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#218eec]/20 to-[#f98125]/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-white/50 backdrop-blur-sm group-hover:shadow-2xl transition-shadow duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                        priority={index === 0}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#11224d]/20 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                          <div className="flex items-center space-x-2">
                            <div className="p-1.5 bg-[#f98125]/10 rounded-lg">
                              <IconComponent className="h-4 w-4 text-[#f98125]" />
                            </div>
                            <h4 className="text-sm sm:text-base font-semibold text-[#11224d]">{service.title}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <div className="bg-gradient-to-br from-[#f98125]/5 to-[#218eec]/5 rounded-2xl p-8 sm:p-10 border border-[#218eec]/10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11224d] mb-4 sm:mb-6">
              Ready to Experience the Minarco Difference?
            </h3>
            <p className="text-lg sm:text-xl text-[#193a6f] mb-8 max-w-3xl mx-auto leading-relaxed">
              Contact us today for a personalized consultation and discover how we can protect what matters most to you.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="text-base sm:text-lg px-8 py-4 bg-gradient-to-r from-[#218eec] to-[#5b84c4] hover:from-[#1665c0] hover:to-[#3d5998] text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
