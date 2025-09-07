"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { QuoteForm } from "@/components/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Shield, DollarSign, Clock, CheckCircle, Users, Star, Phone, Umbrella } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"

const features = [
  {
    icon: Home,
    title: "Complete Home Protection",
    description: "Comprehensive coverage for your home structure, belongings, and family's liability"
  },
  {
    icon: Shield,
    title: "Personal Property Coverage",
    description: "Protection for your belongings inside and outside your home"
  },
  {
    icon: Umbrella,
    title: "Liability Protection",
    description: "Coverage for legal expenses if someone is injured on your property"
  },
  {
    icon: DollarSign,
    title: "Additional Living Expenses",
    description: "Coverage for temporary housing and living expenses during repairs"
  }
]

const coverageTypes = [
  "Dwelling Coverage",
  "Personal Property",
  "Personal Liability",
  "Medical Payments",
  "Additional Living Expenses",
  "Loss of Use Coverage"
]

const discounts = [
  "Bundle Discounts with Auto",
  "Home Security Discounts", 
  "Claims-Free Discounts",
  "Loyalty Rewards Program"
]

export default function HomeInsurancePage() {
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
                  <Home className="h-4 w-4 mr-2" />
                  Home Insurance
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Protect Your <span className="text-primary">Home</span> & Everything In It
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Comprehensive home insurance coverage that protects your property, belongings, and family. Get personalized protection that fits your lifestyle and budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleQuoteClick} size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Get Free Quote
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-[#f98125]/10 p-8">
                  <div className="h-full rounded-xl bg-white shadow-2xl flex items-center justify-center">
                    <Home className="h-32 w-32 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our Home Insurance?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive protection with exceptional service and competitive rates
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Types */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Complete Home Coverage Options
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our home insurance policies include comprehensive coverage options to protect every aspect of your home and lifestyle.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {coverageTypes.map((coverage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-foreground font-medium">{coverage}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="p-8 shadow-xl">
                  <div className="text-center">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      Comprehensive Protection
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      From structure damage to personal belongings, we've got you covered with flexible deductibles and coverage limits.
                    </p>
                    <Button onClick={handleQuoteClick} className="bg-primary hover:bg-primary/90 text-white">
                      Get Your Quote
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Discounts Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Save More with Our Discounts
              </h2>
              <p className="text-lg text-muted-foreground">
                Take advantage of multiple discount opportunities to lower your premium
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discounts.map((discount, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground">{discount}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Excellent service and competitive rates. The claims process was smooth and hassle-free when we needed it most."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Happy Customer</p>
                      <p className="text-sm text-muted-foreground">Homeowner</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Protect Your Home?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Get a personalized quote in minutes and see how much you can save
            </p>
            <Button onClick={handleQuoteClick} size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-50">
              Start Your Quote Today
            </Button>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote-form" className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Get Your Free Home Insurance Quote
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll provide you with a personalized quote
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
