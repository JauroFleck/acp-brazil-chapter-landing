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
    <header className={`fixed w-full z-40 bg-white shadow-sm transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Friendly */}
          <div className="flex items-center gap-3">
            <img 
              src={acpLogo} 
              alt="ACP Brasil Logo" 
              className="h-20 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#entenda" className="text-gray-600 hover:text-brand-primary font-medium transition">
              O que é um médico ACP?
            </a>
            <a href="#busca" className="text-gray-600 hover:text-brand-primary font-medium transition">
              Buscar Especialista
            </a>
            <a href="#medicos" className="px-5 py-2 bg-brand-secondary text-brand-primaryDark font-bold rounded-full hover:bg-brand-primary hover:text-white transition shadow-sm">
              Sou Médico
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-brand-primary focus:outline-none"
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#entenda"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              O que é um médico ACP?
            </a>
            <a
              href="#busca"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buscar Especialista
            </a>
            <a
              href="#medicos"
              className="block w-full text-center mt-4 px-4 py-3 bg-brand-secondary text-brand-primaryDark rounded-full font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sou Médico
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
