import { useRef } from 'react';
import { Calendar } from 'lucide-react';
import { SectionLabel } from './signal/SectionLabel';
import { Rise } from './Rise';
import { ScrollCard } from './ScrollCard';
import { useSignalScene } from '@/lib/anim';

const education = [
  {
    institution: 'Gayatri Vidya Parishad College of Engineering',
    degree: 'B.Tech in Information Technology',
    period: '2022–2026',
    detail: 'CGPA: 8.0/10',
    logo: '/images/gvpce_logo.png',
    description: 'Focused on software engineering, AI/ML, and full-stack development.',
    highlights: ["Dean's List", 'Technical Lead — College Club', 'Hackathon Winner'],
  },
  {
    institution: 'Sri Chaitanya Junior College',
    degree: 'Higher Secondary Education',
    period: '2020–2022',
    detail: 'Intermediate (MPC Stream)',
    logo: '/images/sri_chaitanya.jpg',
    description: 'Studied Mathematics, Physics, and Chemistry.',
    highlights: ['Top 5%', 'Science Club Member'],
  },
];

export const Education = () => {
  const root = useRef<HTMLElement>(null);
  useSignalScene(root, 'education');

  return (
    <section id="education" ref={root} className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative vskew">
        <Rise blur>
          <SectionLabel
            index="02"
            label="education"
            title={
              <>
                The <span className="text-amber">training set</span>
              </>
            }
            subtitle="// foundations the models were trained on."
          />
        </Rise>

        {/* asymmetric, offset layout — not a tidy row */}
        <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-5 md:gap-8 items-start">
          {education.map((edu, index) => (
            <ScrollCard
              key={index}
              dir={index === 0 ? 1 : -1}
              className={index === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-24'}
            >
              <article className="group relative glass panel-ticks rounded-lg p-6 md:p-8 overflow-hidden hover:border-amber/40 transition-colors">
                <span className="absolute -right-1 -top-4 font-display font-bold text-[120px] md:text-[170px] leading-none text-amber/[0.05] pointer-events-none select-none">
                  0{index + 1}
                </span>
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden bg-secondary border border-border grayscale group-hover:grayscale-0 transition-all duration-500 flex-shrink-0">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-amber font-mono text-sm mt-1 leading-snug">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2 font-mono text-xs text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded border border-amber/30 bg-amber/5 text-amber font-mono text-xs mb-4">
                    {edu.detail}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded border border-border bg-secondary/60 text-muted-foreground font-mono text-[11px] group-hover:border-amber/30 transition-colors"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollCard>
          ))}
        </div>
      </div>
    </section>
  );
};
