export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Medical Background"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div
            className="inline-block px-3 py-1 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="text-acp-secondary font-bold text-xs uppercase tracking-wider">
              American College of Physicians
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight fade-in-up shadow-sm"
            style={{ animationDelay: '0.3s' }}
          >
            Excelência e Liderança na <br />
            <span className="text-acp-secondary">Medicina Interna</span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-100 mb-10 font-light leading-relaxed max-w-2xl fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            O Capítulo Brasileiro do ACP une médicos internistas em busca de educação contínua de
            classe mundial, advocacy e o mais alto padrão de cuidado ao paciente.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            <a
              href="#membership"
              className="px-8 py-4 bg-acp-secondary text-acp-primaryDark font-bold rounded hover:bg-white hover:text-acp-primary transition shadow-xl text-center"
            >
              Torne-se Membro
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 border border-white/40 text-white font-medium rounded hover:bg-white/10 transition backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <i className="fa-regular fa-circle-play"></i> Conheça o Capítulo
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
}

