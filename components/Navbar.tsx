
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-2xl py-5 border-b border-white/5' 
          : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-black tracking-tighter text-white flex items-center gap-1 group relative z-[200]">
          <span className="text-[#E11D48]">NS</span> STUDIO
        </a>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all duration-500 transform active:scale-95 shadow-xl"
          >
            Start Project
          </a>
        </div>

        <button
          className="lg:hidden relative z-[200] text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 h-screen w-screen bg-black z-[150] flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] lg:hidden ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 opacity-[0.05] bg-dot-pattern pointer-events-none" />
        {navLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl font-display font-black text-white hover:text-zinc-500 transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
