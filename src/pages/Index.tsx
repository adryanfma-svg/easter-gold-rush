import { useScrollReveal } from '@/hooks/useScrollReveal';
import StickyTopBar from '@/components/StickyTopBar';
import HeroSection from '@/components/HeroSection';
import CountdownSection from '@/components/CountdownSection';
import PainSection from '@/components/PainSection';
import ProfitMathSection from '@/components/ProfitMathSection';
import IncludedSection from '@/components/IncludedSection';
import BonusSection from '@/components/BonusSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ForWhomSection from '@/components/ForWhomSection';
import CheckoutSection from '@/components/CheckoutSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';
import MobileStickyBar from '@/components/MobileStickyBar';

const Index = () => {
  useScrollReveal();

  return (
    <main className="overflow-x-hidden">
      <StickyTopBar />
      <HeroSection />
      <CountdownSection />
      <PainSection />
      <ProfitMathSection />
      <IncludedSection />
      <BonusSection />
      <TestimonialsSection />
      <ForWhomSection />
      <CheckoutSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
      <MobileStickyBar />
    </main>
  );
};

export default Index;
