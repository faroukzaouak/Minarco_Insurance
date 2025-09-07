"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { fetchGoogleReviews, fallbackReviews, ProcessedReview } from "@/lib/google-reviews"

export function Testimonials() {
  const [reviews, setReviews] = useState<ProcessedReview[]>(fallbackReviews)
  const [averageRating, setAverageRating] = useState(5.0)
  const [totalReviews, setTotalReviews] = useState(68)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadReviews() {
      try {
        const { reviews: googleReviews, averageRating: avgRating, totalReviews: total } = await fetchGoogleReviews()
        
        if (googleReviews.length > 0) {
          setReviews(googleReviews.slice(0, 3)) // Show only first 3 reviews
          setAverageRating(avgRating)
          setTotalReviews(total)
        }
      } catch (error) {
        console.error('Failed to load Google reviews:', error)
        // Keep fallback data
      } finally {
        setIsLoading(false)
      }
    }

    loadReviews()
  }, [])

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
          {reviews.map((review, index) => (
            <Card key={review.id} className="relative overflow-hidden hover:shadow-lg sm:hover:shadow-2xl xl:hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 xl:hover:-translate-y-3 bg-white border-0 shadow-md sm:shadow-lg xl:shadow-xl h-full group">
              <div className="absolute top-3 sm:top-4 xl:top-6 right-3 sm:right-4 xl:right-6">
                <Quote className="h-6 w-6 sm:h-8 sm:w-8 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 text-[#f98125]/20 group-hover:text-[#f98125]/40 transition-colors" />
              </div>
              <CardContent className="p-5 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4 xl:mb-6">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 xl:h-6 xl:w-6 2xl:h-7 2xl:w-7 text-[#f98125] fill-current" />
                    ))}
                  </div>
                  {review.googleUrl !== '#' && (
                    <a 
                      href={review.googleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#218eec] hover:text-[#f98125] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="text-[#193a6f] mb-4 sm:mb-6 xl:mb-8 text-sm sm:text-base xl:text-lg 2xl:text-xl leading-relaxed italic flex-grow">
                  "{review.text}"
                </p>
                <div className="border-t border-[#5b84c4]/20 pt-3 sm:pt-4 xl:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 xl:w-14 xl:h-14 rounded-full overflow-hidden">
                        <Image
                          src={review.profilePhoto}
                          alt={`${review.name}'s profile`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement
                            target.src = '/placeholder-user.jpg'
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base xl:text-lg 2xl:text-xl text-[#11224d]">{review.name}</p>
                        <p className="text-xs sm:text-sm xl:text-base text-[#193a6f]">{review.timeDescription}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-xs text-[#218eec]">
                        <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
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
            <span className="text-base sm:text-lg xl:text-xl 2xl:text-2xl font-semibold">
              {averageRating.toFixed(1)} out of 5 stars
            </span>
            <span className="text-xs sm:text-sm xl:text-base">
              based on {totalReviews}+ reviews
            </span>
            <div className="flex items-center text-xs text-[#218eec] ml-2">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google Reviews
            </div>
          </div>
          {isLoading && (
            <p className="text-sm text-[#193a6f] mt-2">Loading latest reviews...</p>
          )}
        </div>
      </div>
    </section>
  )
}
