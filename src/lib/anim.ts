import { RefObject, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { setSignal, SCENES, SignalParams } from './signalStore';

gsap.registerPlugin(ScrollTrigger);

/** When this section becomes the active one in view, morph the global field toward `scene`. */
export const useSignalScene = (ref: RefObject<HTMLElement>, scene: keyof typeof SCENES | SignalParams) => {
  useEffect(() => {
    if (!ref.current) return;
    const params = typeof scene === 'string' ? SCENES[scene] : scene;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 60%',
      end: 'bottom 40%',
      onToggle: (self) => {
        if (self.isActive) setSignal(params);
      },
    });
    return () => st.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// The portfolio is an intentionally motion-led experience, so we run the
// animations regardless of the OS "reduce motion" setting. Flip FORCE_MOTION to
// false to honor the system preference again.
const FORCE_MOTION = true;
export const prefersReducedMotion = () =>
  !FORCE_MOTION && typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isTouch = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

/** Global Lenis smooth scroll wired into the GSAP ticker + ScrollTrigger. */
export const useSmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    // scroll-velocity skew: content leans with how fast you scroll, eases back to rest
    const rootEl = document.documentElement;
    let skewTarget = 0;
    let skewCur = 0;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

    lenis.on('scroll', (e: { velocity: number }) => {
      ScrollTrigger.update();
      skewTarget = clamp(e.velocity * 0.32, -5, 5);
    });

    const onRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onRaf);
    const onSkew = () => {
      skewCur += (skewTarget - skewCur) * 0.12;
      skewTarget *= 0.9;
      rootEl.style.setProperty('--vskew', `${skewCur.toFixed(3)}deg`);
    };
    gsap.ticker.add(onSkew);
    gsap.ticker.lagSmoothing(0);

    // anchor links → smooth Lenis scroll
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -70 });
      }
    };
    document.addEventListener('click', onClick);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(onRaf);
      gsap.ticker.remove(onSkew);
      rootEl.style.removeProperty('--vskew');
      lenis.destroy();
    };
  }, []);
};

export { gsap, ScrollTrigger };
