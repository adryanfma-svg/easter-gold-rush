import { useCountdownTimer } from '@/hooks/useCountdownTimer';

const Particles = () => {
  const particles = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    delay: `${Math.random() * 8}s`,
    duration: `${8 + Math.random() * 6}s`,
    size: `${4 + Math.random() * 6}px`,
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

const HeroSection = () => {
  const { hours, minutes, seconds, expired } = useCountdownTimer();

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/[0.72]" />

      <Particles />

      <div className="relative z-10 container text-center py-12 px-4 max-w-4xl">
        {/* Badge */}
        <div className="inline-block mb-8 animate-fadeInDown">
          <div className="glass gold-border rounded-full px-6 py-2 text-sm md:text-base font-body font-bold text-primary tracking-wide">
            🐰 PÁSCOA LUCRATIVA EXPRESS™ · EDIÇÃO LIMITADA 2026
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-impact text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.95] text-accent-foreground mb-6 drop-shadow-[0_0_30px_hsl(43,72%,46%,0.3)]">
          TRANSFORME CHOCOLATE SIMPLES
          <br />
          EM DINHEIRO DE VERDADE
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-cream max-w-2xl mx-auto mb-8 leading-relaxed">
          Fature na Páscoa mesmo começando do zero,
          <br className="hidden md:block" />
          sem ser confeiteiro e sem gastar com designer.
        </p>

        {/* Proof pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['✓ 3.200+ vendedoras', '✓ Resultado em 48h', '✓ Zero experiência'].map((t) => (
            <span key={t} className="bg-secondary/80 text-cream font-body font-semibold text-sm px-4 py-2 rounded-full border border-border">
              {t}
            </span>
          ))}
        </div>

        {/* Price card */}
        <div className="gold-border-strong rounded-2xl p-6 md:p-8 glass max-w-md mx-auto mb-8">
          <p className="text-tan line-through font-body text-lg mb-1">De R$ 197,00</p>
          <p className="text-gold-glow font-impact text-xl mb-2">⚡ OFERTA RELÂMPAGO:</p>
          <p className="text-success font-impact text-7xl md:text-[90px] leading-none mb-2">R$ 27</p>
          <p className="text-cream/70 font-body text-sm">Pagamento único · Acesso imediato em segundos</p>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToCheckout}
          className="bg-fire hover:bg-fire-hover text-accent-foreground font-impact text-2xl md:text-3xl px-10 py-5 rounded-lg cta-glow transition-transform hover:scale-[1.03] border border-primary/40 mb-6 group"
        >
          🍫 QUERO MEU ACESSO AGORA — R$ 27{' '}
          <span className="inline-block transition-transform group-hover:translate-x-2">→→</span>
        </button>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 text-tan text-sm font-body">
          <span>🔒 Pagamento Seguro</span>
          <span>📲 Acesso Imediato</span>
          <span>🛡️ 7 Dias de Garantia</span>
        </div>

        {/* Scroll arrow */}
        <div className="mt-12 bounce-arrow text-primary text-3xl">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;
