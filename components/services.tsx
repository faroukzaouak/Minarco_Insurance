import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Home, Building, Truck, Heart, Users } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Comprehensive vehicle protection with competitive rates. Coverage for liability, collision, and comprehensive damages.",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "Protect your home and belongings with customizable coverage options. From fire to theft, we've got you covered.",
  },
  {
    icon: Building,
    title: "Business Insurance",
    description: "Comprehensive business protection including liability, property, and workers' compensation coverage.",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    description: "Specialized coverage for commercial vehicles and fleet operations with industry-leading rates and service.",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's financial future with term and whole life insurance policies tailored to your needs.",
  },
  {
    icon: Users,
    title: "Renters Insurance",
    description: "Affordable protection for your personal belongings and liability coverage as a renter.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-[#edf7f6]/50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <div className="inline-flex items-center px-3 sm:px-4 xl:px-6 py-1.5 sm:py-2 xl:py-3 bg-[#218eec]/10 rounded-full text-xs sm:text-sm xl:text-base font-medium text-[#218eec] mb-4 sm:mb-6 xl:mb-8">
            <Building className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 mr-1.5 sm:mr-2 xl:mr-3" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#11224d] mb-4 sm:mb-6 xl:mb-8">Our Insurance Services</h2>
          <p className="text-lg sm:text-xl xl:text-2xl text-[#193a6f] max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-4">
            We provide comprehensive insurance solutions designed to protect what matters most to you. 
            From individual coverage to business protection, we've got the right policy for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 xl:hover:-translate-y-3 bg-white/90 backdrop-blur-sm border-0 shadow-lg h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#f98125]/5 group-hover:to-[#f98125]/10 transition-all duration-500" />
                <CardHeader className="relative text-center pb-3 sm:pb-4 xl:pb-6 p-6 xl:p-8">
                  <div className="mx-auto mb-4 sm:mb-6 xl:mb-8 p-3 sm:p-4 xl:p-6 bg-gradient-to-br from-[#f98125]/10 to-[#f19953]/10 rounded-xl sm:rounded-2xl xl:rounded-3xl w-fit group-hover:from-[#f98125]/20 group-hover:to-[#f19953]/20 transition-all duration-500 group-hover:scale-105 sm:group-hover:scale-110">
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 xl:h-14 xl:w-14 text-[#f98125] group-hover:text-[#f19953] transition-colors duration-500" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl xl:text-3xl text-[#11224d] group-hover:text-[#218eec] transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center px-4 sm:px-6 xl:px-8 pb-6 xl:pb-8">
                  <CardDescription className="text-sm sm:text-base xl:text-lg text-[#193a6f] leading-relaxed">{service.description}</CardDescription>
                  <div className="mt-4 sm:mt-6 xl:mt-8">
                    <div className="w-10 sm:w-12 xl:w-16 h-1 xl:h-1.5 bg-gradient-to-r from-[#218eec] to-[#f98125] mx-auto rounded-full group-hover:w-14 sm:group-hover:w-16 xl:group-hover:w-20 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16 xl:mt-20">
          <Button 
            size="lg" 
            className="text-base sm:text-lg xl:text-xl px-8 sm:px-10 xl:px-14 py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#218eec] to-[#5b84c4] hover:from-[#1a7bc4] hover:to-[#4d73a8] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
