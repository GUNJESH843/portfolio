import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mesh-gradient rounded-full blur-3xl opacity-30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-slide-up opacity-0">
              <div className="section-tag mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </div>
            </div>

            <div className="space-y-4 animate-slide-up opacity-0 delay-100">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">Gunjesh Kumar</span>
                <br />
                <span className="text-gradient">software engineer</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground max-w-lg animate-slide-up opacity-0 delay-200">
              Crafting responsive websites where{' '}
              <span className="text-foreground">technology</span> meets{' '}
              <span className="text-primary">creativity</span>.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up opacity-0 delay-300">
              <Button variant="hero" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact me
                </a>
              </Button>
            </div>

            {/* Terminal Card */}
            <div className="glass rounded-2xl overflow-hidden max-w-md animate-slide-up opacity-0 delay-400">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">status.sh</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">Currently working on </span>
                <span className="text-accent">AI-powered systems</span>
                <span className="animate-pulse text-primary ml-1">_</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in opacity-0 delay-500">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow blur-xl opacity-50" 
                   style={{ padding: '4px' }} />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 animate-float">
                <img
                  src="https://gunjesh.in/images/profie.jpg"
                  alt="Gunjesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-2 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-mono text-lg">&lt;/&gt;</span>
                  <span className="text-sm font-medium text-foreground">Developer</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 animate-float">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-sm font-medium text-foreground">Vizag, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#experience" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs font-mono">scroll</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
