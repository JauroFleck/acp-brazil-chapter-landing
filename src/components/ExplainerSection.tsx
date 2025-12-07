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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <p className="text-sm font-bold text-brand-primary mb-4 uppercase tracking-wide">Excelência Reconhecida</p>
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
            <p className="text-sm font-bold text-brand-primary mb-4 uppercase tracking-wide">Lenda da Medicina</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Um título raríssimo. Estes são os "médicos dos médicos", profissionais que moldaram a prática da medicina no Brasil e no mundo através de ensino e pesquisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
