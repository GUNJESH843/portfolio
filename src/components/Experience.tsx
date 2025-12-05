import { Briefcase } from 'lucide-react';

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
    tags: ['AI Pipelines', 'Multilingual NLP', 'Gemini Pro', 'Automation'],
    logo: 'https://gunjesh.in/images/farm_vaidya_ai_tech_logo.jpg',
  },
  {
    company: 'CSIR-CRRI',
    role: 'Research Intern',
    period: 'April 2025 – Present',
    type: 'New Delhi, India',
    description: [
      'Developing AI/ML models for road safety analysis using computer vision techniques on dashboard camera footage.',
    ],
    tags: ['Python', 'TensorFlow', 'Computer Vision'],
    logo: 'https://gunjesh.in/images/csir.png',
  },
  {
    company: 'Google Developer Groups',
    role: 'GDG on Campus Organizer',
    period: 'Sep 2025 – Present',
    type: 'GVPCE, Vizag',
    description: [
      'Driving community initiatives by organizing tech campaigns, hackathons, and workshops.',
    ],
    tags: ['Community Leadership', 'Hackathons', 'Workshops'],
    logo: 'https://gunjesh.in/images/GDG-Sticker-Brackets.gif',
  },
  {
    company: 'Microsoft Learn',
    role: 'Student Ambassador',
    period: 'Oct 2024 – Present',
    type: 'Remote',
    description: [
      'Helping students understand technology better through workshops and seminars on Microsoft technologies.',
    ],
    tags: ['Microsoft Azure', 'Community Building', 'Tech Education'],
    logo: 'https://gunjesh.in/images/mlsa%20_logo.png',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-tag">
            <Briefcase className="w-4 h-4" />
            #experience
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        {/* Terminal Style Header */}
        <div className="glass rounded-2xl overflow-hidden mb-12">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-2 text-xs text-muted-foreground font-mono">experience.log</span>
          </div>
          <div className="p-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover-lift group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-secondary flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.type}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
