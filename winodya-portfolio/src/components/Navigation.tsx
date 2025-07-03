'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = useMemo(() => [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = menuItems.map(item => document.getElementById(item.id));
      const pageYOffset = window.pageYOffset;
      const scrollPosition = pageYOffset + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(menuItems[i].id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-[#00ff88]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text relative group"
          >
            <span className="relative z-10">Winodya</span>
            <motion.span 
              className="absolute inset-0 bg-[#00ff88]/10 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative
                    ${activeSection === item.id 
                      ? 'text-[#00ff88] font-semibold' 
                      : 'text-gray-300 hover:text-[#00ff88]'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  {activeSection === item.id ? (
                    <motion.span 
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff88] rounded-full"
                      initial={{ width: '0%', left: '50%' }}
                      animate={{ width: '100%', left: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00ff88]/50 scale-x-0 rounded-full origin-center group-hover:scale-x-100 transition-transform duration-300"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 hover:text-[#00ff88] transition-all duration-300 p-2 rounded-full bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
          boxShadow: isOpen ? '0 10px 15px -3px rgba(0, 255, 136, 0.1)' : 'none'
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-2">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: isOpen ? index * 0.1 : 0, duration: 0.4 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg
                ${activeSection === item.id 
                  ? 'text-[#00ff88] bg-[#00ff88]/10 font-semibold border-l-2 border-[#00ff88]' 
                  : 'text-gray-300 hover:text-[#00ff88] hover:bg-[#00ff88]/5'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
