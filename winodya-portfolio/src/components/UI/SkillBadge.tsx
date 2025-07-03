'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
  delay?: number;
  highlight?: boolean;
  icon?: string | ReactNode; // Emoji, icon string, or React element
}

const SkillBadge = ({
  name,
  index,
  delay = 0,
  highlight = false,
  icon
}: SkillBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Colors based on category index for more variety
  const getGlowColor = () => {
    if (highlight) return 'shadow-[#00ff88]/30';
    
    // Use modulo to cycle through colors based on index
    switch (index % 4) {
      case 0: return 'shadow-blue-400/30';
      case 1: return 'shadow-purple-400/30';
      case 2: return 'shadow-cyan-400/30';
      case 3: return 'shadow-amber-400/30';
      default: return 'shadow-white/20';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: delay + (index * 0.05),
        type: 'spring', 
        stiffness: 200, 
        damping: 15 
      }}
      whileHover={{ 
        scale: 1.12, 
        y: -5,
        backgroundColor: highlight ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.08)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-4 py-2 rounded-full border backdrop-blur-sm ${highlight 
        ? 'border-[#00ff88]/50 bg-gradient-to-r from-[#00ff88]/15 to-[#00ff88]/5 text-[#00ff88]'
        : 'border-[#3a3a3a] bg-[#2a2a2a]/80 text-gray-200'
      } transition-all duration-300 flex items-center gap-2 ${isHovered ? `shadow-lg ${getGlowColor()}` : ''}`}
    >
      {icon && (
        <motion.span 
          animate={isHovered ? { rotate: [0, 15, -5, 0], scale: [1, 1.2, 1] } : {}} 
          transition={{ duration: 0.5 }}
          className={`flex items-center justify-center ${highlight ? 'text-[#00ff88]' : 'text-gray-300'}`}
        >
          {icon}
        </motion.span>
      )}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
