"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ExternalLink, Github, X } from "lucide-react"
import { useState } from "react"

export default function ProjectsTab() {
  const projects = [
    {
      title: "QuickFolio",
      description:
        "A full-stack company product that transforms resume data into a live, professional portfolio website. Built with Next.js, TypeScript, and MongoDB.",
      image: "/quickfolio.png",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://quickfolio.omsoftwares.in/",
      githubUrl: "https://quickfolio.omsoftwares.in/",
    },
    {
      title: "Security Assisters",
      description:
        "Educational website teaching cyber safety to elderly individuals with multilingual audio lessons and text-to-speech technology.",
      image: "/security-assisters.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Speech API"],
      liveUrl: "https://shubhammishra1023.github.io/WORTHY-HACK_PROJECT/",
      githubUrl: "https://github.com/shubhammishra1023/WORTHY-HACK_PROJECT",
    },
    {
      title: "Child Therapy Website",
      description:
        "Responsive website for child therapy services in Visakhapatnam with SEO optimization and PHP-based appointment booking.",
      image: "/child-therapy.png",
      technologies: ["HTML5", "CSS3", "PHP", "JavaScript", "Swiper.js"],
      liveUrl: "https://shubhammishra1023.github.io/CHILD_THERAPY/",
      githubUrl: "https://github.com/shubhammishra1023/CHILD_THERAPY",
    },
    {
      title: "TaskMaster",
      description:
        "Marketplace app connecting consumers with local service providers featuring real-time chat and authentication.",
      image: "/service-marketplace-app.jpg",
      technologies: ["React.js", "Next.js", "MongoDB", "Socket.io"],
      liveUrl: "",
      githubUrl: "https://github.com/shubhammishra1023/taskmaster",
    },
  ]

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
        {projects.map((project, index) => (
          <Card key={project.title} className="group hover:shadow-lg transition-all duration-300">
            <div
              className="relative overflow-hidden rounded-t-lg cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-contain bg-muted group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view full image
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-2">
                {project.liveUrl && project.liveUrl !== "" ? (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <div className="flex items-center text-muted-foreground text-sm">
                    <div className="w-2 h-2 bg-muted-foreground/50 rounded-full mr-2"></div>
                    Demo not available
                  </div>
                )}
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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
                alt="Project preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
