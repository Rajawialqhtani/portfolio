import type { Metadata } from "next/types"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app"

const metadata: Metadata = {
  // Basic metadata
  title: "Rajawi Alqhtani | Portfolio",
  description: "Aspiring IT Programmer from Riyadh, KSA.",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Rajawi Alqhtani Portfolio",
    title: "Rajawi Alqhtani Portfolio",
    description: "Showcasing my projects and blogs.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rajawi Alqhtani Portfolio",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Rajawi Alqhtani Portfolio",
    description: "Showcasing my projects and blogs.",
    images: [`${baseUrl}/og-image.png`],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
  },

  // Manifest and icons
  manifest: `${baseUrl}/site.webmanifest`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default metadata

