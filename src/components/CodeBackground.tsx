import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Desabilitar em mobile para melhor performance
    if (isMobile) {
      return;
    }

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      speed: number;
      char: string;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const chars = "01<>{}[]()/*+-=;:.,";
    const fontSize = 16;
    
    const initParticles = () => {
      particles = [];
      const columns = Math.floor(canvas.width / fontSize);
      // Reduzir número de partículas para melhor performance
      const particleCount = Math.min(columns, 40);
      
      for (let i = 0; i < particleCount; i++) {
        const x = (i % columns) * fontSize;
        const startY = Math.random() * -canvas.height;
        const speed = 0.3 + Math.random() * 0.7;
        
        particles.push({
          x,
          y: startY,
          speed,
          char: chars[Math.floor(Math.random() * chars.length)]
        });
      }
    };

    const draw = () => {
      // Clear with fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

      // Draw particles
      particles.forEach((particle) => {
        // Update position
        particle.y += particle.speed;

        // Reset if off screen
        if (particle.y > canvas.height + fontSize) {
          particle.y = -fontSize;
          particle.char = chars[Math.floor(Math.random() * chars.length)];
        }

        // Simple color - sem gradientes complexos
        ctx.fillStyle = `hsla(0, 100%, 50%, 0.15)`;
        ctx.fillText(particle.char, particle.x, particle.y);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isMobile]);

  // Não renderizar canvas em mobile
  if (isMobile) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-20 z-[1]"
      style={{ mixBlendMode: "screen", willChange: "transform" }}
    />
  );
};

export default CodeBackground;
