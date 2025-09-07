"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone, Key } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"

const features = [
  {
    icon: Key,
    title: "Affordable Protection",
    description: "Cost-effective coverage for renters at a fraction of the cost of homeowners insurance"
  },
  {
    icon: Shield,
    title: "Personal Property Coverage",
    description: "Protect your belongings from theft, fire, vandalism, and covered disasters"
  },
  {
    icon: Clock,
    title: "Quick Claims", 
    description: "Fast and easy claims process to get you back on your feet quickly"
  },
  {
    icon: DollarSign,
    title: "Liability Protection",
    description: "Coverage for accidents that happen in your rented home or caused by you"
  }
]

const coverage = [
  "Personal Property Protection",
  "Liability Coverage",
  "Additional Living Expenses", 
  "Medical Payments to Others",
  "Loss of Use Coverage",
  "Identity Theft Protection",
  "Jewelry & Electronics Coverage",
  "Temporary Relocation Expenses"
]

const benefits = [
  "Replacement Cost Coverage",
  "Worldwide Coverage", 
  "24/7 Claims Reporting",
  "Flexible Payment Options",
  "Bundle Discounts Available",
  "No Deductible for Theft",
  "Coverage for Roommates",
  "Pet Damage Protection"
]

export default function RentersInsurancePage() {
  const handleQuoteClick = () => {
    document.getElementById('quote-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <MainContentTransition>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-[#f98125]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                  <Key className="h-4 w-4 mr-2" />
                  Renters Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Protect What You Own, Not What You Rent
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Just because you rent doesn't mean you don't need insurance. Protect your personal belongings 
                  and yourself with affordable renters insurance coverage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Renters Quote
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-[#f98125]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Key className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Renters Protection</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Renters Need Insurance Too</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your landlord's insurance covers the building, but not your belongings or liability. Renters insurance fills that important gap affordably.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">What's Covered</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive protection for your personal property and liability, 
                  plus additional benefits that make renting worry-free.
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
                  Our renters insurance policies come with valuable extras and services 
                  to make your coverage even more comprehensive.
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
        <section id="quote-form" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#edf7f6]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Renters Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to protect your belongings? Get an affordable renters insurance quote today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="renters" title="Get My Renters Quote" />
            </div>
          </div>
        </section>

        {/* Why Renters Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Houston Renters Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Incredibly Affordable</h3>
                <p className="text-muted-foreground">Most renters pay less than $20/month for comprehensive coverage.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f98125]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#f98125]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Quick & Easy</h3>
                <p className="text-muted-foreground">Get covered in minutes with our simple online application process.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">Understanding Houston's unique rental market and renter needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Key className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Protect Your Belongings?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of Houston renters who protect their belongings with our affordable coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Renters Quote
              </Button>
            </div>
          </div>
        </section>
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
