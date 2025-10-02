"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsTab() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "HTML5", logo: "/icons8-html5-240.png" },
        { name: "CSS3", logo: "/icons8-css3-240.png" },
        { name: "JavaScript", logo: "/icons8-javascript-240.png" },
        { name: "React.js", logo: "/icons8-react-80.png" },
        { name: "Next.js", logo: "/icons8-nextjs-96.png" },
        { name: "TypeScript", logo: "/icons8-typescript-240.png" },
        { name: "Tailwind CSS", logo: "/icons8-tailwindcss-240.png" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", logo: "/icons8-nodejs-240.png" },
        { name: "Express.js", logo: "/icons8-express-js-100.png" },
        { name: "MongoDB", logo: "/icons8-mongodb-96.png" },
        { name: "Python", logo: "/icons8-python-240.png" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", logo: "/icons8-git-240.png" },
        { name: "GitHub", logo: "/icons8-github-240.png" },
        { name: "VS Code", logo: "/icons8-visual-studio-250.png" },
        { name: "Vercel", logo: "/icons8-vercel-96.png" },
        { name: "Netlify", logo: "/icons8-netlify-240.png" },
        { name: "MongoDB Atlas", logo: "/icons8-mongodb-96.png" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", logo: "/icons8-c-240.png" },
        { name: "C++", logo: "/icons8-c-240.png" },
        { name: "Python", logo: "/icons8-python-240.png" },
        { name: "SQL", logo: "/icons8-sql-96.png" },
        { name: "Java", logo: "/icons8-java-240.png" },
        { name: "JavaScript", logo: "/icons8-javascript-240.png" },
        
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
