"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectsTab from "@/components/projects-tab"
import CertificatesTab from "@/components/certificates-tab"
import SkillsTab from "@/components/skills-tab"

export default function TabsSection() {
  return (
    <section id="portfolio" className="py-16 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-primary rounded-full mr-4 animate-breathing"></div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Portfolio Showcase</h2>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card h-auto p-1">
            <TabsTrigger
              value="projects"
              className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 py-2 sm:px-4 sm:py-3"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="truncate">Projects</span>
            </TabsTrigger>
            <TabsTrigger
              value="certificates"
              className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 py-2 sm:px-4 sm:py-3"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span className="truncate">Certificates</span>
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm px-2 py-2 sm:px-4 sm:py-3"
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
              <span className="truncate">Tech Stack</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="certificates">
            <CertificatesTab />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
