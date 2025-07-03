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
  animationType?: 'bounce' | 'pulse' | 'rotate' | 'scale' | 'none';
  tooltip?: string;
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
  animationType = 'scale',
  tooltip
}: AnimatedIconProps) => {
  const getAnimationProps = () => {
    const baseProps = {
      style: { color },
      whileTap: { scale: 0.9 }
    };
    
    let animationProps = {};
    
    // Add hover animation based on type
    switch (animationType) {
      case 'bounce':
        animationProps = {
          ...baseProps,
          whileHover: { 
            y: [-3, 0, -3], 
            color: hoverColor,
            transition: { repeat: Infinity, duration: 1.2 }
          }
        };
        break;
      case 'pulse':
        animationProps = {
          ...baseProps,
          whileHover: { 
            scale: [1, 1.1, 1], 
            color: hoverColor,
            transition: { repeat: Infinity, duration: 1.5 }
          }
        };
        break;
      case 'rotate':
        animationProps = {
          ...baseProps,
          whileHover: { 
            rotate: 360, 
            color: hoverColor,
            transition: { duration: 0.8, ease: "easeInOut" } 
          }
        };
        break;
      case 'none':
        animationProps = {
          ...baseProps,
          whileHover: { 
            color: hoverColor,
            transition: { duration: 0.3 } 
          }
        };
        break;
      case 'scale':
      default:
        animationProps = {
          ...baseProps,
          whileHover: { 
            scale: 1.15, 
            y: -3,
            color: hoverColor,
            transition: { type: 'spring', stiffness: 400, damping: 10 } 
          }
        };
    }
    
    return animationProps;
  };

  const iconElement = (
    <motion.div
      className={`inline-flex relative ${className}`}
      {...getAnimationProps()}
    >
      <Icon size={size} />
      {tooltip && (
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {tooltip}
        </span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`inline-flex transition-colors duration-300 group ${tooltip ? 'relative' : ''}`}
        target={target}
        rel={rel}
        aria-label={tooltip}
      >
        {iconElement}
      </a>
    );
  }

  return (
    <div className={`inline-flex ${tooltip ? 'group relative' : ''}`}>
      {iconElement}
    </div>
  );
};

export default AnimatedIcon;
