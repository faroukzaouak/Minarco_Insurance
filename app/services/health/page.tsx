"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone, Activity } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"

const features = [
  {
    icon: Heart,
    title: "Comprehensive Coverage",
    description: "Complete health insurance plans that cover medical, dental, and vision needs"
  },
  {
    icon: DollarSign,
    title: "Affordable Plans",
    description: "Competitive rates with flexible payment options and government subsidies available"
  },
  {
    icon: Clock,
    title: "Easy Enrollment", 
    description: "Simple application process with expert guidance through plan selection"
  },
  {
    icon: Shield,
    title: "Trusted Networks",
    description: "Access to extensive networks of quality healthcare providers and specialists"
  }
]

const coverage = [
  "Individual Health Insurance",
  "Family Health Plans",
  "Short-Term Medical Insurance", 
  "Supplemental Health Coverage",
  "Dental Insurance",
  "Vision Insurance",
  "Medicare Supplements",
  "Health Savings Accounts (HSA)"
]

const benefits = [
  "Preventive Care Coverage",
  "Prescription Drug Benefits", 
  "Emergency Room Coverage",
  "Specialist Consultations",
  "Mental Health Services",
  "Maternity Care",
  "Telehealth Services",
  "Wellness Programs"
]

export default function HealthInsurancePage() {
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
                  <Heart className="h-4 w-4 mr-2" />
                  Health Insurance
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Your Health is Your Wealth
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Protect your health and financial future with comprehensive health insurance coverage. 
                  Quality healthcare shouldn't be a luxury—it's a necessity for you and your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Health Quote
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-[#f98125]/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Health Protection</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Our Health Insurance?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Navigate the complex world of health insurance with confidence. Our health plans are designed to provide comprehensive coverage at affordable rates.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Health Coverage Options</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From individual plans to family coverage, we offer a wide range of 
                  health insurance options to meet your specific needs and budget.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Health Benefits</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our health insurance plans come with comprehensive benefits to ensure 
                  you get the care you need when you need it most.
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Health Insurance Quote</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to secure your health coverage? Get a personalized health insurance quote today.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <QuoteForm insuranceType="health" title="Get My Health Quote" />
            </div>
          </div>
        </section>

        {/* Why Families Choose Us */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Houston Families Choose Our Health Plans</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground">Licensed health insurance specialists to help you choose the right plan for your needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f98125]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#f98125]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Year-Round Support</h3>
                <p className="text-muted-foreground">Ongoing assistance with claims, provider networks, and plan changes throughout the year.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Local Knowledge</h3>
                <p className="text-muted-foreground">Deep understanding of Houston healthcare networks and provider options.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Secure Your Health?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of Houston residents who trust us with their health insurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Health Quote
              </Button>
            </div>
          </div>
        </section>
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
