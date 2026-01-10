import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-mesh-gradient rounded-full blur-3xl opacity-30" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="animate-slide-up opacity-0">
              
            </div>

            <div className="space-y-3 md:space-y-4 animate-slide-up opacity-0 delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">Gunjesh Kumar</span>
                <br />
                <span className="text-gradient">software engineer</span>
              </h1>
            </div>

            <p className="text-base md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-slide-up opacity-0 delay-200">
              Crafting responsive websites where{' '}
              <span className="text-foreground">technology</span> meets{' '}
              <span className="text-primary">creativity</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 animate-slide-up opacity-0 delay-300">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="/public/resources/Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Download CV
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto" asChild>
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Contact me
                </a>
              </Button>
            </div>

            {/* Terminal Card */}
            <div className="glass rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0 animate-slide-up opacity-0 delay-400">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">status.sh</span>
              </div>
              <div className="p-3 md:p-4 font-mono text-xs md:text-sm">
                <span className="text-muted-foreground">$ </span>
                <span className="text-foreground">Currently working on </span>
                <span className="text-accent">AI-powered systems</span>
                <span className="animate-pulse text-primary ml-1">_</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center animate-fade-in opacity-0 delay-500 order-1 lg:order-2">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin-slow blur-xl opacity-50" 
                   style={{ padding: '4px' }} />
              
              {/* Profile Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-primary/30 animate-float">
                <img
                  src="/images/profie.jpg"
                  alt="Gunjesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-4 -right-4 glass rounded-xl px-3 md:px-4 py-1.5 md:py-2 animate-float-delayed">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-mono text-sm md:text-lg">&lt;/&gt;</span>
                  <span className="text-xs md:text-sm font-medium text-foreground">Developer</span>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-4 -left-4 glass rounded-xl px-3 md:px-4 py-1.5 md:py-2 animate-float">
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-foreground">Vizag, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
