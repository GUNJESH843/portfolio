import { Award, ExternalLink, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from './AnimatedSection';

const leetcodeBadges = [
  '/images/Knight.gif',
  '/images/2025-365.gif',
  '/images/2025-200.gif',
  '/images/2024-100.gif',
  '/images/2025-100.gif',
];

const certificates = [
  { title: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University', year: '2024', link: '#' },
  { title: 'GitHub Foundations', issuer: 'GitHub', year: '2025', link: '#' },
  { title: 'AWS Machine Learning Foundation', issuer: 'Amazon Web Services', year: '2025', link: '#' },
  { title: 'Software Engineering', issuer: 'NPTEL', year: '2024', link: '#' },
  { title: 'API Fundamentals Student Expert', issuer: 'Postman', year: '2024', link: '#' },
];

export const Certificates = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 md:mb-16">
          <div className="flex items-center gap-4 flex-1">
            <span className="section-tag">
              <Award className="w-4 h-4" />
              #certificates
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/certificates')}
            className="group"
          >
            View All
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          {/* LeetCode Badges */}
          <AnimatedSection animation="slide-left">
            <div className="glass rounded-xl md:rounded-2xl overflow-hidden h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">leetcode-badges.json</span>
              </div>
              <div className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-4">
                  <img
                    src="/images/leetcode.png"
                    alt="LeetCode"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-foreground">LeetCode</h3>
                    <a
                      href="https://leetcode.com/u/gunjesh843/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                      View Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  {leetcodeBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-50 blur transition-opacity" />
                      <img
                        src={badge}
                        alt={`LeetCode Badge ${index + 1}`}
                        className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-300 relative"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Professional Certifications */}
          <AnimatedSection animation="slide-right">
            <div className="glass rounded-xl md:rounded-2xl overflow-hidden h-full">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">certificates.md</span>
              </div>
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-display font-bold text-foreground">
                  Professional Certifications
                </h3>
                <div className="grid gap-2 md:gap-3">
                  {certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2.5 md:p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <h4 className="font-medium text-foreground text-sm md:text-base group-hover:text-primary transition-colors truncate">
                          {cert.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground truncate">{cert.issuer}</p>
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-primary flex-shrink-0 px-2 py-1 bg-primary/10 rounded">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
