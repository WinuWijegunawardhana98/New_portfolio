'use client'

import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/WinuWijegunawardhana98',
      icon: <Github className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/winodya-wijegunawardhana',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:winodyawijegunawardhana@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ]

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              Winodya Wijegunawardhana
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer passionate about creating innovative solutions 
              and delivering exceptional user experiences. Always eager to learn 
              and tackle new challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2 bg-dark-800 rounded-lg text-gray-400 hover:text-primary-400 hover:bg-primary-600/20 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Sri Lanka</p>
              <a 
                href="mailto:winodyawijegunawardhana@gmail.com"
                className="hover:text-primary-400 transition-colors duration-200 block"
              >
                winodyawijegunawardhana@gmail.com
              </a>
              <a 
                href="tel:+94771783672"
                className="hover:text-primary-400 transition-colors duration-200 block"
              >
                +94 771 783 672
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Winodya Wijegunawardhana. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500" />{' '}
              using Next.js & Tailwind CSS
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 pt-8 border-t border-dark-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-dark-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-400">10+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-400">4</div>
              <div className="text-gray-400 text-sm">Certifications</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-400">6+</div>
              <div className="text-gray-400 text-sm">Months Experience</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4">
              <div className="text-2xl font-bold text-primary-400">100%</div>
              <div className="text-gray-400 text-sm">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
