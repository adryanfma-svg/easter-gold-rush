const cards = [
  { emoji: '💰', title: 'R$ 20–30', desc: 'de lucro por unidade vendida' },
  { emoji: '📦', title: '10 unidades', desc: 'já paga o investimento inteiro' },
  { emoji: '📅', title: 'R$ 500–2.000', desc: 'em uma única semana de Páscoa' },
  { emoji: '🚀', title: 'Margem real', desc: 'sem precisar de técnica avançada' },
];

const ProfitMathSection = () => (
  <section
    className="relative py-20 md:py-28 parallax-bg"
    style={{
      backgroundImage: `url(https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=1400&q=80)`,
    }}
  >
    <div className="absolute inset-0 bg-background/[0.78]" />
    <div className="relative z-10 container max-w-5xl text-center">
      <h2 className="font-impact text-5xl md:text-7xl text-accent-foreground mb-12 reveal">
        VAMOS FALAR DE GRANA.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {cards.map((c, i) => (
          <div
            key={i}
            className="reveal glass gold-border rounded-xl p-6 text-center"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="text-3xl mb-3">{c.emoji}</p>
            <p className="font-impact text-primary text-3xl mb-1">{c.title}</p>
            <p className="text-cream/80 font-body text-sm">{c.desc}</p>
          </div>
        ))}
      </div>

      <p className="reveal font-impact text-success text-2xl md:text-4xl leading-snug">
        VENDA 10 OVOS A R$59 = JÁ PAGOU O CURSO NA PRIMEIRA VENDA.
      </p>
    </div>
  </section>
);

export default ProfitMathSection;
