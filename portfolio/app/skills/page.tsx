"use client"

import { useEffect, useRef } from "react"

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Python", "Database Management"]
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
          <h1 className="section-title mb-4">My Skills</h1>
          <p className="section-subtitle">Constantly learning and improving</p>
        </div>
      </section>

      <section ref={sectionRef} className="fade-in py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <span className="text-[var(--color-accent)] mr-3">•</span>
                <span className="text-lg">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

