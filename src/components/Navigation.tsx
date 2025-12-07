import { useState, useEffect } from 'react';

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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-acp-navy rounded-sm flex items-center justify-center text-white text-xl">
              <i className="fa-solid fa-staff-snake"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-acp-navy font-bold text-lg leading-tight tracking-wide">
                ACP
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                Brazil Chapter
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-acp-navy transition"
            >
              O Capítulo
            </a>
            <a
              href="#membership"
              className="text-sm font-medium text-gray-600 hover:text-acp-navy transition"
            >
              Associe-se
            </a>
            <a
              href="#lideranca"
              className="text-sm font-medium text-gray-600 hover:text-acp-navy transition"
            >
              Liderança
            </a>
            <a
              href="#"
              className="px-6 py-2.5 bg-acp-navy text-white text-sm font-medium rounded hover:bg-acp-light transition shadow-lg shadow-blue-900/20"
            >
              Área do Membro
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-acp-navy focus:outline-none"
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
              href="#"
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
              href="#"
              className="block w-full text-center mt-4 px-4 py-3 bg-acp-navy text-white rounded-md font-medium"
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

