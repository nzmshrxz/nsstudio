
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    let requestRef: number;
    const follow = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      requestRef = requestAnimationFrame(follow);
    };
    requestRef = requestAnimationFrame(follow);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(requestRef);
    };
  }, [position]);

  if (isHidden) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] transition-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isClicking ? 0.5 : 1})`,
        }}
      />
      
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/20 transition-[width,height,opacity,background-color,backdrop-filter] duration-300 ease-out`}
        style={{
          width: isHovering ? '60px' : '24px',
          height: isHovering ? '60px' : '24px',
          transform: `translate(${followerPosition.x}px, ${followerPosition.y}px) translate(-50%, -50%) scale(${isClicking ? 0.9 : 1})`,
          opacity: isHovering ? 1 : 0.4,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          backdropFilter: isHovering ? 'blur(4px)' : 'none',
        }}
      >
        {isHovering && (
           <div className="absolute inset-0 border border-white/10 rounded-full animate-pulse" />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
