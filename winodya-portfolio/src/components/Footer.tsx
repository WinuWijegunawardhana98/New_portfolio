'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ChevronUp, Heart } from 'lucide-react';

const Footer = () => {
  // Using useInView hook for animation triggers
  useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/WinuWijegunawardhana98" 
    },
    { 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/in/winodya-wijegunawardhana" 
    },
    { 
      icon: <Mail size={20} />, 
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
    <footer className="bg-black py-6 border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-4">
          <div className="text-2xl font-bold gradient-text inline-block">Winodya</div>
        </div>
        
        <div className="flex justify-center gap-6 mb-4">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="text-gray-300 hover:text-[#00ff88] transition-all duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        
        <p className="text-gray-500 text-sm mb-4">
          © {currentYear} Winodya Wijegunawardhana. All rights reserved.<br />
          <span className="inline-flex items-center">
            Made with <Heart size={12} className="text-[#00ff88] mx-1" /> in Sri Lanka
          </span>
        </p>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full bg-[#1a1a1a] text-gray-400 hover:text-[#00ff88] hover:bg-[#2a2a2a] transition-all duration-300 mx-auto"
        >
          <ChevronUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
