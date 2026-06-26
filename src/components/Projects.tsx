import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger, prefersReducedMotion, useSignalScene } from '@/lib/anim';
import { SectionLabel } from './signal/SectionLabel';
import { ScrollCard } from './ScrollCard';

const projects = [
  {
    title: 'Road Safety Index',
    description:
      'AI system analyzing dashboard-camera footage to score road-infrastructure safety, using computer vision and machine learning.',
    image: 'https://gunjesh.in/images/road%20safety%20index.png',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv8'],
    github: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
    live: 'https://github.com/VIZAGBOYS/CSRI_CRRI_ROAD_SAFETY_SCORE',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio with WebGL, smooth scroll and kinetic motion — the site you are looking at.',
    image: 'https://gunjesh.in/images/portfolio%20project.png',
    tags: ['React', 'Three.js', 'GSAP', 'Lenis'],
    github: 'https://github.com/gunjesh843/portfolio',
    live: 'https://gunjesh.in',
  },
  {
    title: 'E-Learning Platform',
    description:
      'Full-stack education platform for course management, student enrollment, and progress tracking with real-time updates.',
    image: 'https://gunjesh.in/images/e-learning.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/VIZAGBOYS/Counselling_forms',
    live: '#',
  },
];

type Project = (typeof projects)[number];

const Card = ({ project, index, horizontal }: { project: Project; index: number; horizontal: boolean }) => (
  <ScrollCard
    reveal={!horizontal}
    tilt
    tiltMax={6}
    dir={index % 2 === 0 ? 1 : -1}
    className={horizontal ? 'shrink-0 w-[80vw] sm:w-[58vw] lg:w-[42vw]' : 'h-full'}
  >
    <article className="group glass panel-ticks rounded-lg overflow-hidden flex flex-col h-full hover:border-amber/40 transition-colors">
    <div className={`relative overflow-hidden ${horizontal ? 'h-56 md:flex-1' : 'h-48'}`}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="proj-img w-full h-full object-cover grayscale-[0.55] contrast-[1.05] transition-[filter,transform] duration-700 group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-amber/10 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none [background:repeating-linear-gradient(0deg,hsl(30_13%_4%/0.35)_0px,hsl(30_13%_4%/0.35)_1px,transparent_1px,transparent_3px)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
      <span className="absolute top-3 left-3 font-mono text-[11px] tracking-wider text-amber bg-background/70 border border-amber/30 rounded px-2 py-0.5 backdrop-blur-sm">
        CH.0{index + 1}
      </span>
      <div className="absolute top-3 right-3 flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source`}
          className="w-9 h-9 rounded-md border border-border bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:border-amber hover:text-amber transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={project.live || project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live`}
          className="w-9 h-9 rounded-md border border-border bg-background/70 backdrop-blur-sm flex items-center justify-center text-foreground hover:border-amber hover:text-amber transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>

    <div className="p-5 md:p-6">
      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 font-mono text-[10px] rounded border border-border bg-secondary/50 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground group-hover:text-amber transition-colors">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-amber link-underline w-fit"
      >
        view source <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </div>
    </article>
  </ScrollCard>
);

export const Projects = () => {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [horizontal] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches && !prefersReducedMotion(),
  );

  useSignalScene(section, 'projects');

  useEffect(() => {
    const sec = section.current;
    const tr = track.current;
    if (!sec || !tr || !horizontal) return;

    const ctx = gsap.context(() => {
      const getScroll = () => Math.max(0, tr.scrollWidth - window.innerWidth + 64);
      gsap.to(tr, {
        x: () => -getScroll(),
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: () => '+=' + getScroll(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sec);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 800);
    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={section}
      className={`relative ${horizontal ? 'h-screen overflow-hidden flex items-center' : 'py-20 md:py-32'}`}
    >
      {horizontal ? (
        <div className="w-full overflow-hidden">
          <div
            ref={track}
            className="flex flex-row gap-6 md:gap-8 items-stretch h-[68vh] pl-[max(1rem,calc((100vw-1280px)/2+1.5rem))] pr-16"
          >
            <div className="shrink-0 w-[40vw] lg:w-[30vw] flex flex-col justify-center">
              <h2 className="text-4xl lg:text-6xl font-display font-semibold tracking-tight leading-[1.02]">
                Selected <span className="text-amber">captures</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground font-mono max-w-xs">
                // builds across vision, full-stack and AI.
              </p>
              <p className="mt-6 flex items-center gap-2 font-mono text-xs text-amber">
                scroll <ArrowRight className="w-4 h-4 animate-pulse" />
              </p>
            </div>
            {projects.map((p, i) => (
              <Card key={i} project={p} index={i} horizontal />
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 md:px-6 vskew">
          <SectionLabel
            index="04"
            label="projects"
            title={
              <>
                Selected <span className="text-amber">captures</span>
              </>
            }
            subtitle="// builds across vision, full-stack and AI — recorded and shipped."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <Card key={i} project={p} index={i} horizontal={false} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
