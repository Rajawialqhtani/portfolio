import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import metadata from "@/lib/metadata"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    ...metadata,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

