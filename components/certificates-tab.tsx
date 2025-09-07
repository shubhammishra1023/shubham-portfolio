"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function CertificatesTab() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const certificates = [
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco Networking Academy",
      image: "/ccna-intro-networks.jpg",
      date: "2024",
      category: "Networking",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      image: "/javascript-essentials-cisco.jpg",
      date: "2024",
      category: "Programming",
    },
    {
      title: "Public Speaking Foundations",
      issuer: "LinkedIn Learning",
      image: "/public-speaking-foundations.jpg",
      date: "2024",
      category: "Soft Skills",
    },
    {
      title: "Git and GitHub",
      issuer: "Geekster",
      image: "/git-github-geekster.jpg",
      date: "2025",
      category: "Version Control",
    },
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      image: "/cybersecurity-essentials-cisco.jpg",
      date: "2023",
      category: "Security",
    },
    {
      title: "Life Mastery: Achieving Happiness and Success",
      issuer: "LinkedIn Learning",
      image: "/life-mastery-linkedin.jpg",
      date: "2024",
      category: "Soft Skills",
    },
    {
      title: "IL5x: Leading With Effective Communication",
      issuer: "CatalystX",
      image: "/leadership-communication-catalyst.jpg",
      date: "2024",
      category: "Soft Skills",
    },
    {
      title: "CCNAv7: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      image: "/ccna-switching-routing.jpg",
      date: "2024",
      category: "Networking",
    },
    {
      title: "Networking and Web Technology",
      issuer: "Infosys SpringBoard",
      image: "/networking-web-tech-infosys.jpg",
      date: "2025",
      category: "Web Development",
    },
    {
      title: "AI Fundamentals",
      issuer: "DataCamp",
      image: "/ai-fundamentals-datacamp.jpg",
      date: "2025",
      category: "AI & Machine Learning",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "AWS Academy",
      image: "/aws-ml-foundations.jpg",
      date: "2025",
      category: "AI & Machine Learning",
    },
    {
      title: "PCAP: Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      image: "/python-pcap-cisco.jpg",
      date: "2024",
      category: "Programming",
    },
    {
      title: "Relational Database Basics",
      issuer: "IBM via edX",
      image: "/database-basics-ibm.jpg",
      date: "2024",
      category: "Database",
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "EduSkills (Google for Developers)",
      image: "/ai-ml-internship-eduskills.jpg",
      date: "2024",
      category: "AI & Machine Learning",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      image: "/javascript-essentials-cisco.jpg",
      date: "2024",
      category: "Web Development",
    },
    {
      title: "Networking and Web Technology",
      issuer: "Infosys SpringBoard",
      image: "/networking-certificate.jpg",
      date: "2024",
      category: "Networking",
    },
    {
      title: "AWS Academy Machine Learning Foundations",
      issuer: "AWS Academy",
      image: "/aws-ml-foundations.jpg",
      date: "2024",
      category: "Cloud",
    },
    {
      title: "HTML-5",
      issuer: "Infosys SpringBoard",
      image: "/html5-certificate.jpg",
      date: "2024",
      category: "Web Development",
    },
  ]

  const categories = [...new Set(certificates.map((cert) => cert.category))]

  return (
    <>
      <div className="space-y-8 animate-fade-in-up">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-breathing"></span>
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates
                .filter((cert) => cert.category === category)
                .map((certificate, index) => (
                  <Card
                    key={certificate.title}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.title}
                        className="w-full h-48 object-contain bg-white group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(certificate.image)}
                      />
                      <Badge className="absolute top-2 right-2 bg-primary/90">{certificate.date}</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2 line-clamp-2">{certificate.title}</h4>
                      <p className="text-sm text-muted-foreground">{certificate.issuer}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            <img src={selectedImage || "/placeholder.svg"} alt="Certificate" className="w-full h-full object-contain" />
          </div>
        </div>
      )}
    </>
  )
}
