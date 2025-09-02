import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#11224d] to-[#193a6f] text-white py-12 sm:py-16 xl:py-20 2xl:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4 sm:mb-6 xl:mb-8 bg-gradient-to-r from-white to-[#f98125] bg-clip-text text-transparent">
              Minarco Insurance
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 xl:mb-8 text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed max-w-md xl:max-w-lg 2xl:max-w-xl">
              Your trusted insurance partner in Houston. We provide personalized coverage solutions for families, 
              businesses, and commercial fleets with honest service and competitive rates.
            </p>
            <div className="flex space-x-3 sm:space-x-4 xl:space-x-6">
              <div className="p-2 xl:p-3 2xl:p-4 bg-[#f98125] rounded-full hover:bg-[#f19953] transition-colors cursor-pointer">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </div>
              <div className="p-2 xl:p-3 2xl:p-4 bg-[#218eec] rounded-full hover:bg-[#1a7bc4] transition-colors cursor-pointer">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </div>
              <div className="p-2 xl:p-3 2xl:p-4 bg-[#f19953] rounded-full hover:bg-[#e08843] transition-colors cursor-pointer">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </div>
              <div className="p-2 xl:p-3 2xl:p-4 bg-[#5b84c4] rounded-full hover:bg-[#4d73a8] transition-colors cursor-pointer">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4 sm:mb-6 xl:mb-8 text-[#f98125]">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3 xl:space-y-4 text-white/80 text-sm sm:text-base xl:text-lg 2xl:text-xl">
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Auto Insurance</li>
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Home Insurance</li>
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Business Insurance</li>
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Commercial Auto</li>
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Life Insurance</li>
              <li className="hover:text-[#f98125] transition-colors cursor-pointer">Renters Insurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-4 sm:mb-6 xl:mb-8 text-[#f98125]">Contact Info</h4>
            <div className="space-y-3 sm:space-y-4 xl:space-y-6">
              <div className="flex items-center text-white/80 hover:text-white transition-colors text-sm sm:text-base xl:text-lg 2xl:text-xl">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 mr-2 sm:mr-3 xl:mr-4 text-[#f98125] flex-shrink-0" />
                <a href="tel:8324769999" className="hover:text-[#f98125] transition-colors">
                  (832) 476-9999
                </a>
              </div>
              <div className="flex items-center text-white/80 hover:text-white transition-colors text-sm sm:text-base xl:text-lg 2xl:text-xl">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 mr-2 sm:mr-3 xl:mr-4 text-[#218eec] flex-shrink-0" />
                <a href="mailto:contact@minarcoinsurance.com" className="hover:text-[#218eec] transition-colors break-all">
                  contact@minarcoinsurance.com
                </a>
              </div>
              <div className="flex items-start text-white/80 text-sm sm:text-base xl:text-lg 2xl:text-xl">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 mr-2 sm:mr-3 xl:mr-4 mt-1 text-[#f19953] flex-shrink-0" />
                <div>
                  <p>11959 Katy Fwy Ste 500</p>
                  <p>Houston, TX 77079</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 xl:mt-16 pt-6 sm:pt-8 xl:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm sm:text-base xl:text-lg 2xl:text-xl">
            <p className="mb-4 md:mb-0">&copy; 2025 Minarco Insurance Agency. All rights reserved.</p>
            <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 xl:space-x-8 text-xs sm:text-sm xl:text-base">
              <a href="#" className="hover:text-[#f98125] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#f98125] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#f98125] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
