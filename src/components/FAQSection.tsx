import { useState } from 'react';

const faqs = [
  {
    q: 'Preciso saber fazer chocolate?',
    a: 'Não. O kit foca em embalagem e venda. A receita bônus é express.',
  },
  {
    q: 'Funciona para quem trabalha fora?',
    a: 'Foi feito para isso. Tudo é rápido e prático de executar.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Imediatamente após o pagamento, por e-mail e área de membros.',
  },
  {
    q: 'E se eu não gostar?',
    a: '7 dias de garantia total. Reembolso sem burocracia.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative bg-secondary py-16 md:py-20 grain">
      <div className="relative z-10 container max-w-3xl">
        <h2 className="reveal font-impact text-4xl md:text-5xl text-accent-foreground text-center mb-10">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="reveal gold-border rounded-xl overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="font-body font-bold text-cream">{faq.q}</span>
                <span className="text-primary font-impact text-xl flex-shrink-0 transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '200px' : '0' }}
              >
                <p className="px-6 pb-4 text-tan font-body text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
