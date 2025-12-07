import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExplainerSection from './components/ExplainerSection';
import DoctorSearchSection from './components/DoctorSearchSection';
import DoctorsCTA from './components/DoctorsCTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <DoctorSearchSection />
      <ExplainerSection />
      <DoctorsCTA />
      <Footer />
    </>
  );
}

export default App;
