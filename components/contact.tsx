import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40 bg-gradient-to-b from-white to-[#edf7f6]/30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          <div className="inline-flex items-center px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 xl:py-2.5 bg-[#f98125]/10 rounded-full text-xs sm:text-sm xl:text-base font-medium text-[#f98125] mb-4 sm:mb-6 xl:mb-8">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 mr-1.5 sm:mr-2 xl:mr-2.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#11224d] mb-4 sm:mb-6 xl:mb-8">Ready to Get Protected?</h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-[#193a6f] max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed">Contact us today for a personalized quote. We'll help you find the perfect coverage at the right price.</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          <Card className="xl:col-span-2 order-2 lg:order-1 shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
              <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#f98125]" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 sm:space-y-8 xl:space-y-10">
              <div className="flex items-center p-3 sm:p-4 xl:p-6 bg-[#218eec]/5 rounded-xl xl:rounded-2xl hover:bg-[#218eec]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#f98125]/10 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#f98125]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Phone</p>
                  <a href="tel:8324769999" className="text-[#193a6f] hover:text-[#f98125] transition-colors text-base sm:text-lg xl:text-xl 2xl:text-2xl">
                    (832) 476-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center p-3 sm:p-4 xl:p-6 bg-[#218eec]/5 rounded-xl xl:rounded-2xl hover:bg-[#218eec]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#218eec]/10 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#218eec]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Email</p>
                  <a
                    href="mailto:info@minarcoins.com"
                    className="text-[#193a6f] hover:text-[#218eec] transition-colors text-sm sm:text-base xl:text-lg break-all"
                  >
                    info@minarcoins.com
                  </a>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-4 xl:p-6 bg-[#f19953]/5 rounded-xl xl:rounded-2xl hover:bg-[#f19953]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#f19953]/10 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#f19953]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Address</p>
                  <p className="text-[#193a6f] text-sm sm:text-base xl:text-lg">
                    16365 Park Ten Pl Ste 350
                    <br />
                    Houston, TX 77084
                  </p>
                </div>
              </div>

              <div className="flex items-start p-3 sm:p-4 xl:p-6 bg-[#5b84c4]/5 rounded-xl xl:rounded-2xl hover:bg-[#5b84c4]/10 transition-colors">
                <div className="p-2 sm:p-3 xl:p-4 bg-[#5b84c4]/10 rounded-full flex-shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#5b84c4]" />
                </div>
                <div className="ml-3 sm:ml-4 xl:ml-6">
                  <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">Business Hours</p>
                  <p className="text-[#193a6f] text-sm sm:text-base xl:text-lg">
                    Monday - Friday: 9 AM - 5 PM
                    <br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="xl:col-span-3 order-1 lg:order-2 shadow-lg sm:shadow-2xl xl:shadow-3xl border-0 bg-gradient-to-br from-white to-[#f98125]/5">
            <CardHeader className="pb-6 sm:pb-8 xl:pb-10">
              <CardTitle className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-[#11224d] flex items-center">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 xl:h-8 xl:w-8 mr-2 sm:mr-3 xl:mr-4 text-[#218eec]" />
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 sm:space-y-6 xl:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-6">
                  <Input placeholder="First Name" className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" />
                  <Input placeholder="Last Name" className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" />
                </div>
                <Input type="email" placeholder="Email Address" className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" />
                <Input type="tel" placeholder="Phone Number" className="h-10 sm:h-12 xl:h-14 2xl:h-16 text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] rounded-lg xl:rounded-xl" />
                <select className="w-full h-10 sm:h-12 xl:h-14 2xl:h-16 px-3 sm:px-4 xl:px-5 py-2.5 sm:py-3 xl:py-4 border border-[#5b84c4]/30 bg-white rounded-lg xl:rounded-xl focus:border-[#f98125] focus:ring-2 focus:ring-[#f98125]/20 transition-all text-sm sm:text-base xl:text-lg">
                  <option value="">Select Insurance Type</option>
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Homeowners Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="commercial">Commercial Auto Insurance</option>
                  <option value="life">Life Insurance</option>
                  <option value="renters">Renters Insurance</option>
                </select>
                <Textarea 
                  placeholder="Tell us about your coverage needs and we'll provide a customized quote..." 
                  rows={4} 
                  className="min-h-[100px] xl:min-h-[120px] 2xl:min-h-[140px] text-sm sm:text-base xl:text-lg px-3 xl:px-4 2xl:px-5 py-3 xl:py-4 border-[#5b84c4]/30 focus:border-[#f98125] focus:ring-[#f98125] resize-none rounded-lg xl:rounded-xl" 
                />
                <Button
                  type="submit"
                  className="w-full h-12 sm:h-14 xl:h-16 2xl:h-18 text-base sm:text-lg xl:text-xl 2xl:text-2xl py-3 sm:py-4 xl:py-5 bg-gradient-to-r from-[#f98125] to-[#f19953] hover:from-[#f19953] hover:to-[#e08843] text-white shadow-lg hover:shadow-xl xl:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-lg xl:rounded-xl"
                >
                  Get My Quote Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28 text-center">
          <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#11224d] mb-8 sm:mb-12 xl:mb-16">Find the Right Coverage for You</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 xl:gap-6">
            {["Auto Insurance", "Homeowners Insurance", "Business Insurance", "Commercial Auto", "Life Insurance", "Renters Insurance"].map((type) => (
              <Button
                key={type}
                variant="outline"
                className="px-3 sm:px-6 xl:px-8 py-2 sm:py-3 xl:py-4 text-xs sm:text-base xl:text-lg bg-white border-2 border-[#218eec] text-[#218eec] hover:bg-[#218eec] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg xl:hover:shadow-xl rounded-lg xl:rounded-xl"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
