# Google Reviews Integration Setup

This project includes integration with Google Reviews to display real customer reviews with profile pictures.

## Setup Instructions

### 1. Get Google Places API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the "Places API"
4. Create credentials (API Key)
5. Restrict the API key to Places API for security

### 2. Find Your Google Business Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business name and location
3. Copy the Place ID

### 3. Configure Environment Variables

Update the `.env.local` file with your credentials:

```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_actual_google_places_api_key_here
GOOGLE_PLACES_PLACE_ID=your_actual_google_business_place_id_here
```

### 4. Security Note

- The `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` is used in the API route (server-side)
- Never expose your API key in client-side code
- Consider restricting your API key by HTTP referrer or IP address

## Features

- ✅ Fetches real Google Reviews automatically
- ✅ Displays reviewer profile pictures
- ✅ Shows star ratings and review text
- ✅ Links back to Google profiles
- ✅ Fallback to placeholder reviews if API is unavailable
- ✅ Automatic refresh every hour
- ✅ Google branding compliance

## Fallback Behavior

If the Google Places API is not configured or fails:
- The component will display fallback reviews
- No errors will be shown to users
- The site will continue to function normally

## API Usage

The reviews are fetched via `/api/reviews` endpoint which:
- Calls Google Places API server-side
- Caches results for 1 hour
- Returns processed review data
- Handles errors gracefully

## Customization

You can customize the reviews display by editing:
- `components/testimonials.tsx` - Main reviews component
- `lib/google-reviews.ts` - Review fetching logic
- `app/api/reviews/route.ts` - API endpoint

## Google Compliance

The implementation includes:
- Proper Google branding (logo)
- Attribution to Google Reviews
- Links back to original reviews
- Respect for user profile photos
