import { ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Email', value: 'kumargunjesh843@gmail.com', href: 'mailto:kumargunjesh843@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/gunjeshkumar', href: 'https://www.linkedin.com/in/gunjeshkumar/' },
  { label: 'GitHub', value: 'github.com/gunjesh843', href: 'https://github.com/gunjesh843' },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Get in Touch</span>
      </div>

      <div className="relative z-10 my-auto">
        <h2 className="display-massive leading-none">
          <span className="block text-muted-foreground/20">Let's</span>
          <span className="block serif-italic text-primary">Work</span>
          <span className="block">Together</span>
        </h2>
      </div>

      <div className="relative z-10">
        <div className="hr-animate mb-8" />
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <p className="text-muted-foreground max-w-md">
            I'm interested in freelance opportunities and collaborations. 
            If you have a project in mind, let's make something amazing.
          </p>
          
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
                data-hover
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground w-20">{link.label}</span>
                <span className="font-mono group-hover:text-primary transition-colors">{link.value}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
