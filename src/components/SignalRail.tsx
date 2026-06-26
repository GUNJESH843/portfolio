import { useEffect, useRef } from 'react';
import { ScrollTrigger, prefersReducedMotion } from '@/lib/anim';

/** A fixed left-edge "signal" that fills with overall scroll progress — a single
 *  continuous thread that ties the whole journey together. */
export const SignalRail = () => {
  const fill = useRef<HTMLDivElement>(null);
  const pct = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const p = self.progress;
        if (fill.current) fill.current.style.height = `${p * 100}%`;
        if (pct.current) pct.current.textContent = String(Math.round(p * 100)).padStart(2, '0');
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div className="hidden lg:flex flex-col items-center fixed left-6 top-0 bottom-0 z-40 pointer-events-none py-24">
      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground rotate-180 [writing-mode:vertical-rl] mb-4">
        SIGNAL
      </span>
      <div className="relative flex-1 w-px bg-border/60">
        <div ref={fill} className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber to-amber/30" style={{ height: '0%' }}>
          <span className="absolute -bottom-1 -left-[3px] w-[7px] h-[7px] rounded-full bg-amber shadow-[0_0_10px_hsl(var(--amber)/0.9)]" />
        </div>
      </div>
      <span ref={pct} className="font-mono text-[10px] text-amber mt-4 tabular-nums">
        00
      </span>
    </div>
  );
};
