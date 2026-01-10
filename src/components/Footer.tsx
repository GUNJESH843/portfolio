import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/gunjesh843', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gunjeshkumar/', label: 'LinkedIn' },
  { icon: Mail, href: "mailto:kumargunjesh843@gmail.com", label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-primary font-mono text-lg">&lt;/&gt;</span>
            <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              Gunjesh
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <a href="mailto:contact@gunjesh.in" className="hover:underline">
              contact@gunjesh.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
