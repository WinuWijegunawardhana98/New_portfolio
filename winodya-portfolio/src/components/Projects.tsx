'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Search, Filter } from 'lucide-react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';
import AnimatedButton from './UI/AnimatedButton';


const Projects = () => {
  // Setup animation with useInView hook
  const { inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "BargainBazaar E-commerce Application",
      description: "Full-stack e-commerce platform enabling online purchasing with user-friendly features. Implemented backend APIs and integrated them with the frontend for seamless user interactions.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/WinuWijegunawardhana98/BargainBazaar.git",
      achievements: ["Fully functional e-commerce solution", "Responsive design", "Secure payment integration"],
      category: "Full-Stack",
      image: "bg-gradient-to-br from-green-500/20 to-blue-500/20"
    },
    {
      title: "Case Cobra - E-Commerce Web Application",
      description: "Web application for managing legal cases and client interactions, featuring document management and communication tools. Led the development of the frontend and database integration.",
      technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/WinuWijegunawardhana98/Case-Cobra.git",
      achievements: ["Secure case tracking system", "Efficient tool for law firms", "Enhanced client communication"],
      category: "Web Application",
      image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Glamour Grab - Virtual Fitting Room",
      description: "Virtual fitting room application integrating 3D modeling and real-time image processing for e-commerce platforms. Created personalized virtual dressing room using Blender Tool.",
      technologies: ["React.js", "Node.js", "MongoDB", "Blender", "3D Modeling"],
      github: "https://github.com/WinuWijegunawardhana98/FitConnect.git",
      achievements: ["Realistic fitting room simulation", "3D model integration", "Enhanced shopping experience"],
      category: "Innovation",
      image: "bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
    },
    {
      title: "OurCeylon.com - E-commerce Website",
      description: "WordPress-powered e-commerce website offering a seamless online shopping experience with intuitive UI/UX. Developed and customized the website with plugins and payment gateways.",
      technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
      achievements: ["Fully functional e-commerce platform", "Scalable architecture", "Enhanced user experience"],
      category: "CMS Development",
      image: "bg-gradient-to-br from-[#00ff88]/20 to-cyan-500/20"
    }
  ];

  const categories = ['All', 'Full-Stack', 'Web Application', 'Innovation', 'CMS Development'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <SectionWrapper id="projects" className="bg-[#0a0a0a]">
      <SectionTitle 
        title="Latest Projects" 
        highlightedText="Projects"
        subtitle="A showcase of my recent development work and technical expertise"
      />
      
      {/* Filter buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <div className="p-2 bg-[#1a1a1a] rounded-full flex items-center gap-2 flex-wrap">
          <Filter className="text-[#00ff88] ml-3" size={16} />
          {categories.map((category, idx) => (
            <motion.button
              key={idx}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-[#00ff88] text-black' 
                  : 'bg-transparent text-gray-300 hover:text-[#00ff88]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects grid with animation when filtering */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              index={index} 
              delay={0.1}
              theme="mixed"
              className="h-full"
            >
              <motion.div 
                className="relative h-48 mb-6 rounded-lg overflow-hidden"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project image placeholder with gradient */}
                <div className={`absolute inset-0 ${project.image}`}></div>
                
                {/* Overlay with links on hover */}
                <motion.div 
                  className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1a1a1a] rounded-full text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  <motion.a
                    href="#"
                    className="p-3 bg-[#1a1a1a] rounded-full text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Search size={20} />
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <div className="mb-2">
                <span className="text-xs px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00ff88] transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 4).map((tech, techIdx) => (
                  <motion.span
                    key={techIdx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 + (techIdx * 0.1) }}
                    className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 4 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded-md"
                  >
                    +{project.technologies.length - 4} more
                  </motion.span>
                )}
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#3a3a3a]">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Code size={14} /> {project.category}
                  </span>
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                        whileHover={{ scale: 1.2, y: -2 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-[#00ff88] transition-colors duration-300"
                      whileHover={{ scale: 1.2, y: -2 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-16"
      >
        <AnimatedButton
          href="https://github.com/WinuWijegunawardhana98"
          variant="outline"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          See All Projects on GitHub
        </AnimatedButton>
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
