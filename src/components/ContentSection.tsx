export default function ContentSection() {
  const events = [
    {
      day: '12',
      month: 'Out',
      title: 'Webinar: Atualizações em Diabetes',
      location: 'Online • 19:00h',
    },
    {
      day: '05',
      month: 'Nov',
      title: 'Encontro Anual do Capítulo Brasileiro',
      location: 'São Paulo, SP • Presencial',
    },
    {
      day: '20',
      month: 'Nov',
      title: 'Workshop de Pocus (Ultrassom Point-of-Care)',
      location: 'Rio de Janeiro, RJ • Híbrido',
    },
  ];

  return (
    <section className="py-24 bg-acp-navy text-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-acp-teal opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">
              Mantenha-se Atualizado com o MKSAP
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              O Medical Knowledge Self-Assessment Program (MKSAP) é o recurso mais confiável da
              medicina interna. Como membro do ACP Brasil, você tem acesso privilegiado às últimas
              atualizações clínicas e ferramentas de preparação para board reviews.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-mobile-screen text-acp-teal"></i>
                </div>
                <div>
                  <h4 className="font-bold">Acesso Digital</h4>
                  <p className="text-sm text-gray-400">Estude em qualquer lugar via app.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-book-medical text-acp-teal"></i>
                </div>
                <div>
                  <h4 className="font-bold">CME & MOC</h4>
                  <p className="text-sm text-gray-400">
                    Acumule créditos de educação continuada.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-acp-teal hover:text-white font-medium transition flex items-center gap-2 group"
            >
              Conheça o MKSAP{' '}
              <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition"></i>
            </a>
          </div>

          {/* Abstract Visual */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif font-bold text-xl">Próximos Eventos</h3>
              <a
                href="#"
                className="text-xs uppercase tracking-widest text-acp-teal hover:text-white"
              >
                Ver Agenda
              </a>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 hover:bg-white/5 rounded-lg transition cursor-pointer border-b border-white/5 last:border-b-0"
                >
                  <div className="text-center min-w-[50px]">
                    <span className="block text-xl font-bold text-acp-gold">{event.day}</span>
                    <span className="text-xs uppercase text-gray-400">{event.month}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-400 mt-1">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

