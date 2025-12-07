export default function StatsStrip() {
  return (
    <section className="bg-white border-b border-gray-100 py-12 relative -mt-4 z-20 shadow-sm rounded-t-3xl mx-2 md:mx-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <span className="block text-4xl font-serif font-bold text-acp-navy mb-1">1915</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Fundação Global</span>
          </div>
          <div className="p-4 border-l border-gray-100">
            <span className="block text-4xl font-serif font-bold text-acp-gold mb-1">160k+</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Membros no Mundo</span>
          </div>
          <div className="p-4 border-l border-gray-100">
            <span className="block text-4xl font-serif font-bold text-acp-navy mb-1">145</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">Países</span>
          </div>
          <div className="p-4 border-l border-gray-100">
            <span className="block text-4xl font-serif font-bold text-acp-navy mb-1">#1</span>
            <span className="text-sm text-gray-500 uppercase tracking-wider">
              Sociedade de Especialidade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

