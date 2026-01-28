
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden transition-colors duration-500 selection:bg-white/10 selection:text-white">
      {!isMobile && <CustomCursor />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Stats />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
