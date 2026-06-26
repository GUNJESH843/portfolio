import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Home, ArrowLeft } from 'lucide-react';
import { SignalBars } from './signal/SignalBars';

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
        const sections = navLinks.filter((link) => !link.isRoute).map((link) => link.href.slice(1));
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
          scrolled
            ? 'py-2.5 bg-background/80 backdrop-blur-md border-b border-border'
            : 'py-4 md:py-5 bg-transparent border-b border-transparent'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* brand */}
          <button onClick={handleHomeClick} className="flex items-center gap-2.5 group">
            {isOnCertificatesPage ? (
              <>
                <ArrowLeft className="w-4 h-4 text-amber group-hover:-translate-x-1 transition-transform" />
                <span className="font-mono text-sm md:text-base text-foreground">back</span>
              </>
            ) : (
              <>
                <span className="w-2.5 h-2.5 rounded-[2px] bg-amber shadow-[0_0_10px_hsl(var(--amber)/0.9)]" />
                <span className="font-mono text-sm md:text-base tracking-tight text-foreground">
                  gunjesh<span className="text-muted-foreground group-hover:text-amber transition-colors">.kumar</span>
                </span>
              </>
            )}
          </button>

          {/* links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.isRoute
                ? location.pathname === link.href
                : activeSection === link.href.slice(1) && !isOnCertificatesPage;
              const cls = cn(
                'relative px-3 py-1.5 font-mono text-xs tracking-wide transition-colors duration-300',
                isActive ? 'text-amber' : 'text-muted-foreground hover:text-foreground'
              );
              const inner = (
                <>
                  <span className="text-muted-foreground/60">/</span>
                  {link.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-amber shadow-[0_0_8px_hsl(var(--amber)/0.8)]" />
                  )}
                </>
              );
              return link.isRoute ? (
                <button key={link.href} onClick={(e) => handleNavClick(link, e)} className={cls}>
                  {inner}
                </button>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(link, e)} className={cls}>
                  {inner}
                </a>
              );
            })}
          </div>

          {/* status + mobile toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <SignalBars />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">available</span>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)} />

        <div
          className={cn(
            'absolute top-[68px] left-4 right-4 glass panel-ticks rounded-lg p-5 transition-all duration-500',
            mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
          )}
        >
          <nav className="flex flex-col gap-1">
            {isOnCertificatesPage && (
              <button
                onClick={handleHomeClick}
                className="flex items-center gap-3 px-4 py-3 rounded-md text-left font-mono text-sm bg-amber/10 text-amber"
              >
                <Home className="w-4 h-4" />
                go to home
              </button>
            )}
            {navLinks.map((link) => {
              const isActive = link.isRoute
                ? location.pathname === link.href
                : activeSection === link.href.slice(1) && !isOnCertificatesPage;
              const cls = cn(
                'px-4 py-3 rounded-md text-left font-mono text-sm transition-all duration-300',
                isActive ? 'text-amber bg-amber/10' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              );
              return link.isRoute ? (
                <button key={link.href} onClick={(e) => handleNavClick(link, e)} className={cls}>
                  /{link.label}
                </button>
              ) : (
                <a
                  key={link.href}
                  href={isOnCertificatesPage ? '/' + link.href : link.href}
                  onClick={(e) => handleNavClick(link, e)}
                  className={cls}
                >
                  /{link.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border">
            <SignalBars />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">available for work</span>
          </div>
        </div>
      </div>
    </>
  );
};
