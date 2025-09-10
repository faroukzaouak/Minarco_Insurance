import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react"

const features = [
  "Thorough analysis of your insurance needs",
  "Fast and streamlined application process",
  "Competitive rates that save you money",
  "Experienced team with 10+ years in the industry",
]

const stats = [
  { number: "400+", label: "Satisfied Clients" },
  { number: "6", label: "Insurance Products" },
  { number: "10+", label: "Years of Service" },
]

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Your Insurance Partner
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Located in Texas, Minarco Insurance Agency is your local gateway to comprehensive insurance solutions. 
            We make insurance simple, affordable, and accessible for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Licensed & Insured</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Fully licensed professionals operating with complete transparency and regulatory compliance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#f98125]/5 to-[#f98125]/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f98125] rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No Hidden Fees</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Transparent pricing with no surprise charges or hidden costs. What you see is what you pay.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">Same-Day Quotes</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get competitive quotes within hours, not days. Fast turnaround for busy lifestyles.
              </p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Why Choose Minarco Insurance?</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg font-semibold text-primary mt-6">
              We're not here to oversell — we're here to protect what matters most to you.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
