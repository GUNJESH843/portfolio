import { Briefcase } from 'lucide-react';
import { AnimatedSection, StaggerContainer } from './AnimatedSection';

const experiences = [
  {
    company: 'FarmVaidya.ai',
    role: 'AI Software Engineer',
    period: 'Aug 2024 – Present',
    type: 'Internship',
    description: [
      'Designed and deployed large-scale AI pipelines for 100k+ multilingual agri-audio datasets.',
      'Built a Validator App to streamline transcript verification by distributed teams.',
      'Integrated Gemini Pro APIs for diarization, transcription, and code-mixed text support.',
      'Automated YouTube-to-dataset workflows, reducing preprocessing time by 80%.',
    ],
    tags: ['AI Pipelines', 'Multilingual NLP', 'Gemini Pro', 'Python'],
    logo: 'https://gunjesh.in/images/farm_vaidya_ai_tech_logo.jpg',
  },
  {
    company: 'CSIR-CRRI',
    role: 'Research Intern',
    period: 'April 2024 – Present',
    type: 'New Delhi, India',
    description: [
      'Developing AI/ML models for road safety analysis using computer vision techniques.',
      'Processing dashboard camera footage to identify road infrastructure safety issues.',
      'Building automated detection systems using YOLOv8 and TensorFlow.',
    ],
    tags: ['Python', 'TensorFlow', 'Computer Vision', 'YOLOv8'],
    logo: 'https://gunjesh.in/images/csir.png',
  },
  {
    company: 'Google Developer Groups',
    role: 'GDG on Campus Organizer',
    period: 'Sep 2024 – Present',
    type: 'GVPCE, Vizag',
    description: [
      'Leading tech community initiatives and organizing developer events.',
      'Hosting hackathons, workshops, and technical sessions for 500+ students.',
      'Building collaborative learning environment for emerging technologies.',
    ],
    tags: ['Community Leadership', 'Event Management', 'Tech Talks'],
    logo: 'https://gunjesh.in/images/GDG-Sticker-Brackets.gif',
  },
  {
    company: 'Microsoft Learn',
    role: 'Student Ambassador',
    period: 'Oct 2024 – Present',
    type: 'Remote',
    description: [
      'Conducting workshops and seminars on Microsoft Azure and cloud technologies.',
      'Mentoring students in software development and cloud computing.',
      'Organizing hackathons and coding competitions to promote technical skills.',
    ],
    tags: ['Microsoft Azure', 'Cloud Computing', 'Mentorship'],
    logo: 'https://gunjesh.in/images/mlsa%20_logo.png',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="section-tag">
            <Briefcase className="w-4 h-4" />
            #experience
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </AnimatedSection>

        {/* Terminal Style Header */}
        <AnimatedSection animation="scale" className="glass rounded-2xl overflow-hidden mb-8 md:mb-12">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">experience.log</span>
          </div>
          <div className="p-4 md:p-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Experience Timeline - Creative Layout */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
          
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection 
                key={index}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 100}
              >
                <div className="glass rounded-2xl p-4 sm:p-6 md:p-8 hover-lift group relative md:ml-16">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-primary items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium text-sm md:text-base">{exp.company}</p>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-xs md:text-sm text-muted-foreground font-mono">{exp.period}</p>
                          <p className="text-xs text-muted-foreground">{exp.type}</p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 md:gap-3 text-sm md:text-base text-muted-foreground">
                            <span className="text-primary mt-1">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-mono rounded-full bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tag}
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
      </div>
    </section>
  );
};
