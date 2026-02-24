import { useState, useEffect } from 'react';
import testimonial1 from '@/assets/testimonial-1.jpeg';
import testimonial2 from '@/assets/testimonial-2.jpeg';
import testimonial3 from '@/assets/testimonial-3.jpeg';

const testimonials = [
  {
    name: 'Renata O.',
    city: 'SP',
    text: 'Nunca tinha vendido nada. Comprei na sexta. Na segunda já tinha R$ 340 em pedidos confirmados no WhatsApp.',
    avatar: testimonial1,
  },
  {
    name: 'Patricia M.',
    city: 'MG',
    text: 'As embalagens do kit parecem de loja cara. Todo mundo pergunta onde comprei. Minha margem foi de R$ 12 para R$ 31.',
    avatar: testimonial2,
  },
  {
    name: 'Camila R.',
    city: 'PR',
    text: 'Em 3 dias de divulgação fiz R$ 890. Com o script de atendimento que veio no kit. Absurdo o quanto é simples.',
    avatar: testimonial3,
  },
];

const recentBuyers = [
  { name: 'Mariana', city: 'Curitiba' },
  { name: 'Juliana', city: 'Belo Horizonte' },
  { name: 'Amanda', city: 'São Paulo' },
  { name: 'Fernanda', city: 'Rio de Janeiro' },
  { name: 'Bruna', city: 'Fortaleza' },
  { name: 'Larissa', city: 'Salvador' },
  { name: 'Carla', city: 'Recife' },
  { name: 'Aline', city: 'Brasília' },
  { name: 'Tatiana', city: 'Porto Alegre' },
  { name: 'Vanessa', city: 'Goiânia' },
];

const TestimonialsSection = () => {
  const [buyerIndex, setBuyerIndex] = useState(0);
  const [minutesAgo, setMinutesAgo] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuyerIndex((prev) => (prev + 1) % recentBuyers.length);
      setMinutesAgo(Math.floor(Math.random() * 12) + 1);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const buyer = recentBuyers[buyerIndex];

  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1511381939415-e44a5869c0f4?w=1400&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/[0.94]" />
      <div className="relative z-10 container max-w-5xl">
        <h2 className="reveal font-impact text-4xl md:text-6xl text-accent-foreground text-center mb-4">
          Quem comprou está vendendo:
        </h2>
        <p className="reveal text-tan font-body text-center text-sm mb-12 max-w-2xl mx-auto italic">
          "Nossos designs são inspirados nas últimas tendências de embalagens gourmet da Europa, garantindo que seu produto se destaque em qualquer prateleira."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal glass-dark gold-border rounded-xl p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-primary mb-3">⭐⭐⭐⭐⭐</p>
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-cream font-body font-bold text-sm">{t.name}</p>
                  <p className="text-tan font-body text-xs">{t.city}</p>
                </div>
              </div>
              <p className="text-cream/90 font-body text-sm italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>

        {/* Recent purchase ticker */}
        <div className="reveal text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-5 py-2 gold-border text-sm font-body">
            <span className="w-2 h-2 rounded-full bg-success blink-red" />
            <span className="text-cream">
              <strong>{buyer.name}</strong> de <strong>{buyer.city}</strong> acabou de garantir o acesso — há {minutesAgo} minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
