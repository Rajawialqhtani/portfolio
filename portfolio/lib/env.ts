export const env = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",
} as const

// Validate environment variables
export function validateEnv() {
  const requiredEnvs = ["NEXT_PUBLIC_BASE_URL"] as const

  for (const env of requiredEnvs) {
    if (!process.env[env]) {
      throw new Error(`Missing required environment variable: ${env}`)
    }
  }
}

