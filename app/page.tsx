"use client"

import { useEffect, useState } from "react"
import WelcomeScreen from "@/components/welcome-screen"
import Portfolio from "@/components/portfolio"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return <div className="min-h-screen bg-background">{showWelcome ? <WelcomeScreen /> : <Portfolio />}</div>
}
