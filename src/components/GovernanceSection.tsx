export default function GovernanceSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[35%_65%] gap-8 items-center">
          {/* Left: Title */}
          <div className="px-2">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-primary mb-3">
              Líder do Capítulo Brasileiro
            </h2>
            <p className="text-gray-600 text-base">
              Conheça a governança que representa e fortalece a Medicina Interna de excelência no Brasil.
            </p>
          </div>

          {/* Right: Card */}
          <div className="bg-gradient-to-br from-brand-lightBg to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 items-center">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src="https://www.acponline.org/sites/default/files/images/about_acp/chapters/brazil/BRAZ-Arai.png"
                    alt="Dr. Milton Arai"
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <i className="fa-solid fa-star mr-1"></i>
                    Governor-Elect
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="font-display font-bold text-xl md:text-2xl text-brand-primary mb-1">
                  Dr. Milton Arai
                </h3>
                <p className="text-base text-gray-700 font-semibold mb-4">
                  Governor-Elect do Capítulo Brasil
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-calendar-check text-brand-primary text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800">Início</p>
                      <p className="text-sm text-gray-600">Outono 2026</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-hourglass-half text-brand-primary text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800">Mandato</p>
                      <p className="text-sm text-gray-600">4 anos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-flag text-brand-primary text-sm"></i>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800">Missão</p>
                      <p className="text-sm text-gray-600">Fortalecer a MI no Brasil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
