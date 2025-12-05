const experiences = [
  { year: '2024', role: 'AI Software Engineer', company: 'FarmVaidya.ai' },
  { year: '2025', role: 'Research Intern', company: 'CSIR-CRRI' },
  { year: '2025', role: 'GDG Organizer', company: 'Google' },
  { year: '2024', role: 'Student Ambassador', company: 'Microsoft' },
];

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
  'TensorFlow', 'OpenCV', 'MongoDB', 'PostgreSQL', 'AWS',
  'Docker', 'Git', 'Figma', 'Flask', 'Express.js'
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      {/* Section Header */}
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</span>
          <h2 className="display-large mt-4">
            The <span className="serif-italic">Story</span>
          </h2>
        </div>
        <div className="flex items-end">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a software engineer passionate about creating digital experiences 
            that blend <span className="text-foreground">cutting-edge AI</span> with 
            <span className="serif-italic text-primary"> beautiful design</span>.
          </p>
        </div>
      </div>

      <div className="hr-animate mb-20" />

      {/* Experience & Skills Grid */}
      <div className="grid md:grid-cols-3 gap-16">
        {/* Experience */}
        <div className="md:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">Experience</span>
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group py-6 border-b border-border hover:border-primary transition-colors cursor-default"
                data-hover
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className="text-4xl font-mono number-outline group-hover:text-primary transition-colors">
                      {exp.year}
                    </span>
                    <div>
                      <h3 className="text-xl font-mono">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 border border-muted-foreground group-hover:bg-primary group-hover:border-primary transition-all rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">Skills</span>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-mono border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                data-hover
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-32">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 block">Education</span>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border p-8 hover:border-primary transition-colors" data-hover>
            <span className="text-sm text-primary font-mono">2022 — 2026</span>
            <h3 className="text-2xl mt-4 font-mono">B.Tech Information Technology</h3>
            <p className="text-muted-foreground mt-2">GVPCE • CGPA: 8/10</p>
          </div>
          <div className="border border-border p-8 hover:border-primary transition-colors" data-hover>
            <span className="text-sm text-primary font-mono">2020 — 2022</span>
            <h3 className="text-2xl mt-4 font-mono">Higher Secondary</h3>
            <p className="text-muted-foreground mt-2">Sri Chaitanya • MPC</p>
          </div>
        </div>
      </div>
    </section>
  );
};
