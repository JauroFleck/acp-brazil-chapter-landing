export default function Footer() {
  return (
    <footer className="bg-acp-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/10 rounded-sm flex items-center justify-center text-white text-sm">
                <i className="fa-solid fa-staff-snake"></i>
              </div>
              <span className="font-serif font-bold text-lg">ACP Brazil</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Capítulo Brasileiro do American College of Physicians. Promovendo excelência e
              profissionalismo na prática da medicina interna.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-acp-teal">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-white transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#lideranca" className="hover:text-white transition">
                  Liderança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Notícias
                </a>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-acp-teal">
              Membros
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#membership" className="hover:text-white transition">
                  Torne-se Membro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Renovar Filiação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Fellowship (FACP)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-acp-teal">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fa-regular fa-envelope"></i> contato@acpbrasil.org
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot"></i> São Paulo, SP
              </li>
              <li className="flex gap-4 mt-4 text-lg">
                <a href="#" className="hover:text-acp-teal transition">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="hover:text-acp-teal transition">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-acp-teal transition">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2023 ACP Brazil Chapter. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

