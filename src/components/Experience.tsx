import { useEffect, useRef } from 'react';
import { SectionLabel } from './signal/SectionLabel';
import { ScrollCard } from './ScrollCard';
import { gsap, prefersReducedMotion, useSignalScene } from '@/lib/anim';

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
  const root = useRef<HTMLElement>(null);

  useSignalScene(root, 'experience');

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('.exp-fill', { height: '100%' });
        return;
      }
      gsap.fromTo(
        '.exp-fill',
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: { trigger: '.exp-list', start: 'top 62%', end: 'bottom 75%', scrub: true },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={root} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative vskew">
        <SectionLabel
          index="01"
          label="experience"
          title={
            <>
              Transmission <span className="text-amber">log</span>
            </>
          }
          subtitle="// roles where the signal's been routed — research, product, community."
        />

        <div className="exp-list relative mt-12 md:mt-16">
          {/* scrubbed rail */}
          <div className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px bg-border">
            <div className="exp-fill absolute top-0 left-0 w-full bg-gradient-to-b from-amber to-amber/30" style={{ height: '0%' }}>
              <span className="absolute -bottom-1.5 -left-[6px] w-[13px] h-[13px] rounded-full border border-amber bg-background">
                <span className="absolute inset-[3px] rounded-full bg-amber shadow-[0_0_12px_hsl(var(--amber)/0.9)]" />
              </span>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative md:pl-12">
                <ScrollCard dir={index % 2 === 0 ? 1 : -1}>
                <article className="group glass panel-ticks rounded-lg p-5 sm:p-6 md:p-7 transition-colors hover:border-amber/40">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden bg-secondary border border-border grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-amber font-mono text-sm">{exp.company}</p>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                          <p className="font-mono text-[11px] text-muted-foreground/70 uppercase tracking-wider">{exp.type}</p>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-amber mt-1 font-mono select-none">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 font-mono text-[11px] rounded border border-border bg-secondary/60 text-muted-foreground group-hover:border-amber/30 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
                </ScrollCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
