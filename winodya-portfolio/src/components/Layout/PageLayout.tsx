'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AnimationProvider } from '@/context/AnimationContext';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <AnimationProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimationProvider>
  );
};

export default PageLayout;
