import { Github, Linkedin, Mail } from 'lucide-react';
import { SignalBars } from './signal/SignalBars';

const socialLinks = [
  { icon: Github, href: 'https://github.com/gunjesh843', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gunjeshkumar/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kumargunjesh843@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* waveform sign-off */}
      <div className="h-10 overflow-hidden opacity-40">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-full" aria-hidden="true">
          <path
            d={(() => {
              let d = 'M 0 20';
              for (let i = 1; i <= 240; i++) {
                const x = (i / 240) * 1200;
                const y = 20 + Math.sin((i / 240) * Math.PI * 2 * 28) * 9;
                d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
              }
              return d;
            })()}
            fill="none"
            stroke="hsl(var(--amber))"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-[2px] bg-amber shadow-[0_0_10px_hsl(var(--amber)/0.9)]" />
            <span className="font-mono text-sm text-foreground">
              gunjesh<span className="text-muted-foreground group-hover:text-amber transition-colors">.kumar</span>
            </span>
          </a>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-md border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-amber hover:border-amber/50 transition-all"
              >
                <social.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <SignalBars />
            <a href="mailto:contact@gunjesh.in" className="link-underline">
              contact@gunjesh.in
            </a>
          </div>
        </div>
        <p className="mt-6 text-center font-mono text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} Gunjesh Kumar · built with signal &amp; restraint
        </p>
      </div>
    </footer>
  );
};
