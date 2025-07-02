'use client'

import { Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experience = {
    title: "Intern Software Engineer",
    company: "EWIS Career Training Center",
    location: "Sri Lanka",
    duration: "March 2024 - September 2024",
    type: "Internship",
    responsibilities: [
      "Designed and implemented responsive web applications, ensuring optimal user experience across all devices",
      "Collaborated with cross-functional teams to deliver high-quality software solutions within tight deadlines",
      "Developed dynamic React.js user interfaces with modern component architecture and state management",
      "Integrated RESTful APIs and optimized MongoDB queries to enhance backend performance by 30%",
      "Enhanced debugging and problem-solving skills through real-world application development",
      "Delivered projects adhering to industry best practices and agile development methodologies"
    ],
    achievements: [
      "Successfully completed 6-month internship with live project deployments",
      "Contributed to user experience improvements and performance optimization",
      "Improved backend performance by 30% through database query optimization",
      "Delivered multiple projects on time following industry standards"
    ],
    technologies: [
      "React.js", "JavaScript", "Node.js", "MongoDB", "Express.js", 
      "HTML5", "CSS3", "Git", "RESTful APIs", "Responsive Design"
    ]
  }

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the valuable experience I've gained in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="bg-dark-800 rounded-xl p-8 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-400/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary-600/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                    <p className="text-primary-400 font-semibold text-lg">{experience.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Type Badge */}
              <div className="mb-6">
                <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                  {experience.type}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary-400 mr-2" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-primary-400 mr-3 mt-1 text-sm">▸</span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">Key Achievements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="bg-dark-700 rounded-lg p-4">
                      <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium hover:bg-primary-600/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Looking for a dedicated and skilled developer to join your team?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
            >
              <span>Let's Discuss Opportunities</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
