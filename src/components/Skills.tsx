import { Code2 } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'HTML5', 'CSS3', 'TypeScript', 'SQL', 'Java'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Express.js', 'TensorFlow', 'Next.js', 'Three.js', 'TailwindCSS'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Linux', 'Figma', 'VS Code', 'Postman', 'Firebase'],
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Computer Vision', 'NLP', 'YOLOv8', 'OpenCV', 'Gemini Pro API', 'Keras'],
  },
];

const skillLevels = [
  { name: 'Python', level: 90, color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'C++', level: 80, color: 'from-purple-400 to-purple-600' },
  { name: 'React', level: 85, color: 'from-cyan-400 to-cyan-600' },
  { name: 'TensorFlow', level: 78, color: 'from-orange-400 to-orange-600' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
];

const SkillBar = ({ skill, index }: { skill: typeof skillLevels[0], index: number }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs md:text-sm">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-primary font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 md:h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="section-tag">
            <Code2 className="w-4 h-4" />
            #skills
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          {/* Skill Bars */}
          <AnimatedSection animation="slide-left">
            <div className="glass rounded-2xl overflow-hidden h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">skills.py</span>
              </div>
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                  # Proficiency
                </h3>
                {skillLevels.map((skill, index) => (
                  <SkillBar key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tech Stack */}
          <AnimatedSection animation="slide-right">
            <div className="glass rounded-2xl overflow-hidden h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">tech-stack.js</span>
              </div>
              <div className="p-4 md:p-6 space-y-6 md:space-y-8">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-3 md:space-y-4">
                    <h3 className="text-base md:text-lg font-display font-bold text-foreground">
                      # {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-secondary text-foreground font-mono text-xs md:text-sm hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
