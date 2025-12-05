import { useEffect, useRef } from 'react';

export const HeroExperimental = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      
      const orbs = containerRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        const element = orb as HTMLElement;
        element.style.transform = `translate(${x * (i + 1) * 0.5}px, ${y * (i + 1) * 0.5}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Floating Orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/30 top-[-200px] right-[-200px]" style={{ animationDelay: '0s' }} />
      <div className="orb w-[400px] h-[400px] bg-accent/20 bottom-[10%] left-[-100px]" style={{ animationDelay: '-5s' }} />
      <div className="orb w-[300px] h-[300px] bg-primary/20 top-[40%] right-[20%]" style={{ animationDelay: '-10s' }} />

      {/* Top Bar */}
      <div className="relative z-10 flex justify-between items-start p-6 md:p-12">
        <div className="stagger">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Software Engineer</p>
          <h2 className="font-mono text-sm">Based in Vizag, India</h2>
        </div>
        
        <div className="flex items-center gap-3" data-hover>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest">Available for work</span>
        </div>
      </div>

      {/* Main Hero Text */}
      <div className="relative z-10 px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="stagger">
          <h1 className="display-massive text-foreground leading-none">
            <span className="block">Gunjesh</span>
            <span className="block serif-italic">Kumar</span>
          </h1>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="relative z-10 p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-md stagger">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Crafting digital experiences where <span className="text-foreground">code</span> meets <span className="serif-italic">creativity</span>
            </p>
          </div>
          
          <div className="flex gap-12 stagger">
            <a href="#work" className="group" data-hover>
              <span className="block text-6xl md:text-8xl font-mono number-outline group-hover:text-foreground transition-colors duration-500">01</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Work</span>
            </a>
            <a href="#about" className="group" data-hover>
              <span className="block text-6xl md:text-8xl font-mono number-outline group-hover:text-foreground transition-colors duration-500">02</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">About</span>
            </a>
            <a href="#contact" className="group" data-hover>
              <span className="block text-6xl md:text-8xl font-mono number-outline group-hover:text-foreground transition-colors duration-500">03</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Contact</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground rotate-90 origin-center translate-y-6">Scroll</span>
      </div>
    </section>
  );
};
