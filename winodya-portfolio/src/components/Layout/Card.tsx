'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type GradientTheme = 'green' | 'blue' | 'purple' | 'cyan' | 'mixed';

interface CardProps {
  children: ReactNode;
  className?: string;
  theme?: GradientTheme;
  delay?: number;
  index?: number;
}

const Card = ({ 
  children, 
  className = '', 
  theme = 'green',
  delay = 0,
  index = 0,
}: CardProps) => {
  // Define different gradient themes
  const gradientThemes = {
    green: 'from-[#00ff88]/10 to-transparent',
    blue: 'from-blue-500/10 to-transparent',
    purple: 'from-purple-500/10 to-transparent',
    cyan: 'from-cyan-400/10 to-transparent',
    mixed: 'from-blue-500/10 via-purple-500/5 to-[#00ff88]/10'
  };

  const borderThemes = {
    green: 'group-hover:border-[#00ff88]',
    blue: 'group-hover:border-blue-500',
    purple: 'group-hover:border-purple-500',
    cyan: 'group-hover:border-cyan-400',
    mixed: 'group-hover:border-[#00ff88]'
  };

  const hoverGlowThemes = {
    green: 'hover:shadow-[#00ff88]/20',
    blue: 'hover:shadow-blue-500/20',
    purple: 'hover:shadow-purple-500/20', 
    cyan: 'hover:shadow-cyan-400/20',
    mixed: 'hover:shadow-[#00ff88]/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: delay + (index * 0.2) }}
      className={`group h-full ${className}`}
    >
      <div 
        className={`bg-[#1a1a1a] p-4 sm:p-5 lg:p-6 rounded-lg hover:bg-[#1e1e1e] transition-all duration-500 
          border border-[#3a3a3a] ${borderThemes[theme]} 
          hover:shadow-lg ${hoverGlowThemes[theme]}
          relative overflow-hidden h-full flex flex-col`}
      >
        {/* Background gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientThemes[theme]} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
        
        {/* Content container */}
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
