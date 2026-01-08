"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MinimalBackgroundProps {
  className?: string;
}

export function MinimalBackground({ className }: MinimalBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    type Particle = {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.floor((canvas.width * canvas.height) / 7000);

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        // Usar cor primária do site
        ctx.fillStyle = `rgba(var(--primary), ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={cn("fixed inset-0 w-full h-full overflow-hidden pointer-events-none", className)}>
      {/* Canvas com partículas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-40" 
      />

      {/* Grade de quadrados minimalistas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Criar grade de quadrados usando grid */}
        <div className="grid grid-cols-10 grid-rows-10 absolute inset-0 w-full h-full">
          {Array.from({ length: 100 }).map((_, index) => {
            const row = Math.floor(index / 10);
            const col = index % 10;
            const delay = (row + col) * 30; // Delay escalonado
            
            return (
              <div
                key={index}
                className="border-r border-b border-primary/40 animate-draw-square"
                style={{ 
                  animationDelay: `${delay}ms`,
                  animationDuration: '800ms',
                  animationTimingFunction: 'cubic-bezier(.22,.61,.36,1)',
                  animationFillMode: 'forwards'
                }}
              />
            );
          })}
        </div>

        {/* Efeito shimmer em quadrados selecionados */}
        <div className="shimmer-overlay absolute inset-0 pointer-events-none">
          <div className="grid grid-cols-10 grid-rows-10 absolute inset-0 w-full h-full">
            {Array.from({ length: 100 }).map((_, index) => {
              const row = Math.floor(index / 10);
              const col = index % 10;
              
              // Aplicar shimmer apenas em alguns quadrados para padrão interessante
              const shouldShimmer = (row + col) % 3 === 0;
              const shimmerDelay = (row + col) * 50;
              
              if (!shouldShimmer) return null;
              
              return (
                <div
                  key={`shimmer-${index}`}
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/30 to-transparent opacity-0 animate-shimmer"
                  style={{ 
                    animationDelay: `${shimmerDelay}ms`,
                    animationDuration: '900ms'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
