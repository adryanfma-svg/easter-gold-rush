const pains = [
  { emoji: '😤', text: 'Páscoa chegando e você ainda sem plano de venda' },
  { emoji: '😰', text: 'Medo de gastar com material e não vender nada' },
  { emoji: '🤷', text: 'Nunca fez embalagem profissional e não sabe como' },
  { emoji: '💸', text: 'Vende barato porque não sabe como cobrar mais caro' },
];

const PainSection = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-background py-16 md:py-24 grain">
      <div className="relative z-10 container max-w-4xl">
        <h2 className="font-display italic text-3xl md:text-5xl text-cream text-center mb-12 reveal">
          "Você também pensa assim?"
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {pains.map((p, i) => (
            <div
              key={i}
              className="reveal bg-secondary rounded-lg p-5 border-l-4 border-urgency flex items-start gap-3"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-2xl flex-shrink-0">{p.emoji}</span>
              <p className="text-cream font-body text-base">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="reveal text-center font-display italic text-2xl md:text-4xl text-primary mb-8">
          "Não falta talento. Falta o sistema certo."
        </p>

        <div className="text-center reveal">
          <button
            onClick={scrollToCheckout}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-impact text-xl px-8 py-3 rounded-lg transition-colors group"
          >
            QUERO O SISTEMA AGORA{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
