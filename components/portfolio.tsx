"use client"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TabsSection from "@/components/tabs-section"
import WorkExperience from "@/components/work-experience"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TabsSection />
      <WorkExperience />
      <Footer />
    </div>
  )
}
