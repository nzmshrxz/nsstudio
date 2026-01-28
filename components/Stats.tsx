
import React, { useEffect, useState, useRef } from 'react';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ target, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center p-8 border-x border-white/5 first:border-l-0 last:border-r-0">
      <div className="text-6xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
        {count}{suffix}
      </div>
      <div className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600">
        {label}
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3">
          <StatItem target={34} suffix="+" label="Projects Delivered" />
          <StatItem target={6} suffix="+ YRS" label="Years Experience" />
          <StatItem target={99} suffix="%" label="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
