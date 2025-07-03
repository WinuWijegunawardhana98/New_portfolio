'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  noBottomPadding?: boolean;
}

const SectionWrapper = ({ 
  id, 
  className = '', 
  children, 
  style = {}, 
  noBottomPadding = false 
}: SectionWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative py-16 md:py-20 lg:py-24 ${noBottomPadding ? 'pb-0' : 'lg:pb-24 md:pb-20 pb-16'} ${className}`}
      style={{ backgroundColor: '#000000', ...style }}
    >
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-5">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#00ff88]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00ff88]/5 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3" />
        </div>
      </div>
      
      {/* Content with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
