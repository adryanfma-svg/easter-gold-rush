const forYou = [
  'Quer faturar na Páscoa sem gastar com designer',
  'Não tem experiência mas quer resultado real',
  'Precisa de algo prático e rápido de executar',
  'Quer vender com margem alta desde a primeira venda',
  'Usa WhatsApp para vender ou quer começar',
];

const notForYou = [
  'Quer módulo interminável sem aplicar nada',
  'Procura esquema mágico sem trabalho real',
  'Já tem R$5k/mês com confeitaria estruturada',
  'Não está disposta a seguir o passo a passo',
];

const ForWhomSection = () => (
  <section className="relative bg-background py-16 md:py-24">
    <div className="container max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Green */}
        <div className="reveal rounded-xl p-6 border-2 border-success/40 bg-success/[0.05]">
          <h3 className="font-impact text-2xl text-success mb-6">É para você se:</h3>
          <ul className="space-y-3">
            {forYou.map((t, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-cream text-sm">
                <span className="text-success flex-shrink-0 mt-0.5">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Red */}
        <div className="reveal rounded-xl p-6 border-2 border-urgency/40 bg-urgency/[0.05]" style={{ transitionDelay: '100ms' }}>
          <h3 className="font-impact text-2xl text-urgency mb-6">Não é para você se:</h3>
          <ul className="space-y-3">
            {notForYou.map((t, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-cream text-sm">
                <span className="text-urgency flex-shrink-0 mt-0.5">✗</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ForWhomSection;
