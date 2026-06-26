import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { SignalBackground } from '@/components/SignalBackground';
import { SignalRail } from '@/components/SignalRail';

const Index = () => {
  return (
    <div className="min-h-screen crt">
      <SignalBackground />
      <Navbar />
      <SignalRail />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
