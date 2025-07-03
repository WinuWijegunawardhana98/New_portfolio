'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './Layout/SectionWrapper';
import SectionTitle from './Layout/SectionTitle';
import Card from './Layout/Card';
import SkillBadge from './UI/SkillBadge';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

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
        { name: "HTML5", level: 90, highlight: true, icon: "🌐" },
        { name: "CSS3", level: 85, highlight: true },
        { name: "JavaScript", level: 88, highlight: true, icon: "⚡" },
        { name: "React.js", level: 85, highlight: true, icon: "⚛️" },
        { name: "Next.js", level: 80, highlight: true },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80, icon: "🎨" },
        { name: "Responsive Design", level: 90 }
      ],
      theme: 'green' as const
    },
    {
      title: "Backend Development",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Node.js", level: 82, highlight: true, icon: "🟩" },
        { name: "Express.js", level: 80, highlight: true },
        { name: "Java", level: 75, icon: "☕" },
        { name: "Spring Boot", level: 70 },
        { name: "Python", level: 78, icon: "🐍" },
        { name: "RESTful APIs", level: 85, highlight: true }
      ],
      theme: 'blue' as const
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "MongoDB", level: 82, highlight: true, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "AWS Services", level: 70, highlight: true },
        { name: "Azure", level: 65 },
        { name: "Git & GitHub", level: 88, highlight: true, icon: "🔄" }
      ],
      theme: 'purple' as const
    },
    {
      title: "CMS & Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "WordPress", level: 80, icon: "📝" },
        { name: "Figma", level: 75, highlight: true },
        { name: "Adobe XD", level: 70 },
        { name: "Jira", level: 75 },
        { name: "UI/UX", level: 78 }
      ],
      theme: 'cyan' as const
    }
  ];

  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-[#0a0a0a] to-black">
      <SectionTitle 
        title="Technical Skills" 
        highlightedText="Skills"
        subtitle="My technical expertise and professional toolkit"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
        {skillCategories.map((category, idx) => (
          <Card key={idx} theme={category.theme} index={idx}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#2a2a2a] rounded-lg text-[#00ff88]">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
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

            <div className="space-y-4 mt-4">
              {category.skills.slice(0, 4).map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-[#00ff88]">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#2a2a2a] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.3 + (idx * 0.2) + (skillIdx * 0.1) }}
                      className="h-full rounded-full"
                      style={{ 
                        background: idx === 0 
                          ? 'linear-gradient(90deg, #00ff88, #4dffa0)' 
                          : idx === 1
                          ? 'linear-gradient(90deg, #4d9fff, #4da2ff)'
                          : idx === 2
                          ? 'linear-gradient(90deg, #b24dff, #d14dff)'
                          : 'linear-gradient(90deg, #4df2ff, #4dffed)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
