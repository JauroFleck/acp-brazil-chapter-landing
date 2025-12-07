export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <span className="font-display font-bold text-2xl text-white block mb-4">ACP Brasil</span>
          <p className="text-sm mb-4 max-w-sm">
            Conectando pacientes aos melhores médicos internistas do país. O American College of Physicians é a maior sociedade de especialidade médica do mundo.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Para Pacientes</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#busca" className="hover:text-brand-secondary transition">Buscar Médico</a></li>
            <li><a href="#entenda" className="hover:text-brand-secondary transition">O que é Medicina Interna?</a></li>
            <li><a href="#" className="hover:text-brand-secondary transition">Dicas de Saúde</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Contato</h4>
          <ul className="space-y-2 text-sm">
            <li><i className="fa-regular fa-envelope mr-2"></i> contato@acpbrasil.org.br</li>
            <li><i className="fa-solid fa-location-dot mr-2"></i> São Paulo, Brasil</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between">
        <p>&copy; 2023 ACP Brazil Chapter. Todos os direitos reservados.</p>
        <div className="mt-2 md:mt-0 space-x-4">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
