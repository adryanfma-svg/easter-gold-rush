import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { useVacancyCounter } from '@/hooks/useVacancyCounter';

const CountdownSection = () => {
  const { hours, minutes, seconds, expired } = useCountdownTimer();
  const vacancies = useVacancyCounter();

  return (
    <section className="relative bg-secondary py-12 grain">
      <div className="gold-divider mb-0" />
      <div className="relative z-10 container text-center py-8">
        <p className="text-3xl mb-2">🔥</p>
        <p className="text-cream font-impact text-2xl md:text-3xl mb-6">
          ⚠️ ATENÇÃO: Este preço some em:
        </p>

        {expired ? (
          <p className="text-urgency font-impact text-4xl blink-red">OFERTA EXPIRADA</p>
        ) : (
          <div className="flex justify-center gap-4 mb-6">
            {[
              { val: hours, label: 'HORAS' },
              { val: minutes, label: 'MINUTOS' },
              { val: seconds, label: 'SEGUNDOS' },
            ].map((b) => (
              <div key={b.label} className="gold-border rounded-xl p-4 min-w-[90px]">
                <p className="font-impact text-primary text-4xl md:text-5xl">{b.val}</p>
                <p className="text-tan text-xs font-body font-bold mt-1">{b.label}</p>
              </div>
            ))}
          </div>
        )}

        <p className="text-cream/70 font-body text-sm mb-4">
          Depois disso, o preço volta para R$ 197 — sem exceções.
        </p>

        <p className="text-urgency font-body font-bold blink-red">
          🔴 Restam apenas {vacancies} vagas neste preço
        </p>
      </div>
      <div className="gold-divider mt-0" />
    </section>
  );
};

export default CountdownSection;
