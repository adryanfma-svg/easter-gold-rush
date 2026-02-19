import { useCountdownTimer } from '@/hooks/useCountdownTimer';
import { useVacancyCounter } from '@/hooks/useVacancyCounter';

const StickyTopBar = () => {
  const { hours, minutes, seconds, expired } = useCountdownTimer();
  const vacancies = useVacancyCounter();

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[999] bg-urgency urgency-pulse cursor-pointer"
      onClick={scrollToCheckout}
    >
      <div className="container flex items-center justify-between py-2 text-sm md:text-base">
        <div className="flex items-center gap-2 text-accent-foreground font-body font-bold">
          <span>🔥 OFERTA EXPIRA EM:</span>
          {expired ? (
            <span className="text-gold-glow font-impact text-lg">OFERTA EXPIRADA</span>
          ) : (
            <span className="text-gold-glow font-impact text-lg tracking-wider">
              {hours}:{minutes}:{seconds}
            </span>
          )}
          <span className="hidden md:inline">— Apenas {vacancies} vagas restantes</span>
        </div>
        <button className="bg-fire hover:bg-fire-hover text-accent-foreground font-bold px-4 py-1 rounded-sm text-sm transition-colors">
          GARANTIR →
        </button>
      </div>
    </div>
  );
};

export default StickyTopBar;
