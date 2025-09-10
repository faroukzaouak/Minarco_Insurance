import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Company name mapping for better display names
const companyNameMapping: { [key: string]: string } = {
  'progressive': 'Progressive',
  'geico': 'GEICO',
  'biberk': 'BiBerk',
  'berkeley': 'Berkeley Insurance',
  'next': 'Next Insurance',
  'usli': 'USLI',
  'american': 'American Risk',
  'wellington': 'Wellington',
  'coverwhale': 'Coverwhale',
  // Add more mappings as needed
}

function getCompanyNameFromFilename(filename: string): string {
  const nameWithoutExt = filename.toLowerCase().replace(/\.(png|jpg|jpeg|webp|svg)$/i, '')
  
  // Check if any key from mapping is found in filename
  for (const [key, displayName] of Object.entries(companyNameMapping)) {
    if (nameWithoutExt.includes(key)) {
      return displayName
    }
  }
  
  // Fallback: clean up filename for display
  return nameWithoutExt
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/logo|insurance|inc|corp|company/gi, '')
    .trim()
}

export async function GET() {
  try {
    const logosDirectory = path.join(process.cwd(), 'public', 'company-logos')
    
    // Check if directory exists
    if (!fs.existsSync(logosDirectory)) {
      return NextResponse.json([])
    }

    const files = fs.readdirSync(logosDirectory)
    
    // Filter for image files
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg']
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    )

    // Create company objects
    const companies = imageFiles.map(file => {
      const companyName = getCompanyNameFromFilename(file)
      return {
        name: companyName,
        logo: `/company-logos/${file}`,
        alt: `${companyName} Logo`
      }
    })

    return NextResponse.json(companies)
  } catch (error) {
    console.error('Error reading company logos directory:', error)
    return NextResponse.json([])
  }
}
