const FooterSection = () => (
  <footer className="bg-[hsl(20,50%,1%)] py-10 border-t border-border/30">
    <div className="container max-w-4xl text-center">
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

export default FooterSection;
