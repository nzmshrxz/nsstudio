
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', quote: "NS Studio transformed our vision into a digital masterpiece. Their attention to detail is unmatched.", author: "Marcus Thorne", role: "CEO, Nexa FinTech", avatar: "https://i.pravatar.cc/150?u=elena" },
  { id: '2', quote: "The best agency we've worked with. Professional, fast, and remarkably innovative.", author: "Elena Vance", role: "Founder, Bloom", avatar: "https://i.pravatar.cc/150?u=marcus" },
  { id: '3', quote: "Highly recommend for any high-stakes digital project. They deliver excellence.", author: "Sarah Jenkins", role: "VP Marketing, Luxe", avatar: "https://i.pravatar.cc/150?u=sarah" },
  { id: '4', quote: "Working with them was seamless. The ROI we saw in just 3 months was incredible.", author: "David Choi", role: "CTO, Aero", avatar: "https://i.pravatar.cc/150?u=david" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4">
          Trusted by Industry Leaders.
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="flex-shrink-0 w-[350px] md:w-[450px] p-8 m-4 bg-[#0C0C0C] border border-white/5 rounded-3xl"
            >
              <p className="text-lg text-white/70 italic mb-8 font-light leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.author}</h4>
                  <p className="text-[#E11D48] text-xs uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
