interface SignalBarsProps {
  className?: string;
}

/** Tiny animated VU meter — a live "signal present" indicator. */
export const SignalBars = ({ className }: SignalBarsProps) => {
  const bars = [0, 0.3, 0.15, 0.45];
  return (
    <span
      className={className}
      style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2, height: 12 }}
      aria-hidden="true"
    >
      {bars.map((delay, i) => (
        <span
          key={i}
          style={{
            width: 2,
            height: '100%',
            background: 'hsl(var(--amber))',
            transformOrigin: 'bottom',
            animation: `vu ${0.9 + i * 0.18}s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </span>
  );
};
