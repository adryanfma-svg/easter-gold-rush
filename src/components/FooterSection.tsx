import { useState, useEffect } from 'react';

const FooterSection = () => {
  const [viewers, setViewers] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(8, Math.min(23, prev + change));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <footer className="bg-[hsl(20,50%,1%)] py-10 border-t border-border/30">
    <div className="container max-w-4xl text-center">
      {/* Live viewers */}
      <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-5 py-2 border border-border text-sm font-body mb-6">
        <span className="w-2 h-2 rounded-full bg-urgency blink-red" />
        <span className="text-cream">🔥 <strong>{viewers} pessoas</strong> estão visualizando esta oferta agora</span>
      </div>

      <p className="font-impact text-xl text-primary mb-4">PÁSCOA LUCRATIVA EXPRESS™</p>
      <div className="flex justify-center gap-6 text-tan text-xs font-body mb-6">
        <a href="#" className="hover:text-cream transition-colors">Termos</a>
        <a href="#" className="hover:text-cream transition-colors">Privacidade</a>
        <a href="#" className="hover:text-cream transition-colors">Contato</a>
      </div>
      <p className="text-tan/50 font-body text-[10px] max-w-lg mx-auto leading-relaxed">
        Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Os resultados podem variar e dependem de fatores individuais como dedicação, experiência e condições de mercado.
      </p>
    </div>
  </footer>
  );
};

export default FooterSection;
