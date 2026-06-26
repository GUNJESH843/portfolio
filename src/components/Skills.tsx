import { useEffect, useRef } from 'react';
import { SectionLabel } from './signal/SectionLabel';
import { Rise } from './Rise';
import { ScrollCard } from './ScrollCard';
import { Magnetic } from './Magnetic';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { prefersReducedMotion, useSignalScene } from '@/lib/anim';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'JavaScript', 'C++', 'TypeScript', 'SQL', 'Java', 'HTML5', 'CSS3'] },
  { title: 'Frameworks & Libraries', skills: ['React', 'Node.js', 'Flask', 'Express.js', 'TensorFlow', 'Next.js', 'Three.js', 'TailwindCSS'] },
  { title: 'Tools & Platforms', skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Linux', 'Figma', 'Firebase'] },
  { title: 'AI & Machine Learning', skills: ['Computer Vision', 'NLP', 'YOLOv8', 'OpenCV', 'Gemini Pro API', 'Keras'] },
];

const skillLevels = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'TensorFlow', level: 78 },
  { name: 'Node.js', level: 75 },
];

const SEGMENTS = 28;

const SpectrumRow = ({ name, level, seed }: { name: string; level: number; seed: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.25 });
  const segs = useRef<(HTMLSpanElement | null)[]>([]);
  const pct = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isVisible) return;
    const target = (level / 100) * SEGMENTS;

    const paint = (lit: number) => {
      for (let i = 0; i < SEGMENTS; i++) {
        const el = segs.current[i];
        if (!el) continue;
        const on = i < lit;
        el.style.background = on ? 'hsl(var(--amber))' : 'hsl(var(--secondary))';
        el.style.opacity = on ? String(0.4 + (i / SEGMENTS) * 0.6) : '0.18';
      }
    };

    if (prefersReducedMotion()) {
      paint(Math.round(target));
      if (pct.current) pct.current.textContent = `${level}%`;
      return;
    }

    let raf = 0;
    const start = performance.now();
    const loop = (now: number) => {
      const fill = Math.min(1, (now - start) / 850);
      const t = now / 1000 + seed;
      const wobble = (Math.sin(t * 2.2) * 1.1 + Math.sin(t * 5.7) * 0.6 + (Math.random() - 0.5) * 0.9) * fill;
      const lit = Math.max(0, target * fill + wobble);
      paint(lit);
      if (pct.current) pct.current.textContent = `${Math.round(Math.min(level, (level * fill)))}%`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, level, seed]);

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="font-mono text-sm text-foreground">{name}</span>
        <span ref={pct} className="font-mono text-xs text-amber tabular-nums">0%</span>
      </div>
      <div className="flex gap-[3px] h-5 md:h-6" aria-hidden="true">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <span
            key={i}
            ref={(el) => (segs.current[i] = el)}
            className="flex-1 rounded-[1px]"
            style={{ background: 'hsl(var(--secondary))', opacity: 0.18 }}
          />
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  const root = useRef<HTMLElement>(null);
  useSignalScene(root, 'skills');

  return (
    <section id="skills" ref={root} className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative vskew">
        <Rise blur>
          <SectionLabel
            index="03"
            label="skills"
            title={
              <>
                Frequency <span className="text-amber">response</span>
              </>
            }
            subtitle="// what's tuned, and how high it peaks — live."
          />
        </Rise>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-5 md:gap-6">
          <ScrollCard dir={1} className="h-full">
            <div className="glass panel-ticks rounded-lg overflow-hidden h-full">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">spectrum_analyzer.live</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-amber">
                  <span className="rec-dot" /> rec
                </span>
              </div>
              <div className="p-5 md:p-7 space-y-5">
                {skillLevels.map((s, i) => (
                  <SpectrumRow key={s.name} name={s.name} level={s.level} seed={i * 1.7} />
                ))}
              </div>
            </div>
          </ScrollCard>

          <ScrollCard dir={-1} className="h-full">
            <div className="glass panel-ticks rounded-lg overflow-hidden h-full">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">tech_stack.json</span>
              </div>
              <div className="p-5 md:p-7 space-y-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">
                      <span className="text-amber">#</span> {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <Magnetic key={skill} strength={0.3}>
                          <span className="inline-block px-3 py-1.5 rounded border border-border bg-secondary/50 text-foreground font-mono text-xs transition-colors duration-300 hover:border-amber/60 hover:text-amber cursor-default">
                            {skill}
                          </span>
                        </Magnetic>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollCard>
        </div>
      </div>
    </section>
  );
};
