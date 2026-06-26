import { useRef } from 'react';

interface KnobProps {
  label: string;
  value: number; // 0..1
  onChange: (v: number) => void;
}

/** A draggable instrument knob (drag up/down to turn). Keyboard-accessible. */
export const Knob = ({ label, value, onChange }: KnobProps) => {
  const startY = useRef(0);
  const startV = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    startY.current = e.clientY;
    startV.current = value;
    const move = (ev: PointerEvent) => {
      const dy = startY.current - ev.clientY;
      onChange(Math.min(1, Math.max(0, startV.current + dy / 180)));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const angle = -135 + value * 270;

  return (
    <div className="flex flex-col items-center gap-2 select-none" data-cursor>
      <div
        role="slider"
        aria-label={label}
        aria-valuenow={Math.round(value * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp' || e.key === 'ArrowRight') onChange(Math.min(1, value + 0.05));
          if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') onChange(Math.max(0, value - 0.05));
        }}
        className="relative w-12 h-12 rounded-full border border-amber/40 bg-secondary/70 cursor-grab active:cursor-grabbing touch-none focus:outline-none focus:ring-1 focus:ring-amber/70"
        style={{ boxShadow: 'inset 0 0 12px hsl(30 16% 3% / 0.8)' }}
      >
        <span
          className="absolute left-1/2 top-1/2 origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)`, height: '40%', width: 2 }}
        >
          <span className="block w-[2px] h-2 bg-amber rounded-full shadow-[0_0_6px_hsl(var(--amber)/0.9)]" />
        </span>
        {/* tick marks */}
        <span className="absolute inset-0 rounded-full" style={{
          background: `conic-gradient(from 225deg, hsl(var(--amber)/0.5) ${value * 270}deg, transparent 0deg)`,
          mask: 'radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)',
          WebkitMask: 'radial-gradient(circle, transparent 60%, black 62%, black 70%, transparent 72%)',
        }} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
    </div>
  );
};
