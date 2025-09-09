import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

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
              <a 
                href="https://www.facebook.com/share/1BGuknVxuq/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 xl:p-3 2xl:p-4 bg-[#f98125] rounded-full hover:bg-[#f19953] transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </a>
              <a 
                href="https://www.instagram.com/minarco.ins?igsh=MXNyb3o2N2c2YWp3Yw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 xl:p-3 2xl:p-4 bg-[#5b84c4] rounded-full hover:bg-[#4d73a8] transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
              </a>
              <a 
                href="https://www.tiktok.com/@minarco.ins?_t=ZT-8za4Jkt9jUN&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 xl:p-3 2xl:p-4 bg-[#000000] rounded-full hover:bg-[#333333] transition-colors"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
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
                <a href="mailto:info@minarcoins.com" className="hover:text-[#218eec] transition-colors break-all">
                  info@minarcoins.com
                </a>
              </div>
              <div className="flex items-start text-white/80 text-sm sm:text-base xl:text-lg 2xl:text-xl">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 mr-2 sm:mr-3 xl:mr-4 mt-1 text-[#f19953] flex-shrink-0" />
                <div>
                  <p>16365 Park Ten Pl Ste 350</p>
                  <p>Houston, TX 77084</p>
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
