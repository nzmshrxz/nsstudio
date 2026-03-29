import React from 'react';
import { Mail, MapPin, ArrowRight, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left — heading + contact info */}
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block mb-6">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-6">
              Let's build<br />
              <span className="text-zinc-600">something together.</span>
            </h2>
            <p className="text-[15px] text-zinc-400 font-normal leading-relaxed mb-14 max-w-sm">
              Tell us what you're working on — a new project, a broken codebase, or just an idea. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {/* Email — clickable */}
              <a
                href="mailto:nsstudio4u@gmail.com"
                className="flex items-center gap-5 group cursor-pointer"
              >
                <div className="w-11 h-11 bg-white/[0.04] border border-white/[0.07] rounded-full flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-1">Email</p>
                  <p className="text-[15px] text-zinc-300 font-normal group-hover:text-white transition-colors duration-200">
                    nsstudio4u@gmail.com
                  </p>
                </div>
              </a>

              {/* Location — not clickable, no cursor-pointer */}
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 bg-white/[0.04] border border-white/[0.07] rounded-full flex items-center justify-center text-zinc-500 flex-shrink-0">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest mb-1">Location</p>
                  <p className="text-[15px] text-zinc-300 font-normal">Lucknow, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — action cards */}
          <div>
            <div className="bg-[#050505] p-10 md:p-14 border border-white/[0.05] flex flex-col gap-6">
              <div className="mb-2">
                <h3 className="text-xl font-black text-white tracking-tight mb-2">
                  Ready to start?
                </h3>
                <p className="text-[13px] text-zinc-600 font-light leading-relaxed">
                  Pick whichever works best for you.
                </p>
              </div>

              {/* Primary CTA — audit/review */}
              <button
                className="w-full group/btn flex flex-col sm:flex-row items-center sm:justify-between gap-1 sm:gap-0 px-8 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] transition-all duration-200 hover:bg-zinc-100 rounded-sm"
                onClick={() => window.open('https://calendly.com/nazamshiraz4/30min', '_blank')}
              >
                <span className="flex items-center gap-3">
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  Get a free project audit
                </span>
                <span className="text-zinc-500 font-mono text-[10px] normal-case tracking-normal">
                  Reply in 24h
                </span>
              </button>

              {/* Secondary CTA — call */}
              <button
                className="w-full group/btn flex items-center justify-between px-8 py-5 bg-transparent border border-white/[0.08] text-white font-black uppercase tracking-widest text-[10px] transition-all duration-200 hover:bg-white/[0.04] rounded-sm"
                onClick={() => window.open('https://calendly.com/nazamshiraz4/30min', '_blank')}
              >
                <span className="flex items-center gap-3">
                  <Calendar size={14} className="text-zinc-500" />
                  Book a 15-min call
                </span>
                <span className="text-zinc-600 font-mono text-[10px] normal-case tracking-normal">
                  Free
                </span>
              </button>

              {/* Trust line */}
              <p className="text-center text-zinc-700 text-[11px] font-mono tracking-wider pt-2">
                No commitment. No sales pitch. Just a conversation.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;