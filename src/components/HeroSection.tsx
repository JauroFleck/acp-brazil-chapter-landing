export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Médico ouvindo paciente com atenção" 
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-brand-lightBg text-brand-primaryDark font-bold text-sm mb-6 border border-brand-primary/20">
            <i className="fa-solid fa-check-circle mr-2"></i>Segurança e Qualidade
          </span>
          
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-brand-primary mb-6 leading-tight">
            Sua saúde merece a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-green-600">excelência.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Não confie sua saúde a qualquer um. Encontre médicos internistas e especialistas comprometidos com o <strong>mais alto padrão de ética e atualização contínua</strong> do American College of Physicians.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#busca" 
              className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primaryDark transition shadow-lg flex items-center justify-center gap-3 text-lg"
            >
              <i className="fa-solid fa-magnifying-glass"></i> Encontrar Médico
            </a>
            <a 
              href="#entenda" 
              className="px-8 py-4 bg-white text-brand-primary border border-brand-primary/30 font-bold rounded-lg hover:bg-brand-lightBg transition flex items-center justify-center gap-2"
            >
              O que significam os títulos?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
