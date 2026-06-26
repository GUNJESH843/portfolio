import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Rise } from './Rise';
import { ScrollCard } from './ScrollCard';
import { SectionLabel } from './signal/SectionLabel';
import { useSignalScene } from '@/lib/anim';

const socials = [
  { icon: Mail, label: 'email', value: 'kumargunjesh843@gmail.com', href: 'mailto:kumargunjesh843@gmail.com' },
  { icon: MapPin, label: 'location', value: 'Visakhapatnam, India', href: '#' },
  { icon: Linkedin, label: 'linkedin', value: 'in/gunjeshkumar', href: 'https://www.linkedin.com/in/gunjeshkumar/' },
  { icon: Github, label: 'github', value: 'gunjesh843', href: 'https://github.com/gunjesh843' },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const root = useRef<HTMLElement>(null);
  useSignalScene(root, 'contact');

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
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  const inputCls =
    'w-full px-4 py-3 rounded-md bg-secondary/60 border border-border focus:border-amber/70 focus:ring-1 focus:ring-amber/40 outline-none transition-all text-foreground text-sm font-mono placeholder:text-muted-foreground/40';

  return (
    <section id="contact" ref={root} className="py-24 md:py-36 relative overflow-hidden">
      {/* Hidden form for Netlify build-time detection */}
      <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="bot-field" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      {/* faint glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative vskew">
        <Rise blur>
          <SectionLabel
            index="06"
            label="contact"
            title={
              <>
                Open a <span className="text-amber">channel</span>
              </>
            }
            subtitle="// available for AI/ML roles, research and freelance. Transmit anytime."
          />
        </Rise>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-5 gap-5 md:gap-6">
          {/* socials */}
          <div className="lg:col-span-2 space-y-3">
            {socials.map((social, index) => (
              <Rise key={index} blur={false} y={40}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-lg glass hover:border-amber/40 transition-all"
                >
                  <div className="w-11 h-11 rounded-md border border-border bg-secondary/60 flex items-center justify-center text-amber group-hover:bg-amber/10 transition-colors">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {social.label}
                    </p>
                    <p className="text-sm text-foreground group-hover:text-amber transition-colors truncate font-mono">
                      {social.value}
                    </p>
                  </div>
                </a>
              </Rise>
            ))}
          </div>

          {/* form */}
          <ScrollCard dir={-1} className="lg:col-span-3">
            <div className="glass panel-ticks rounded-lg overflow-hidden">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">transmit.sh</span>
                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-amber">
                  <span className="rec-dot" /> ready
                </span>
              </div>
              <form name="contact" method="POST" onSubmit={handleSubmit} className="p-5 md:p-8 space-y-5">
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-muted-foreground">
                      <span className="text-amber">$</span> name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className={inputCls}
                      placeholder="your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-muted-foreground">
                      <span className="text-amber">$</span> email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className={inputCls}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-muted-foreground">
                    <span className="text-amber">$</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className={`${inputCls} resize-none`}
                    placeholder="your message…"
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Transmit
                </Button>
              </form>
            </div>
          </ScrollCard>
        </div>
      </div>
    </section>
  );
};
