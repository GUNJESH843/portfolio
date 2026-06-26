import { useEffect, useRef, useState } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Magnetic } from './Magnetic';
import { SignalBars } from './signal/SignalBars';
import { Knob } from './hero/Knob';
import { gsap, prefersReducedMotion, useSignalScene } from '@/lib/anim';
import { setSignal } from '@/lib/signalStore';

const readout = [
  { v: '100k+', k: 'audio samples processed' },
  { v: '−80%', k: 'preprocessing time' },
  { v: 'YOLOv8', k: 'road-safety vision' },
];

const Line = ({ text }: { text: string }) => (
  <span className="block overflow-hidden">
    {text.split(' ').map((word, wi) => (
      <span key={wi} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
        {word.split('').map((ch, ci) => (
          <span key={ci} className="hero-char inline-block">
            {ch}
          </span>
        ))}
      </span>
    ))}
  </span>
);

export const Hero = () => {
  const root = useRef<HTMLElement>(null);
  const [ampV, setAmpV] = useState(0.75);
  const [freqV, setFreqV] = useState(0.34);

  useSignalScene(root, 'hero');

  const onAmp = (v: number) => {
    setAmpV(v);
    setSignal({ amp: 0.3 + v * 1.4 });
  };
  const onFreq = (v: number) => {
    setFreqV(v);
    setSignal({ freq: 0.18 + v * 0.82 });
  };

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set('.hero-char, .hero-up', { opacity: 1, y: 0 });
        return;
      }
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from('.hero-char', { yPercent: 118, duration: 1.05, ease: 'expo.out', stagger: 0.018 })
        .from('.hero-up', { y: 26, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12 }, '-=0.6')
        .from('.hero-knobs', { opacity: 0, x: 20, duration: 0.8, ease: 'power3.out' }, '-=0.5');

      gsap.to('.hero-copy', {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={root} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-faint pointer-events-none [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,black_20%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="hero-copy max-w-4xl">
          <div className="hero-up flex items-center gap-3">
            <span className="rec-dot" />
            <span className="font-mono text-xs md:text-sm text-muted-foreground tracking-wide">
              <span className="text-amber">// now playing:</span> multilingual_agri_audio.wav
            </span>
          </div>

          <h1 className="mt-6 font-display font-bold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <Line text="I make machines" />
            <span className="block">
              <span className="inline-block overflow-hidden align-bottom mr-[0.25em]">
                {'that'.split('').map((c, i) => (
                  <span key={i} className="hero-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
              <span className="inline-block overflow-hidden align-bottom text-amber glow-text">
                {'listen.'.split('').map((c, i) => (
                  <span key={i} className="hero-char inline-block">
                    {c}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="hero-up mt-7 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed font-mono">
            I'm <span className="text-foreground">Gunjesh</span> — an AI engineer building the pipelines behind{' '}
            <span className="text-foreground">speech, vision &amp; language</span> models. Turning 100k+ multilingual
            audio samples into clean datasets at <span className="text-amber">FarmVaidya.ai</span>.
          </p>

          <dl className="hero-up mt-9 flex flex-wrap gap-x-10 gap-y-5">
            {readout.map((r) => (
              <div key={r.k}>
                <dt className="font-display text-2xl md:text-3xl font-semibold text-amber tracking-tight">{r.v}</dt>
                <dd className="mt-1 font-mono text-[11px] md:text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {r.k}
                </dd>
              </div>
            ))}
          </dl>

          <div className="hero-up mt-10 flex flex-col sm:flex-row gap-3">
            <Magnetic strength={0.5}>
              <Button variant="hero" size="lg" asChild>
                <a href="/public/resources/Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.5}>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#projects">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  View work
                </a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="hero-knobs hidden md:flex absolute right-6 lg:right-10 bottom-20 z-10 items-end gap-5 rounded-lg border border-border bg-background/40 backdrop-blur-md px-5 py-4">
        <div className="flex flex-col gap-1 pr-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber">tune the signal</span>
          <span className="font-mono text-[10px] text-muted-foreground">drag the knobs ↕</span>
        </div>
        <Knob label="gain" value={ampV} onChange={onAmp} />
        <Knob label="freq" value={freqV} onChange={onFreq} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border/70 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span>Vizag, India</span>
            <span className="hidden md:inline">AI Software Engineer @ FarmVaidya</span>
            <span className="flex items-center gap-2 text-amber">
              <SignalBars /> signal: live
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
