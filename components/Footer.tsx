
import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

const XLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-xl font-display font-black text-white mb-12">
          <span className="text-[#E11D48]">NS</span> STUDIO
        </div>
        
        <div className="flex items-center justify-center gap-10 mb-16">
          <a href="#" className="text-zinc-600 hover:text-white transition-colors" aria-label="X">
            <XLogo />
          </a>
          <a href="#" className="text-zinc-600 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" className="text-zinc-600 hover:text-white transition-colors" aria-label="GitHub"><Github size={18} /></a>
        </div>
        
        <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-800">
          © 2024 NS STUDIO //  DIGITAL SOLUTIONS // ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
