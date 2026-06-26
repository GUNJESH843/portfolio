import { ElementType, ReactNode, useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion } from '@/lib/anim';

interface RiseProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** vertical travel in px, linked to scroll position (not a pop) */
  y?: number;
  /** parallax depth: how much it keeps drifting while in view (0 = none) */
  drift?: number;
  blur?: boolean;
}

/**
 * Scroll-SCRUBBED reveal: the element's position/opacity are tied to scroll
 * progress, so it moves continuously as you scroll — never a discrete pop or
 * slide-on-enter. Optional `drift` adds gentle parallax across the viewport.
 */
export const Rise = ({ children, className, as, y = 64, drift = 0, blur = true }: RiseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = (as || 'div') as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1, y: 0, filter: 'none' });
        return;
      }
      gsap.fromTo(
        el,
        { y, autoAlpha: 0, filter: blur ? 'blur(8px)' : 'none' },
        {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 58%', scrub: true },
        },
      );
      if (drift) {
        gsap.fromTo(
          el,
          { yPercent: drift },
          {
            yPercent: -drift,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      }
    }, ref);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};
