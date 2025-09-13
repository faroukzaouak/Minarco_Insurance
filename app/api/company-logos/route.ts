import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Company name mapping for better display names
const companyNameMapping: { [key: string]: string } = {
  'progressive': 'Progressive',
  'geico': 'GEICO',
  'biberk': 'BiBerk',
  'berkeley': 'Berkeley Insurance',
  'berkley': 'Berkley Insurance',
  'next-insurance': 'Next Insurance',
  'next': 'Next Insurance',
  'usli': 'USLI',
  'american-risk': 'American Risk',
  'american': 'American Risk',
  'wellington': 'Wellington',
  'coverwhale': 'Coverwhale',
  // Add more mappings as needed
}

// Preferred file mapping - prioritize clean SVG files
const preferredFiles: { [key: string]: string } = {
  'Progressive': 'progressive.svg',
  'GEICO': 'geico.svg',
  'BiBerk': 'biberk.svg',
  'Berkeley Insurance': 'berkley-insurance.svg',
  'Berkley Insurance': 'berkley-insurance.svg',
  'Next Insurance': 'next-insurance.svg',
  'USLI': 'usli.svg',
  'American Risk': 'american-risk.svg',
  'Wellington': 'wellington.svg',
  'Coverwhale': 'coverwhale.svg',
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

    // Create company objects with preferred files
    const companyMap = new Map<string, any>()
    
    // First pass: identify all companies
    imageFiles.forEach(file => {
      const companyName = getCompanyNameFromFilename(file)
      if (!companyMap.has(companyName)) {
        companyMap.set(companyName, {
          name: companyName,
          logo: `/company-logos/${file}`,
          alt: `${companyName} Logo`
        })
      }
    })
    
    // Second pass: use preferred files if available
    imageFiles.forEach(file => {
      const companyName = getCompanyNameFromFilename(file)
      const preferredFile = preferredFiles[companyName]
      
      if (preferredFile && file === preferredFile) {
        companyMap.set(companyName, {
          name: companyName,
          logo: `/company-logos/${file}`,
          alt: `${companyName} Logo`
        })
      }
    })

    const companies = Array.from(companyMap.values())

    return NextResponse.json(companies)
  } catch (error) {
    console.error('Error reading company logos directory:', error)
    return NextResponse.json([])
  }
}
