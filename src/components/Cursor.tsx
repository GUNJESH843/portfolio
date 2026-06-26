import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/anim';

/** Custom amber cursor: a fast dot + a trailing ring that swells on interactive elements. */
export const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    gsap.set([d, r], { xPercent: -50, yPercent: -50, opacity: 0 });
    const xToR = gsap.quickTo(r, 'x', { duration: 0.45, ease: 'power3' });
    const yToR = gsap.quickTo(r, 'y', { duration: 0.45, ease: 'power3' });
    const xToD = gsap.quickTo(d, 'x', { duration: 0.08, ease: 'power2' });
    const yToD = gsap.quickTo(d, 'y', { duration: 0.08, ease: 'power2' });

    let shown = false;
    const move = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([d, r], { opacity: 1, duration: 0.3 });
      }
      xToR(e.clientX);
      yToR(e.clientY);
      xToD(e.clientX);
      yToD(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, input, textarea, [data-cursor]')) {
        gsap.to(r, { scale: 2.1, borderColor: 'hsl(34 100% 66% / 0.9)', duration: 0.3 });
        gsap.to(d, { scale: 0.4, duration: 0.3 });
      }
    };
    const out = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, input, textarea, [data-cursor]')) {
        gsap.to(r, { scale: 1, borderColor: 'hsl(34 100% 66% / 0.45)', duration: 0.3 });
        gsap.to(d, { scale: 1, duration: 0.3 });
      }
    };

    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden="true">
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{ width: 34, height: 34, border: '1px solid hsl(34 100% 66% / 0.45)' }}
      />
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full"
        style={{ width: 5, height: 5, background: 'hsl(34 100% 66%)' }}
      />
    </div>
  );
};
