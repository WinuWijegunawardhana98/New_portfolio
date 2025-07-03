'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
  size?: number;
  color?: string;
  hoverColor?: string;
  className?: string;
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

const AnimatedIcon = ({
  Icon,
  size = 24,
  color = 'currentColor',
  hoverColor = '#00ff88',
  className = '',
  href,
  target,
  rel,
}: AnimatedIconProps) => {
  const iconElement = (
    <motion.div
      className={`inline-flex ${className}`}
      whileHover={{ 
        scale: 1.15, 
        y: -3,
        color: hoverColor,
        transition: { type: 'spring', stiffness: 400, damping: 10 } 
      }}
      whileTap={{ scale: 0.9 }}
      style={{ color }}
    >
      <Icon size={size} />
    </motion.div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className="inline-flex transition-colors duration-300"
        target={target}
        rel={rel}
      >
        {iconElement}
      </a>
    );
  }

  return iconElement;
};

export default AnimatedIcon;
