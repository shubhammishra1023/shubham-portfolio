"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Download, Github, Linkedin, Mail, Code2, FileText, ChefHat } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const techStack = ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"]
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Full-Stack Developer"

  const floatingSocials = [
    {
      name: "GitHub",
      url: "https://github.com/shubhammishra1023",
      icon: Github,
      position: "top-4 -right-4",
      delay: "0s",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-mishra-27376726b/",
      icon: Linkedin,
      position: "bottom-8 -left-8",
      delay: "0.5s",
    },
    {
      name: "Gmail",
      url: "mailto:shubhammishra2056@gmail.com",
      icon: Mail,
      position: "top-1/2 -left-6",
      delay: "1s",
    },
  ]

  const connectSocials = [
    {
      name: "GitHub",
      url: "https://github.com/shubhammishra1023",
      icon: Github,
      delay: "0s",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-mishra-27376726b/",
      icon: Linkedin,
      delay: "0.2s",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/shubham_mishra2/",
      icon: Code2,
      delay: "0.4s",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/shubham3_2",
      icon: ChefHat,
      delay: "0.6s",
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1eYnJlK0DePZMYxPLGvFxRUWnN9S1rWg7/view?usp=drive_link",
      icon: FileText,
      delay: "0.8s",
    },
    {
      name: "Gmail",
      url: "mailto:shubhammishra2056@gmail.com",
      icon: Mail,
      delay: "1s",
    },
  ]

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left order-2 lg:order-1">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 font-mono leading-tight">
                <span className="inline-block animate-pulse">
                  {displayText}
                  <span className="animate-blink text-primary">|</span>
                </span>
              </h1>
              <div className="relative">
                <p className="text-base sm:text-lg lg:text-xl text-primary mb-2 font-mono animate-fade-in-up delay-1000 break-words">
                  Computer Science Student | Tech Enthusiast
                </p>
                <div className="absolute -top-1 left-0 text-base sm:text-lg lg:text-xl text-primary/30 font-mono animate-glitch break-words">
                  Computer Science Student | Tech Enthusiast
                </div>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-1500 break-words">
                Passionate about solving real-world problems with efficient, secure and user-friendly software
                solutions. Experienced in React.js, Next.js, Node.js, and scalable application development.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 animate-fade-in-up delay-2000">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm font-mono border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-in-up delay-2500">
              <Button
                size="lg"
                asChild
                className="group font-mono border border-primary/30 hover:border-primary bg-primary/10 hover:bg-primary/20 text-sm sm:text-base"
              >
                <a
                  href="https://github.com/shubhammishra1023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  View Projects
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="font-mono border-primary/30 hover:border-primary bg-transparent text-sm sm:text-base"
              >
                <a
                  href="https://drive.google.com/file/d/1eYnJlK0DePZMYxPLGvFxRUWnN9S1rWg7/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="space-y-3 animate-fade-in-up delay-3000">
              <span className="text-xs sm:text-sm text-muted-foreground font-mono">Connect with me:</span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {connectSocials.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/50 hover:bg-primary/20 border border-primary/20 hover:border-primary/60 rounded-lg transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 animate-float"
                      style={{ animationDelay: social.delay }}
                      title={social.name}
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-foreground group-hover:text-primary" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-fade-in-up delay-500 order-1 lg:order-2">
            {/* Profile Picture Container */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>

              {floatingSocials.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={`floating-${social.name}`}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute ${social.position} p-2 sm:p-3 bg-background/80 backdrop-blur-sm border border-primary/30 rounded-full hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 animate-float hidden sm:block`}
                    style={{ animationDelay: social.delay }}
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-foreground group-hover:text-primary" />
                  </a>
                )
              })}

              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
                <img
                  src="/shubham-profile.png"
                  alt="Shubham Mishra"
                  className="w-full h-full object-cover object-center"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent"></div>
              </div>

              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-primary/20 font-mono text-xs animate-matrix-scroll hidden sm:block">
                {"// Building the future"}
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-primary/20 font-mono text-xs animate-matrix-scroll-reverse hidden sm:block">
                {"console.log('Innovation')"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
