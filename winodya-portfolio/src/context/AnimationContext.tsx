'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, easeOut } from 'framer-motion';

type AnimationContextType = {
  animationComplete: boolean;
  setAnimationComplete: (completed: boolean) => void;
};

const AnimationContext = createContext<AnimationContextType>({
  animationComplete: false,
  setAnimationComplete: () => {},
});

export const useAnimation = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <AnimationContext.Provider value={{ animationComplete, setAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  );
};

// Staggered animation for sections
export const staggeredAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: easeOut, delay }
});

// Fade in animation for sections
export const fadeInAnimation = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: easeOut, delay }
});

// Slide in animation for sections
export const slideInAnimation = (direction = "left", delay = 0) => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const y = direction === "up" ? -50 : direction === "down" ? 50 : 0;
  
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: easeOut, delay }
  };
};

// Animation wrapper component for sections
export const AnimatedSection = ({
  children,
  animation = "fade",
  direction = "up",
  delay = 0,
  className = "",
  ...props
}: {
  children: ReactNode;
  animation?: "fade" | "slide" | "stagger";
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let animationProps: any = {};
  
  switch (animation) {
    case "slide":
      animationProps = slideInAnimation(direction, delay);
      break;
    case "stagger":
      animationProps = staggeredAnimation(delay);
      break;
    case "fade":
    default:
      animationProps = fadeInAnimation(delay);
  }
  
  return (
    <motion.div
      className={className}
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      viewport={animationProps.viewport}
      transition={animationProps.transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};
