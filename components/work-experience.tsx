"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Calendar, MapPin, ExternalLink, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  description: string
  companyLogo: string
  certificateImage: string
  skills: string[]
}

export default function WorkExperience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({})
  const skillsRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const experiences: Experience[] = [
    {
      title: "Jr. React Developer",
      company: "OM Softwares",
      location: "Remote",
      duration: "Apr 2025 - Present",
      description:
        "Develop responsive client-specific features using React.js, Next.js, and Tailwind CSS. Lead team collaboration and contribute to technical articles for company growth.",
      companyLogo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/omsoftwareslogo-rziZhG2PBq5vG0eAQVPjbtCevryGHf.webp",
      certificateImage: "/ShubhamCOA.jpg",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Git", "Team Leadership"],
    },
    {
      title: "Frontend Web Development Intern",
      company: "MotionCut",
      location: "Remote",
      duration: "May 2024 - June 2024",
      description:
        "Completed 1-month intensive internship focusing on frontend development. Built responsive web applications and gained hands-on experience with modern web technologies.",
      companyLogo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/motioncut%20logo-XBwWUZ1gTvYbopidDESD214PjVKqXy.png",
      certificateImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MotionCut-Frontend-WebDev-Intern_page-0001.jpg-Z0xH9Jj1OhZvXxVeitouUZ6JExLHtT.jpeg",
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      title: "Computer Science Student",
      company: "VIIT",
      location: "Visakhapatnam, AP",
      duration: "2022 - 2026",
      description:
        "Pursuing B.Tech in Computer Science Engineering with focus on software development, algorithms, and modern programming practices.",
      companyLogo: "/viit-logo.png",
      certificateImage: "/computer-science-student-certificate.jpg",
      skills: ["Data Structures", "Algorithms", "Programming", "Software Engineering"],
    },
  ]

  const toggleSkills = (index: number, event: React.MouseEvent) => {
    event.stopPropagation()
    setExpandedSkills((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = Object.keys(skillsRefs.current).every((key) => {
        const ref = skillsRefs.current[Number.parseInt(key)]
        return ref && !ref.contains(event.target as Node)
      })

      if (clickedOutside) {
        setExpandedSkills({})
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <section id="experience" className="py-16 px-4 bg-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-breathing"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-mono">Work Experience</h2>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and educational background in software development
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={800}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="work-experience-swiper"
            >
              {experiences.map((exp, index) => (
                <SwiperSlide key={index}>
                  <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-primary/20 hover:border-primary/40 bg-background/80 backdrop-blur-sm h-[600px] flex flex-col">
                    <CardHeader className="space-y-4 flex-shrink-0">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-primary/20 bg-background/50 flex-shrink-0">
                            <img
                              src={exp.companyLogo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <CardTitle className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {exp.title}
                            </CardTitle>
                            <p className="text-primary font-semibold text-sm truncate">{exp.company}</p>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0" />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 flex-shrink-0">
                        {exp.description}
                      </p>

                      <div
                        ref={(el) => { skillsRefs.current[index] = el; }}
                        className="flex flex-wrap gap-1 flex-shrink-0"
                      >
                        {expandedSkills[index]
                          ? exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="px-2 py-1 text-xs font-mono border border-primary/20 hover:border-primary/50 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))
                          : exp.skills.slice(0, 4).map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="px-2 py-1 text-xs font-mono border border-primary/20 hover:border-primary/50 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                        {exp.skills.length > 4 && !expandedSkills[index] && (
                          <Badge
                            variant="outline"
                            className="px-2 py-1 text-xs cursor-pointer hover:bg-primary/10 transition-colors"
                            onClick={(e) => toggleSkills(index, e)}
                          >
                            +{exp.skills.length - 4}
                          </Badge>
                        )}
                      </div>

                      <div className="relative group/cert flex-1 min-h-0">
                        <div
                          className="w-full h-full rounded-lg overflow-hidden border border-primary/20 bg-background/30 cursor-pointer"
                          onClick={() => setSelectedImage(exp.certificateImage || "/placeholder.svg")}
                        >
                          <img
                            src={exp.certificateImage || "/placeholder.svg"}
                            alt={`${exp.title} certificate`}
                            className="w-full h-full object-contain group-hover/cert:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg pointer-events-none"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-black/30 rounded-lg">
                          <span className="text-white text-xs sm:text-sm font-medium text-center px-2">
                            Click to view certificate
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-transparent border-none overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-black/70 hover:bg-black/90 rounded-full text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Certificate preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
