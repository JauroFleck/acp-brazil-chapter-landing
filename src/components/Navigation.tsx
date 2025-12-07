import { useState, useEffect } from 'react';
import acpLogo from '../assets/acp-brazil-logo.jpg';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={acpLogo} 
              alt="ACP Brazil Chapter Logo" 
              className="h-[80px] w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              className="text-sm font-medium text-gray-600 hover:text-acp-primary transition"
            >
              O Capítulo
            </a>
            <a
              href="#membership"
              className="text-sm font-medium text-gray-600 hover:text-acp-primary transition"
            >
              Associe-se
            </a>
            <a
              href="#lideranca"
              className="text-sm font-medium text-gray-600 hover:text-acp-primary transition"
            >
              Liderança
            </a>
            <a
              href="#eventos"
              className="text-sm font-medium text-gray-600 hover:text-acp-primary transition"
            >
              Eventos
            </a>
            <a
              href="#"
              className="px-6 py-2.5 bg-acp-primary text-white text-sm font-medium rounded hover:bg-acp-primaryDark transition shadow-lg shadow-emerald-900/10"
            >
              Área do Membro
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-acp-primary focus:outline-none"
              id="mobile-menu-btn"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#sobre"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              O Capítulo
            </a>
            <a
              href="#membership"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Associe-se
            </a>
            <a
              href="#lideranca"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liderança
            </a>
            <a
              href="#eventos"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Eventos
            </a>
            <a
              href="#"
              className="block w-full text-center mt-4 px-4 py-3 bg-acp-primary text-white rounded-md font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Área do Membro
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

