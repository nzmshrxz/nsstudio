
import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  { 
    id: 'basic', 
    name: 'Standard', 
    price: '199k', 
    description: 'Perfect for small businesses looking to establish their digital presence', 
    features: ['Frontend Development', 'Mobile Responsive', 'Basic SEO Setup', 'Contact Forms','3 Revisions','30 Days Support', "Cross-Browser Compatibility", 'Basic Performance Optimization'] 
  },
  { 
    id: 'pro', 
    name: 'Advanced', 
    price: '499', 
    description: 'Ideal for growing businesses that need advanced functionality', 
    features: ['Everything in Standard', 'Advanced Animations', 'CMS Integration', 'E-commerce Ready','Analytics Setup', 'Unlimited Revisions', '90 Days Support', 'Performance Optimization'], 
    recommended: true 
  },
  { 
    id: 'enterprise', 
    name: 'Elite', 
    price: 'Custom', 
    description: 'For large-scale projects requiring custom solutions and ongoing support', 
    features: ['Everything in Advanced', 'Custom Backend Development', 'Third-party Integrations', 'Advanced Security', 'Multi-language Support','Dedicated Project Manager','Priority Support','6 Months Maintenance'] 
  },
];

const Pricing: React.FC = () => {
  const [serviceMode, setServiceMode] = useState<'dev' | 'full'>('full');
  const [isAnimating, setIsAnimating] = useState(false);

  // Trigger animation effect on toggle
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [serviceMode]);

  const getPrice = (plan: PricingPlan) => {
    if (plan.price === 'Custom') return 'Custom';
    const basePrice = parseFloat(plan.price);
    const finalPrice = serviceMode === 'full' ? basePrice * 1.50 : basePrice;
    return `$${finalPrice.toFixed(1)}`;
  };

  const getFeatures = (features: string[]) => {
    if (serviceMode === 'full') {
      return [...features, 'Premium UI/UX Design', 'Brand Identity Kit'];
    }
    return features;
  };

  return (
    <section id="pricing" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-500 uppercase block mb-6">Investment Structure</span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white leading-none tracking-tighter mb-10">
            Transparent Pricing. <br /><span className="text-zinc-800">Elite Results.</span>
          </h2>

          <div className="max-w-sm mx-auto p-1 bg-white/5 border border-white/10 rounded-2xl flex items-center">
            <button 
              onClick={() => setServiceMode('dev')}
              className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${serviceMode === 'dev' ? 'bg-white text-black shadow-xl' : 'text-zinc-500 hover:text-white'}`}
            >
              Development
            </button>
            <button 
              onClick={() => setServiceMode('full')}
              className={`flex-1 py-3 text-[9px] font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${serviceMode === 'full' ? 'bg-white text-black shadow-xl' : 'text-zinc-500 hover:text-white'}`}
            >
              Design + Dev
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-1 bg-white/5 border border-white/5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-12 transition-all duration-500 hover:bg-zinc-900/40 ${
                plan.recommended ? 'bg-[#050505]' : 'bg-black'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[8px] font-mono font-black uppercase tracking-widest text-zinc-700">Recommended</span>
                </div>
              )}
              
              <div className={`mb-12 transition-all duration-500 ${isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">{plan.name}</h3>
                <div className="text-5xl md:text-6xl font-display font-black mb-4 tracking-tighter">{getPrice(plan)}</div>
                <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[250px]">
                  {plan.description}
                </p>
              </div>

              <div className={`space-y-4 mb-16 min-h-[200px] transition-all duration-500 delay-75 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
                {getFeatures(plan.features).map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={12} className="text-zinc-600" />
                    <span className="text-sm text-zinc-400 font-medium tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-5 text-[10px] font-black uppercase tracking-widest rounded-full transition-all ${
                  plan.recommended
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-transparent border border-white/10 text-white hover:bg-white/5'
                }`}
              >
                Initiate Operation
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
            * All investment tiers include 30 days of post-deployment support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
