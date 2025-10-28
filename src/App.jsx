import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <HowItWorks />
      </main>
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 text-center text-white/60 text-sm">
          Khwaaish — Knowledge Harnessing Worldwide Analytics and Artificial Intelligence Solutions Hub
        </div>
      </footer>
    </div>
  );
}

export default App;
