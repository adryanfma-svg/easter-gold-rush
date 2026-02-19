import { useState, useEffect } from 'react';

const MobileStickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const checkout = document.getElementById('checkout');
      const checkoutTop = checkout?.getBoundingClientRect().top ?? Infinity;
      const scrolled = window.scrollY > 300;
      const nearCheckout = checkoutTop < window.innerHeight;
      setVisible(scrolled && !nearCheckout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] bg-secondary/95 backdrop-blur-sm border-t border-border p-3 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-tan text-xs line-through">R$ 197</p>
          <p className="font-impact text-primary text-2xl">R$ 27</p>
        </div>
        <button
          onClick={scrollToCheckout}
          className="bg-fire hover:bg-fire-hover text-accent-foreground font-impact text-lg px-6 py-3 rounded-lg cta-glow flex-shrink-0"
        >
          GARANTIR AGORA →
        </button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
