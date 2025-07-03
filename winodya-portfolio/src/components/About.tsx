'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Heart, Zap, Users, ArrowRight } from 'lucide-react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';
import AnimatedButton from './UI/AnimatedButton';
import AnimatedIcon from './UI/AnimatedIcon';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Strong analytical skills with a passion for solving complex technical challenges",
      theme: 'green' as const
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "Constantly exploring new technologies and staying updated with industry trends",
      theme: 'purple' as const
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Excellent time management skills with ability to meet tight deadlines",
      theme: 'cyan' as const
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Effective collaboration in cross-functional environments",
      theme: 'blue' as const
    }
  ];

  return (
    <SectionWrapper id="about" style={{ backgroundColor: '#0a0a0a' }}>
      <SectionTitle 
        title="About Me" 
        highlightedText="Me" 
        subtitle="Get to know more about my background, skills, and approach to development"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Left side - Personal details */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card theme="mixed" className="overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Winodya Wijegunawardhana</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A motivated and results-driven Software Engineering student at Sri Lanka Institute of Information Technology with hands-on 
                experience in full-stack development, web technologies, and problem-solving.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey in software development is driven by a passion for creating elegant solutions to complex problems.
                I enjoy working with modern technologies and continuously learning new skills.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-sm">Name:</p>
                  <p className="text-white font-medium">Winodya W.</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email:</p>
                  <p className="text-white font-medium break-all">winodyawijegunawardhana@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Based in:</p>
                  <p className="text-white font-medium">Sri Lanka</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Available for:</p>
                  <p className="text-white font-medium">Full-time roles</p>
                </div>
              </div>
              
              <AnimatedButton 
                href="#contact" 
                variant="primary"
                className="mt-4"
              >
                Contact Me <ArrowRight size={18} />
              </AnimatedButton>
            </div>
          </Card>
        </motion.div>

        {/* Right side - Highlights */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              index={index}
              theme={item.theme}
              delay={0.2}
            >
              <motion.div 
                className="p-3 rounded-lg bg-[#2a2a2a] w-14 h-14 flex items-center justify-center mb-6 text-[#00ff88]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
