export default function ExplainerSection() {
  return (
    <section id="entenda" className="py-20 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl text-brand-primary mb-4">
            Por que escolher um médico ACP?
          </h2>
          <p className="text-gray-600">
            Os selos ao lado do nome do médico não são apenas títulos. Eles representam garantias para você, paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Tier 1: Member */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-800 mb-2">Membro ACP</h3>
            <p className="text-sm font-bold text-brand-primary mb-4 uppercase tracking-wide">Compromisso</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Este médico está conectado à maior comunidade de Medicina Interna do mundo, com acesso diário às últimas descobertas científicas e tratamentos.
            </p>
          </div>

          {/* Tier 2: Fellow (FACP) */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-primary relative transform md:-translate-y-2">
            <div className="absolute top-4 right-4 text-yellow-500 text-4xl opacity-40">
              <i className="fa-solid fa-medal"></i>
            </div>
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-2xl mb-6 border border-gray-300">
              <span className="font-display font-bold text-sm">FACP</span>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-800 mb-2">Fellow (FACP)</h3>
            <p className="text-sm font-bold text-brand-primary mb-4 uppercase tracking-wide">Referência em Medicina</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Uma distinção especial. Significa que o médico foi avaliado por seus pares e reconhecido por sua excelência clínica, serviço à comunidade e integridade superior.
            </p>
          </div>

          {/* Tier 3: Master (MACP) */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 text-2xl mb-6">
              <i className="fa-solid fa-crown"></i>
            </div>
            <h3 className="font-display font-bold text-xl text-gray-800 mb-2">Master (MACP)</h3>
            <p className="text-sm font-bold text-brand-primary mb-4 uppercase tracking-wide">Excelência Reconhecida</p>
            <p className="text-gray-600 text-sm leading-relaxed">
            A mais alta honraria do Colégio. Reservada para líderes que moldam a  Medicina Interna no Brasil, através do incentivo, prática ou ensino
            </p>
          </div>
        </div>

        {/* Internist Explanation Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border-l-4 border-brand-primary shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
              <i className="fa-solid fa-heart-pulse"></i>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-gray-800 mb-3">
                O que é um Internista?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                O <strong>médico internista</strong> é o especialista em cuidar do adulto de forma completa. Ele está preparado para diagnosticar e tratar doenças complexas, coordenar seu cuidado quando você tem mais de uma condição de saúde, e atuar tanto na prevenção quanto no acompanhamento a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
