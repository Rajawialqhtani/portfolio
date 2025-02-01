"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Projects() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of your first project." },
    { id: 2, name: "Project 2", description: "Description of your second project." },
  ]
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
          <h1 className="section-title mb-4">My Projects</h1>
          <p className="section-subtitle">Bringing ideas to life</p>
        </div>
      </section>

      <section ref={sectionRef} className="fade-in py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                <p className="text-[var(--color-secondary-text)] mb-4">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="apple-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

