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
    title: 'Blueprint de Montagem Profissional',
    lines: ['Como montar · Como embalar · Como elevar percepção de valor', 'Como parecer marca de prateleira do zero'],
    tag: 'Vídeo curto. Resultado imediato.',
  },
  {
    num: 3,
    badge: 'BÔNUS SECRETO',
    emoji: '🤖',
    title: 'Robô de Copy de Páscoa',
    lines: ['Prompts prontos para: descrição de produto, post de venda,', 'mensagens de fechamento, oferta relâmpago', '📱 Funciona no celular e computador (sem precisar baixar nada)'],
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

      {/* AI Demo Section */}
      <div className="reveal mt-12 gold-border-strong rounded-2xl p-6 md:p-8 bg-background/40">
        <h3 className="font-impact text-2xl md:text-3xl text-accent-foreground text-center mb-6">
          🤖 Veja o Robô de Copy trabalhar para você!
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before - Prompt */}
          <div className="rounded-xl border border-border bg-secondary p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-urgency text-accent-foreground font-body font-bold text-xs px-2 py-0.5 rounded">ANTES</span>
              <span className="text-tan font-body text-xs">Você digita:</span>
            </div>
            <div className="bg-background rounded-lg p-4 font-body text-sm text-cream/90 border border-border">
              <p className="italic">"Crie 5 legendas para posts de Páscoa vendendo ovos de colher de brigadeiro"</p>
            </div>
            <p className="text-tan font-body text-xs mt-2 text-center">⏱️ 5 segundos para digitar</p>
          </div>

          {/* After - Result */}
          <div className="rounded-xl border border-success/40 bg-success/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-success text-accent-foreground font-body font-bold text-xs px-2 py-0.5 rounded">DEPOIS</span>
              <span className="text-tan font-body text-xs">A IA entrega:</span>
            </div>
            <div className="bg-background rounded-lg p-4 font-body text-sm text-cream/80 border border-border space-y-2">
              <p>1️⃣ "Ovo de colher de brigadeiro: o presente que derrete corações 🍫"</p>
              <p>2️⃣ "Encomende o favorito da Páscoa antes que acabe! 🐰✨"</p>
              <p>3️⃣ "Feito à mão, com amor e brigadeiro de verdade..."</p>
              <p>4️⃣ "Últimas unidades! Garanta o ovo que todo mundo quer 🔥"</p>
              <p>5️⃣ "De R$12 de custo → R$59 de venda. Essa Páscoa vai ser diferente 💰"</p>
            </div>
            <p className="text-success font-body text-xs mt-2 text-center font-bold">✅ 5 legendas prontas em segundos</p>
          </div>
        </div>

        <p className="text-center text-cream font-body text-sm mt-6 max-w-lg mx-auto">
          Cole o prompt e tenha <strong className="text-primary">30 ideias de posts de venda em menos de 1 minuto</strong>.
          É como ter um copywriter 24h por dia, 7 dias por semana, <strong className="text-success">sem pagar salário!</strong>
        </p>
      </div>

      <div className="reveal text-center mt-10">
        <p className="text-tan font-body line-through mb-1">Valor individual: R$ 297</p>
        <p className="text-success font-impact text-3xl">Você leva TUDO por R$ 27</p>
      </div>
    </div>
  </section>
);

export default BonusSection;
