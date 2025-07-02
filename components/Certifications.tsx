'use client'

import { Award, Calendar, ExternalLink, Shield } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      date: "08/10/2024",
      description: "Comprehensive understanding of AWS cloud services, architecture, and best practices for cloud computing.",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Cloud Security"],
      credentialUrl: "",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "MongoDB Certification", 
      issuer: "MongoDB University",
      date: "25/03/2024",
      description: "Advanced knowledge in MongoDB database management, query optimization, and data modeling techniques.",
      skills: ["MongoDB", "Database Design", "Query Optimization", "Data Modeling"],
      credentialUrl: "",
      logo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "Professional Certification Body",
      date: "12/02/2025",
      description: "Essential skills in prompt engineering, AI interaction optimization, and effective communication with AI systems.",
      skills: ["AI Prompt Engineering", "Machine Learning", "AI Communication", "Language Models"],
      credentialUrl: "",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      title: "AWS Foundations of Prompt Engineering",
      issuer: "Amazon Web Services",
      date: "12/02/2025", 
      description: "Specialized training in prompt engineering within AWS ecosystem, focusing on AI/ML services and optimization.",
      skills: ["AWS AI Services", "Prompt Engineering", "Cloud AI/ML", "AWS Bedrock"],
      credentialUrl: "",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-dark-800 rounded-xl p-6 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl group-hover:bg-primary-500/10 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-400/3 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary-600/20 rounded-lg flex-shrink-0 group-hover:bg-primary-600/30 transition-colors duration-300">
                    <Award className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-primary-400 font-semibold">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Verified Credential</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Skills Acquired:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium hover:bg-primary-600/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {cert.credentialUrl && (
                  <div className="flex justify-end">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Credential</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-dark-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Certification Overview</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-400 mb-2">{certifications.length}</div>
                <div className="text-gray-300">Total Certifications</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
                <div className="text-gray-300">Cloud Platforms</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-400 mb-2">15+</div>
                <div className="text-gray-300">Skills Covered</div>
              </div>
              <div className="bg-dark-700 rounded-lg p-4">
                <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                <div className="text-gray-300">Verified</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Always expanding my knowledge through continuous learning and professional development
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            <span>Discuss My Qualifications</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
