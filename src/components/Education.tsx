import { GraduationCap, Calendar, Award } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const education = [
  {
    institution: 'Gayatri Vidya Parishad College of Engineering',
    degree: 'B.Tech in Information Technology',
    period: '2022-2026',
    detail: 'CGPA: 8.0/10',
    logo: '/images/gvpce_logo.png',
    description: 'Focused on software engineering, AI/ML, and full-stack development.',
    highlights: ['Dean\'s List', 'Technical Lead - College Club', 'Hackathon Winner']
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Higher Secondary Education',
    period: '2020-2022',
    detail: 'Intermediate (MPC Stream)',
    logo: '/images/sri_chaitanya.jpg',
    description: 'Studied Mathematics, Physics, and Chemistry.',
    highlights: ['Top 5%', 'Science Club Member']
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-16 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 md:w-80 md:h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="section-tag">
            <GraduationCap className="w-4 h-4" />
            #education
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </AnimatedSection>

        {/* Creative Header */}
        <AnimatedSection animation="scale" className="mb-8 md:mb-12">
          <div className="glass rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">education.json</span>
            </div>
            <div className="p-4 md:p-8 text-center">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold">
                Educational <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">Building the foundation for innovation</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Cards - Creative Layout */}
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          {education.map((edu, index) => (
            <AnimatedSection 
              key={index} 
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 150}
            >
              <div className="group relative">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative glass rounded-2xl md:rounded-3xl p-4 md:p-8 h-full overflow-hidden">
                  {/* Background Number */}
                  <span className="absolute -right-2 md:-right-4 -top-2 md:-top-4 text-[80px] md:text-[150px] font-display font-bold text-primary/5 leading-none pointer-events-none">
                    0{index + 1}
                  </span>
                  
                  <div className="relative z-10">
                    {/* Logo and Main Info */}
                    <div className="flex items-start gap-3 md:gap-5 mb-4 md:mb-6">
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl overflow-hidden bg-secondary flex-shrink-0 ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors truncate">
                          {edu.degree}
                        </h3>
                        <p className="text-primary font-medium text-sm md:text-base truncate">{edu.institution}</p>
                        <div className="flex items-center gap-2 mt-1 md:mt-2 text-xs md:text-sm text-muted-foreground font-mono">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    
                    {/* Detail Badge */}
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-mono mb-3 md:mb-4">
                      <Award className="w-3 h-3 md:w-4 md:h-4" />
                      {edu.detail}
                    </div>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">{edu.description}</p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-3 py-1 rounded-lg bg-secondary text-foreground text-xs font-mono hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
