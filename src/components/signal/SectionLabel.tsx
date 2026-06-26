import { ReactNode } from 'react';

interface SectionLabelProps {
  index: string;
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

/** Build a sine path string for the divider waveform. */
const sinePath = (width = 600, height = 24, cycles = 9) => {
  const mid = height / 2;
  const amp = height * 0.32;
  let d = `M 0 ${mid}`;
  const steps = 120;
  for (let i = 1; i <= steps; i++) {
    const x = (i / steps) * width;
    const y = mid + Math.sin((i / steps) * Math.PI * 2 * cycles) * amp;
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
};

export const SectionLabel = ({ index, label, title, subtitle, className }: SectionLabelProps) => {
  return (
    <div className={className}>
      {/* eyebrow + waveform divider */}
      <div className="flex items-center gap-4">
        <span className="eyebrow shrink-0">
          <span className="text-muted-foreground">{index}</span>
          <span aria-hidden="true">/</span>
          {label}
        </span>
        <div className="relative flex-1 h-6 overflow-hidden">
          <svg
            viewBox="0 0 600 24"
            preserveAspectRatio="none"
            className="w-full h-full"
            aria-hidden="true"
          >
            <path
              d={sinePath()}
              fill="none"
              stroke="hsl(var(--amber))"
              strokeOpacity="0.32"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* title */}
      <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl font-mono">
          {subtitle}
        </p>
      )}
    </div>
  );
};
