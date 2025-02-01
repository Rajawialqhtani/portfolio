"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="pt-16">
      <section className="bg-[var(--color-section-background)] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="section-title mb-4">Rajawi Alqhtani</h1>
          <p className="section-subtitle mb-8">Aspiring IT Programmer from Riyadh, KSA</p>
          <Link href="/projects" className="apple-button">
            View My Work
          </Link>
        </div>
      </section>

      <section ref={sectionRef} className="fade-in py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg mb-6">
            Hello! I'm Rajawi Alqhtani, an aspiring IT Programmer based in Riyadh, KSA. I'm passionate about technology
            and constantly learning new programming skills.
          </p>
          <Link href="/skills" className="apple-link">
            Discover my skills →
          </Link>
        </div>
      </section>
    </div>
  )
}

