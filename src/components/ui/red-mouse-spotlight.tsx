import { useEffect, useRef } from 'react';

export const RedMouseSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const x = e.clientX;
        const y = e.clientY;
        ref.current.style.background = `
          radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 0, 0, 0.06), transparent 40%),
          radial-gradient(300px circle at ${x}px ${y}px, rgba(255, 0, 0, 0.03), transparent 60%)
        `;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300 mix-blend-screen"
      aria-hidden="true"
    />
  );
}
