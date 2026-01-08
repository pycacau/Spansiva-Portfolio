import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'red',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        
        cardRef.current.style.setProperty('--x', `${relativeX}px`);
        cardRef.current.style.setProperty('--y', `${relativeY}px`);
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, []);

  const { base, spread } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) {
      return '';
    }
    return sizeMap[size];
  };

  const getInlineStyles = () => {
    const baseStyles: React.CSSProperties & {
      [key: `--${string}`]: string | number;
    } = {
      '--base': base,
      '--spotlight-size': '200px',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        var(--x, 50px) var(--y, 50px),
        hsl(var(--base) 100% 50% / 0.25), transparent
      )`,
      backgroundColor: 'transparent',
      backgroundSize: '400px 400px',
      backgroundPosition: 'var(--x) var(--y)',
      backgroundAttachment: 'fixed',
      border: '3px solid hsl(var(--base) 100% 50% / 0.3)',
      position: 'relative',
      touchAction: 'none',
    };

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  return (
    <div
      ref={cardRef}
      style={getInlineStyles()}
      className={cn(
        getSizeClasses(),
        !customSize && 'aspect-[3/4]',
        'rounded-2xl relative p-4',
        className
      )}
    >
      {children}
    </div>
  );
};

export { SpotlightCard };
