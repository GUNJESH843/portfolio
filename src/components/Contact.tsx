import { Mail, MapPin, Linkedin, Github, Send, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { AnimatedSection } from './AnimatedSection';

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kumargunjesh843@gmail.com',
    href: 'mailto:kumargunjesh843@gmail.com',
    color: 'from-red-400 to-pink-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Visakhapatnam, India',
    href: '#',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gunjeshkumar',
    href: 'https://www.linkedin.com/in/gunjeshkumar/',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/gunjesh843',
    href: 'https://github.com/gunjesh843',
    color: 'from-purple-400 to-purple-600',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formDataToSend = new FormData(form);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataToSend as any).toString(),
    })
      .then(() => {
        toast.success('Message sent! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[200px] md:h-[400px] bg-primary/10 rounded-full blur-[128px]" />
      <div className="absolute top-1/4 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <AnimatedSection className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="section-tag">
            <Mail className="w-4 h-4" />
            #contact
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Creative Header */}
          <AnimatedSection animation="scale" className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4 md:mb-6">
              <Sparkles className="w-4 h-4" />
              Open for opportunities
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-3 md:mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
              I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-4 md:gap-8">
            {/* Contact Info - Creative Cards */}
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              {socials.map((social, index) => (
                <AnimatedSection key={index} animation="slide-left" delay={index * 100}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group relative block"
                  >
                    {/* Gradient Border on Hover */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-r ${social.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
                    
                    <div className="relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-secondary/50 backdrop-blur-sm border border-border group-hover:border-transparent transition-all duration-300">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-muted-foreground">{social.label}</p>
                        <p className="text-foreground font-medium text-sm md:text-base group-hover:text-primary transition-colors truncate">
                          {social.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Contact Form - Creative Design */}
            <AnimatedSection animation="slide-right" className="lg:col-span-3">
              <div className="relative group">
                {/* Animated Gradient Border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl md:rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-gradient-x" />
                
                <div className="relative glass rounded-2xl md:rounded-3xl overflow-hidden">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500" />
                    <div className="terminal-dot bg-yellow-500" />
                    <div className="terminal-dot bg-green-500" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      send-message.jsx
                    </span>
                  </div>
                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit} 
                    className="p-4 md:p-8 space-y-4 md:space-y-6"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-mono text-muted-foreground">const name =</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 md:py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base placeholder:text-muted-foreground/50"
                          placeholder='"Your name"'
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs md:text-sm font-mono text-muted-foreground">const email =</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 md:py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground text-sm md:text-base placeholder:text-muted-foreground/50"
                          placeholder='"your@email.com"'
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs md:text-sm font-mono text-muted-foreground">const message =</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        className="w-full px-4 py-3 md:py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground text-sm md:text-base placeholder:text-muted-foreground/50"
                        placeholder='"Your message here..."'
                      />
                    </div>
                    <Button variant="hero" size="lg" type="submit" className="w-full text-sm md:text-base py-3 md:py-4">
                      <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      sendMessage()
                    </Button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
