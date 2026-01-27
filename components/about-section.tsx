"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Zap,
  Brain,
  Heart,
  Target,
  Award,
  BookOpen,
  Users,
  TrendingUp,
  Download,
  Mail,
} from "lucide-react"

interface SkillCategory {
  title: string
  skills: string[]
  icon: React.ReactNode
}

interface Achievement {
  metric: string
  description: string
  icon: React.ReactNode
}

export default function AboutSection() {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  const fullText = "Building Digital Experiences with Code and Creativity"

  useEffect(() => {
    setIsVisible(true)
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Shadcn UI"],
      icon: <Code2 className="w-5 h-5 text-primary" />,
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "Authentication"],
      icon: <Zap className="w-5 h-5 text-primary" />,
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "Webpack", "Vite", "Figma Integration", "Cloud Deployment"],
      icon: <Brain className="w-5 h-5 text-primary" />,
    },
  ]

  const achievements: Achievement[] = [
    {
      metric: "50+",
      description: "Projects Completed",
      icon: <Award className="w-8 h-8 text-primary" />,
    },
    {
      metric: "2+",
      description: "Years Experience",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
    },
    {
      metric: "100%",
      description: "Client Satisfaction",
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      metric: "10+",
      description: "Team Collaborations",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
  ]

  const values = [
    {
      title: "Innovation First",
      description: "Always exploring new technologies and best practices to deliver cutting-edge solutions.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Quality Code",
      description:
        "Writing clean, maintainable, and well-documented code that stands the test of time.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: "User Focused",
      description: "Creating intuitive interfaces that solve real problems and delight users.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with industry trends and contributing to the developer community.",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ]

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto max-w-6xl z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/50 hover:bg-primary/30 font-mono">
            ABOUT ME
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full-Stack Developer dedicated to transforming ideas into elegant,
            functional digital solutions. With expertise in modern web technologies and a keen eye
            for user experience, I create applications that not only look great but perform flawlessly.
          </p>
        </div>

        {/* Who Am I Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-primary font-mono">Who Am I?</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm Shubham Mishra, a results-driven Full-Stack Developer based in India with a proven
              track record of delivering high-quality web applications. With a strong foundation in
              computer science and hands-on experience across the full development stack, I excel at
              turning complex requirements into simple, elegant solutions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My journey in tech started with a passion for problem-solving and has evolved into a
              comprehensive skillset spanning frontend frameworks, backend systems, and cloud
              technologies. I thrive in collaborative environments and take pride in writing code that
              others want to work with.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-primary font-mono"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="flex justify-center mb-3">{achievement.icon}</div>
                      <div className="text-2xl font-bold text-primary font-mono mb-1">
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-foreground/70">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary font-mono mb-4">Core Values</h3>
            <p className="text-foreground/70">What drives my work every single day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-2 font-mono">{value.title}</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary font-mono mb-4">Technical Arsenal</h3>
            <p className="text-foreground/70">
              Leveraging modern tools to build scalable and maintainable applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors font-mono text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <Card
          className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur border-primary/30 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <CardContent className="pt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary font-mono mb-4">My Philosophy</h3>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                "Great software is invisible—it solves problems so elegantly that users forget they're
                using technology at all. Every line of code I write is an opportunity to contribute
                positively to someone's digital experience. I believe in continuous improvement, both
                in the products I build and in myself as a developer."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-foreground/70 mb-6 font-mono">Ready to build something amazing together?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
              View My Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 text-primary font-mono"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
