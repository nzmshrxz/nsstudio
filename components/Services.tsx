import React from 'react';
import { Globe, Rocket, Layers, Bug, Server, ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  tag: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Websites & Landing Pages',
    tag: 'Fast turnaround',
    description:
      'High-converting, production-ready websites built for speed and clarity. Not templates — custom-built to your brand and goals.',
    bullets: ['Next.js / React', 'Mobile-first', 'SEO-ready out of the box'],
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: '2',
    title: 'MVP Development',
    tag: 'Idea → shipped',
    description:
      'Got an idea and a deadline? We scope, build, and deploy your MVP — fast. No bloat, no feature creep. Just the core that gets you to users.',
    bullets: ['Scoping & architecture', 'Full-stack build', 'Deployed & handoff-ready'],
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    id: '3',
    title: 'SaaS Products',
    tag: 'End-to-end',
    description:
      'From auth to billing to dashboards — we build SaaS products that are ready to scale. Stripe, Supabase, and everything in between.',
    bullets: ['Auth, billing, roles', 'Admin dashboards', 'API integrations'],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: '4',
    title: 'Bug Fixes & Rescues',
    tag: 'On-call',
    description:
      'Codebase on fire? App crashing before launch? We step in, diagnose fast, and fix it. No judgment — just results.',
    bullets: ['Root cause analysis', 'Performance bottlenecks', 'Emergency patches'],
    icon: <Bug className="w-5 h-5" />,
  },
  {
    id: '5',
    title: 'Deployment & DevOps',
    tag: 'Ship it right',
    description:
      'CI/CD pipelines, Vercel, Railway, VPS — we handle the infra so you stop worrying about deploys and focus on building.',
    bullets: ['CI/CD setup', 'Domain & SSL config', 'Monitoring & uptime'],
    icon: <Server className="w-5 h-5" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block mb-6">
            What we do
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter">
            From idea to deployed —<br />
            <span className="text-zinc-600">we handle the whole thing.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-10 bg-black transition-colors duration-300 hover:bg-zinc-950"
            >
              {/* Icon + tag row */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-zinc-700 uppercase">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-black text-white mb-4 tracking-tight leading-snug">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-1.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-[11px] font-mono text-zinc-700">
                    <span className="w-1 h-1 rounded-full bg-zinc-700 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-10 bg-white text-black flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase mb-6">
                Let's work together
              </p>
              <h3 className="text-2xl font-black leading-tight tracking-tight">
                Not sure what you need? Tell us where you're stuck.
              </h3>
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-900 transition-colors duration-300"
            >
              Start a project
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;