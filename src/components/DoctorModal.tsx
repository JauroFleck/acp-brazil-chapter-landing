import { useEffect } from 'react';

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

interface DoctorModalProps {
  doctor: Doctor;
  onClose: () => void;
}

export default function DoctorModal({ doctor, onClose }: DoctorModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
      
      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden transform transition-all scale-100 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition z-20"
        >
          <i className="fa-solid fa-times"></i>
        </button>
        
        <div>
          <div className="h-32 bg-brand-primary/10 relative">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
          </div>
          <div className="px-8 pb-8 -mt-16 relative z-10">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-white mb-4">
              <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h2 className="font-display font-bold text-2xl text-gray-900">{doctor.name}</h2>
                <p className="text-brand-primary font-medium">{doctor.specialty}</p>
              </div>
              <span className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-bold ${doctor.badgeClass}`}>
                {doctor.title}
              </span>
            </div>

            <div className="text-sm text-gray-500 mb-6 flex items-center gap-4">
              <span><i className="fa-solid fa-location-dot mr-1"></i> {doctor.location}</span>
              <span><i className="fa-solid fa-id-card mr-1"></i> {doctor.crm}</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <h4 className="font-bold text-gray-700 text-sm mb-2">Sobre o especialista</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio}</p>
            </div>

            <a
              href={doctor.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-brand-secondary text-brand-primaryDark font-bold text-center rounded-lg hover:bg-brand-primary hover:text-white transition shadow-lg flex items-center justify-center gap-2"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
