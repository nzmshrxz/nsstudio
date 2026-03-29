import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  description: string;
}

const StatItem: React.FC<StatItemProps> = ({ target, suffix = '', label, description }) => {
  const [count, setCount]       = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger once when stat enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Count-up animation
  useEffect(() => {
    if (!isVisible) return;
    let frame = 0;
    const totalFrames = Math.round(2000 / 16); // ~60fps over 2s
    const timer = setInterval(() => {
      frame++;
      // Ease-out: fast start, slow finish
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.floor(progress * target));
      if (frame >= totalFrames) { setCount(target); clearInterval(timer); }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center py-14 px-8 border-white/[0.05] md:border-x first:md:border-l-0 last:md:border-r-0 border-b md:border-b-0 last:border-b-0"
    >
      <div className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-3 leading-none tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-400 mb-2">
        {label}
      </div>
      <div className="text-[12px] text-zinc-600 font-medium text-center max-w-[160px] leading-relaxed">
        {description}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3">
          <StatItem
            target={34}
            suffix="+"
            label="Projects delivered"
            description="Websites, MVPs, and SaaS products shipped"
          />
          <StatItem
            target={6}
            suffix="+"
            label="Years building"
            description="Across freelance, agencies, and founding teams"
          />
          <StatItem
            target={99}
            suffix="%"
            label="Satisfaction rate"
            description="Based on client feedback and repeat work"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;