"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Full protection including collision, comprehensive, and liability coverage options"
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "We shop multiple carriers to find you the best rates and discounts available"
  },
  {
    icon: Clock,
    title: "Expert Guidance", 
    description: "Professional advice and personalized recommendations for your coverage needs"
  },
  {
    icon: Users,
    title: "Multi-Car Discounts",
    description: "Save more when you insure multiple vehicles with bundled coverage options"
  }
]

const coverage = [
  "Liability Coverage (Required by Texas Law)",
  "Collision Coverage",
  "Comprehensive Coverage", 
  "Uninsured/Underinsured Motorist",
  "Personal Injury Protection (PIP)",
  "Rental Car Reimbursement",
  "Roadside Assistance",
  "Gap Coverage"
]

const discounts = [
  "Safe Driver Discount",
  "Multi-Vehicle Discount", 
  "Good Student Discount",
  "Bundling Discount (Auto + Home)",
  "Anti-theft Device Discount",
  "Occupational Discount"
]

export default function AutoInsurancePage() {
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
                  <Car className="h-4 w-4 mr-2" />
                  Auto Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Drive with Confidence
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Protect yourself and your vehicle with comprehensive auto insurance coverage. 
                  From liability to full coverage, we'll find the perfect policy that fits your 
                  budget and gives you peace of mind on the road.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-[#f98125]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Car className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Auto Insurance Protection</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Auto Insurance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Texas roads can be unpredictable. Our auto insurance gives you the protection and support you need.
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
                  From basic liability to comprehensive protection, we offer coverage options 
                  that meet Texas requirements and exceed your expectations.
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
                  Take advantage of our comprehensive discount programs designed to help 
                  reduce your auto insurance premiums with multiple savings opportunities.
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
        <section id="quote-form" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#edf7f6]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Auto Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to protect your vehicle? Get a personalized quote in minutes.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="auto" title="Get My Auto Insurance Quote" />
            </div>
          </div>
        </section>

        {/* Why Texas Drivers Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Drivers Choose Us</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Texas Law Compliance</h3>
                <p className="text-muted-foreground">We ensure your policy meets all Texas minimum requirements and more.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Service</h3>
                <p className="text-muted-foreground">Personal service from agents who understand Texas driving conditions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Car className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Hit the Road Protected?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of drivers who trust Minarco Insurance for their auto coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote Now
              </Button>
            </div>
          </div>
        </section>
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
