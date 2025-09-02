import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Clock, DollarSign } from "lucide-react"

const features = [
  "Analyze Insurance needs thoroughly",
  "Fast & Easy Process for all clients",
  "Control Over Policy decisions",
  "Save Your Money with competitive rates",
  "Bilingual service (English & Spanish)",
  "21+ Experience Team members",
]

const stats = [
  { number: "68+", label: "Satisfied Customers" },
  { number: "21+", label: "Experience Team" },
  { number: "2+", label: "Years of Experience" },
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              We Help you Build and Grow Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              At Minarco Insurance Agency, our mission is to provide peace of mind and financial security to individuals
              and families through personalized and reliable insurance solutions. We understand the unique needs of our
              clients and are delivering comprehensive coverage that not only meets but exceeds their expectations.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Service policies as offerings, quotations or operations evolve. Create adequate protection as a business
              grows and new risks emerge.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">Analyze Insurance</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">Fast & Easy Process</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">Control Over Policy</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-primary mr-3" />
                <span className="text-sm">Save Your Money</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <img
                src="/professional-insurance-agent-in-business-suit.png"
                alt="Professional Insurance Agent"
                className="rounded-lg mx-auto mb-4 w-64 h-80 object-cover"
              />
              <div className="bg-primary text-white px-4 py-2 rounded-lg inline-block">
                <div className="text-sm font-semibold">Sam Minkara</div>
                <div className="text-xs">We're Best Insurance Company</div>
              </div>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Minarco Insurance?</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-primary mt-8">
              We're not here to upsell — we're here to protect and help you grow.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
