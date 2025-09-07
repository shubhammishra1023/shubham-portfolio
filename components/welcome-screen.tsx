"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div
        className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-foreground mb-4 animate-fade-in-up">Welcome to My Portfolio</h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up delay-300">Empowering Ideas Through Code</p>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center space-x-6 mt-8 animate-fade-in-up delay-500">
          <a
            href="https://github.com/shubhammishra1023"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary transition-colors duration-300 rounded-full group"
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-mishra-27376726b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary transition-colors duration-300 rounded-full group"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="mailto:shubhammishra2056@gmail.com"
            className="p-3 bg-card hover:bg-primary transition-colors duration-300 rounded-full group"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
          <a
            href="tel:+919347871052"
            className="p-3 bg-card hover:bg-primary transition-colors duration-300 rounded-full group"
          >
            <Phone className="w-6 h-6 text-foreground group-hover:text-primary-foreground" />
          </a>
        </div>

        {/* Loading indicator */}
        <div className="mt-12 animate-fade-in-up delay-700">
          <div className="w-32 h-1 bg-muted rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-primary rounded-full animate-pulse-glow"
              style={{ width: "100%", animation: "pulse-glow 3s ease-in-out" }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Loading Portfolio...</p>
        </div>
      </div>
    </div>
  )
}
