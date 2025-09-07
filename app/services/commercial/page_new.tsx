import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Building,
    title: "Business Protection",
    description: "Comprehensive coverage designed specifically for your business needs and industry"
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description: "Competitive rates with customizable coverage options that protect your bottom line"
  },
  {
    icon: Clock,
    title: "Fast Claims Processing", 
    description: "Quick claim resolution to minimize business interruption and get you back on track"
  },
  {
    icon: Shield,
    title: "Liability Protection",
    description: "Comprehensive liability coverage to protect your business from unexpected lawsuits"
  }
]

const coverage = [
  "General Liability Insurance",
  "Professional Liability Insurance",
  "Commercial Property Insurance", 
  "Workers' Compensation",
  "Commercial Auto Insurance",
  "Cyber Liability Insurance",
  "Business Interruption Insurance",
  "Employment Practices Liability"
]

const benefits = [
  "Industry-Specific Coverage",
  "Risk Management Consulting", 
  "24/7 Claims Support",
  "Flexible Payment Terms",
  "Bundle Discounts Available",
  "Legal Defense Coverage",
  "Equipment Replacement",
  "Business Income Protection"
]

export default function CommercialInsurancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-[#f98125]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Building className="h-4 w-4 mr-2" />
                  Commercial Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Protect Your Business Investment
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Your business is your livelihood. Protect it with comprehensive commercial insurance 
                  coverage tailored to your industry's unique risks and challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Business Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (832) 476-9999
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-[#f98125]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Building className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Commercial Protection</p>
                    <p className="text-sm text-muted-foreground">(Image will be added later)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Commercial Insurance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Protecting your business requires expertise and understanding. Our commercial insurance solutions are designed for Houston businesses of all sizes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Commercial Coverage Types</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From general liability to cyber protection, we offer comprehensive 
                  commercial insurance solutions to protect every aspect of your business.
                </p>
                
                <div className="space-y-4">
                  {coverage.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Additional Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our commercial insurance policies come with valuable services and benefits 
                  to help your business thrive and stay protected.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-[#f98125] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#edf7f6]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Commercial Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to protect your business? Get a customized commercial insurance quote today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="commercial" title="Get My Business Quote" />
            </div>
          </div>
        </section>

        {/* Why Businesses Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Houston Businesses Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Industry Expertise</h3>
                <p className="text-muted-foreground">Deep understanding of various industries and their unique insurance needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f98125]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#f98125]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Business Growth Focus</h3>
                <p className="text-muted-foreground">Insurance solutions that grow with your business and adapt to changing needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">Personal service from experienced commercial insurance professionals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Building className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Protect Your Business?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join hundreds of Houston businesses that trust us with their commercial insurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Business Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Call (832) 476-9999
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
