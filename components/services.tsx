import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Home, Building, Truck, Heart, Users } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Auto Insurance",
    description: "Protect your vehicle with comprehensive coverage that fits your budget and driving needs.",
  },
  {
    icon: Home,
    title: "Home Insurance",
    description: "A home insurance policy will cover the cost of damage to your home and personal belongings.",
  },
  {
    icon: Building,
    title: "Business Insurance",
    description: "Covers the loss of income that a business suffers after a covered disaster or emergency.",
  },
  {
    icon: Truck,
    title: "Commercial Auto",
    description: "Specialized coverage for commercial vehicles and fleet operations with competitive rates.",
  },
  {
    icon: Heart,
    title: "Life Insurance",
    description: "A life insurance company will provide financial security for your loved ones.",
  },
  {
    icon: Users,
    title: "Renters Insurance",
    description: "Protect your personal belongings and liability as a renter with affordable coverage.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#edf7f6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#11224d] mb-4">Amazing Insurance Services</h2>
          <p className="text-xl text-[#193a6f] max-w-2xl mx-auto">
            Great Offer For Customer - We provide comprehensive insurance solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow group hover:border-[#f98125]/40 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-[#f19953]/10 rounded-full w-fit group-hover:bg-[#f98125]/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-[#f98125] group-hover:text-[#f19953] transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-[#11224d]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-[#193a6f]">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
