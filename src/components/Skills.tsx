import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'HTML5', 'CSS3', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Node.js', 'Flask', 'Express.js', 'TensorFlow', 'Next.js'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Linux', 'Figma', 'VS Code'],
  },
];

const skillLevels = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'React', level: 78 },
  { name: 'TensorFlow', level: 75 },
  { name: 'Node.js', level: 70 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-tag">
            <Code2 className="w-4 h-4" />
            #skills
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Bars */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">skills.py</span>
            </div>
            <div className="p-6 space-y-6">
              <h3 className="text-xl font-display font-bold text-foreground">
                # Programming Languages
              </h3>
              {skillLevels.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">tech-stack.js</span>
            </div>
            <div className="p-6 space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    # {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-secondary text-foreground font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
