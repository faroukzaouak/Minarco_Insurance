import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Minarco Insurance Agency | Auto, Home & Business Insurance in Houston, TX",
  description:
    "Get personalized insurance coverage from Sam Minkara at Minarco Insurance. Serving Houston with competitive rates on auto, home, business, and commercial insurance. Licensed professional with 2+ years experience. Call (832) 476-9999 for your free quote. Visit us at 16365 Park Ten Pl Ste 350, Houston, TX 77084.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
