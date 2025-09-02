import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react"

const features = [
  "Thorough analysis of your insurance needs",
  "Fast and streamlined application process",
  "Full control over your policy decisions",  
  "Competitive rates that save you money",
  "Bilingual service in English & Spanish",
  "Experienced team with 2+ years in the industry",
]

const stats = [
  { number: "68+", label: "Satisfied Clients" },
  { number: "6", label: "Insurance Products" },
  { number: "2+", label: "Years of Service" },
]

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 xl:py-32">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 xl:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 xl:gap-12 mb-8 sm:mb-12 xl:mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 xl:p-6">
                <div className="text-3xl sm:text-4xl xl:text-6xl 2xl:text-7xl font-bold text-primary mb-2 xl:mb-4">{stat.number}</div>
                <div className="text-sm sm:text-base xl:text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <div className="order-2 lg:order-1 xl:col-span-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 xl:mb-8">
              Building Your Financial Security
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground mb-4 sm:mb-6 xl:mb-8 text-pretty leading-relaxed">
              At Minarco Insurance Agency, we understand that every client has unique needs. Our personalized approach 
              ensures you get the right coverage at the right price, with the service you deserve.
            </p>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 xl:mb-10 text-pretty leading-relaxed">
              Whether you're protecting your family, your business, or your commercial fleet, we work closely with you 
              to create comprehensive coverage that grows with your changing needs.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:gap-6 mb-4 sm:mb-6 xl:mb-8">
              <div className="flex items-center p-2 xl:p-3 rounded-lg xl:rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 text-primary mr-2 sm:mr-3 xl:mr-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">Comprehensive Analysis</span>
              </div>
              <div className="flex items-center p-2 xl:p-3 rounded-lg xl:rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 text-primary mr-2 sm:mr-3 xl:mr-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">Quick Processing</span>
              </div>
              <div className="flex items-center p-2 xl:p-3 rounded-lg xl:rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 text-primary mr-2 sm:mr-3 xl:mr-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">Policy Control</span>
              </div>
              <div className="flex items-center p-2 xl:p-3 rounded-lg xl:rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 text-primary mr-2 sm:mr-3 xl:mr-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm xl:text-base">Competitive Rates</span>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 xl:col-span-2">
            <div className="bg-gradient-to-br from-primary/10 to-[#f98125]/10 rounded-xl sm:rounded-2xl xl:rounded-3xl p-6 sm:p-8 xl:p-12 text-center shadow-lg xl:shadow-2xl">
              <div className="relative inline-block mb-4 sm:mb-6 xl:mb-8">
                <img
                  src="/sam-minkara-headshot.jpg"
                  alt="Sam Minkara - Insurance Agent"
                  className="rounded-xl sm:rounded-2xl xl:rounded-3xl mx-auto w-48 sm:w-60 lg:w-72 xl:w-80 2xl:w-96 h-56 sm:h-64 lg:h-80 xl:h-96 2xl:h-[28rem] object-cover shadow-lg sm:shadow-xl xl:shadow-2xl border-2 sm:border-4 xl:border-6 border-white"
                />
                <div className="absolute -bottom-2 sm:-bottom-3 xl:-bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-[#f98125] text-white px-4 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 rounded-full shadow-lg xl:shadow-xl">
                  <div className="text-sm sm:text-lg xl:text-xl 2xl:text-2xl font-bold">Sam Minkara</div>
                  <div className="text-xs sm:text-sm xl:text-base opacity-90">Licensed Insurance Agent</div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 xl:mt-12 space-y-2 xl:space-y-3 text-muted-foreground">
                <p className="text-xs sm:text-sm xl:text-base font-medium">"Your trusted partner in protection"</p>
                <div className="flex justify-center items-center space-x-3 sm:space-x-4 xl:space-x-6 text-xs xl:text-sm">
                  <span className="flex items-center"><Shield className="h-2.5 w-2.5 sm:h-3 sm:w-3 xl:h-4 xl:w-4 mr-1" />Licensed Professional</span>
                  <span className="flex items-center"><CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 xl:h-4 xl:w-4 mr-1" />2+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-lg sm:shadow-xl border-0">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Why Choose Minarco Insurance?</h3>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg font-semibold text-primary mt-6 sm:mt-8">
              We're not here to oversell — we're here to protect what matters most to you.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
