'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, BookOpen, Star, CheckCircle } from 'lucide-react';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';


const Education = () => {
  // Setup animation without relying on inView
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Science (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      duration: "2021 - 2025",
      location: "Sri Lanka",
      status: "Pursuing",
      specialization: "Information Technology",
      coursework: [
        "Software Engineering",
        "Database Management",
        "Web Development",
        "Cloud Computing",
        "Robotics",
        "Machine Learning",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "System Analysis & Design",
        "Mobile Application Development"
      ],
      highlights: [
        "Specialized in full-stack web development",
        "Gained hands-on experience in modern frameworks",
        "Completed multiple real-world projects",
        "Strong foundation in software engineering principles"
      ],
      theme: 'cyan' as const
    },
    {
      degree: "HR Management Course",
      institution: "Open University of Sri Lanka",
      duration: "2019 - 2020",
      location: "Sri Lanka",
      status: "Completed",
      specialization: "Human Resource Management",
      coursework: [
        "Human Resource Planning",
        "Organizational Behavior",
        "Employee Relations",
        "Performance Management",
        "Recruitment & Selection",
        "Training & Development"
      ],
      highlights: [
        "Gained understanding of organizational structure",
        "Developed strong people management skills",
        "Learned effective team coordination"
      ],
      theme: 'purple' as const
    },
    {
      degree: "General Certificate of Education Advanced Level",
      institution: "St. Mary's College",
      duration: "2017 - 2019",
      location: "Sri Lanka",
      status: "Completed",
      specialization: "Commerce Stream",
      coursework: [
        "Business Studies",
        "Economics",
        "Accounting",
        "Information Technology"
      ],
      highlights: [
        "Achieved high grades in all subjects",
        "Participated in various extracurricular activities",
        "Developed strong analytical and problem-solving skills"
      ],
      theme: 'blue' as const
    }
  ];

  return (
    <SectionWrapper id="education" className="bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]">
      <SectionTitle 
        title="Education & Qualifications" 
        highlightedText="Education"
        subtitle="My academic background and continuing education"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" ref={ref}>
        {education.map((item, idx) => (
          <Card 
            key={idx} 
            className={
              idx === 0 ? 'lg:col-span-12' : 
              'lg:col-span-6 max-h-[400px] overflow-y-auto'
            }
            theme={item.theme}
            index={idx}
            delay={0.1}
          >
            <div className="flex flex-wrap items-start justify-between mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${
                  item.theme === 'cyan' 
                    ? 'from-cyan-400/20 to-blue-500/20' 
                    : item.theme === 'purple'
                    ? 'from-purple-400/20 to-pink-500/20'
                    : 'from-blue-400/20 to-indigo-500/20'
                } flex items-center justify-center`}>
                  <GraduationCap className={`w-6 h-6 ${
                    item.theme === 'cyan' 
                      ? 'text-cyan-400' 
                      : item.theme === 'purple'
                      ? 'text-purple-400'
                      : 'text-blue-400'
                  }`} />
                </div>
                
                <div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full inline-block whitespace-nowrap ${
                    item.status === 'Pursuing' 
                      ? 'bg-[#00ff88]/20 text-[#00ff88]' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className={`text-xl font-bold mb-2 group-hover:${
                item.theme === 'cyan' 
                  ? 'text-cyan-400' 
                  : item.theme === 'purple'
                  ? 'text-purple-400'
                  : 'text-blue-400'
              } transition-colors duration-300`}>
                {item.degree}
              </h3>
              
              <h4 className="text-lg font-semibold text-gray-300">
                {item.institution}
              </h4>
              
              <p className="text-gray-400 mt-2 flex items-center gap-1">
                <BookOpen size={16} />
                <span>Specialization: {item.specialization}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div>                <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <Star className={`${
                      item.theme === 'cyan' 
                        ? 'text-cyan-400' 
                        : item.theme === 'purple'
                        ? 'text-purple-400'
                        : 'text-blue-400'
                  } flex-shrink-0`} size={16} />
                  Key Coursework
                </h5>
                <ul className="space-y-1">
                  {item.coursework.slice(0, 5).map((course, courseIdx) => (
                    <motion.li
                      key={courseIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) + (courseIdx * 0.1) }}
                      className="text-gray-300 flex items-start gap-2 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        item.theme === 'cyan' 
                          ? 'bg-cyan-400' 
                          : item.theme === 'purple'
                          ? 'bg-purple-400'
                          : 'bg-blue-400'
                      }`}></div>
                      <span>{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {idx === 0 && (
                <div>
                  <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="text-[#00ff88] flex-shrink-0" size={16} />
                    Highlights
                  </h5>
                  <ul className="space-y-1">
                    {item.highlights.map((highlight, hiIdx) => (
                      <motion.li
                        key={hiIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) + (hiIdx * 0.1) }}
                        className="text-gray-300 flex items-start gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
              
              {idx !== 0 && item.coursework.length > 5 && idx < 2 && (
                <div>
                  <h5 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                    <Star className={`${
                      item.theme === 'cyan' 
                        ? 'text-cyan-400' 
                        : item.theme === 'purple'
                        ? 'text-purple-400'
                        : 'text-blue-400'
                    } flex-shrink-0`} size={16} />
                    Additional Courses
                  </h5>
                  <ul className="space-y-2">
                    {item.coursework.slice(5).map((course, courseIdx) => (
                      <motion.li
                        key={courseIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + (idx * 0.2) + ((courseIdx + 5) * 0.1) }}
                        className="text-gray-300 flex items-start gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          item.theme === 'cyan' 
                            ? 'bg-cyan-400' 
                            : item.theme === 'purple'
                            ? 'bg-purple-400'
                            : 'bg-blue-400'
                        }`}></div>
                        <span>{course}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {idx !== 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.2) }}
                className="mt-4 pt-3 border-t border-[#3a3a3a]"
              >
                <h5 className="text-base font-semibold text-white mb-2">Achievements</h5>
                {item.highlights.map((highlight, hiIdx) => (
                  <motion.div
                    key={hiIdx}
                    whileHover={{ x: 3 }}
                    className={`mb-2 px-3 py-2 rounded-md bg-opacity-20 ${
                      item.theme === 'cyan' 
                        ? 'bg-cyan-500/10 border-l-2 border-cyan-400' 
                        : item.theme === 'purple'
                        ? 'bg-purple-500/10 border-l-2 border-purple-400'
                        : 'bg-blue-500/10 border-l-2 border-blue-400'
                    }`}
                  >
                    <p className="text-sm text-gray-300">{highlight}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
