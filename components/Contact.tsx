'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with a form service like Netlify Forms, EmailJS, etc.
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "winodyawijegunawardhana@gmail.com",
      href: "mailto:winodyawijegunawardhana@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone", 
      value: "+94 771 783 672",
      href: "tel:+94771783672"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "159/4/1, Weralugaslanda, Ellakkala, Sri Lanka",
      href: ""
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/WinuWijegunawardhana98",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/winodya-wijegunawardhana",
      color: "hover:text-blue-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Portfolio",
      href: "https://wijegunawardhana.netlify.app/",
      color: "hover:text-primary-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to take on new challenges and collaborate with amazing people. 
                Whether you have a project in mind, want to discuss opportunities, or just want to 
                connect, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-dark-900 rounded-lg hover:bg-dark-700 transition-colors duration-300">
                  <div className="text-primary-400 flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-white hover:text-primary-400 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Find me online</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-dark-900 rounded-lg text-gray-300 ${social.color} transition-colors duration-300 hover:transform hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-primary-600/10 border border-primary-600/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-2">Current Status</h4>
              <p className="text-primary-400 font-medium mb-2">
                🟢 Available for new opportunities
              </p>
              <p className="text-gray-300 text-sm">
                Actively seeking internship and entry-level software engineering positions
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-200 resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Closing Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600/20 to-primary-700/20 backdrop-blur-sm border border-primary-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ready to turn your ideas into reality? I'm excited to collaborate with you on your next project. 
              Whether it's a web application, mobile app, or any tech solution, let's make it happen!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30">
                💼 Available for Projects
              </span>
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30">
                🚀 Quick Response Time
              </span>
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full border border-primary-600/30">
                ✨ Quality Guaranteed
              </span>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-dark-700">
            <p className="text-gray-400 text-sm">
              © 2025 Winodya Wijegunawardhana. Made with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
