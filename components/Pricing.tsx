import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  price: number | 'Custom';
  description: string;
  features: string[];
  recommended?: boolean;
}

const devPlans: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: 199,
    description: 'A clean, fast website built from scratch. Great for founders who need a solid online presence without the fluff.',
    features: [
      'Frontend development',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      '3 revisions',
      '30 days support',
      'Cross-browser compatibility',
      'Basic performance optimization',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 499,
    description: 'For founders building something real — with animations, CMS, and e-commerce ready out of the box.',
    features: [
      'Everything in Standard',
      'Advanced animations',
      'CMS integration',
      'E-commerce ready',
      'Analytics setup',
      'Unlimited revisions',
      '90 days support',
      'Performance optimization',
    ],
    recommended: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 'Custom',
    description: 'Complex SaaS, custom backend, third-party integrations — scoped and priced around your specific project.',
    features: [
      'Everything in Advanced',
      'Custom backend development',
      'Third-party integrations',
      'Advanced security',
      'Multi-language support',
      'Dedicated project manager',
      'Priority support',
      '6 months maintenance',
    ],
  },
];

// Design+Dev adds flat amounts on top
const DESIGN_ADDON: Record<string, number> = {
  standard: 100,
  advanced: 200,
  elite: 0, // custom anyway
};

const DESIGN_EXTRA_FEATURES = ['UI/UX design', 'Brand identity kit'];

const Pricing: React.FC = () => {
  const [mode, setMode] = useState<'dev' | 'full'>('dev');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 350);
    return () => clearTimeout(t);
  }, [mode]);

  const getPrice = (plan: PricingPlan): string => {
    if (plan.price === 'Custom') return 'Custom';
    const total = mode === 'full'
      ? plan.price + DESIGN_ADDON[plan.id]
      : plan.price;
    return `$${total}`;
  };

  const getFeatures = (plan: PricingPlan): string[] =>
    mode === 'full' && plan.price !== 'Custom'
      ? [...plan.features, ...DESIGN_EXTRA_FEATURES]
      : plan.features;

  return (
    <section id="pricing" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block mb-6">
            Pricing
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter mb-10">
            Simple pricing.<br />
            <span className="text-zinc-600">No surprises.</span>
          </h2>

          {/* Toggle */}
          <div className="inline-flex flex-col items-center gap-3">
            <div className="inline-flex p-1 bg-white/[0.04] border border-white/[0.07] rounded-xl">
              <button
                onClick={() => setMode('dev')}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all duration-250 ${
                  mode === 'dev'
                    ? 'bg-white text-black'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Dev only
              </button>
              <button
                onClick={() => setMode('full')}
                className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all duration-250 ${
                  mode === 'full'
                    ? 'bg-white text-black'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Design + Dev
              </button>
            </div>
            <p className="text-sm text-zinc-500 font-light">
              {mode === 'full'
                ? 'Includes UI/UX design & brand kit'
                : 'Development only — bring your own design'}
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/[0.05]">
          {devPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col p-10 transition-colors duration-300 hover:bg-zinc-950 ${
                plan.recommended ? 'bg-[#060606]' : 'bg-black'
              }`}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute top-5 right-5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-600 border border-white/[0.07] px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              {/* Price block */}
              <div
                className={`mb-10 transition-all duration-350 ${
                  isAnimating ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                }`}
              >
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 mb-5">
                  {plan.name}
                </h3>
                <div className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-1 leading-none">
                  {getPrice(plan)}
                </div>
                {plan.price !== 'Custom' && (
                  <p className="text-[11px] text-zinc-700 font-mono mb-5">
                    {mode === 'full' ? `$${plan.price} dev + $${DESIGN_ADDON[plan.id]} design` : 'development only'}
                  </p>
                )}
                <p className="text-[15px] text-zinc-400 font-normal leading-relaxed max-w-[260px]">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div
                className={`flex-1 space-y-3.5 mb-10 transition-all duration-350 delay-75 ${
                  isAnimating ? 'opacity-0 translate-x-1' : 'opacity-100 translate-x-0'
                }`}
              >
                {getFeatures(plan).map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check size={12} className="text-zinc-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-zinc-400 font-normal leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 text-[10px] font-black uppercase tracking-widest rounded-full text-center transition-all duration-200 ${
                  plan.recommended
                    ? 'bg-white text-black hover:bg-zinc-100'
                    : 'bg-transparent border border-white/10 text-white hover:bg-white/5'
                }`}
              >
                {plan.price === 'Custom' ? 'Get a quote' : 'Start a project'}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-[11px] font-mono text-zinc-700">
            All plans include 30 days post-deployment support.
          </p>
          <p className="text-[11px] font-mono text-zinc-700">
            Need something custom?{' '}
            <a href="#contact" className="text-zinc-500 hover:text-white transition-colors underline underline-offset-2">
              Let's talk
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;