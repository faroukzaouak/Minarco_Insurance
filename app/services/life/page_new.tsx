import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Family Protection",
    description: "Secure your family's financial future with comprehensive life insurance coverage"
  },
  {
    icon: DollarSign,
    title: "Affordable Premiums",
    description: "Competitive rates with flexible payment options that fit your budget"
  },
  {
    icon: Clock,
    title: "Quick Approval", 
    description: "Fast application process with most policies approved within 24-48 hours"
  },
  {
    icon: Shield,
    title: "Guaranteed Protection",
    description: "Peace of mind knowing your loved ones are financially protected"
  }
]

const coverage = [
  "Term Life Insurance (10, 20, 30 years)",
  "Whole Life Insurance",
  "Universal Life Insurance", 
  "Variable Life Insurance",
  "Final Expense Insurance",
  "Child Life Insurance",
  "Group Life Insurance",
  "Accidental Death Benefits"
]

const benefits = [
  "Tax-Free Death Benefits",
  "Cash Value Accumulation", 
  "Policy Loan Options",
  "Flexible Premium Payments",
  "Convertible Term Options",
  "Waiver of Premium Rider",
  "Accelerated Death Benefits",
  "Multiple Beneficiaries"
]

export default function LifeInsurancePage() {
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
                  <Heart className="h-4 w-4 mr-2" />
                  Life Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Protect What Matters Most
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Life insurance isn't about you—it's about the people you love. Ensure your family's 
                  financial security with affordable life insurance coverage that fits your needs and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Free Quote
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
                    <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Life Insurance Protection</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Life Insurance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Protecting your family's future shouldn't be complicated. Our life insurance solutions are designed for real families with real needs.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Life Insurance Options</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From term life to whole life insurance, we offer a range of options 
                  to meet your family's unique needs and financial goals.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Policy Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our life insurance policies come with valuable benefits and riders 
                  to enhance your coverage and provide additional peace of mind.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Life Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to protect your family's future? Get a personalized life insurance quote today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="life" title="Get My Life Insurance Quote" />
            </div>
          </div>
        </section>

        {/* Why Families Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Families Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Family-Focused Approach</h3>
                <p className="text-muted-foreground">We understand that every family is unique and tailor our solutions accordingly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f98125]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#f98125]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quick & Easy Process</h3>
                <p className="text-muted-foreground">Simple application process with fast approval times for your convenience.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Trusted Local Advisors</h3>
                <p className="text-muted-foreground">Personal guidance from licensed professionals who care about your family's future.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Protect Your Family?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of families who have secured their loved ones' future with our life insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Free Quote Now
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
