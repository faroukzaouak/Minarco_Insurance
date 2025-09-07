import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react"

const features = [
  "Thorough analysis of your insurance needs",
  "Fast and streamlined application process",
  "Competitive rates that save you money",
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

        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 sm:mb-8 xl:mb-10">
            Your Insurance Partner
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-muted-foreground mb-8 sm:mb-10 xl:mb-12 max-w-3xl mx-auto leading-relaxed">
            Located in Houston, Texas, Minarco Insurance Agency is your local gateway to comprehensive insurance solutions. 
            We make insurance simple, affordable, and accessible for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Licensed & Insured</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Fully licensed professionals operating with complete transparency and regulatory compliance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f98125]/5 to-[#f98125]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f98125] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">No Hidden Fees</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Transparent pricing with no surprise charges or hidden costs. What you see is what you pay.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">Same-Day Quotes</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get competitive quotes within hours, not days. Fast turnaround for busy lifestyles.
              </p>
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
