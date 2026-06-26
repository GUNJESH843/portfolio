import { ReactNode, useEffect, useRef } from 'react';
import { gsap, prefersReducedMotion, isTouch } from '@/lib/anim';

interface ScrollCardProps {
  children: ReactNode;
  className?: string;
  /** scrubbed 3D tilt-in as it enters (continuous with scroll) */
  reveal?: boolean;
  /** interactive cursor tilt on hover */
  tilt?: boolean;
  /** max tilt degrees on hover */
  tiltMax?: number;
  /** reveal direction sign for rotateY (alternate cards for variety) */
  dir?: 1 | -1;
}

/**
 * A content panel that is itself dynamic: it tilts into place in 3D as you
 * scroll (scrubbed, not a pop) and leans toward the cursor while hovered.
 * Two nested layers own separate transforms so scroll + hover never fight.
 */
export const ScrollCard = ({
  children,
  className,
  reveal = true,
  tilt = true,
  tiltMax = 7,
  dir = 1,
}: ScrollCardProps) => {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    const inr = inner.current;
    if (!el || !inr) return;
    const reduced = prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (reveal && !reduced) {
        gsap.fromTo(
          inr,
          { autoAlpha: 0, y: 96, rotationX: 20, rotationY: 9 * dir, z: -140, transformPerspective: 1000, transformOrigin: 'center top' },
          {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            z: 0,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 48%', scrub: true },
          },
        );
      } else {
        gsap.set(inr, { autoAlpha: 1 });
      }
    }, outer);

    let cleanupTilt: (() => void) | undefined;
    if (tilt && !reduced && !isTouch()) {
      const rotY = gsap.quickTo(inr, 'rotationY', { duration: 0.5, ease: 'power3' });
      const rotX = gsap.quickTo(inr, 'rotationX', { duration: 0.5, ease: 'power3' });
      const move = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        rotY(px * tiltMax);
        rotX(-py * tiltMax);
      };
      const leave = () => {
        rotY(0);
        rotX(0);
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      cleanupTilt = () => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      };
    }

    return () => {
      ctx.revert();
      cleanupTilt?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={outer} className={className} style={{ perspective: 1100 }}>
      <div ref={inner} style={{ transformStyle: 'preserve-3d', willChange: 'transform', height: '100%' }}>
        {children}
      </div>
    </div>
  );
};
