import { useCountdownTimer } from '@/hooks/useCountdownTimer';

const included = [
  'Estúdio de Design de Luxo Instantâneo',
  '50+ Embalagens Premium Editáveis',
  'Scripts + Catálogo + Blueprint de Vendas',
  'Bônus: Receita Express de Alta Margem',
  'Bônus: Blueprint de Montagem Profissional',
  'Bônus: Robô de Copy de Páscoa',
  'Acesso imediato + Suporte 7 dias',
];

const Particles = () => {
  const particles = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    left: `${15 + Math.random() * 70}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${10 + Math.random() * 5}s`,
    size: `${3 + Math.random() * 5}px`,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary opacity-0"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
            animation: `particle-float ${p.duration} ${p.delay} linear infinite`,
          }}
        />
      ))}
    </>
  );
};

const CheckoutSection = () => {
  const { hours, minutes, seconds, expired } = useCountdownTimer();

  return (
    <section id="checkout" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-secondary to-background">
      <Particles />
      <div className="relative z-10 container max-w-2xl text-center">
        <h2 className="reveal font-impact text-5xl md:text-7xl text-accent-foreground mb-2">
          UMA DECISÃO.
        </h2>
        <h2 className="reveal font-impact text-5xl md:text-7xl text-primary mb-12">
          UMA PÁSCOA DIFERENTE.
        </h2>

        <div className="reveal gold-border-strong rounded-2xl p-8 md:p-10 glass relative overflow-hidden">
          {/* Tag */}
          <div className="bg-urgency text-accent-foreground font-body font-bold text-sm px-4 py-1 rounded-full inline-block mb-4">
            ⚡ OFERTA RELÂMPAGO — ENCERRA EM BREVE
          </div>

          {/* Mini timer */}
          {!expired && (
            <div className="flex justify-center gap-2 mb-6">
              {[hours, minutes, seconds].map((v, i) => (
                <span key={i} className="bg-secondary gold-border rounded px-3 py-1 font-impact text-primary text-xl">
                  {v}
                </span>
              ))}
            </div>
          )}

          <p className="text-tan line-through font-body text-lg mb-1">De R$ 197,00</p>
          <p className="text-cream font-impact text-xl mb-2">HOJE APENAS:</p>
          <p className="text-success font-impact text-7xl md:text-[100px] leading-none mb-2">R$ 27</p>
          <p className="text-cream/60 font-body text-sm mb-8">
            Pagamento único. Acesso em segundos. Para sempre.
          </p>

          {/* Included list */}
          <div className="text-left max-w-sm mx-auto mb-8 space-y-2">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-2 font-body text-sm text-cream">
                <span className="text-primary flex-shrink-0">✦</span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#checkout"
            className="inline-block bg-fire hover:bg-fire-hover text-accent-foreground font-impact text-2xl md:text-3xl px-10 py-5 rounded-lg cta-glow transition-transform hover:scale-[1.03] border border-primary/40 group w-full"
          >
            🍫 GARANTIR MEU ESTÚDIO DE LUXO — R$ 27{' '}
            <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </a>
          <p className="text-cream/70 font-body text-xs mt-2">
            📲 Acesso Imediato via E-mail e WhatsApp
          </p>

          {/* Transformation phrase */}
          <p className="text-cream font-body text-xs mt-4 font-bold">
            🚀 Não perca mais tempo! Comece a transformar seus ovos em dinheiro de verdade ainda hoje!
          </p>

          {/* Trust */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-tan text-xs font-body">
            <span>🔒 SSL</span>
            <span>💳 Pix e Cartão</span>
            <span>📲 Acesso Imediato</span>
            <span>🛡️ 7 Dias</span>
          </div>

          {/* Urgency note */}
          <div className="mt-6 bg-urgency/20 border border-urgency/40 rounded-lg p-3">
            <p className="text-cream font-body text-xs font-bold">
              ⚠️ Após o período de Páscoa, este preço não estará disponível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
