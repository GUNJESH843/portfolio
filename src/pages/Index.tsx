import { CustomCursor } from '@/components/CustomCursor';
import { HeroExperimental } from '@/components/HeroExperimental';
import { MarqueeSection } from '@/components/MarqueeSection';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { CertificatesSection } from '@/components/CertificatesSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterMinimal } from '@/components/FooterMinimal';
import { Scene3D } from '@/components/Scene3D';

const Index = () => {
  return (
    <div className="min-h-screen noise">
      <Scene3D />
      <CustomCursor />
      <main className="relative z-10">
        <HeroExperimental />
        <MarqueeSection />
        <WorkSection />
        <AboutSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <FooterMinimal />
    </div>
  );
};

export default Index;
