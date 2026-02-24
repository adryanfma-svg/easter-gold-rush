const items = [
  { title: '50+ Embalagens Premium Editáveis (Canva)', desc: 'Seu cliente vai pegar na mão e sentir a diferença — visual de marca de luxo' },
  { title: 'Tags, Cintas, Adesivos e Caixas Estilo Boutique', desc: 'O "Design de Prateleira" que as grandes marcas usam, a um custo irrisório' },
  { title: 'Catálogo Digital Pronto para WhatsApp', desc: 'Vitrine profissional na palma da mão — comece a vender em minutos' },
  { title: 'Scripts de Atendimento e Fechamento', desc: 'Saiba exatamente o que dizer para fechar vendas com margem alta' },
  { title: 'Blueprint de Pré-Venda (zero estoque parado)', desc: 'Venda antes de produzir — sem risco de prejuízo' },
  { title: 'Estratégia de Escassez para Vender Mais Caro', desc: 'Transforme seu ovo caseiro em uma joia da confeitaria' },
];

const comparison = [
  { item: 'Design de Embalagens', alone: 'R$ 300–500 (Designer)', kit: 'Incluído' },
  { item: 'Catálogo de Vendas', alone: 'R$ 150–200 (Freelancer)', kit: 'Incluído' },
  { item: 'Copywriting Profissional', alone: 'R$ 200–400 (Copywriter)', kit: 'Incluído (Robô de Copy)' },
  { item: 'Total Estimado', alone: 'R$ 650–1.100', kit: 'R$ 27' },
];

import estudioImg from '@/assets/estudio-montagem.png';

const IncludedSection = () => (
  <section className="relative bg-background py-16 md:py-24">
    <div className="container max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <div className="reveal lg:w-1/2 flex-shrink-0">
          <img
            src={estudioImg}
            alt="Estúdio de Montagem Profissional em Casa"
            className="rounded-2xl gold-border-strong w-full max-w-md mx-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="lg:w-1/2">
          <h2 className="reveal font-impact text-4xl md:text-5xl text-accent-foreground mb-2">
            Seu Estúdio de Montagem Profissional em Casa:
          </h2>
          <p className="reveal text-tan font-body text-sm mb-8">
            A Fábrica de Embalagens em Casa que transforma ovo caseiro em produto premium.
          </p>

          <div className="space-y-4 mb-10">
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

          {/* Comparison Table */}
          <div className="reveal gold-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-primary/20 font-body font-bold text-sm text-cream">
              <div className="p-3">Item</div>
              <div className="p-3 text-center">Fazer Sozinha</div>
              <div className="p-3 text-center">No Kit Express</div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 font-body text-sm border-t border-border ${
                  i === comparison.length - 1 ? 'bg-primary/10 font-bold' : ''
                }`}
              >
                <div className="p-3 text-cream">{row.item}</div>
                <div className="p-3 text-center text-urgency">{row.alone}</div>
                <div className="p-3 text-center text-success font-bold">{row.kit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IncludedSection;
