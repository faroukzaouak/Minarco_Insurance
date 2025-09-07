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
    description: "As a Houston-based agency, we understand the unique challenges and opportunities in Texas. From hurricane season preparations to navigating Texas insurance regulations, our local expertise ensures you get coverage that actually works when you need it. We partner with multiple top-rated insurance carriers to bring you competitive rates without compromising on coverage quality.",
    image: "/About-Our-Agency/IMG_7120.webp",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-[#edf7f6]/50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 xl:mb-32">
          <div className="inline-flex items-center px-4 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 bg-[#218eec]/10 rounded-full text-sm sm:text-base xl:text-lg font-medium text-[#218eec] mb-6 sm:mb-8 xl:mb-10">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 mr-2 sm:mr-3 xl:mr-4" />
            About Our Agency
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#11224d] mb-6 sm:mb-8 xl:mb-10">Why Choose Minarco Insurance</h2>
          <p className="text-xl sm:text-2xl xl:text-3xl text-[#193a6f] max-w-5xl xl:max-w-6xl mx-auto leading-relaxed px-4">
            We're more than just an insurance agency – we're your trusted partners in protection. 
            Here's what sets us apart in the Houston insurance market.
          </p>
        </div>

        <div className="space-y-20 sm:space-y-24 xl:space-y-32">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isEven = index % 2 === 0
            
            return (
              <div
                key={index}
                className={`grid lg:grid-cols-5 gap-12 sm:gap-16 xl:gap-20 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
              >
                {/* Content Section */}
                <div className={`lg:col-span-3 space-y-8 sm:space-y-10 xl:space-y-12 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className="p-4 sm:p-5 xl:p-6 bg-gradient-to-br from-[#f98125]/10 to-[#f19953]/10 rounded-2xl xl:rounded-3xl shadow-lg">
                      <IconComponent className="h-10 w-10 sm:h-12 sm:w-12 xl:h-16 xl:w-16 text-[#f98125]" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#11224d] leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-[#193a6f] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-6">
                    <div className="w-20 sm:w-24 xl:w-32 h-1.5 xl:h-2 bg-gradient-to-r from-[#218eec] to-[#f98125] rounded-full" />
                  </div>
                </div>

                {/* Image Section */}
                <div className={`lg:col-span-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#218eec]/20 to-[#f98125]/20 rounded-3xl xl:rounded-[2rem] blur-2xl xl:blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative overflow-hidden rounded-3xl xl:rounded-[2rem] shadow-2xl xl:shadow-3xl border-4 xl:border-6 border-white/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={800}
                        className="w-full h-80 sm:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] object-cover"
                        priority={index === 0}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#11224d]/30 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 xl:p-8">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 xl:p-6 shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-[#f98125]/10 rounded-lg">
                              <IconComponent className="h-5 w-5 xl:h-6 xl:w-6 text-[#f98125]" />
                            </div>
                            <h4 className="text-lg xl:text-xl font-semibold text-[#11224d]">{service.title}</h4>
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

        <div className="text-center mt-20 sm:mt-24 xl:mt-32">
          <div className="bg-gradient-to-br from-[#f98125]/5 to-[#218eec]/5 rounded-3xl xl:rounded-[2rem] p-8 sm:p-12 xl:p-16 border border-[#218eec]/10">
            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#11224d] mb-6 sm:mb-8">
              Ready to Experience the Minarco Difference?
            </h3>
            <p className="text-xl sm:text-2xl xl:text-3xl text-[#193a6f] mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              Contact us today for a personalized consultation and discover how we can protect what matters most to you.
            </p>
            <Button 
              size="lg" 
              className="text-lg sm:text-xl xl:text-2xl px-10 sm:px-12 xl:px-16 py-4 sm:py-5 xl:py-6 bg-gradient-to-r from-[#218eec] to-[#5b84c4] hover:from-[#1a7bc4] hover:to-[#4d73a8] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
            >
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
