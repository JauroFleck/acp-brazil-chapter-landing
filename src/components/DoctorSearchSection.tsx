import { useState, useRef } from 'react';
import DoctorModal from './DoctorModal';

interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  location: string;
  img: string;
  badgeClass: string;
  bio: string;
  contact: string;
  crm: string;
}

const doctors: Doctor[] = [
  {
    id: 'dr1',
    name: 'Dra. Helena Costa',
    title: 'Master ACP (MACP)',
    specialty: 'Cardiologia & Clínica Médica',
    location: 'São Paulo, SP',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badgeClass: 'badge-master',
    bio: 'Com mais de 35 anos de experiência, a Dra. Helena é referência nacional em saúde cardiovascular preventiva. Professora titular e autora de diversos livros, ela oferece um atendimento humanizado focado na longevidade.',
    contact: 'https://www.linkedin.com',
    crm: 'CRM-SP 123456'
  },
  {
    id: 'dr2',
    name: 'Dr. Roberto Almeida',
    title: 'Fellow ACP (FACP)',
    specialty: 'Endocrinologia',
    location: 'Rio de Janeiro, RJ',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badgeClass: 'badge-fellow',
    bio: 'Especialista em distúrbios hormonais e diabetes. Dr. Roberto combina as mais recentes tecnologias de tratamento com um plano de cuidado personalizado para cada paciente.',
    contact: 'https://www.linkedin.com',
    crm: 'CRM-RJ 987654'
  },
  {
    id: 'dr3',
    name: 'Dra. Mariana Lima',
    title: 'Membro ACP',
    specialty: 'Medicina Interna',
    location: 'Belo Horizonte, MG',
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badgeClass: 'badge-member',
    bio: 'Focada em check-ups completos e diagnósticos complexos. A Dra. Mariana preza pela escuta ativa e por investigar a saúde do paciente como um todo, não apenas sintomas isolados.',
    contact: 'https://www.linkedin.com',
    crm: 'CRM-MG 112233'
  },
  {
    id: 'dr4',
    name: 'Dr. André Santos',
    title: 'Fellow ACP (FACP)',
    specialty: 'Geriatria',
    location: 'Curitiba, PR',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badgeClass: 'badge-fellow',
    bio: 'Dedicado ao envelhecimento saudável. O Dr. André ajuda pacientes a manterem autonomia e vitalidade através de medicina preventiva e acompanhamento contínuo.',
    contact: 'https://www.linkedin.com',
    crm: 'CRM-PR 556677'
  }
];

export default function DoctorSearchSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollGrid = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = 320;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section id="busca" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl text-brand-primary">Especialistas em Destaque</h2>
              <p className="text-gray-500 mt-2">Clique no médico para ver detalhes e agendar.</p>
            </div>
            
            {/* Search Filter */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar por especialidade, cidade ou nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-200 rounded-full w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-sm shadow-sm"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-gray-400"></i>
            </div>
          </div>

          {/* CAROUSEL CONTAINER */}
          <div className="relative group">
            {/* Navigation Buttons */}
            <button
              onClick={() => scrollGrid('left')}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-brand-primary shadow-lg rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition focus:outline-none hidden md:flex"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={() => scrollGrid('right')}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white text-brand-primary shadow-lg rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition focus:outline-none hidden md:flex"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* SCROLLABLE TRACK */}
            <div
              ref={trackRef}
              className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 no-scrollbar snap-x snap-mandatory"
            >
              {filteredDoctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="min-w-[280px] w-[280px] md:min-w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 snap-center flex flex-col h-full group/card"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full ${doctor.badgeClass} text-xs font-bold shadow-sm`}>
                      {doctor.badgeClass === 'badge-master' && <i className="fa-solid fa-crown mr-1"></i>}
                      {doctor.badgeClass === 'badge-fellow' && <i className="fa-solid fa-medal mr-1"></i>}
                      {doctor.badgeClass === 'badge-master' ? 'MASTER ACP' : doctor.badgeClass === 'badge-fellow' ? 'FELLOW ACP' : 'MEMBRO ACP'}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="font-display font-bold text-lg text-gray-800 leading-tight mb-1">{doctor.name}</h3>
                    <p className="text-brand-primary font-medium text-sm mb-3">{doctor.specialty}</p>
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                      <span><i className="fa-solid fa-location-dot mr-1"></i> {doctor.location}</span>
                      <span className="text-brand-primary font-bold group-hover/card:underline">Ver Perfil</span>
                    </div>
                  </div>
                </article>
              ))}
              {/* Spacer */}
              <div className="min-w-[20px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
      )}
    </>
  );
}
