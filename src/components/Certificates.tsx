import { Award, ExternalLink } from 'lucide-react';

const leetcodeBadges = [
  'https://gunjesh.in/images/Knight.gif',
  'https://gunjesh.in/images/2025-365.gif',
  'https://gunjesh.in/images/2025-200.gif',
  'https://gunjesh.in/images/2024-100.gif',
  'https://gunjesh.in/images/2025-100.gif',
];

const certificates = [
  { title: 'CS50x Certificate', issuer: 'Harvard University', year: '2024' },
  { title: 'GitHub Foundations', issuer: 'GitHub', year: '2025' },
  { title: 'AWS ML Foundation', issuer: 'Amazon Web Services', year: '2025' },
  { title: 'Software Engineering', issuer: 'NPTEL', year: '2024' },
  { title: 'API Fundamentals', issuer: 'Postman', year: '2024' },
  { title: 'Google Play Academy', issuer: 'Google', year: '2023' },
];

export const Certificates = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-tag">
            <Award className="w-4 h-4" />
            #certificates
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LeetCode Badges */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">leetcode-badges.json</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://gunjesh.in/images/leetcode.png"
                  alt="LeetCode"
                  className="w-12 h-12 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground">LeetCode</h3>
                  <a
                    href="https://leetcode.com/u/gunjesh843/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    View Profile <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {leetcodeBadges.map((badge, index) => (
                  <img
                    key={index}
                    src={badge}
                    alt={`LeetCode Badge ${index + 1}`}
                    className="w-16 h-16 hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="glass rounded-2xl overflow-hidden">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">certificates.md</span>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-display font-bold text-foreground">
                Professional Certifications
              </h3>
              <div className="grid gap-3">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-primary">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
