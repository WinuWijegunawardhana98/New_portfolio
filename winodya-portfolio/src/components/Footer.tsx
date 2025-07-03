'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ChevronUp, Heart } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github size={18} />, 
      href: "https://github.com/WinuWijegunawardhana98" 
    },
    { 
      icon: <Linkedin size={18} />, 
      href: "https://linkedin.com/in/winodya-wijegunawardhana" 
    },
    { 
      icon: <Mail size={18} />, 
      href: "mailto:winodyawijegunawardhana@gmail.com" 
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">Winodya</div>
            <p className="text-gray-400 text-sm">
              Full-Stack Developer & Software Engineer specializing in modern web technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                >
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="text-gray-400 hover:text-[#00ff88] transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              Located in Sri Lanka
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-[#1a1a1a] mt-10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Winodya Wijegunawardhana. All rights reserved. 
            <span className="inline-flex items-center ml-1">
              Made with <Heart size={12} className="text-[#00ff88] mx-1" /> in Sri Lanka
            </span>
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-[#1a1a1a] text-gray-400 hover:text-[#00ff88] hover:bg-[#2a2a2a] transition-all duration-300"
          >
            <ChevronUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
