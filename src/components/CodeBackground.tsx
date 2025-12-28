import { useEffect, useRef } from "react";

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;
      char: string;
      column: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const codeSnippets = [
      "const", "function", "return", "import", "export", 
      "class", "interface", "type", "async", "await",
      "useState", "useEffect", "props", "component",
      "<div>", "</div>", "{ }", "[ ]", "=>", "...",
      "if", "else", "for", "while", "try", "catch"
    ];

    const chars = "01<>{}[]()/*+-=;:.,&|!@#$%^";
    const fontSize = 14;
    
    const initParticles = () => {
      particles = [];
      const columns = Math.floor(canvas.width / fontSize);
      
      for (let i = 0; i < columns; i++) {
        const x = i * fontSize;
        const startY = Math.random() * -canvas.height;
        const speed = 0.5 + Math.random() * 1.5;
        const size = fontSize;
        const opacity = 0.1 + Math.random() * 0.3;
        
        // Create initial particle
        particles.push({
          x,
          y: startY,
          speed,
          size,
          opacity,
          char: chars[Math.floor(Math.random() * chars.length)],
          column: i
        });

        // Create trailing particles
        for (let j = 1; j < 15; j++) {
          particles.push({
            x,
            y: startY - (j * fontSize),
            speed,
            size: size * (1 - j * 0.05),
            opacity: opacity * (1 - j * 0.1),
            char: chars[Math.floor(Math.random() * chars.length)],
            column: i
          });
        }
      }
    };

    const draw = () => {
      // Clear with fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.y += particle.speed;

        // Reset if off screen
        if (particle.y > canvas.height + fontSize) {
          particle.y = -fontSize * 20;
          particle.char = chars[Math.floor(Math.random() * chars.length)];
        }

        // Draw character
        ctx.font = `bold ${particle.size}px 'Courier New', 'Fira Code', 'Consolas', monospace`;
        
        // Create gradient for each character
        const gradient = ctx.createLinearGradient(
          particle.x, 
          particle.y, 
          particle.x, 
          particle.y + particle.size
        );
        
        // Red gradient with varying intensity
        const intensity = particle.opacity;
        gradient.addColorStop(0, `hsla(0, 100%, ${50 + intensity * 20}%, ${intensity})`);
        gradient.addColorStop(0.5, `hsla(0, 100%, ${40 + intensity * 15}%, ${intensity * 0.8})`);
        gradient.addColorStop(1, `hsla(0, 100%, ${30 + intensity * 10}%, ${intensity * 0.5})`);
        
        ctx.fillStyle = gradient;
        ctx.fillText(particle.char, particle.x, particle.y);

        // Add glow effect for brighter particles
        if (particle.opacity > 0.2) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(0, 100%, 50%, ${particle.opacity * 0.5})`;
          ctx.fillText(particle.char, particle.x, particle.y);
          ctx.shadowBlur = 0;
        }
      });

      // Occasionally add code snippets
      if (Math.random() < 0.001) {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const x = Math.random() * canvas.width;
        const y = -20;
        
        ctx.font = `bold ${fontSize * 1.2}px 'Courier New', monospace`;
        ctx.fillStyle = `hsla(0, 100%, 60%, 0.3)`;
        ctx.fillText(snippet, x, y);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30 z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CodeBackground;
