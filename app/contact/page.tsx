"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"
import { Phone, Mail, MapPin, Clock, Shield, Users, Award, CheckCircle, Star, MessageCircle, HeadphonesIcon } from "lucide-react"
import MainContentTransition from "@/components/main-content-transition"
import { BusinessHoursDisplay } from "@/components/business-hours-display"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <MainContentTransition>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-[#f98125]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-[#f98125]/10 rounded-full text-sm font-medium text-[#f98125] mb-6">
                <MessageCircle className="h-4 w-4 mr-2" />
                Contact Us
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's Protect What Matters Most
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to secure your future? Our Houston insurance experts are here to help you find the perfect coverage. 
                Get personalized quotes, expert advice, and unbeatable service.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section - Enhanced */}
        <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#edf7f6]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Get Protected?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact us today for a personalized quote. We'll help you find the perfect coverage at the right price.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-[#f98125]" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                    <div className="p-3 bg-[#f98125]/10 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#f98125]" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">Phone</p>
                      <a href="tel:8324769999" className="text-muted-foreground hover:text-[#f98125] transition-colors text-lg">
                        (832) 476-9999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:info@minarcoins.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@minarcoins.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-[#f19953]/5 rounded-xl hover:bg-[#f19953]/10 transition-colors">
                    <div className="p-3 bg-[#f19953]/10 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#f19953]" />
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground">
                        16365 Park Ten Pl Ste 350<br />
                        Houston, TX 77084
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-secondary/5 rounded-xl hover:bg-secondary/10 transition-colors">
                    <div className="p-3 bg-secondary/10 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <BusinessHoursDisplay 
                      className="ml-4"
                      showIcon={false}
                      textSize="text-base"
                    />
                  </div>
                </CardContent>
              </Card>

              <QuoteForm title="Request a Quote" />
            </div>
          </div>
        </section>
      </MainContentTransition>
      
      <Footer />
    </div>
  )
}
