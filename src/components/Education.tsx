import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'GVPCE',
    degree: 'B.Tech Information Technology',
    period: '2022-2026',
    detail: 'CGPA: 8/10',
    logo: 'https://gunjesh.in/images/gvpce_logo.png',
  },
  {
    institution: 'Sri Chaitanya',
    degree: 'Higher Secondary',
    period: '2020-2022',
    detail: 'Intermediate (MPC)',
    logo: 'https://gunjesh.in/images/sri_chaitanya.jpg',
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-tag">
            <GraduationCap className="w-4 h-4" />
            #education
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Terminal Style Header */}
        <div className="glass rounded-2xl overflow-hidden mb-12">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">education.json</span>
          </div>
          <div className="p-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Educational <span className="text-gradient">Background</span>
            </h2>
          </div>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground font-mono">{edu.period}</p>
                  <p className="text-sm text-accent font-mono">{edu.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
