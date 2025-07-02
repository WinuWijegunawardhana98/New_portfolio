'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, MapPin, Download, Sparkles } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full-Stack Developer & Software Engineer"
  
  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-primary-600/5 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Enhanced Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 p-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center relative overflow-hidden">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl font-bold text-primary-800 hover:scale-110 transition-transform duration-500">
                    W
                  </div>
                  {/* Sparkle effect */}
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-primary-300 animate-pulse" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-400/20 animate-spin" style={{animationDuration: '10s'}}></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-slide-up">
              Hi, I'm <span className="gradient-text hover:scale-105 inline-block transition-transform duration-300">Winodya</span>
            </h1>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl text-gray-300 font-light">
                {displayText}
                <span className="animate-pulse text-primary-400">|</span>
              </h2>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
              Passionate Information Technology undergraduate with expertise in full-stack development, 
              web technologies, and problem-solving. Experienced in React.js, Node.js, and modern 
              development practices.
            </p>
            
            {/* Achievements badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-primary-300 text-sm font-medium hover:bg-primary-600/30 transition-colors duration-300">
                🎓 IT Undergraduate
              </div>
              <div className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-primary-300 text-sm font-medium hover:bg-primary-600/30 transition-colors duration-300">
                💼 6+ Months Experience
              </div>
              <div className="px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full text-primary-300 text-sm font-medium hover:bg-primary-600/30 transition-colors duration-300">
                🏆 4 Certifications
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <MapPin size={18} />
            <span>Sri Lanka</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/WinuWijegunawardhana98"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/winodya-wijegunawardhana"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
            <a
              href="mailto:winodyawijegunawardhana@gmail.com"
              className="p-3 bg-dark-800 rounded-full hover:bg-primary-600 transition-colors duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
            </a>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 hover:scale-105 transform"
            >
              <span className="flex items-center space-x-2">
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
              </span>
            </a>
            <a
              href="/winodya-cv.pdf"
              download="Winodya_Wijegunawardhana_CV.pdf"
              className="group px-8 py-4 bg-gradient-to-r from-primary-600/20 to-primary-700/20 border-2 border-primary-600 text-primary-400 rounded-full font-semibold hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 hover:text-white transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download CV</span>
              </span>
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 border-2 border-primary-600/50 text-primary-400 rounded-full font-semibold hover:bg-primary-600/10 hover:border-primary-500 hover:text-primary-300 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm"
            >
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <Sparkles className="w-4 h-4 group-hover:animate-spin" />
              </span>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-primary-400 text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-primary-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
