import { useEffect, useRef, useState } from 'react';

interface DecodeTextProps {
  text: string;
  className?: string;
  /** ms before the decode starts */
  delay?: number;
  /** ms per character lock-in */
  speed?: number;
}

const GLYPHS = '01<>/{}[]#*+=~$%';

/**
 * Reveals text as if a signal is being decoded — characters scramble through
 * glyphs and lock left-to-right. Honors prefers-reduced-motion.
 */
export const DecodeText = ({ text, className, delay = 0, speed = 38 }: DecodeTextProps) => {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(text);
      return;
    }

    let revealed = 0;
    let raf = 0;
    let timer: number;
    frame.current = 0;

    const tick = () => {
      const out = text
        .split('')
        .map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < revealed) return ch;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');
      setDisplay(out);

      frame.current += 1;
      if (frame.current % 2 === 0) revealed += 1;

      if (revealed <= text.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{display}</span>;
};
