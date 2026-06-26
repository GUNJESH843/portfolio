import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Rise } from './Rise';
import { ScrollCard } from './ScrollCard';
import { SectionLabel } from './signal/SectionLabel';
import { useSignalScene } from '@/lib/anim';

const leetcodeBadges = [
  '/images/Knight.gif',
  '/images/2025-365.gif',
  '/images/2025-200.gif',
  '/images/2024-100.gif',
  '/images/2025-100.gif',
];

const certificates = [
  { title: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University', year: '2024' },
  { title: 'GitHub Foundations', issuer: 'GitHub', year: '2025' },
  { title: 'AWS Machine Learning Foundation', issuer: 'Amazon Web Services', year: '2025' },
  { title: 'Software Engineering', issuer: 'NPTEL', year: '2024' },
  { title: 'API Fundamentals Student Expert', issuer: 'Postman', year: '2024' },
];

export const Certificates = () => {
  const navigate = useNavigate();
  const root = useRef<HTMLElement>(null);
  useSignalScene(root, 'certificates');

  return (
    <section ref={root} className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative vskew">
        <Rise blur className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <SectionLabel
            index="05"
            label="certificates"
            title={
              <>
                On <span className="text-amber">record</span>
              </>
            }
            subtitle="// verified credentials & competitive milestones."
            className="flex-1"
          />
          <Button variant="hero-outline" size="sm" onClick={() => navigate('/certificates')} className="group shrink-0">
            View all
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Rise>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-5 md:gap-6">
          {/* leetcode */}
          <ScrollCard dir={1} className="h-full">
            <div className="glass panel-ticks rounded-lg overflow-hidden h-full">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">leetcode_badges.json</span>
              </div>
              <div className="p-5 md:p-7 space-y-6">
                <div className="flex items-center gap-4">
                  <img src="/images/leetcode.png" alt="LeetCode" className="w-11 h-11 rounded-md border border-border" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground">LeetCode</h3>
                    <a
                      href="https://leetcode.com/u/gunjesh843/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-amber link-underline inline-flex items-center gap-1"
                    >
                      view profile <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                  {leetcodeBadges.map((badge, i) => (
                    <img
                      key={i}
                      src={badge}
                      alt={`LeetCode badge ${i + 1}`}
                      className="w-14 h-14 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollCard>

          {/* certifications */}
          <ScrollCard dir={-1} className="h-full">
            <div className="glass panel-ticks rounded-lg overflow-hidden h-full">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">certificates.md</span>
              </div>
              <div className="p-5 md:p-7">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">
                  <span className="text-amber">#</span> professional certifications
                </h3>
                <div className="space-y-2">
                  {certificates.map((cert, i) => (
                    <div
                      key={i}
                      className="group flex items-center justify-between gap-3 p-3 rounded border border-transparent hover:border-amber/30 hover:bg-secondary/40 transition-all"
                    >
                      <div className="min-w-0">
                        <h4 className="text-sm text-foreground group-hover:text-amber transition-colors truncate">
                          {cert.title}
                        </h4>
                        <p className="font-mono text-xs text-muted-foreground truncate">{cert.issuer}</p>
                      </div>
                      <span className="font-mono text-[11px] text-amber border border-amber/30 rounded px-2 py-1 shrink-0">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollCard>
        </div>
      </div>
    </section>
  );
};
