'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
  delay?: number;
  highlight?: boolean;
  icon?: string; // Emoji or icon
}

const SkillBadge = ({
  name,
  index,
  delay = 0,
  highlight = false,
  icon
}: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: delay + (index * 0.05),
        type: 'spring', 
        stiffness: 200, 
        damping: 15 
      }}
      whileHover={{ 
        scale: 1.08, 
        backgroundColor: highlight ? 'rgba(0, 255, 136, 0.15)' : 'rgba(255, 255, 255, 0.08)',
        y: -3
      }}
      className={`px-4 py-2 rounded-full border ${highlight 
        ? 'border-[#00ff88]/40 bg-[#00ff88]/10 text-[#00ff88]'
        : 'border-[#3a3a3a] bg-[#2a2a2a] text-gray-300'
      } transition-all duration-300 flex items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
