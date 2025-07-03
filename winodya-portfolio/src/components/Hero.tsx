'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileDown, Sparkles, User, Code } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left side content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:text-left text-center lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#3a3a3a]"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-3 lg:justify-start justify-center"
            >
              <div className="flex items-center gap-2 bg-[#1a1a1a]/50 px-4 py-2 rounded-full">
                <Code size={16} className="text-[#00ff88]" />
                <span className="text-gray-300">Full-Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1a1a]/50 px-4 py-2 rounded-full">
                <User size={16} className="text-[#00ff88]" />
                <span className="text-gray-300">Software Engineer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-2xl lg:mx-0 mx-auto"
            >
              A motivated and results-driven Software Engineering student with hands-on 
              experience in full-stack development, web technologies, and problem-solving.
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
              style={{ backgroundColor: '#00ff88', color: '#000000' }}
            >
              Get In Touch
              <Mail size={18} />
            </motion.a>

            <motion.a
              href="/Resume-Winodya-Wijegunawardhana.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 px-8 py-3 rounded-full font-semibold hover:text-black transition-all duration-300 flex items-center gap-2"
              style={{ 
                borderColor: '#00ff88', 
                color: '#00ff88',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#00ff88';
                e.currentTarget.style.color = '#000000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#00ff88';
              }}
            >
              Download CV
              <FileDown size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex lg:justify-start justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/WinuWijegunawardhana98"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/winodya-wijegunawardhana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:winodyawijegunawardhana@gmail.com"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
          </motion.div>

          {/* Right side content - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              {/* Animated border/glow effect */}
              <div className="absolute inset-0 rounded-full border-2 border-[#00ff88] opacity-75 animate-pulse"></div>
              
              {/* Background pattern/circle */}
              <div className="absolute -inset-4 bg-[#1a1a1a] rounded-full blur-sm -z-10"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-[#00ff88]/20 to-transparent rounded-full blur-md -z-20"></div>
              
              {/* Profile image with frame */}
              <div className="h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-[#00ff88] p-2 relative overflow-hidden green-glow">
                <div className="h-full w-full rounded-full overflow-hidden bg-gradient-to-b from-[#1a1a1a] to-black">
                  {/* Replace this with an actual profile image when available */}
                  <Image
                    src="/me.jpg"
                    alt="Winodya Wijegunawardhana profile picture"
                    width={320}
                    height={320}
                    className="object-cover h-full w-full rounded-full"
                    priority
                  />
                </div>
                
                {/* Floating tech icons around the profile */}
                <motion.div 
                  className="absolute top-5 -right-4 bg-[#1a1a1a] p-2 rounded-full border border-[#3a3a3a]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">⚛️</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-2 -left-4 bg-[#1a1a1a] p-2 rounded-full border border-[#3a3a3a]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/4 -left-6 bg-[#1a1a1a] p-2 rounded-full border border-[#3a3a3a]"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-2xl">🌟</span>
                </motion.div>
              </div>
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
