export default function MembershipTiers() {
  return (
    <section id="membership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-acp-gold font-bold text-sm uppercase tracking-widest">
            Filiação
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-acp-navy">
            Faça Parte da Elite Médica
          </h2>
          <p className="mt-4 text-gray-600">
            Escolha a categoria que corresponde ao seu momento profissional e acesse recursos
            exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* CARD 1: MEMBER */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-acp-navy mb-6">
                <i className="fa-solid fa-user-doctor text-xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-acp-navy mb-2">Member</h3>
              <p className="text-gray-500 text-sm mb-6">
                Para residentes, médicos em início de carreira e internistas praticantes.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-teal mt-1 mr-3"></i>
                  Acesso ao Annals of Internal Medicine
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-teal mt-1 mr-3"></i>
                  Descontos no MKSAP
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-teal mt-1 mr-3"></i>
                  Networking global
                </li>
              </ul>

              <a
                href="#"
                className="block w-full py-3 px-4 bg-gray-50 text-acp-navy font-semibold text-center rounded border border-gray-200 hover:bg-gray-100 transition"
              >
                Torne-se Membro
              </a>
            </div>
          </div>

          {/* CARD 2: FACP (FEATURED) */}
          <div className="bg-white rounded-xl shadow-2xl border-t-4 border-acp-navy transform md:-translate-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-acp-navy text-white text-xs font-bold px-3 py-1 rounded-bl uppercase">
              Prestígio
            </div>
            <div className="p-8">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-acp-navy mb-6 border border-gray-300">
                <span className="font-serif font-bold">FACP</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-acp-navy mb-1">Fellow</h3>
              <p className="text-acp-gold text-sm font-semibold mb-2 uppercase tracking-wide">
                Excelência Reconhecida
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Uma distinção honrosa para membros que demonstram serviço contínuo e excelência.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-gold mt-1 mr-3"></i>
                  Uso da designação "FACP"
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-gold mt-1 mr-3"></i>
                  Elegibilidade para liderança no capítulo
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-gold mt-1 mr-3"></i>
                  Reconhecimento em convocações anuais
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-gold mt-1 mr-3"></i>
                  Voto no conselho administrativo
                </li>
              </ul>

              <a
                href="#"
                className="block w-full py-3 px-4 bg-acp-navy text-white font-semibold text-center rounded hover:bg-acp-light transition shadow-lg"
              >
                Aplicar para Fellowship
              </a>
            </div>
          </div>

          {/* CARD 3: MACP */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-8">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-acp-gold mb-6 border border-amber-100">
                <i className="fa-solid fa-crown text-xl"></i>
              </div>
              <h3 className="text-2xl font-serif font-bold text-acp-navy mb-2">Master</h3>
              <p className="text-gray-500 text-sm mb-6">
                A mais alta honraria do Colégio. Reservada para líderes que moldaram a medicina.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-navy mt-1 mr-3"></i>
                  Designação "MACP"
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-navy mt-1 mr-3"></i>
                  Legado internacional
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fa-solid fa-check text-acp-navy mt-1 mr-3"></i>
                  Mentoria exclusiva
                </li>
              </ul>

              <div className="block w-full py-3 px-4 bg-gray-50 text-gray-400 font-semibold text-center rounded border border-gray-200 cursor-not-allowed">
                Apenas por Nomeação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

