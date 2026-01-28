import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase block mb-6">Open Channel</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-[0.9] tracking-tighter mb-10">Initiate <br />Transmission.</h2>
            <p className="text-zinc-500 text-lg font-light mb-16 max-w-sm leading-relaxed">
              We focus on one mission at a time. Secure your position in our pipeline today.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail size={18} />, label: 'Mail', val: 'nsstudio4u@gmail.com' },
                { icon: <MapPin size={18} />, label: 'Location', val: 'Lucknow,India' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-zinc-600 text-[9px] font-mono uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white text-lg font-bold tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#050505] p-12 md:p-20 border border-white/5 flex flex-col gap-8">
              <h3 className="text-2xl font-display font-black text-white leading-none tracking-tighter">Submit Intelligence</h3>
              
              <div className="space-y-4">
                <button
                  className="w-full group/btn relative flex items-center justify-between px-10 py-6 bg-white text-black font-black uppercase tracking-widest text-[10px] transition-all hover:bg-zinc-200"
                  onClick={() => window.open('https://calendly.com/nazamshiraz4/30min', '_blank')}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ArrowRight size={16} />
                    Request Audit
                  </span>
                  <span className="opacity-40 group-hover/btn:translate-x-2 transition-transform font-mono tracking-tighter">24H ETA</span>
                </button>

                <button
                  className="w-full group/btn relative flex items-center justify-between px-10 py-6 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-[10px] transition-all hover:bg-white/5"
                  onClick={() => window.open('https://calendly.com/nazamshiraz4/30min', '_blank')}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Calendar size={16} className="text-zinc-500" />
                    Secure Briefing
                  </span>
                  <span className="opacity-40 group-hover/btn:translate-x-2 transition-transform font-mono tracking-tighter">15 MIN</span>
                </button>
              </div>
              
              <p className="mt-8 text-center text-zinc-700 text-[9px] font-mono uppercase tracking-[0.3em]">
                Secure End-to-End Collaboration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
