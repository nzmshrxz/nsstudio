import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stack = ['Next.js', 'Supabase', 'Vercel', 'Stripe', 'Framer', 'Resend', 'Tailwind', 'TypeScript'];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-12 overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 80% 60% at center, black, transparent)',
            transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px) scale(1.05)`
          }}
        />

        {/* Floating terminal — real, believable */}
        <div className="absolute top-1/4 left-10 text-[9px] font-mono text-zinc-700 select-none leading-relaxed hidden lg:block animate-[float_9s_ease-in-out_infinite]">
          <div className="text-zinc-500">$ git push origin main</div>
          <div className="text-zinc-600">Deploying to production...</div>
          <div className="text-green-700">✓ Ready in 38s</div>
        </div>

        <div className="absolute top-1/3 right-12 text-[9px] font-mono text-zinc-700 select-none leading-relaxed hidden lg:block animate-[float_13s_ease-in-out_infinite_reverse]">
          <div className="text-zinc-600">// MVP shipped in 3 weeks</div>
          <div>const result = await build({'{'}</div>
          <div className="pl-4 text-zinc-500">deadline: 'met',</div>
          <div className="pl-4 text-zinc-500">bugs: 0,</div>
          <div>{'}'});</div>
        </div>

        <div className="absolute bottom-1/3 left-16 text-[9px] font-mono text-zinc-800 select-none hidden lg:block animate-[float_7s_ease-in-out_infinite]">
          <div className="text-zinc-700">ERROR: auth middleware broken</div>
          <div className="text-green-800">FIXED: 2 hours later ✓</div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-20"
        style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.6s ease' }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.4em] text-zinc-400 uppercase">
            Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter mb-8">
          We help founders
          <br />
          <span className="text-zinc-500">ship 10× faster.</span>
        </h1>

        {/* Subheadline — specific, honest */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-500 mb-6 font-light leading-relaxed">
          Websites, MVPs, SaaS products — built and deployed fast.
          We also rescue codebases with bugs, performance issues, or a launch deadline that's already too close.
        </p>

        {/* What we do — scannable */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['Websites & Landing Pages', 'SaaS & MVPs', 'Bug Fixes & Rescues', 'Codebase Audits'].map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono tracking-wider text-zinc-500 px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#projects"
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-zinc-400 border border-white/10 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            See Our Work
          </a>
        </div>

        {/* Social proof stats */}
        <div className="flex items-center justify-center gap-8 mt-14 pt-10 border-t border-white/[0.06] flex-wrap">
          {[
            { num: '10×', label: 'faster to launch' },
            { num: '3 wks', label: 'avg MVP delivery' },
            { num: '24h', label: 'response time' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black text-white font-mono">{stat.num}</div>
              <div className="text-[11px] text-zinc-600 mt-1 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stack marquee — labeled correctly */}
      <div className="w-full mt-auto relative">
        <div className="w-full border-t border-white/[0.04] pt-6 pb-4 overflow-hidden">
          <p className="text-center text-[10px] font-mono tracking-[0.4em] text-zinc-700 uppercase mb-5">
            Built with
          </p>
          <div className="flex gap-20 animate-[marquee_40s_linear_infinite] whitespace-nowrap opacity-20 hover:opacity-40 transition-opacity duration-700">
            {[...stack, ...stack, ...stack].map((name, i) => (
              <span key={i} className="text-[10px] font-mono font-bold tracking-[0.5em] text-white">
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;