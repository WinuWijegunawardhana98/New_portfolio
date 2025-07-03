'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, CheckCircle, ExternalLink, GraduationCap, Shield, Star } from 'lucide-react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';

const Certifications = () => {
  const [ref] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  type ThemeColor = 'green' | 'blue' | 'purple' | 'cyan' | 'mixed';
  
  interface Certification {
    name: string;
    issuer: string;
    date: string;
    description: string;
    skills: string[];
    color: ThemeColor;
    icon: React.ReactNode;
  }

  const certifications: Certification[] = [
    {
      name: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      date: "08/10/2024",
      description: "Comprehensive understanding of AWS Cloud concepts, AWS services, security, architecture, pricing, and support.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
      color: "green",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "MongoDB Certification",
      issuer: "MongoDB University",
      date: "25/03/2024",
      description: "Proficiency in MongoDB database design, query optimization, and implementation of MongoDB solutions.",
      skills: ["NoSQL", "Database Design", "Query Optimization", "Data Modeling"],
      color: "blue",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      name: "Foundations of Prompt Engineering",
      issuer: "AI Training Institute",
      date: "12/02/2025",
      description: "Expertise in designing effective prompts for large language models and AI systems to achieve desired outcomes.",
      skills: ["AI", "LLMs", "Natural Language Processing", "Content Generation"],
      color: "purple",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "AWS Foundations of Prompt Engineering",
      issuer: "Amazon Web Services",
      date: "12/02/2025",
      description: "Specialized knowledge in prompt engineering for AWS AI services and integration with cloud infrastructure.",
      skills: ["AWS AI Services", "Prompt Design", "Cloud Integration", "LLMs"],
      color: "cyan",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const getGradientColors = (color: string) => {
    switch (color) {
      case 'green':
        return 'from-[#00ff88]/20 via-emerald-500/10 to-transparent';
      case 'blue':
        return 'from-blue-500/20 via-indigo-500/10 to-transparent';
      case 'purple':
        return 'from-purple-500/20 via-fuchsia-500/10 to-transparent';
      case 'cyan':
        return 'from-cyan-500/20 via-blue-500/10 to-transparent';
      default:
        return 'from-gray-700/20 to-transparent';
    }
  };

  const getIconBackground = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-gradient-to-br from-[#00ff88]/30 to-emerald-500/30 text-[#00ff88]';
      case 'blue':
        return 'bg-gradient-to-br from-blue-500/30 to-indigo-500/30 text-blue-400';
      case 'purple':
        return 'bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 text-purple-400';
      case 'cyan':
        return 'bg-gradient-to-br from-cyan-500/30 to-blue-500/30 text-cyan-400';
      default:
        return 'bg-gradient-to-br from-gray-700/30 to-gray-900/30 text-gray-400';
    }
  };

  // Animation variants with proper typing
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const
      }
    }
  };

  return (
    <SectionWrapper id="certifications" className="bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <SectionTitle 
        title="Certifications & Achievements" 
        highlightedText="Certifications"
        subtitle="My professional certifications and accomplishments"
      />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Card
              className="h-full overflow-hidden group relative"
              theme={cert.color}
              index={idx}
              delay={0}
            >
              {/* Animated Background Element */}
              <motion.div
                className={`absolute inset-0 bg-gradient-radial ${getGradientColors(cert.color)} opacity-30`}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full ${
                    cert.color === 'green' ? 'bg-[#00ff88]/30' :
                    cert.color === 'blue' ? 'bg-blue-400/30' :
                    cert.color === 'purple' ? 'bg-purple-400/30' : 'bg-cyan-400/30'
                  }`}
                  style={{
                    left: `${10 + (i * 20)}%`,
                    top: `${10 + (i * 15)}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
              
              <div className="flex flex-col h-full z-10 relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${getIconBackground(cert.color)} flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  
                  <div className="space-y-1">
                    <motion.h3 
                      className="text-xl font-bold" 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                    >
                      {cert.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                    >
                      {cert.issuer}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-sm text-gray-400 mt-1"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.1) }}
                    >
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </motion.div>
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                >
                  {cert.description}
                </motion.p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Award size={14} className={
                      cert.color === 'green' ? 'text-[#00ff88]' :
                      cert.color === 'blue' ? 'text-blue-400' :
                      cert.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'
                    } />
                    Key Skills
                  </h4>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                  >
                    {cert.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skillIdx}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className={`text-xs px-3 py-1 rounded-full ${
                          cert.color === 'green' 
                            ? 'bg-[#00ff88]/10 text-[#00ff88] border border-[#00ff88]/20' 
                            : cert.color === 'blue'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : cert.color === 'purple'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
                
                <motion.div 
                  className={`absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 ${
                    cert.color === 'green' ? 'bg-[#00ff88]' :
                    cert.color === 'blue' ? 'bg-blue-400' :
                    cert.color === 'purple' ? 'bg-purple-400' : 'bg-cyan-400'
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.button 
                  className={`group flex items-center gap-2 text-sm mt-4 ${
                    cert.color === 'green' ? 'text-[#00ff88]/70 hover:text-[#00ff88]' :
                    cert.color === 'blue' ? 'text-blue-400/70 hover:text-blue-400' :
                    cert.color === 'purple' ? 'text-purple-400/70 hover:text-purple-400' : 
                    'text-cyan-400/70 hover:text-cyan-400'
                  } transition-colors duration-300`}
                  whileHover={{ x: 5 }}
                >
                  View Certificate
                  <ExternalLink size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Certifications;
