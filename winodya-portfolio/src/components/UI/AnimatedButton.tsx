'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface AnimatedButtonProps {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  download?: boolean;
  target?: '_blank' | '_self';
  rel?: string;
}

const AnimatedButton = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  download = false,
  target,
  rel,
}: AnimatedButtonProps) => {
  // Define styles based on variant
  const variantClasses = {
    primary: 'bg-[#00ff88] text-black hover:bg-[#00ff88]/90',
    secondary: 'bg-[#1a1a1a] text-white border border-[#3a3a3a] hover:border-[#00ff88] hover:bg-[#1a1a1a]/80',
    outline: 'bg-transparent border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10',
  };

  // Define styles based on size
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  // Base classes for all buttons
  const baseClasses = 'rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.span
      className="w-full h-full inline-flex items-center justify-center gap-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.span>
  );

  // Return either a button or an anchor based on whether href is provided
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
      >
        {buttonContent}
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {buttonContent}
      </button>
    );
  }
};

export default AnimatedButton;
