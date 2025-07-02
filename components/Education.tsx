'use client'

import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      duration: "2021 - 2025",
      status: "Current",
      location: "Sri Lanka",
      specialization: "Information Technology",
      coursework: [
        "Software Engineering",
        "Database Management",
        "Web Development", 
        "Cloud Computing",
        "Robotics",
        "Machine Learning"
      ],
      achievements: [
        "Maintaining good academic standing",
        "Active participation in tech communities",
        "Completed multiple practical projects"
      ]
    },
    {
      degree: "HR Management Course",
      institution: "Open University of Sri Lanka",
      duration: "2019 - 2020",
      status: "Completed",
      location: "Sri Lanka",
      specialization: "Human Resource Management",
      coursework: [
        "Human Resource Planning",
        "Employee Relations",
        "Performance Management",
        "Organizational Behavior",
        "Training and Development"
      ],
      achievements: [
        "Successfully completed certification",
        "Gained understanding of HR principles",
        "Developed soft skills and management knowledge"
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span> & Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology and management
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-dark-900 rounded-xl p-8 relative overflow-hidden hover:transform hover:scale-102 transition-all duration-300">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400/3 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="p-3 bg-primary-600/20 rounded-lg flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-primary-400 font-semibold text-lg mb-1">{edu.institution}</p>
                        <p className="text-green-400 font-medium">Specialization: {edu.specialization}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 text-gray-400 lg:text-right">
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 lg:justify-end">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-green-600/20 text-green-400' 
                            : 'bg-blue-600/20 text-blue-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 text-primary-400 mr-2" />
                        Key Coursework
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <div key={courseIndex} className="bg-dark-700 rounded-lg p-3">
                            <span className="text-gray-300 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Award className="w-5 h-5 text-primary-400 mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-gray-300">
                            <span className="text-primary-400 mr-3 mt-1 text-sm">▸</span>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-dark-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300 mb-4">
                I believe in lifelong learning and continuously update my skills through online courses, 
                certifications, and hands-on projects to stay current with industry trends.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full">
                  Self-Directed Learning
                </span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full">
                  Online Certifications
                </span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full">
                  Practical Projects
                </span>
                <span className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full">
                  Industry Research
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
