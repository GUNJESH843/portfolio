const certificates = [
  { name: 'CS50x', org: 'Harvard', year: '2024' },
  { name: 'GitHub Foundations', org: 'GitHub', year: '2025' },
  { name: 'AWS ML Foundation', org: 'AWS', year: '2025' },
  { name: 'Software Engineering', org: 'NPTEL', year: '2024' },
  { name: 'API Fundamentals', org: 'Postman', year: '2024' },
];

export const CertificatesSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-border">
      <div className="flex items-center justify-between mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Certifications</span>
        <a 
          href="https://leetcode.com/u/gunjesh843/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
          data-hover
        >
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LeetCode Knight</span>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary text-xs">🏆</span>
          </div>
        </a>
      </div>

      <div className="horizontal-scroll -mx-6 px-6 gap-6 pb-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="border border-border p-6 min-w-[280px] hover:border-primary transition-all group card-tilt"
            data-hover
          >
            <span className="text-6xl font-mono number-outline group-hover:text-primary transition-colors">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="text-xl font-mono mt-4">{cert.name}</h3>
            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <span>{cert.org}</span>
              <span>{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
