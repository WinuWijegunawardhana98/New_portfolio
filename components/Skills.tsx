'use client'

import { Code, Database, Cloud, Globe, Smartphone, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "HTML5 & CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 75 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Express.js", level: 80 },
        { name: "Java", level: 75 },
        { name: "Spring Boot", level: 70 },
        { name: "Python", level: 78 },
        { name: "RESTful APIs", level: 85 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "AWS Services", level: 70 },
        { name: "Azure", level: 65 },
        { name: "Firebase", level: 72 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <GitBranch className="w-8 h-8" />,
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "WordPress", level: 80 },
        { name: "Next.js", level: 82 },
        { name: "Blender", level: 60 },
        { name: "VS Code", level: 90 },
      ]
    }
  ]

  const languages = [
    { name: "Sinhala", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Professional" },
  ]

  return (
    <section id="skills" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-400/3 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and programming languages
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-800/80 backdrop-blur-sm border border-primary-600/20 rounded-xl p-6 hover-lift card-hover animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-primary-400 p-3 bg-primary-600/20 rounded-lg animate-glow">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold bg-primary-600/20 px-2 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out hover:from-primary-400 hover:to-primary-300 animate-pulse"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Languages</h3>
            <p className="text-gray-400">Communication skills across multiple languages</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-dark-800 rounded-xl p-6 text-center hover:bg-dark-700 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{language.name}</h4>
                <p className="text-primary-400 font-medium">{language.level}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Soft Skills</h3>
            <p className="text-gray-400">Essential interpersonal and professional skills</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Problem Solving",
              "Team Collaboration", 
              "Time Management",
              "Communication",
              "Analytical Thinking",
              "Adaptability",
              "Leadership",
              "Critical Thinking"
            ].map((skill, index) => (
              <div key={index} className="bg-dark-800 rounded-lg p-4 text-center hover:bg-primary-600 transition-colors duration-300 group">
                <span className="text-gray-300 group-hover:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
