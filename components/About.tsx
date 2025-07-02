'use client'

import { User, Target, Heart, Briefcase } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark-800 via-dark-800 to-dark-900"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-400/3 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my journey, passion, and what drives me forward
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-600/20 rounded-lg animate-glow">
                <User className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a motivated and results-driven undergraduate Software Engineering student with 
              hands-on experience in full-stack development and web technologies. Currently pursuing 
              my Bachelor of Science (Hons) in Information Technology at Sri Lanka Institute of 
              Information Technology (SLIIT).
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in technology began with curiosity and has evolved into a passion for 
              creating innovative solutions that make a difference. I thrive in collaborative 
              environments and enjoy tackling complex problems with creative solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Location", value: "Sri Lanka", icon: "🌍" },
                { label: "Experience", value: "6+ Months", icon: "💼" },
                { label: "Projects", value: "10+ Completed", icon: "🚀" },
                { label: "Languages", value: "3 Languages", icon: "🗣️" }
              ].map((item, index) => (
                <div key={index} className="bg-dark-700/80 p-4 rounded-lg hover-lift card-hover backdrop-blur-sm border border-primary-600/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <h4 className="text-primary-400 font-semibold text-sm">{item.label}</h4>
                  </div>
                  <p className="text-gray-300 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Values & Interests */}
          <div className="space-y-8 animate-fade-in-right">
            {[
              {
                icon: <Target className="w-6 h-6 text-primary-400" />,
                title: "My Mission",
                content: "To leverage technology to create meaningful solutions that enhance user experiences and solve real-world problems. I'm committed to continuous learning and staying updated with the latest industry trends.",
                gradient: "from-blue-500/10 to-primary-500/10"
              },
              {
                icon: <Heart className="w-6 h-6 text-primary-400" />,
                title: "What I Love",
                content: [
                  "Building responsive and user-friendly web applications",
                  "Exploring new technologies and frameworks", 
                  "Collaborating with diverse teams",
                  "Problem-solving and debugging challenges"
                ],
                gradient: "from-pink-500/10 to-primary-500/10"
              },
              {
                icon: <Briefcase className="w-6 h-6 text-primary-400" />,
                title: "Currently",
                content: "Seeking opportunities to apply my skills in a dynamic environment where I can contribute to innovative projects while continuing to grow as a developer.",
                gradient: "from-purple-500/10 to-primary-500/10"
              }
            ].map((item, index) => (
              <div key={index} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-primary-600/20 p-6 rounded-xl hover-lift card-hover`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary-600/20 rounded-lg animate-pulse">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                {Array.isArray(item.content) ? (
                  <ul className="text-gray-300 space-y-2">
                    {item.content.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-primary-400 mr-2 mt-1">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
