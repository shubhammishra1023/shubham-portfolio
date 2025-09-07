"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsTab() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", logo: "/html5-logo.png" },
        { name: "CSS3", logo: "/css3-logo.png" },
        { name: "JavaScript", logo: "/javascript-logo.png" },
        { name: "React.js", logo: "/react-logo.png" },
        { name: "Next.js", logo: "/nextjs-logo.png" },
        { name: "TypeScript", logo: "/typescript-logo.png" },
        { name: "Tailwind CSS", logo: "/tailwind-css-logo.png" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", logo: "/nodejs-logo.png" },
        { name: "Express.js", logo: "/expressjs-logo.png" },
        { name: "MongoDB", logo: "/mongodb-logo.png" },
        { name: "Python", logo: "/python-logo.png" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", logo: "/git-logo.jpg" },
        { name: "GitHub", logo: "/github-logo.png" },
        { name: "VS Code", logo: "/vscode-logo.png" },
        { name: "Vercel", logo: "/vercel-logo.png" },
        { name: "Netlify", logo: "/netlify-logo.png" },
        { name: "MongoDB Atlas", logo: "/mongodb-atlas-logo.jpg" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", logo: "/javascript-logo.png" },
        { name: "Python", logo: "/python-logo.png" },
        { name: "C++", logo: "/c-logo.png" },
        { name: "C", logo: "/c-programming-logo.png" },
      ],
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in-up">
      {skillCategories.map((category, categoryIndex) => (
        <Card key={category.title} className="bg-card">
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300 group"
                  style={{
                    animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                  }}
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center bg-background rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
