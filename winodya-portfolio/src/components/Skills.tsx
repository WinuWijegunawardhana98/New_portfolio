'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';
import SkillBadge from './UI/SkillBadge';
import { 
  Monitor, 
  Server, 
  Database, 
  Wrench, 
  FileCode, 
  FileJson, 
  Atom, 
  ArrowRight, 
  LayoutGrid, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Coffee, 
  LayoutTemplate, 
  FileCode2, 
  Boxes, 
  Cloud, 
  GitBranch, 
  FileText, 
  PenTool, 
  PencilRuler, 
  ListTodo, 
  Eye,
  Globe
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-5 h-5" />,
      skills: [
        { name: "HTML5", level: 90, highlight: true, icon: <Globe className="w-4 h-4" /> },
        { name: "CSS3", level: 85, highlight: true, icon: <FileCode className="w-4 h-4" /> },
        { name: "JavaScript", level: 88, highlight: true, icon: <FileJson className="w-4 h-4" /> },
        { name: "React.js", level: 85, highlight: true, icon: <Atom className="w-4 h-4" /> },
        { name: "Next.js", level: 80, highlight: true, icon: <ArrowRight className="w-4 h-4" /> },
        { name: "Bootstrap", level: 85, icon: <LayoutGrid className="w-4 h-4" /> },
        { name: "Tailwind CSS", level: 80, icon: <Palette className="w-4 h-4" /> },
        { name: "Responsive Design", level: 90, icon: <Smartphone className="w-4 h-4" /> }
      ],
      theme: 'green' as const
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 82, highlight: true, icon: <Server className="w-4 h-4" /> },
        { name: "Express.js", level: 80, highlight: true, icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Java", level: 75, icon: <Coffee className="w-4 h-4" /> },
        { name: "Spring Boot", level: 70, icon: <LayoutTemplate className="w-4 h-4" /> },
        { name: "Python", level: 78, icon: <FileCode2 className="w-4 h-4" /> },
        { name: "RESTful APIs", level: 85, highlight: true, icon: <Boxes className="w-4 h-4" /> }
      ],
      theme: 'blue' as const
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", level: 82, highlight: true, icon: <Database className="w-4 h-4" /> },
        { name: "MySQL", level: 75, icon: <Database className="w-4 h-4" /> },
        { name: "AWS Services", level: 70, highlight: true, icon: <Cloud className="w-4 h-4" /> },
        { name: "Azure", level: 65, icon: <Cloud className="w-4 h-4" /> },
        { name: "Git & GitHub", level: 88, highlight: true, icon: <GitBranch className="w-4 h-4" /> }
      ],
      theme: 'purple' as const
    },
    {
      title: "CMS & Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "WordPress", level: 80, icon: <FileText className="w-4 h-4" /> },
        { name: "Figma", level: 75, highlight: true, icon: <PenTool className="w-4 h-4" /> },
        { name: "Adobe XD", level: 70, icon: <PencilRuler className="w-4 h-4" /> },
        { name: "Jira", level: 75, icon: <ListTodo className="w-4 h-4" /> },
        { name: "UI/UX", level: 78, icon: <Eye className="w-4 h-4" /> }
      ],
      theme: 'cyan' as const
    }
  ];

  const getGradientColors = (theme: string) => {
    switch (theme) {
      case 'green':
        return 'from-[#00ff88]/10 to-transparent';
      case 'blue':
        return 'from-[#4d9fff]/10 to-transparent';
      case 'purple':
        return 'from-[#b24dff]/10 to-transparent';
      case 'cyan':
        return 'from-[#4df2ff]/10 to-transparent';
      default:
        return 'from-gray-800/20 to-transparent';
    }
  };

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-[#0a0a0a] to-black">
      <SectionTitle 
        title="Technical Skills" 
        highlightedText="Skills"
        subtitle="My technical expertise and professional toolkit"
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8" 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: 0.2 * idx, 
              duration: 0.5,
              type: "spring", 
              stiffness: 50
            }}
          >
            <Card theme={category.theme} index={idx}>
              <div className="relative overflow-hidden rounded-lg p-4 mb-6">
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${getGradientColors(category.theme)} opacity-30`}></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`p-3 rounded-lg flex items-center justify-center ${
                    idx === 0 ? 'bg-gradient-to-br from-green-600 to-green-800' : 
                    idx === 1 ? 'bg-gradient-to-br from-blue-600 to-blue-800' : 
                    idx === 2 ? 'bg-gradient-to-br from-purple-600 to-purple-800' : 
                    'bg-gradient-to-br from-cyan-600 to-cyan-800'
                  } text-white shadow-lg`}>
                    <motion.div
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={index}
                    name={skill.name}
                    index={index}
                    delay={0.2 + (idx * 0.1)}
                    highlight={skill.highlight}
                    icon={skill.icon}
                  />
                ))}
              </div>

              <div className="space-y-6 mt-6">
                {category.skills.slice(0, 4).map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="text-white"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <motion.span 
                        className="text-[#00ff88] font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + skillIdx * 0.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 w-full bg-[#2a2a2a] rounded-full overflow-hidden backdrop-blur-sm shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.3 + (idx * 0.2) + (skillIdx * 0.1),
                          ease: "easeOut" 
                        }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: idx === 0 
                            ? 'linear-gradient(90deg, #00ff88, #4dffa0)' 
                            : idx === 1
                            ? 'linear-gradient(90deg, #4d9fff, #4da2ff)'
                            : idx === 2
                            ? 'linear-gradient(90deg, #b24dff, #d14dff)'
                            : 'linear-gradient(90deg, #4df2ff, #4dffed)'
                        }}
                      >
                        <div className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
