const bonuses = [
  {
    num: 1,
    badge: 'BÔNUS EXCLUSIVO',
    emoji: '🥚',
    title: 'Receita Express de Ovo Premium',
    lines: ['Receita simples · Baixo custo · Alta margem', 'Fácil execução · Sem técnica avançada'],
    tag: 'Para você começar HOJE MESMO',
  },
  {
    num: 2,
    badge: 'BÔNUS EM VÍDEO',
    emoji: '🎬',
    title: 'Aula Rápida de Montagem e Apresentação',
    lines: ['Como montar · Como embalar · Como elevar percepção de valor', 'Como parecer marca profissional do zero'],
    tag: 'Vídeo curto. Resultado imediato.',
  },
  {
    num: 3,
    badge: 'BÔNUS SECRETO',
    emoji: '🤖',
    title: 'Robô de Copy de Páscoa',
    lines: ['Prompts prontos para: descrição de produto, post de venda,', 'mensagens de fechamento, oferta relâmpago'],
    tag: 'IA trabalhando pra você vender mais',
  },
];

const BonusSection = () => (
  <section className="relative bg-secondary py-16 md:py-24 grain">
    <div className="relative z-10 container max-w-5xl">
      <h2 className="reveal font-impact text-4xl md:text-6xl text-accent-foreground text-center mb-2">
        Mais 3 BÔNUS incluídos hoje:
      </h2>
      <p className="reveal text-tan font-body text-center mb-12">
        Cada um vale mais que o produto sozinho.
      </p>

      <div className="space-y-6">
        {bonuses.map((b, i) => (
          <div
            key={i}
            className="reveal gold-border rounded-xl p-6 flex flex-col md:flex-row items-start gap-5 relative overflow-hidden"
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground font-body font-bold text-xs px-3 py-1 rounded-bl-lg">
              {b.badge}
            </div>

            {/* Emoji */}
            <div className="text-5xl flex-shrink-0">{b.emoji}</div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-impact text-2xl text-cream mb-2">
                BÔNUS {b.num} — {b.title}
              </p>
              {b.lines.map((l, j) => (
                <p key={j} className="text-cream/80 font-body text-sm">{l}</p>
              ))}
              <p className="text-primary font-body font-bold text-sm mt-3 italic">"{b.tag}"</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal text-center mt-10">
        <p className="text-tan font-body line-through mb-1">Valor individual: R$ 297</p>
        <p className="text-success font-impact text-3xl">Você leva TUDO por R$ 27</p>
      </div>
    </div>
  </section>
);

export default BonusSection;
