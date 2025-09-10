"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone, Zap } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"

const features = [
  {
    icon: Shield,
    title: "Complete Home Protection",
    description: "Comprehensive coverage for your home structure, personal belongings, and liability"
  },
  {
    icon: DollarSign,
    title: "Affordable Premiums",
    description: "Competitive rates with discounts for bundling, security systems, and claim-free years"
  },
  {
    icon: Clock,
    title: "Quick Claims Process", 
    description: "Fast claim resolution to get your life back to normal after unexpected events"
  },
  {
    icon: Zap,
    title: "Natural Disaster Coverage",
    description: "Protection against Texas weather including hail, wind, and storm damage"
  }
]

const coverage = [
  "Dwelling Coverage (Structure Protection)",
  "Personal Property Coverage",
  "Liability Protection", 
  "Additional Living Expenses",
  "Medical Payments Coverage",
  "Other Structures Coverage",
  "Loss of Use Coverage",
  "Personal Umbrella Options"
]

const discounts = [
  "Multi-Policy Discount (Home + Auto)",
  "Security System Discount", 
  "New Home Discount",
  "Claim-Free Discount",
  "Loyalty Customer Discount",
  "Protective Device Discount",
  "Age of Home Discount",
  "Gated Community Discount"
]

export default function HomeInsurancePage() {
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
                  <Home className="h-4 w-4 mr-2" />
                  Homeowners Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Protect Your Home
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Your home is your biggest investment. Protect it with comprehensive homeowners insurance 
                  that covers structure, belongings, and liability. Built for Texas weather and quality living.
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
                    <Home className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Home Protection Coverage</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Homeowners Insurance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Texas weather can be unpredictable. Our homeowners insurance provides the comprehensive protection your home deserves.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Coverage Options</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Comprehensive protection that covers every aspect of homeownership, 
                  from your structure to your personal belongings and beyond.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Available Discounts</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Save money with our discount programs. Homeowners save an average 
                  of $600 per year when bundling home and auto insurance.
                </p>
                
                <div className="space-y-4">
                  {discounts.map((discount, index) => (
                    <div key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-[#f98125] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{discount}</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Homeowners Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to protect your home? Get a personalized quote tailored to your property.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="home" title="Get My Homeowners Quote" />
            </div>
          </div>
        </section>

        {/* Why Homeowners Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Homeowners Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Texas Weather Ready</h3>
                <p className="text-muted-foreground">Specialized coverage for hail, wind, and storm damage common in Texas.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f98125]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#f98125]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Fast Claim Service</h3>
                <p className="text-muted-foreground">Quick response times and efficient processing when you need us most.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">Local agents who understand Texas building codes and requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Home className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Protect Your Home?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of homeowners who trust Minarco Insurance for their home protection.
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
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
