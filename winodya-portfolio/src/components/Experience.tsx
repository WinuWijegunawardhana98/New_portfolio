'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Intern Software Engineer",
      company: "EWIS Career Training Center",
      duration: "March 2024 - September 2024",
      location: "Sri Lanka",
      type: "Internship",
      responsibilities: [
        "Designed and implemented responsive web applications, ensuring optimal user experience",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Developed dynamic React.js user interfaces with modern design principles",
        "Integrated RESTful APIs for seamless data communication",
        "Optimized MongoDB queries to enhance backend performance by 30%",
        "Enhanced debugging and problem-solving skills through real-world application",
        "Delivered projects adhering to industry best practices and tight deadlines",
        "Contributed to user experience improvements for educational management systems"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "RESTful APIs", "JavaScript", "HTML5", "CSS3"],
      achievements: [
        "Successfully completed 6-month internship with live project deployments",
        "Improved backend performance by 30% through query optimization",
        "Delivered multiple projects meeting tight deadlines",
        "Gained hands-on experience in full-stack development"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#00ff88] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey in the software development industry
          </p>
        </motion.div>

        {/* Grid layout for experience cards similar to certifications */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 hover-glow relative overflow-hidden h-full flex flex-col">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        {/* Icon container with styling */}
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 flex items-center justify-center">
                          <div className="text-white">
                            <Briefcase className="w-6 h-6" />
                          </div>
                        </div>
                        
                        {/* Type tag with styling */}
                        <div>
                          <span className="text-xs font-semibold text-[#00ff88] bg-[#00ff88]/20 px-3 py-1 rounded-full inline-block whitespace-nowrap">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Calendar size={16} />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">
                      {experience.title}
                    </h3>

                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-gray-300 mb-0">
                        {experience.company}
                      </h4>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {experience.responsibilities[0]}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="text-[#00ff88] flex-shrink-0" size={18} />
                            Key Responsibilities:
                          </h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.slice(1, 5).map((responsibility, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.3 + 0.4 + idx * 0.1 }}
                                className="text-gray-300 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="text-[#00ff88] flex-shrink-0" size={18} />
                            Additional Tasks:
                          </h5>
                          <ul className="space-y-2">
                            {experience.responsibilities.slice(5).map((responsibility, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.3 + 0.4 + (idx + 4) * 0.1 }}
                                className="text-gray-300 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-4">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIdx) => (
                          <motion.span
                            key={techIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.3 + 0.6 + techIdx * 0.05 }}
                            className="text-xs bg-[#2a2a2a] text-gray-300 px-3 py-1 rounded-full border border-[#3a3a3a] hover:border-[#00ff88] transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Push achievements to bottom with flex grow */}
                    <div className="mt-auto pt-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="pt-4 border-t border-[#3a3a3a]"
                      >
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Key Achievements:
                        </h5>
                        <div className="grid gap-3">
                          {experience.achievements.map((achievement, achIdx) => (
                            <motion.div
                              key={achIdx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.3 + 0.8 + achIdx * 0.1 }}
                              className="bg-[#2a2a2a] p-3 rounded-lg border-l-4 border-[#00ff88] hover:bg-[#3a3a3a] transition-colors duration-300"
                            >
                              <p className="text-sm text-gray-300">{achievement}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I&apos;m actively seeking internship or entry-level software engineering positions 
              where I can leverage my technical skills and contribute to innovative projects.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#00ff88] text-black px-8 py-3 rounded-full font-semibold hover-glow transition-all duration-300"
            >
              <Briefcase size={20} />
              Let&apos;s Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
