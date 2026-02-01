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

          {/* Right Content - Animated Code Display */}
          <div className="relative flex justify-center animate-fade-in opacity-0 delay-500 order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              {/* Floating Tech Stack Badges */}
              <div className="hidden sm:flex absolute -top-8 left-1/2 -translate-x-1/2 gap-2 flex-wrap justify-center z-10">
                <div className="glass rounded-lg px-3 py-1.5 animate-float">
                  <span className="text-xs font-mono text-primary">React</span>
                </div>
                <div className="glass rounded-lg px-3 py-1.5 animate-float-delayed">
                  <span className="text-xs font-mono text-accent">TypeScript</span>
                </div>
                <div className="glass rounded-lg px-3 py-1.5 animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-xs font-mono text-primary">Node.js</span>
                </div>
              </div>

              {/* Code Terminal Display */}
              <div className="glass rounded-2xl overflow-hidden border border-primary/20">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">portfolio.tsx</span>
                </div>
                
                <div className="p-4 md:p-6 font-mono text-xs md:text-sm space-y-3 md:space-y-4 bg-secondary/50">
                  <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-foreground">= {'{'}</span>
                  </div>
                  
                  <div className="pl-4 space-y-2 animate-slide-up opacity-0" style={{ animationDelay: '0.7s' }}>
                    <div>
                      <span className="text-blue-300">name:</span>{' '}
                      <span className="text-green-400">"Gunjesh Kumar"</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-blue-300">role:</span>{' '}
                      <span className="text-green-400">"Software Engineer"</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-blue-300">location:</span>{' '}
                      <span className="text-green-400">"Vizag, India"</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-blue-300">skills:</span>{' '}
                      <span className="text-foreground">{'['}</span>
                      <span className="text-orange-400">"React"</span>
                      <span className="text-foreground">,</span>{' '}
                      <span className="text-orange-400">"Node.js"</span>
                      <span className="text-foreground">,</span>{' '}
                      <span className="text-orange-400">"AI"</span>
                      <span className="text-foreground">{']'}</span>
                      <span className="text-foreground">,</span>
                    </div>
                    <div>
                      <span className="text-blue-300">available:</span>{' '}
                      <span className="text-purple-400">true</span>
                    </div>
                  </div>
                  
                  <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
                    <span className="text-foreground">{'}'}</span>
                    <span className="text-muted-foreground">;</span>
                  </div>

                  <div className="pt-2 border-t border-border/50 animate-slide-up opacity-0" style={{ animationDelay: '0.9s' }}>
                    <span className="text-muted-foreground">// Building the future</span>
                    <div className="mt-1">
                      <span className="text-purple-400">console</span>
                      <span className="text-foreground">.</span>
                      <span className="text-yellow-400">log</span>
                      <span className="text-foreground">(</span>
                      <span className="text-green-400">"Let's create something amazing!"</span>
                      <span className="text-foreground">);</span>
                      <span className="animate-pulse text-primary ml-1">_</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badges */}
              <div className="hidden sm:flex absolute -bottom-8 left-1/2 -translate-x-1/2 gap-3">
                <div className="glass rounded-xl px-4 py-2 animate-float-delayed">
                  <div className="text-center">
                    <div className="text-primary font-bold text-lg">5+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
                <div className="glass rounded-xl px-4 py-2 animate-float" style={{ animationDelay: '0.3s' }}>
                  <div className="text-center">
                    <div className="text-accent font-bold text-lg">1+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
