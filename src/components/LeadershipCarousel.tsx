import { useRef } from 'react';

export default function LeadershipCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Width of card + gap
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const leadership = [
    {
      name: 'Dr. Roberto Almeida',
      title: 'FACP',
      titleClass: 'text-acp-secondaryDark',
      role: 'GOVERNOR',
      roleBg: 'bg-acp-primary/90',
      description:
        'Governador do Capítulo Brasil. Chefe de Clínica Médica no Hospital das Clínicas. Lidera iniciativas de educação continuada.',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dra. Helena Costa',
      title: 'MACP',
      titleClass: 'text-amber-500',
      role: 'MASTER',
      roleBg: 'bg-amber-500/90',
      description:
        'Professora Emérita de Medicina. Reconhecida internacionalmente por suas pesquisas em Cardiologia Preventiva.',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. André Santos',
      title: 'FACP',
      titleClass: 'text-acp-secondaryDark',
      role: 'TREASURER',
      roleBg: 'bg-gray-200',
      roleText: 'text-gray-700',
      description:
        'Diretor financeiro do capítulo. Especialista em Medicina Hospitalar e Gestão em Saúde.',
      image:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dra. Mariana Lima',
      title: 'Member',
      titleClass: 'text-gray-500',
      role: 'COUNCIL',
      roleBg: 'bg-gray-200',
      roleText: 'text-gray-700',
      description:
        'Coordenadora do conselho de residentes. Focada em educação médica e humanização.',
      image:
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="lideranca" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-acp-primary font-bold text-sm uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full text-emerald-800">
              Governança
            </span>
            <h2 className="mt-4 text-3xl font-serif font-bold text-acp-primary">
              Liderança do Capítulo
            </h2>
          </div>
          {/* Carousel Controls */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-acp-primary hover:text-white transition"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-acp-primary hover:text-white transition"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div
          ref={carouselRef}
          id="leadership-carousel"
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-10 snap-x snap-mandatory"
        >
          {leadership.map((person, index) => (
            <div
              key={index}
              className="min-w-[300px] w-[300px] snap-start bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden rounded-t-lg relative">
                <div
                  className={`absolute top-4 left-4 ${person.roleBg} ${person.roleText || 'text-white'} text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm shadow-sm`}
                >
                  {person.role}
                </div>
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-serif font-bold text-acp-primary">{person.name}</h4>
                <span
                  className={`text-xs font-bold ${person.titleClass || 'text-acp-secondaryDark'} uppercase tracking-wider mb-2 block`}
                >
                  {person.title}
                </span>
                <p className="text-sm text-gray-500 line-clamp-3">{person.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  {person.title !== 'Member' && (
                    <a href="#" className="text-gray-400 hover:text-acp-primary">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Spacer */}
          <div className="min-w-[50px]"></div>
        </div>
      </div>
    </section>
  );
}

