"use client"

import { Github, Linkedin, Mail, Phone, FileText, Code2, ChefHat } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shubhammishra1023",
      icon: Github,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/shubham_mishra2/",
      icon: Code2, // Using Code2 icon for LeetCode instead of generic ExternalLink
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/shubham3_2",
      icon: ChefHat, // Using ChefHat icon for CodeChef instead of generic ExternalLink
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-mishra-27376726b/",
      icon: Linkedin,
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1eYnJlK0DePZMYxPLGvFxRUWnN9S1rWg7/view?usp=drive_link",
      icon: FileText, // Using FileText icon for Resume instead of generic ExternalLink
    },
    {
      name: "Gmail", // Added Gmail as separate social link
      url: "mailto:shubhammishra2056@gmail.com",
      icon: Mail,
    },
  ]

  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Shubham Mishra</h3>
            <p className="text-muted-foreground">
              Full-Stack Developer passionate about creating innovative solutions and building scalable applications.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:shubhammishra2056@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>G-mail</span>
              </a>
              <a
                href="tel:+919347871052"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9347871052</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background hover:bg-primary transition-colors duration-300 rounded-lg group hover:shadow-lg hover:shadow-primary/20" // Added hover shadow effect
                    title={link.name}
                  >
                    <IconComponent className="w-5 h-5 text-foreground group-hover:text-primary-foreground" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Shubham Mishra. All rights reserved. Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
