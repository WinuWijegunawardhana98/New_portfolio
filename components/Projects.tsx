'use client'

import { ExternalLink, Github, Sparkles } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "BargainBazzar E-commerce Application",
      description: "Full-stack e-commerce platform enabling online purchasing with user-friendly features and seamless shopping experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/WinuWijegunawardhana98/BargainBazaar.git",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout system",
        "Responsive design for all devices"
      ]
    },
    {
      title: "Case Cobra - E-Commerce Web Application",
      description: "Specialized e-commerce platform for custom phone cases with advanced customization features and secure payment integration.",
      technologies: ["Next.js", "React", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/WinuWijegunawardhana98/Case-Cobra.git",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Custom product design interface",
        "Real-time preview functionality",
        "Secure payment processing",
        "Order tracking system"
      ]
    },
    {
      title: "Glamour Grab - Virtual Fitting Room",
      description: "Innovative virtual fitting room application integrating 3D modeling and real-time image processing for enhanced online shopping.",
      technologies: ["React.js", "Node.js", "MongoDB", "Blender", "Three.js"],
      githubUrl: "https://github.com/WinuWijegunawardhana98/FitConnect.git",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Virtual 3D model integration",
        "Real-time clothing simulation",
        "AR/VR compatibility",
        "Personalized fitting recommendations"
      ]
    },
    {
      title: "OurCeylon.com - E-commerce Website",
      description: "WordPress-powered e-commerce platform offering seamless online shopping experience with intuitive UI/UX design.",
      technologies: ["WordPress", "WooCommerce", "Elementor", "PHP"],
      githubUrl: "",
      liveUrl: "https://ourceylon.com",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Custom WordPress theme development",
        "WooCommerce integration",
        "Payment gateway setup",
        "SEO optimization"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-700 to-dark-800"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest work and development projects that demonstrate my skills and creativity
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-900/80 backdrop-blur-sm border border-primary-600/20 rounded-xl overflow-hidden hover-lift card-hover group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-primary-400 animate-pulse" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold animate-bounce">View Project</div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-dark-700/80 text-gray-300 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105 btn-animate"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-105 btn-animate animate-glow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-gray-400 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-105 btn-animate animate-glow"
          >
            <span>Let's Work Together</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
