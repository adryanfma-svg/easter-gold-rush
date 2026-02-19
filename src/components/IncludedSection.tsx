const items = [
  { title: '50+ Embalagens Premium Editáveis (Canva)', desc: 'Designs profissionais prontos para personalizar' },
  { title: 'Tags, Cintas, Adesivos e Caixas Estilo Boutique', desc: 'Visual de marca premium do zero' },
  { title: 'Catálogo Digital Pronto para WhatsApp', desc: 'Comece a vender em minutos' },
  { title: 'Scripts de Atendimento e Fechamento', desc: 'Saiba exatamente o que dizer para fechar vendas' },
  { title: 'Estratégia de Pré-Venda (zero estoque parado)', desc: 'Venda antes de produzir' },
  { title: 'Estratégia de Escassez para Vender Mais Caro', desc: 'Aumente sua margem com gatilhos de urgência' },
];

const IncludedSection = () => (
  <section className="relative bg-background py-16 md:py-24">
    <div className="container max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <div className="reveal lg:w-1/2 flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1548907040-4baa42d10919?w=800&q=80"
            alt="Kit Páscoa Lucrativa Express"
            className="rounded-2xl gold-border-strong w-full max-w-md mx-auto object-cover aspect-[4/5]"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2">
          <h2 className="reveal font-impact text-4xl md:text-5xl text-accent-foreground mb-8">
            O Kit Completo que você recebe:
          </h2>

          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-primary text-lg mt-0.5 flex-shrink-0">✦</span>
                <div>
                  <p className="text-cream font-body font-bold text-base">{item.title}</p>
                  <p className="text-tan font-body text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IncludedSection;
