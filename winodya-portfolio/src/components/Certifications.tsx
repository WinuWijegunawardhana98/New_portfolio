'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, ExternalLink, Shield, Cloud, Database, Brain } from 'lucide-react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services",
      date: "08/10/2024",
      icon: <Cloud className="w-6 h-6" />,
      category: "Cloud Computing",
      description: "Comprehensive understanding of AWS cloud services, architecture, and best practices for cloud deployment and management.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Optimization"],
      color: "from-orange-500 to-yellow-500",
      theme: "mixed" as const
    },
    {
      title: "MongoDB Certification",
      issuer: "MongoDB University",
      date: "25/03/2024",
      icon: <Database className="w-6 h-6" />,
      category: "Database",
      description: "Proficiency in MongoDB database management, query optimization, and NoSQL database design principles.",
      skills: ["NoSQL", "Database Design", "Query Optimization", "Aggregation"],
      color: "from-green-500 to-emerald-500",
      theme: "green" as const
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "Professional Development Institute",
      date: "12/02/2025",
      icon: <Brain className="w-6 h-6" />,
      category: "AI/ML",
      description: "Advanced techniques for prompt engineering, AI model interaction, and effective AI communication strategies.",
      skills: ["Prompt Design", "AI Communication", "Model Optimization", "AI Ethics"],
      color: "from-purple-500 to-pink-500",
      theme: "purple" as const
    },
    {
      title: "AWS Foundations of Prompt Engineering",
      issuer: "Amazon Web Services",
      date: "12/02/2025",
      icon: <Shield className="w-6 h-6" />,
      category: "AI/Cloud",
      description: "Specialized knowledge in AWS AI services and prompt engineering techniques for cloud-based AI applications.",
      skills: ["AWS AI Services", "Prompt Engineering", "Cloud AI", "LLM Integration"],
      color: "from-blue-500 to-cyan-500",
      theme: "blue" as const
    }
  ];

  return (
    <SectionWrapper id="certifications" className="bg-[#0a0a0a]">
      <SectionTitle 
        title="Professional Certifications" 
        highlightedText="Certifications"
        subtitle="Credentials that validate my expertise and knowledge in various technology domains"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
        {certifications.map((cert, index) => (
          <Card 
            key={index} 
            theme={cert.theme}
            index={index}
            delay={0.1}
          >
            <div className="relative mb-6">
              {/* Certificate badge/icon */}
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-20 flex items-center justify-center text-white`}>
                  {cert.icon}
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Calendar size={14} className="mr-1" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-xs font-medium bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full">
                  {cert.category}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-[#00ff88] transition-colors duration-300">
              {cert.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-2">
              Issued by: <span className="text-gray-300">{cert.issuer}</span>
            </p>

            <p className="text-gray-300 text-sm mb-6">
              {cert.description}
            </p>
            
            <div className="mt-auto pt-4 border-t border-[#3a3a3a]">
              <h4 className="text-sm font-medium text-white mb-3">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) + (idx * 0.05) }}
                    className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Verify button */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center w-full mt-6 text-sm gap-2 bg-[#2a2a2a] text-gray-300 py-2 rounded-md hover:bg-[#3a3a3a] transition-all duration-300"
            >
              <Award size={14} />
              Verify Certificate
              <ExternalLink size={14} />
            </motion.a>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
