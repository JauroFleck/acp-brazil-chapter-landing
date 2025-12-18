import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ExplainerSection from './components/ExplainerSection';
import DoctorSearchSection from './components/DoctorSearchSection';
import DoctorsCTA from './components/DoctorsCTA';
import GovernanceSection from './components/GovernanceSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <StatsSection />
      <DoctorSearchSection />
      <ExplainerSection />
      <DoctorsCTA />
      <GovernanceSection />
      <Footer />
    </>
  );
}

export default App;
