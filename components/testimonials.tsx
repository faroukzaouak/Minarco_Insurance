import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "Houston, TX",
    rating: 5,
    text: "Sam was incredibly helpful in finding the perfect auto insurance policy for my family. He took the time to explain all our options and found us coverage that saved us over $200 per month. Outstanding service!",
    insurance: "Auto Insurance"
  },
  {
    name: "David Johnson",
    location: "Katy, TX",
    rating: 5,
    text: "Professional, knowledgeable, and reliable. Sam helped my small business get comprehensive liability and property coverage at a competitive price. I highly recommend Minarco Insurance!",
    insurance: "Business Insurance"
  },
  {
    name: "Sarah Miller",
    location: "Sugar Land, TX", 
    rating: 5,
    text: "The process was smooth and efficient from start to finish. Sam was patient with all our questions and found us excellent homeowners coverage that fit perfectly within our budget.",
    insurance: "Home Insurance"
  }
]

export function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-40 bg-gradient-to-b from-[#edf7f6]/30 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
          <div className="inline-flex items-center px-3 sm:px-4 xl:px-5 py-1.5 sm:py-2 xl:py-2.5 bg-[#f98125]/10 rounded-full text-xs sm:text-sm xl:text-base font-medium text-[#f98125] mb-4 sm:mb-6 xl:mb-8">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 xl:h-5 xl:w-5 mr-1.5 sm:mr-2 xl:mr-2.5" />
            Client Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#11224d] mb-4 sm:mb-6 xl:mb-8">What Our Clients Say</h2>
          <p className="text-lg sm:text-xl xl:text-2xl 2xl:text-3xl text-[#193a6f] max-w-2xl xl:max-w-4xl 2xl:max-w-5xl mx-auto px-4 leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Minarco Insurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 2xl:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg sm:hover:shadow-2xl xl:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 xl:hover:-translate-y-3 bg-white border-0 shadow-md sm:shadow-lg xl:shadow-xl h-full group">
              <div className="absolute top-3 sm:top-4 xl:top-6 right-3 sm:right-4 xl:right-6">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 text-[#f98125]/20 group-hover:text-[#f98125]/40 transition-colors" />
              </div>
              <CardContent className="p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 h-full flex flex-col">
                <div className="flex items-center mb-3 sm:mb-4 xl:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 text-[#f98125] fill-current" />
                  ))}
                </div>
                <p className="text-[#193a6f] mb-4 sm:mb-6 xl:mb-8 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed italic flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-[#5b84c4]/20 pt-3 sm:pt-4 xl:pt-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <div>
                      <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm xl:text-base text-[#193a6f]">{testimonial.location}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="inline-block px-2 sm:px-3 xl:px-4 py-1 xl:py-1.5 bg-[#218eec]/10 text-[#218eec] text-xs xl:text-sm rounded-full">
                        {testimonial.insurance}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 xl:mt-20 2xl:mt-24">
          <div className="inline-flex items-center space-x-2 xl:space-x-3 text-[#193a6f]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-[#f98125] fill-current" />
              ))}
            </div>
            <span className="text-base sm:text-lg xl:text-xl 2xl:text-2xl font-semibold">5.0 out of 5 stars</span>
            <span className="text-xs sm:text-sm xl:text-base">based on 68+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}
