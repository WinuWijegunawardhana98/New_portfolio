'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  highlightedText?: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  highlightedText, 
  subtitle, 
  centered = true 
}: SectionTitleProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayTitle = highlightedText 
    ? title.replace(highlightedText, `<span class="gradient-text">${highlightedText}</span>`)
    : title;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`mb-10 md:mb-12 lg:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 
        className="text-4xl md:text-5xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: displayTitle }}
      />
      <div className={`w-24 h-1 bg-[#00ff88] mb-8 ${centered ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
