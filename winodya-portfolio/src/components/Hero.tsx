'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, User, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define a type for particle properties
interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
}

const Hero = () => {
  // State to store particles
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles only on the client side
  useEffect(() => {
    // Generate 20 particles with random properties
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 4 + 1,
      height: Math.random() * 4 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#01131f]">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-[#00ff88] rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left side content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:text-left text-center lg:col-span-7 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0b2230] px-4 py-2 rounded-full border border-[#194259]"
            >
              <Sparkles className="text-[#00ff88]" size={18} />
              <span className="text-gray-300 text-sm">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">Winodya</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-3xl font-medium text-[#00ff88]"
            >
              Frontend Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-2xl lg:mx-0 mx-auto"
            >
              A motivated and results-driven Software Engineering professional with expertise in 
              frontend development, creating elegant and responsive web experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#00ff88', color: '#01131f' }}
              >
                <User size={18} />
                Contact Me
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: 'rgba(11, 34, 48, 0.6)', backdropFilter: 'blur(4px)', color: 'white' }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="flex lg:justify-start justify-center gap-6 pt-6"
            >
              <motion.a
                href="https://github.com/WinuWijegunawardhana98"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300 flex items-center justify-center h-10 w-10 rounded-full border border-[#194259] bg-[#0b2230]"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/winodya-wijegunawardhana"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300 flex items-center justify-center h-10 w-10 rounded-full border border-[#194259] bg-[#0b2230]"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:winodyawijegunawardhana@gmail.com"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300 flex items-center justify-center h-10 w-10 rounded-full border border-[#194259] bg-[#0b2230]"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Backdrop glow */}
              <motion.div 
                className="absolute -inset-4 bg-[#00ff88]/10 blur-xl -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Profile image with modern effect */}
              <div className="relative h-auto w-full max-w-[450px] overflow-hidden rounded-lg shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                {/* Enhanced visibility - reduced overlays and removed vertical line */}
                
                {/* Subtle overlay for professional look - reduced opacity for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#01131f]/40 to-transparent z-10" />
                
                {/* Main image container with professional styling */}
                <div className="relative">
                  {/* Subtle vignette effect - reduced opacity for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  
                  <Image
                    src="/me.jpg"
                    alt="Winodya profile picture"
                    width={600}
                    height={800}
                    className="object-cover w-full min-h-[500px] brightness-110 contrast-105"
                    priority
                  />
                  
                  {/* Subtle pattern overlay */}
                  <motion.div 
                    className="absolute inset-0 z-20 opacity-5 mix-blend-overlay"
                    style={{ 
                      backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
                      backgroundSize: '4px 4px',
                      backgroundPosition: '0 0, 2px 2px'
                    }}
                  />
                </div>
              </div>
              
              {/* Modern accents - instead of orbiting circles */}
              <motion.div 
                className="absolute -bottom-2 -left-4 h-16 w-16 border-l-2 border-b-2 border-[#00ff88]/70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div 
                className="absolute -top-2 -right-4 h-16 w-16 border-r-2 border-t-2 border-[#00ff88]/70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className="absolute top-1/2 -right-2 h-4 w-8 bg-[#00ff88]"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#00ff88] hover:text-[#4dffa0] transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
