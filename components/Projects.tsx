import React, { useRef, useState, useEffect, useCallback } from 'react';
import foodieMock from '../assets/foodiemock.png';
import bulletinMock from '../assets/bulletinmock.png';
import foreverMock from '../assets/forevermock.png';
import ppfMock from '../assets/ppfmock.png';
import aethelandco from '../assets/aethelandco.png';
import aurafitness from '../assets/aurafitness.png';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  type: string;
  what: string;
  stack: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Foodie',
    type: 'Full-Stack Web App',
    what: 'Recipe discovery and meal planning app with user accounts and saved lists.',
    stack: ['React', 'Node.js', 'Netlify'],
    image: foodieMock,
    link: 'https://foodiepiee.netlify.app/',
  },
  {
    id: '2',
    title: 'Bulletin',
    type: 'News Platform',
    what: 'Clean news aggregation platform with category filtering and responsive layout.',
    stack: ['React', 'News API', 'Vercel'],
    image: bulletinMock,
    link: 'https://bulletin-news-4s4o.vercel.app/',
  },
  {
    id: '3',
    title: 'Forever',
    type: 'E-Commerce Website',
    what: 'Fashion e-commerce storefront with product listings, cart, and checkout flow.',
    stack: ['React', 'Tailwind', 'Netlify'],
    image: foreverMock,
    link: 'https://foreverbynazam.netlify.app/',
  },
  {
    id: '4',
    title: 'Portfolio',
    type: 'Personal Website',
    what: 'Developer portfolio with project showcase, animations, and contact form.',
    stack: ['React', 'Framer Motion', 'Vercel'],
    image: ppfMock,
    link: 'https://nazamshiraz.vercel.app/',
  },
  {
    id: '5',
    title: 'Athel & Co',
    type: 'Interior Design Studio',
    what: 'Premium brand website for an interior design and architecture firm.',
    stack: ['React', 'Tailwind', 'Vercel'],
    image: aethelandco,
    link: 'https://athelandco.vercel.app/',
  },
  {
    id: '6',
    title: 'Aura Fitness',
    type: 'Gym & Fitness',
    what: 'Fitness brand landing page with class schedules, pricing, and lead capture.',
    stack: ['React', 'Tailwind', 'Vercel'],
    image: aurafitness,
    link: 'https://aurafitness-two.vercel.app/',
  },
];

const CARD_GAP      = 16;
const MARQUEE_SPEED = 0.6;

const Projects: React.FC = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const trackRef      = useRef<HTMLDivElement>(null);
  const rafRef        = useRef<number>(0);
  const offsetRef     = useRef(0);

  const [offset, setOffset]         = useState(0);
  const [isManual, setIsManual]     = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragMoved, setDragMoved]   = useState(false);

  const dragStartX   = useRef(0);
  const dragStartOff = useRef(0);

  const loopWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 2;
  }, []);

  const getCardWidth = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 768) return 640 + CARD_GAP;
    return 260 + CARD_GAP; // mobile — narrow so next card peeks
  }, []);

  const clamp = useCallback((val: number) => {
    const max = loopWidth() - (containerRef.current?.clientWidth ?? 0);
    return Math.max(0, Math.min(val, max));
  }, [loopWidth]);

  // ── Auto-scroll ──────────────────────────────────────────────
  useEffect(() => {
    if (isManual) { cancelAnimationFrame(rafRef.current); return; }
    const tick = () => {
      offsetRef.current += MARQUEE_SPEED;
      if (offsetRef.current >= loopWidth()) offsetRef.current = 0;
      setOffset(offsetRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isManual, loopWidth]);

  // ── Arrows ───────────────────────────────────────────────────
  const slide = (dir: 'left' | 'right') => {
    setIsManual(true);
    const next = clamp(offsetRef.current + (dir === 'right' ? getCardWidth() : -getCardWidth()));
    offsetRef.current = next;
    setOffset(next);
  };

  // ── Mouse drag ───────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    setIsManual(true); setIsDragging(true); setDragMoved(false);
    dragStartX.current   = e.clientX;
    dragStartOff.current = offsetRef.current;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 5) setDragMoved(true);
    const next = clamp(dragStartOff.current + delta);
    offsetRef.current = next; setOffset(next);
  };
  const onMouseUp = useCallback(() => setIsDragging(false), []);
  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, [onMouseUp]);

  // ── Touch drag ───────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    setIsManual(true); setDragMoved(false);
    dragStartX.current   = e.touches[0].clientX;
    dragStartOff.current = offsetRef.current;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const delta = dragStartX.current - e.touches[0].clientX;
    if (Math.abs(delta) > 5) setDragMoved(true);
    const next = clamp(dragStartOff.current + delta);
    offsetRef.current = next; setOffset(next);
  };

  const onLinkClick = (e: React.MouseEvent) => { if (dragMoved) e.preventDefault(); };

  const atStart = isManual && offset <= 0;
  const atEnd   = isManual && offset >= clamp(loopWidth());

  return (
    <section id="projects" className="py-24 md:py-40 bg-black overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-600 uppercase block mb-5">
              Our work
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-white leading-[0.95] tracking-tighter">
              Things we've built.
            </h2>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => slide('left')}
              disabled={atStart}
              aria-label="Previous"
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-200
                ${atStart
                  ? 'border-white/5 text-zinc-800 cursor-not-allowed'
                  : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white active:scale-95'}`}
            >
              <ArrowLeft size={14} />
            </button>
            <button
              onClick={() => slide('right')}
              disabled={atEnd}
              aria-label="Next"
              className={`w-10 h-10 md:w-11 md:h-11 rounded-full border flex items-center justify-center transition-all duration-200
                ${atEnd
                  ? 'border-white/5 text-zinc-800 cursor-not-allowed'
                  : 'border-white/10 text-zinc-400 hover:border-white/30 hover:text-white active:scale-95'}`}
            >
              <ArrowRight size={14} />
            </button>
            <span className="text-[10px] font-mono text-zinc-700 ml-1 hidden md:block select-none">
              {isManual ? 'manual' : 'auto-scrolling'}
            </span>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        // px-5 on mobile so first card starts with a small margin and next card peeks
        // px-6 on desktop to match section padding
        style={{ paddingLeft: window.innerWidth >= 768 ? '24px' : '20px' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        draggable={false}
      >
        <div
          ref={trackRef}
          className="flex w-max py-2"
          style={{
            gap: `${CARD_GAP}px`,
            transform: `translateX(-${offset}px)`,
            transition: isDragging || !isManual ? 'none' : 'transform 0.44s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {[...projects, ...projects].map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="flex-shrink-0 group/card"
            >

              {/* ══════════════════════════════════════
                  MOBILE card  (<768px)
                  Rounded card, image top, caption below
              ══════════════════════════════════════ */}
              <div className="md:hidden w-[260px]">
                <div className="bg-zinc-950 border border-white/[0.06] rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="w-full h-full object-cover opacity-70 grayscale select-none pointer-events-none"
                    />
                    {/* index */}
                    <div className="absolute top-3 right-3 text-white/20 text-[10px] font-mono select-none">
                      {String((idx % projects.length) + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4">
                    {/* type + visit */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
                        {project.type}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onLinkClick}
                        className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 hover:text-white transition-colors"
                      >
                        Visit <ArrowUpRight size={9} />
                      </a>
                    </div>

                    {/* title */}
                    <h3 className="text-[16px] font-black text-white tracking-tight leading-tight mb-2">
                      {project.title}
                    </h3>

                    {/* description */}
                    <p className="text-[12px] text-zinc-500 font-light leading-relaxed mb-3">
                      {project.what}
                    </p>

                    {/* stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-zinc-700 border border-white/[0.06] px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ══════════════════════════════════════
                  DESKTOP card  (≥768px)
                  Original design — full image, hover overlay
              ══════════════════════════════════════ */}
              <div className="hidden md:block w-[624px]">
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950 border border-white/[0.05]">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover/card:scale-105 opacity-40 grayscale group-hover/card:grayscale-0 group-hover/card:opacity-100 select-none pointer-events-none"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <div className="translate-y-6 group-hover/card:translate-y-0 transition-transform duration-500">
                      <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.4em] block mb-2">
                        {project.type}
                      </span>
                      <h3 className="text-4xl font-black text-white mb-3 leading-none tracking-tighter">
                        {project.title}
                      </h3>
                      <p className="text-[15px] text-zinc-400 font-normal leading-relaxed mb-4 max-w-sm">
                        {project.what}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.stack.map((tech) => (
                          <span key={tech} className="text-[10px] font-mono text-zinc-600 border border-white/[0.07] px-2.5 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onLinkClick}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors duration-200"
                      >
                        View project <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>

                  {/* Index */}
                  <div className="absolute top-5 right-5 text-white/15 text-[10px] font-mono select-none">
                    {String((idx % projects.length) + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Swipe hint — mobile only, disappears once user interacts */}
      {!isManual && (
        <p className="md:hidden text-center text-[10px] font-mono text-zinc-800 mt-5 tracking-widest uppercase select-none">
          swipe to explore
        </p>
      )}

    </section>
  );
};

export default Projects;