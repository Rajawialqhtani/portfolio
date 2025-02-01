import { Github, Linkedin } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Rajawialqhtani",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rajawi-alqahtani",
    icon: <Linkedin className="w-5 h-5" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-section-background)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-[var(--color-secondary-text)]">
              © {new Date().getFullYear()} Rajawi Alqhtani. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-[var(--color-secondary-text)] hover:text-[var(--color-text)] transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

