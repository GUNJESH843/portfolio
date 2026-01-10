import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Home, ArrowLeft } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'home' },
  { href: '#experience', label: 'experience' },
  { href: '#education', label: 'education' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '/certificates', label: 'certificates', isRoute: true },
  { href: '#contact', label: 'contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isOnCertificatesPage = location.pathname === '/certificates';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (!isOnCertificatesPage) {
        const sections = navLinks.filter(link => !link.isRoute).map(link => link.href.slice(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOnCertificatesPage]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (link: typeof navLinks[0], e?: React.MouseEvent) => {
    if (link.isRoute) {
      e?.preventDefault();
      navigate(link.href);
    } else if (isOnCertificatesPage) {
      e?.preventDefault();
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(link.href.slice(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (isOnCertificatesPage) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass py-3 md:py-4' : 'py-4 md:py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <button onClick={handleHomeClick} className="flex items-center gap-2 group">
            {isOnCertificatesPage ? (
              <>
                <ArrowLeft className="w-5 h-5 text-primary group-hover:transform group-hover:-translate-x-1 transition-transform" />
                <span className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  Back
                </span>
              </>
            ) : (
              <>
                <span className="text-primary font-mono text-base md:text-lg">&lt;/&gt;</span>
                <span className="font-display font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                  Gunjesh
                </span>
              </>
            )}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isRoute ? (
                <button
                  key={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={cn(
                    'px-3 xl:px-4 py-2 rounded-lg font-mono text-xs xl:text-sm transition-all duration-300',
                    location.pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  #{link.label}
                </button>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={cn(
                    'px-3 xl:px-4 py-2 rounded-lg font-mono text-xs xl:text-sm transition-all duration-300',
                    activeSection === link.href.slice(1) && !isOnCertificatesPage
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  #{link.label}
                </a>
              )
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">Available</span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>
      </nav>

      <div className={cn(
        'fixed inset-0 z-40 lg:hidden transition-all duration-300',
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)} />
        
        <div className={cn(
          'absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-500',
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        )}>
          <nav className="flex flex-col gap-2">
            {isOnCertificatesPage && (
              <button onClick={handleHomeClick} className="flex items-center gap-3 px-4 py-3 rounded-xl text-left font-mono text-sm bg-primary/10 text-primary transition-all">
                <Home className="w-4 h-4" />
                Go to Home
              </button>
            )}
            {navLinks.map((link) => (
              link.isRoute ? (
                <button key={link.href} onClick={(e) => handleNavClick(link, e)} className={cn('px-4 py-3 rounded-xl text-left font-mono text-sm transition-all duration-300', location.pathname === link.href ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary')}>
                  #{link.label}
                </button>
              ) : (
                <a key={link.href} href={isOnCertificatesPage ? '/' + link.href : link.href} onClick={(e) => handleNavClick(link, e)} className={cn('px-4 py-3 rounded-xl text-left font-mono text-sm transition-all duration-300', activeSection === link.href.slice(1) && !isOnCertificatesPage ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary')}>
                  #{link.label}
                </a>
              )
            ))}
          </nav>
          <div className="flex items-center gap-2 mt-6 pt-4 border-t border-border">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground">Available for work</span>
          </div>
        </div>
      </div>
    </>
  );
};
