import React from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  detail: string; // specific result or context — makes it feel real
  initials: string;
  color: string; // accent color for the initials badge
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "We had a half-built SaaS and a launch date in 3 weeks. NS Studio came in, figured out what was broken, and shipped it. No drama, no excuses.",
    author: "Rohan M.",
    role: "Founder",
    detail: "SaaS MVP — shipped in 18 days",
    initials: "RM",
    color: "bg-violet-950 text-violet-400",
  },
  {
    id: '2',
    quote: "Our old agency took 6 weeks to deliver a landing page. NS Studio did ours in 4 days and it actually converts. Night and day difference.",
    author: "Priya K.",
    role: "Co-founder",
    detail: "Landing page — 4 day turnaround",
    initials: "PK",
    color: "bg-zinc-900 text-zinc-400",
  },
  {
    id: '3',
    quote: "The auth system kept crashing right before our beta. They diagnosed the issue within an hour and had a fix deployed the same evening.",
    author: "James L.",
    role: "CTO, early-stage startup",
    detail: "Emergency bug fix — same day",
    initials: "JL",
    color: "bg-blue-950 text-blue-400",
  },
  {
    id: '4',
    quote: "I gave them a Figma file and a rough brief. Two weeks later I had a working product I could show to investors. Honestly didn't expect it to be that fast.",
    author: "Amara O.",
    role: "Solo founder",
    detail: "Investor demo — built in 2 weeks",
    initials: "AO",
    color: "bg-emerald-950 text-emerald-400",
  },
  {
    id: '5',
    quote: "They didn't just build what I asked — they told me when something was a bad idea and suggested better approaches. That kind of honesty is rare.",
    author: "Tariq S.",
    role: "Founder",
    detail: "E-commerce build",
    initials: "TS",
    color: "bg-orange-950 text-orange-400",
  },
  {
    id: '6',
    quote: "Our Vercel deploy was broken for two days. Another dev looked at it and gave up. NS Studio fixed it in 40 minutes.",
    author: "Lena B.",
    role: "Product lead",
    detail: "Deployment rescue",
    initials: "LB",
    color: "bg-rose-950 text-rose-400",
  },
];

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[420px] mx-3 p-7 bg-[#0A0A0A] border border-white/[0.06] rounded-2xl flex flex-col justify-between gap-6">
    {/* Quote mark */}
    <div>
      <span className="text-3xl text-white/10 font-black leading-none select-none">"</span>
      <p className="text-[15px] text-zinc-300 font-normal leading-relaxed -mt-2">
        {t.quote}
      </p>
    </div>

    <div className="flex items-center justify-between">
      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Initials badge instead of photo */}
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-black tracking-wide flex-shrink-0 ${t.color}`}>
          {t.initials}
        </div>
        <div>
          <p className="text-white text-sm font-bold leading-tight">{t.author}</p>
          <p className="text-zinc-600 text-[11px] mt-0.5">{t.role}</p>
        </div>
      </div>

      {/* Result tag */}
      <span className="text-[10px] font-mono text-zinc-700 border border-white/[0.06] px-3 py-1.5 rounded-full whitespace-nowrap ml-4 hidden sm:block">
        {t.detail}
      </span>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block mb-6">
          What founders say
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter">
          From the people<br />
          <span className="text-zinc-600">we've shipped for.</span>
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative flex overflow-x-hidden mb-4 group">
        <div className="flex animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`a-${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse), offset for visual rhythm */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-[marqueeReverse_40s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
            <TestimonialCard key={`b-${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;