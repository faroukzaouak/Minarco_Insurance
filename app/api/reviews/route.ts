import { NextRequest, NextResponse } from 'next/server'

interface GoogleReview {
  author_name: string
  author_url: string
  language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlaceDetailsResponse {
  result: {
    reviews: GoogleReview[]
    rating: number
    user_ratings_total: number
  }
  status: string
}

export async function GET() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    const placeId = process.env.GOOGLE_PLACES_PLACE_ID

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { 
          error: 'Google Places API key or Place ID not configured',
          reviews: [],
          averageRating: 5.0,
          totalReviews: 68
        },
        { status: 200 }
      )
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      {
        next: { revalidate: 3600 } // Revalidate every hour
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Google reviews')
    }

    const data: GooglePlaceDetailsResponse = await response.json()

    if (data.status !== 'OK') {
      return NextResponse.json(
        { 
          error: `Google Places API error: ${data.status}`,
          reviews: [],
          averageRating: 5.0,
          totalReviews: 68
        },
        { status: 200 }
      )
    }

    const processedReviews = data.result.reviews?.map((review, index) => ({
      id: `google-review-${index}`,
      name: review.author_name,
      profilePhoto: review.profile_photo_url,
      rating: review.rating,
      text: review.text,
      timeDescription: review.relative_time_description,
      googleUrl: review.author_url
    })) || []

    return NextResponse.json({
      reviews: processedReviews,
      averageRating: data.result.rating || 5.0,
      totalReviews: data.result.user_ratings_total || 68
    })

  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    
    // Return fallback data
    return NextResponse.json({
      error: 'Failed to fetch reviews',
      reviews: [],
      averageRating: 5.0,
      totalReviews: 68
    })
  }
}
