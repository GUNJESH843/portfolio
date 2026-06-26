import { useEffect, useRef } from 'react';

interface WaveCanvasProps {
  className?: string;
}

/**
 * The signature: a reactive oscilloscope. Layered harmonic traces with an
 * amber phosphor glow and a travelling playhead. The wave swells toward the
 * pointer (amplitude + frequency follow the cursor). Falls back to a single
 * static trace when the user prefers reduced motion.
 */
export const WaveCanvas = ({ className }: WaveCanvasProps) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, w * dpr);
      canvas.height = Math.max(1, h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // pointer influence (eased)
    const m = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      m.tx = (e.clientX - rect.left) / rect.width;
      m.ty = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const amber = '255,180,84';
    let t = 0;
    let raf = 0;

    const trace = (amp: number, freq: number, phase: number, alpha: number, lw: number) => {
      ctx.beginPath();
      for (let x = 0; x <= w; x += 2) {
        const n = x / w;
        const env = Math.sin(n * Math.PI); // taper at the edges
        const y =
          h / 2 +
          (Math.sin(x * freq + phase) * amp +
            Math.sin(x * freq * 2.3 + phase * 1.4) * amp * 0.42 +
            Math.sin(x * freq * 5.1 + phase * 0.6) * amp * 0.16) *
            env;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `rgba(${amber},${alpha})`;
      ctx.lineWidth = lw;
      ctx.stroke();
    };

    const draw = () => {
      // ease pointer
      m.x += (m.tx - m.x) * 0.05;
      m.y += (m.ty - m.y) * 0.05;

      ctx.clearRect(0, 0, w, h);

      const baseAmp = h * (0.1 + m.y * 0.14);
      const freq = 0.008 + m.x * 0.012;

      // center axis
      ctx.strokeStyle = `rgba(${amber},0.05)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      // ghost trace
      trace(baseAmp * 0.6, freq * 0.7, t * 0.6 + 2, 0.12, 1);

      // main glowing trace
      ctx.shadowColor = `rgba(${amber},0.55)`;
      ctx.shadowBlur = 16;
      trace(baseAmp, freq, t, 0.95, 2);
      ctx.shadowBlur = 0;

      // travelling playhead
      const px = ((t * 40) % (w + 80)) - 40;
      const env = Math.sin((px / w) * Math.PI);
      const py =
        h / 2 +
        (Math.sin(px * freq + t) * baseAmp +
          Math.sin(px * freq * 2.3 + t * 1.4) * baseAmp * 0.42) *
          Math.max(0, env);
      ctx.beginPath();
      ctx.arc(px, py, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${amber},1)`;
      ctx.shadowColor = `rgba(${amber},0.9)`;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;

      t += 0.045;
      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      // single static trace
      trace(h * 0.12, 0.012, 0, 0.6, 2);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
};
