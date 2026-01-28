
import React, { useState, useEffect } from 'react';
import { Rocket, Calendar, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const partners = [
    'LINEAR', 'MOTION', 'VERCEL', 'STRIPE', 'FRAMER', 'SUPABASE', 'RESEND', 'RAYCAST'
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-black">
      {/* Stealth Architectural Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Monochromatic Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] transition-transform duration-1000 ease-out" 
          style={{ 
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) scale(1.05)`
          }} 
        />
        
        {/* Floating Animated Code Snippets */}
        <div className="absolute top-1/4 left-10 text-[9px] font-mono text-zinc-700 select-none leading-relaxed hidden lg:block animate-[float_8s_ease-in-out_infinite]">
          <div className="text-zinc-400">export default function App() {'{'}</div>
          <div className="pl-4">return (</div>
          <div className="pl-8 text-zinc-500">&lt;Experience quality="elite" /&gt;</div>
          <div className="pl-4">);</div>
          <div className="text-zinc-400">{'}'}</div>
        </div>

        <div className="absolute top-1/3 right-12 text-[9px] font-mono text-zinc-700 select-none leading-relaxed hidden lg:block animate-[float_12s_ease-in-out_infinite_reverse]">
          <div className="text-zinc-500">// Deploying to production...</div>
          <div>await ns_studio.deploy({'{'}</div>
          <div className="pl-4">performance: 100,</div>
          <div className="pl-4">seo: "authoritative"</div>
          <div>{'}'});</div>
        </div>

        <div className="absolute bottom-1/4 left-20 text-[9px] font-mono text-zinc-800 select-none hidden lg:block animate-pulse">
          <div>SELECT * FROM conversions</div>
          <div>WHERE result = 'exceptional'</div>
          <div>ORDER BY speed DESC;</div>
        </div>

        {/* Ambient Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20">
        <div className="inline-block mb-8 px-5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl">
          <span className="text-[12px] font-mono tracking-[0.5em] text-zinc-500 uppercase">
            Digital Craft Studio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white leading-[0.9] tracking-tighter mb-10">
          WE BUILD <br />
          <span className="text-zinc-800">WEBSITES.</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-base md:text-lg text-zinc-500 mb-14 font-light leading-relaxed tracking-tight px-4">
          NS Studio delivers world-class digital systems. From high-conversion brand platforms to complex enterprise software, we engineer the web's most powerful experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-xl mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-14 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl"
          >
            Initiate Project
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-14 py-5 bg-transparent text-white border border-white/10 font-black uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            View Codebase
          </a>
        </div>
      </div>

      <div className="w-full mt-auto relative">
        <div className="w-full border-t border-white/5 py-12 overflow-hidden opacity-20 hover:opacity-40 transition-opacity duration-700">
          <div className="flex gap-24 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            {[...partners, ...partners, ...partners].map((name, i) => (
              <span key={i} className="text-[10px] font-display font-bold tracking-[0.5em] text-white">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
