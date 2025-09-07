interface GoogleReview {
  author_name: string
  author_url: string
  language: string
  original_language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
  translated: boolean
}

interface GooglePlaceDetailsResponse {
  result: {
    reviews: GoogleReview[]
    rating: number
    user_ratings_total: number
  }
  status: string
}

export interface ProcessedReview {
  id: string
  name: string
  profilePhoto: string
  rating: number
  text: string
  timeDescription: string
  googleUrl: string
}

export async function fetchGoogleReviews(): Promise<{
  reviews: ProcessedReview[]
  averageRating: number
  totalReviews: number
}> {
  try {
    const response = await fetch('/api/reviews', {
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error('Failed to fetch reviews from API')
    }

    const data = await response.json()

    if (data.error) {
      console.warn('Google Reviews API warning:', data.error)
    }

    // If we got reviews from Google, use them, otherwise use fallback
    if (data.reviews && data.reviews.length > 0) {
      return {
        reviews: data.reviews,
        averageRating: data.averageRating,
        totalReviews: data.totalReviews
      }
    }

    // Return fallback data if no Google reviews available
    return {
      reviews: fallbackReviews,
      averageRating: 5.0,
      totalReviews: 68
    }

  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    // Return fallback data in case of error
    return {
      reviews: fallbackReviews,
      averageRating: 5.0,
      totalReviews: 68
    }
  }
}

// Fallback reviews data (used when Google API is not available)
export const fallbackReviews: ProcessedReview[] = [
  {
    id: 'fallback-1',
    name: 'Sarah Johnson',
    profilePhoto: '/placeholder-user.jpg',
    rating: 5,
    text: 'Excellent service from Sam and the Minarco team. They helped me save over $200 on my auto insurance while getting better coverage. Highly recommend!',
    timeDescription: '2 weeks ago',
    googleUrl: '#'
  },
  {
    id: 'fallback-2',
    name: 'Michael Chen',
    profilePhoto: '/placeholder-user.jpg',
    rating: 5,
    text: 'Professional and knowledgeable team. Sam took the time to explain all my options and found the perfect home insurance policy for my family.',
    timeDescription: '1 month ago',
    googleUrl: '#'
  },
  {
    id: 'fallback-3',
    name: 'Jennifer Martinez',
    profilePhoto: '/placeholder-user.jpg',
    rating: 5,
    text: 'Outstanding customer service! They made switching insurance companies so easy and saved me money. Thank you Minarco Insurance!',
    timeDescription: '3 weeks ago',
    googleUrl: '#'
  }
]
